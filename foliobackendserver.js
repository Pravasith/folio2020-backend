'use strict'

// External Dependencies

const Hapi = require('@hapi/hapi')

const HapiAuthCookie = require('@hapi/cookie')

const Bell = require('@hapi/bell')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const fs = require('fs')

// Internal Dependencies
const Routes = require('./routes')
const configs = require('./config')

const isDev = process.env.NODE_ENV.trim() !== "production"

let serverOptions 

if(isDev){
    serverOptions = {
        host: "localhost",
        port: process.env.PORT || 8080,
    }
}

else{


    serverOptions = {
        host: "localhost",
        port: process.env.PORT || 8080,
    }
}



// create server
const server = Hapi.server(serverOptions)






const start = async () => {

    await server.register([
        Inert,
        Vision,
        HapiAuthCookie,
        Bell,

    ])

    server.views({
        engines: {
            html: require("handlebars")
        },
        path: './views',
        // layout : 'default-layout'
    })



    server.auth.strategy(
        'restricted', 
        'cookie',
        {
            cookie : {
                password: configs.authConfig.hapiAuthCookieCredentials.password,
                name: 'session',
                isSecure: false,
                ttl: 2 * 60 * 60 * 1000, // 2 hours cookie
                isSameSite: false,
            }
        }
    
    )

    await server.route({
        method: "GET",
        path: "/",
    
        handler : (request, h) => {
            return "WELCOME TO PRAVAS FOLIO DAWG"
        }
    })

    await server.route(Routes)

    try{
        await server.start()
    }

    catch(err){
        console.log(err)
        process.exit(1)
    }

    console.log(`Server is running at ${server.info.uri}. Press ctrl^C to terminate at anytime`)
}


// Start the server
start()