"use strict";

// External dependencies
const Joi = require("@hapi/joi");
const Bcrypt = require("bcryptjs");
const config = require("../../config");

const DataEncrypterAndDecrypter = require("../../factories/encryptDecrypt");

const corsHeaders = require("../../lib/routeHeaders");
const projectData = require("../../lib/projectData");

let admin = require("firebase-admin");

let serviceAccount = require("../../config/firebase/serviceAccKey.json");

let defaultApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://",
});

// const isDev = process.env.NODE_ENV.trim() !== "production"

let db = defaultApp.firestore();

const encryptPass = async pass => {
    let result;

    await Bcrypt.hash(pass, 10)
        .then(hash => {
            // Store hash in your password DB.
            result = hash;
        })
        .catch(e => console.log("ERR IN ENCRYPTION"));

    return result;
};

// let passData = [
//     {
//         name : "Rama Devi Chinthoju",
//         id : "X12",
//         password : "iLoveMyMomX12",
//     },

//     {
//         name : "Bunny Chinthoju",
//         id : "X25",
//         password : "crappyGuitarPlayerX25",
//     },
// ]

/// LOGIN
let userLogin = {
    method: "POST",
    path: "/api/user/login",

    config: {
        cors: corsHeaders,
        validate: {
            payload: Joi.object({
                requestData: Joi.string(),
                message: Joi.string(),
            }),
        },
        auth: {
            strategy: "restricted",
            mode: "try",
        },
        tags: ["api"],
    },
    handler: async (request, h) => {
        let { requestData, message } = request.payload;

        //
        // DECRYPT REQUEST DATA
        //
        let decryptedData = DataEncrypterAndDecrypter.decryptData(requestData);
        //
        // DECRYPT REQUEST DATA
        //

        /////// VALIDATE PAYLOAD //////////////////////////////////////
        let dataPassesValidation = false;

        const schema = Joi.object().keys({
            password: Joi.string().min(8).max(30).required(),
            // emailId: Joi.string().email({ minDomainAtoms: 2 }).required(),
        });

        // await Joi.validate(decryptedData, schema)

        await schema
            .validateAsync(decryptedData)
            .then(val => {
                dataPassesValidation = true;
            })
            .catch(e => {
                console.error(e);
                return h.response(e);
            });
        /////// VALIDATE PAYLOAD //////////////////////////////////////

        if (dataPassesValidation === true) {
            let { password } = decryptedData;
            let dataToSendBack,
                temp,
                id,
                userNotRegistered = false;

            const checkForRegistration = async inputPass => {
                // Checks if the password exists in our DB.
                // If exists, compares with BCrypt

                const last3Chars = inputPass.substr(inputPass.length - 4);
                let tempArr;

                await db
                    .collection("foliousers")
                    .where("pfId", "==", last3Chars)
                    .get()
                    .then(snapshot => {
                        tempArr = snapshot.docs.map(doc => doc.data());
                    })
                    .catch(e => console.error(e));

                // let tempArr = passData.filter((item, i) => {
                //     return item.id === last3Chars
                // })

                if (tempArr.length > 0) {
                    return {
                        registered: true,
                        data: tempArr[0],
                    };
                } else {
                    return {
                        registered: false,
                        data: null,
                    };
                }
            };

            const isRegistered = await checkForRegistration(password);

            if (isRegistered.registered === true) {
                const dbPassword = isRegistered.data.password;

                let encryptedPass = await encryptPass(dbPassword);

                await Bcrypt.compare(password, encryptedPass)
                    .then(res => {
                        if (res === true) {
                            dataToSendBack = {
                                // registered : true,
                                ...isRegistered,
                                data: {
                                    ...isRegistered.data,
                                    password: "20ABeF2XoP",
                                },
                            };

                            //
                            // Encrypt data
                            //
                            dataToSendBack = {
                                responseData:
                                    DataEncrypterAndDecrypter.encryptData(
                                        dataToSendBack
                                    ),
                                message:
                                    "User is registered and password is right",
                            };
                            //
                            // Encrypt data
                            //

                            request.cookieAuth.set({
                                name: isRegistered.data.name,
                            });
                        }

                        if (res === false) {
                            dataToSendBack = {
                                registered: false,
                            };

                            //
                            // Encrypt data
                            //
                            dataToSendBack = {
                                responseData:
                                    DataEncrypterAndDecrypter.encryptData(
                                        dataToSendBack
                                    ),
                                message:
                                    "User is registered and password is wrong",
                            };
                            //
                            // Encrypt data
                            //
                        }
                    })
                    .catch(e => h.response(e));
            } else if (isRegistered.registered === false) {
                dataToSendBack = {
                    registered: false,
                };

                //
                // Encrypt data
                //
                dataToSendBack = {
                    responseData:
                        DataEncrypterAndDecrypter.encryptData(dataToSendBack),
                    message: "User not registered",
                };
                //
                // Encrypt data
                //
            }

            return h.response(dataToSendBack);
        }
    },
};

let getProjectData = {
    method: "POST",
    path: "/api/user/get-project-data",

    config: {
        cors: corsHeaders,
        validate: {
            payload: Joi.object({
                requestData: Joi.string(),
                message: Joi.string(),
            }),
        },
        auth: {
            strategy: "restricted",
        },
        tags: ["api"],
    },

    handler: async (request, h) => {
        let { requestData, message } = request.payload;

        //
        // DECRYPT REQUEST DATA
        //
        let decryptedData = DataEncrypterAndDecrypter.decryptData(requestData);
        //
        // DECRYPT REQUEST DATA
        //

        /////// VALIDATE PAYLOAD //////////////////////////////////////
        let dataPassesValidation = false;

        const schema = Joi.object().keys({
            projectNo: Joi.number().integer().min(1).max(8).required(),
        });

        // await Joi.validate(decryptedData, schema)

        await schema
            .validateAsync(decryptedData)
            .then(val => {
                dataPassesValidation = true;
            })
            .catch(e => {
                console.error(e);
                return h.response(e);
            });
        /////// VALIDATE PAYLOAD //////////////////////////////////////

        if (dataPassesValidation === true) {
            let dataToSendBack;
            let { project1, project3, project4, project8 } = projectData;
            let { projectNo } = decryptedData;

            dataToSendBack = {
                projectData: projectData[`project${projectNo}`],
            };

            //
            // Encrypt data
            //
            dataToSendBack = {
                responseData:
                    DataEncrypterAndDecrypter.encryptData(dataToSendBack),
                message: "Sending project data",
            };
            //
            // Encrypt data
            //

            return h.response(dataToSendBack);
        } else {
        }
    },
};

let UserDataRoute = [userLogin, getProjectData];

module.exports = UserDataRoute;
