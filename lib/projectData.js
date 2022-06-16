const project1 = {
    section1: {
        cover: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-cover.png",
            alt: "meal-delivery-app-pravas",
        },

        title: "A little overview",

        paragraph:
            "Back when I was working for my start-up, I dint have a lot of time to care about my food habits. Started as casual tryouts, ordering food online quickly turned into a daily habit; and this is not an uncommon one among most of the corporate millennials like me. But we can’t be blamed because after a hectic day full of hustle-bustle (or pretend hustle-bustle); one loses the patience to stir the ladle in the pot or commute a little for dinner. $bold$Meal-delivery apps$bold$ to the rescue, right? Did you know Forbes estimates that online food delivery is set to supersize to a hefty $200 billion by 2025, and the users on these apps are growing by astronomical numbers year by year. ",

        image1: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-2.png",
            alt: "meal-delivery-apps-USA",
        },

        image1Para: "Widely used food delivery apps.",

        image2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-3.jpg",
            alt: "Spidermans-uncle",
        },

        para2: "But with a great user-growth, comes a great responsibility. ",

        para3: "- Spiderman's uncle",

        para4: "With increasing user size, restaurants and their menu options keep increasing tremendously, as a result customers get flooded with a great deal of data when they open their meal delivery app of choice. There comes a time when customers need to be presented with $bold$qualitative data$bold$ or atleast an easy way to filter un-necessary data.",

        miniH1: "Etsy for food delivery",

        para5: "On a different note, with hundreds of restaurants trying to get into the online game, it is becoming a daunting task for local restaurants to keep their business going. So this is my attempt to design a meal-delivery app that incorporates all our local $bold$Grandma’s Bakeries$bold$ and help them connect to us millennials.",
    },

    section2: {
        title: "Problems with today’s food apps",

        para1: "A few months ago, when I was working in a shared co-working space, I had met a lot of employees from diverse range of companies; I interviewed 6 such people who were friendly to me and another 24 generous co-workers of the 6 people I mentioned earlier. Listening to them, I could connect so much about the issues that are caused by these apps, particulary three of them.",

        list1: [
            "Apps eating into a huge chunk of the Millenial’s income",
            "Health degradation",
            "Distracting ADs - time wasted in analysing offers",
        ],

        title2: "My design solution",

        para2: "My app’s core design is done in steps without changing most of the traditional essence of food-ordering. To begin with the process, we need to understand the behaviour of the users. So to make it easier, I created 2 personas who collecively encompass all the food-traits of the people I interviewed. Meet Millie and Walden, our 9 to 5 job-ing personas -",

        persona1: {
            title: "01",

            title2: "Millie, a couch diner",

            image: {
                img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-4.png",
                alt: "millie-couch-diner",
            },

            text1: "$bold$28.$bold$ Single, ",

            text2: "frequent user.",

            list: [
                "Orders 1 - 2 times a day  ",
                "Goes out with friends sometimes on weekends for brunch, rates and reviews restaurants often",
                "Doesn’t know how to cook",
                "Spends an average of 15 mins to see if there’s anything new she could order, other than the usuals",
                "Orders the regulars anyway",
                "$bold$Netflix$bold$ and $bold$chow!$bold$",
            ],
        },

        persona2: {
            title: "02",

            title2: "Walden, an explorer",

            image: {
                img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-5.png",
                alt: "Walden, an explorer",
            },

            text1: "$bold$34.$bold$ Married, ",

            text2: "occasional user.",

            list: [
                "Orders once or twice in a week",
                "Makes breakfast for his wife and his 4 year old son, has lunch in the office canteen, and dinner at home",
                "Loves to take his family out to a nice place to dine on the weekends, orders ice-cream for his little kid ",
                "Spends a lot of time searching for that right place, high priority for ambience and hygiene",
                "Knows that healthy food is his priority",
            ],
        },
    },

    section3: {
        title: "Core experience",
        sNo1: "01",

        miniH1: "Food centric design",

        para1: "A lot of users I interviewed told me that they spend a lot of time deciding what they want which annoys them. So I thought, there are only 3 cases that reflect their state of mind when they intend to order -",

        list1: [
            "I know what I want to order",
            "I don’t know what to order but I feel like eating something spicy/junk/sweet...",
            "I have no idea what I want, so show me the options",
        ],

        para2: "To solve this, the only way would be to let the user answer the question, whichever one amongst the 3 they are confronted with at the moment. And the answer would be much evident if there are $bold$choices of food$bold$ on their screen first rather than choices of restaurants. So I designed a front page with minimalistic set of cards(without many unnecessary details) arranged in the following order - Regulars, Food Categories, Cuisines, and then Restaurants and Offers.",

        imageX: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-innerX.jpg",
            alt: "new-screenshot1",
        },

        imageZ: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-innerZ.jpg",
            alt: "new-screenshot3",
        },

        sNo2: "02",

        miniH2: "Curated list artwork uniformity, social proof to validate local restaurants",

        para3: "Ongoing offers are shown right below cuisines because for most of the users, offers are a crucial to decide the order. But simple restaurant-offer-posters displayed randomly on the screen forces the user to do the stressful calculations to buy the perfectly cost-optimised meal.",

        para4: "I have intensified the offer details and added the count of availed offers in the last 24 hours so user can rely on $bold$Social Proof$bold$ to choose between offers.",
        image2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-jesse.jpg",
            alt: "new-screenshot4",
        },

        image2Para:
            "Offers clearly highlighted for easy on the spot comparision and social proof in the form of past offer avails",

        image3: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-amy.jpg",
            alt: "new-screenshot5",
        },

        sNo3: "03",

        miniH3: "Heirarchy of elements - Hashtag segregation",

        para5: "Choosing the right meal is greatly simplified if we follow the hashtag approach like Instagram or Twitter because most of the times, couch-diners are looking for the main course item which is not necessarily associated with a brand or a restaurant.",

        image4: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-rosa.jpg",
            alt: "new-screenshot6",
        },

        image4Para: "Flow architecture; Hashtag method",

        para6: "The hashtag approach not only narrows down items to peculiar choices but also provides restaurants a way to market in narrow pipelines. This approach is also familiar to today’s Millenials who comprise more than 70% of meal-delivery app customers.",

        image5: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-pam.jpg",
            alt: "new-screenshot6",
        },
    },

    section4: {
        title: "Food ratings over Restaurant ratings",

        para1: "Food ratings are of very significant value than restaurant ratings because even the best restaurant has only a few signature dishes which everyone likes.",

        miniH1: "Priorities",

        image1: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-tokyo.png",
            alt: "Priorities-x",
        },

        para2: "Design for a particular category, in this case, ice-cream. The page is divided into sections, arranged priority wise. My top metrics for ranking the relevance of these sections are -",

        para3: "1) Social proof - $bold$Public favourites$bold$ section which contains items ranked in an order determined by the $bold$item rating : number of ratings$bold$ proportion.",

        image2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-nairobi.png",
            alt: "Priorities-ratio",
        },

        para4: "2) Personal preferences - Previous orders are shown in My favourites section. Ratings or reviews by the user are shown  as well to help them identify the item.",

        para5: "3) Offers on dishes/items",

        para6: "4) New local restaurants",

        para7: "5) Promoted restaurants",

        image3: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-closure.jpg",
            alt: "Priorities-ratio",
        },

        title2: "Restaurant pages - A focus on authenticity",

        para8: "To promote local restaurants which are genuinely great, users should be shown everything that makes a local restaurant great, like the pictures of owners and their story, where they source their ingredients from, restaurant pictures .. and so on. Customer testimonials are key in my design, no I’m not talking just about internet reviews, but the walk-in customer testimonials as well.",

        image4: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-holt.jpg",
            alt: "Priorities-ratio",
        },

        title3: "Personal health and money tracker",

        para9: "For explorers, health is a high priority and as is budget-spending for couch-diners, so I designed a system which alerts users when they consume more calories or spend more money than usual. ",

        image5: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project1/project-1-img-jonasAndMartha.jpg",
            alt: "Jonas and Martha",
        },

        title4: "Fin.",
    },
};

const project3 = {
    section1: {
        cover: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-andysaby.jpg",
            alt: "glasmet-ar-pravas",
        },

        title: "A little overview",

        para1: "Glasmet was a project that I did right after my graduation as a part of my portfolio. I redesigned my old project and I’m calling it Glasmet 2.0. It was a complex and a time-taking process but great fun. I never got to travel much but it is my biggest dream to travel the world which I will realise someday; I designed Glasmet to combine Travel/Exploration and Augmented Reality and solve the problem of the annoying periodical direction checks.",

        title2: "Goal",

        para2: "The goal of this project is to provide South Asian motor-bike travellers a way to access GPS navigation without having to stop and look at the phone.",

        image1: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-chedddar.jpg",
            alt: "road-travel-gmet",
        },

        image1Para: "Life is short, and the world is wide",

        title3: "Need",

        para4: "In countries like India and China where a great deal of the population commutes using a two-wheeler of some kind, there is a great need for GPS accessories to navigate while commuting. This is especially for road trips. In a car it is not much of a hassle but if you are on a bike trip, finding travel spots can be very annoying - On an average, you’d have to look at your phone 5 times for directions in an hour. South Asian geographies and settlements are organically spread it’s very confusing to navigate.",

        para5: "If you are not from south Asia, just Google “Bike trips in India” and you’ll get the idea of just how many people travel thousands of kilometers on two-wheelers for a fun trip yearly.",

        para6: "The need for GPS is so evidently clear that you can see one of these phone holders attached to the handle of the bike on almost everyone’s two wheeler in India -",

        image2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-kellly.jpg",
            alt: "road-travel-gmet",
        },

        image2Para:
            "Indian two-wheeler owners using GPS on their phones attached to their vehicles with the help of a phone mount holder",

        para7: "But what if you don’t have to look down often for directions while travelling on a two-wheeler? What if you get the directions on the road - like navigation in video games! Wouldn’t that be great?",

        title4: "Enter Glasmet",

        image3: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/working-glasmet.mp4",
            alt: "road-travel-gmet",
        },

        image3Para:
            "A HUD helmet powered by AR shows you the way through on screen navigation.",

        title5: "Ideation",

        image4: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-ginaaa.jpg",
            alt: "road-travel-gmet",
        },

        para8: "The design evolved through multiple variations as it was hard to incorporate all the functions keeping the aesthetics intact. Ergonomics and human-centric experience were a top priority in all of the variations.",

        image5: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-terrence.jpg",
            alt: "road-travel-gmet",
        },

        image6: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-ryann.jpg",
            alt: "road-travel-gmet",
        },

        image7: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-zack-and-cody.jpg",
            alt: "road-travel-gmet",
        },

        image8: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-katy.jpg",
            alt: "road-travel-gmet",
        },

        title6: "The Console",

        image9: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/consoleVid2.mp4",
            alt: "road-travel-gmet",
        },

        image9Para:
            "The console can be clamped to the handle, so that it can be handled with the thumb easily while the user is driving.",

        image10: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-fleur.jpg",
            alt: "road-travel-gmet",
        },

        image11: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-jimbo.jpg",
            alt: "road-travel-gmet",
        },

        title7: "User Interface",

        para9: "There are 4 UI elements that make up for the essential functions of the Glasmet - $bold$Main menu, Navigation, music and calls$bold$",

        image12: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/consoleVidX.mp4",
            alt: "road-travel-gmet",
        },

        image14: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-guss.jpg",
            alt: "road-travel-gmet",
        },

        title8: "Photochromatic glass",

        para10: "A major problem for the AR glasses is excessive sunlight. So Glasmet’s protective glass has a photochromatic layer which darkens in excessive sunlight and lightens when it is not so bright.",

        image15: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/simpleUI.mp4",
            alt: "road-travel-gmet",
        },

        title9: "The Navigation arrow",

        image16: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-tommyShelby.jpg",
            alt: "road-travel-gmet",
        },

        para11: "This guy is the real star. Navigation is so much easier when you see the arrow move left and right according to Google map’s direction APIs. The realtime movement of the arrow inspired from video games is like someone sitting on the back seat telling you left or right while you’re driving.",

        image17: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/adaa.mp4",
            alt: "road-travel-gmet",
        },

        image18: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project3/project-3-img-finale.jpg",
            alt: "road-travel-gmet",
        },

        title10: "Fin.",

        para12: "Okay, there are a ton of features and specifics we can go into, but since this is only a concept project that I had thought of during college (2016), I am wrapping this up here. It is 2020 now and I had seen companies/start-ups work on a similar concept, build a prototype and even launch on Kickstarter. However, there is not much penetration in the Indian market at least. But AR and Mixed Reality gadgets will be a cardinal thing of the future, I strongly believe it!",
    },
};

const project4 = {
    section1: {
        cover: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/cover.jpg",
            alt: "Rain-bag-cover",
        },

        title: "The Rain Bag",

        para1: "An Umbrella that pops out of a stylish backpack which eliminates the need to hold the umbrella in your hand. The umbrella is removable and washable. This product is designed for the rural Indian kids, planned as an in-house product by StoreKing.in where I was the lead Product Designer.",

        image1: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/umbo-ideo.mp4",
            alt: "umb-bag-pravas",
        },

        image1Para: "Final prototype of the umbrella that I made",

        title1: "Goal",

        para2: "The goal of this project is to solve two major problems Indian and African school-going kids are facing - ",

        list1: [
            "Heavy load of the school bag.",
            "Exposure to hot sun rays and heavy rains.",
        ],

        image2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-berlin.jpg",
            alt: "kids-running",
        },

        title2: "Design process",

        miniH1: "Research -",

        para3: "To understand the users requirements and adaptability factors, I did a voice of customers survey by personally going into the rural schools of Karnataka and took inputs from children. One would be awestruck by the ideas proposed by children.",

        miniH2: "Ideation -",

        image3: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-free-me.jpg",
            alt: "bag-sketches",
        },

        image3Para: "A few final concept stage sketches",

        miniH3: "Prototyping the bag -",

        image4: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-i-need-freedom.jpg",
            alt: "bag-sketches",
        },

        image4Para:
            "Using scrap flex sheets and glue, I made a mock prototype of the bag",

        para4: "After I had the mock bag built, I approached a well known bag company, asked the founder to let me spend two days with 4 of his workers and his manager. I successfully managed to build the bag in their factory to match my exact design. The bag has a 3 cm wide opening for the umbrella assembly to slide in.",

        image5: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-arthur.jpg",
            alt: "bag-pics",
        },

        miniH4: "Now, the fun part. Prototyping the umbrella!",

        image6: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-closure.jpg",
            alt: "umb-pics",
        },

        para5: "The umbrella has to open from the bag without harming the user, which was quite challenging to design. I pulled an all-nighter to design the perfect mechanism and tested it using some broom-sticks and umbrella parts.",

        miniH5: "Figuring out the Math",

        para6: "Then I spent the next week $bold$modelling, calculating, rigging parts and 3D printing$bold$",

        image7: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-math-rhino.jpg",
            alt: "umb-pics",
        },

        image7_5: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-gandhi.jpg",
            alt: "umb-pics",
        },

        para7: "After I was confident with the math I did, I approached many big umbrella companies in India, but none of them believed that my mechanism would actually work. After a long time, a company called $bold$Sun Umbrellas$bold$ (one of the biggest umbrella companies in India) replied to say they wanted to explore this mechanism of mine. The founder of Sun Umbrellas generously let me use his R&D workshop and with the help of the workers there, I finally built a fully functioning prototype of the umbrella -",

        imageX2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/umbo-ideo.mp4",
            alt: "umb-bag-pravas",
        },

        image8Para:
            "Please note that the above model is just a mock-prototype to show the mechanism works. For production, I designed the parts to be me much more sleek and aesthetic.",

        titleX: "Sad Ending",

        para8: "At this point, it was 6 months into the project, and I was presented with the unfortunate news that my project had to be stopped, because the investors of StoreKing, the company I worked for, had to remove the R&D Labs for budget reasons. So the my department was shut down and I was assigned to work on StoreKing’s App as the lead Product Designer. But I really had the most fun in this project, and I am very proud of it.",

        image8: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project4/project-4-img-stable-sit.jpg",
            alt: "umb-pics",
        },
    },
};

const project5 = {
    section1: {
        cover: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project5/tyrex99X.mp4",
            alt: "tyrex-three-way-transformer",
        },

        title: "Tyrex99x - A 3 Way Transformer",

        para1: "Paper, glue, scissors, coffee and engineering - all the ingredients I used to cook this flavour packed transformer which transforms into a bike, human and animal forms.",

        image1: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project5/jonsnow.jpg",
            alt: "tyrex-1",
        },

        image2: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project5/elliot.jpg",
            alt: "tyrex-1",
        },

        image3: {
            img: "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project5/mrrobot.jpg",
            alt: "tyrex-1",
        },

        title1: "Fin.",
    },
};

const project8 = {
    p0: {
        title: "Pedal Wash",
        description:
            "Women in rural India have tough time washing clothes by hand due to power outages that last for hours on a daily basis. So I designed a simple pedal-powered washing machine on a bike. Cardio + Clean clothes :)",
        images: [
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/marshall.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/eminem.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/mathers.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/parts.jpg",
        ],
    },

    p1: {
        title: "DIY Toddlers Table",
        description:
            "A cute toddler’s table with a word finder puzzle on top. DIY table easy to build and dismantle. Ease in logistics. Made of Pine wood and safe for kids. Adjustable height for 2 levels. ",
        images: [
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/desole.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/strawberryfieldsforever.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/ttable.jpg",
        ],
    },

    p2: {
        title: "CropMint Web-App",
        description:
            "This was my first freelancing project. Even though I dint get paid much, I consider this one to be dear to my heart as this was my first “Tech Job”; started my journey as a web designer/dev.",
        images: [
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/substinance.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/jaikumar.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/marializa-new-friend.jpg",
        ],
    },

    p3: {
        title: "Gift box",
        description:
            "I designed the 2017 gift boxes for StoreKing’s employees. Made Indian festival themed calendar cards.",
        images: [
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/sumia.jpg",
        ],
    },

    p4: {
        title: "Mutli use tools",
        description:
            "Budget tools designed for Indian farmers. Four common tools used are the axe, paara, sickel tool and saw cutter. All in one kit.",
        images: [
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/black-nasa.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/brruno.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/gewn.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/kodali.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/lsd.jpg",
            "https://folio-pics.s3.eu-west-2.amazonaws.com/projects/project8/saw.jpg",
        ],
    },
};

module.exports = {
    project1,
    project3,
    project4,
    project5,
    project8,
};
