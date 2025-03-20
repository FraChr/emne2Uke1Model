const model = {
    app: {
        currentPage: 'registerCustomDrink', // dashboard, addDrink

        pages: [
            "dashbord",
            "addDrink",
            "registerCustomDrink",
            "favouriteDrinks",
            "profile",
            "setNewGoal",
            "friendProfile",
        ],
    },

    inputs: {
        addDrink: {
            search: '',
            favorite: false,
        },
        registerCustomDrink: {
            name: '',
            amount: 0,
            caffeine: 0,
        },
        setNewGoal: {
            goal: '',
            amount: 0,
        },
        friendDashboard: {
            like: false,
            comment: '',
        },
    },

    data: {
        seachResults: [
            { id: 1, drinksId: 1 },
        ],
        drinks: [
            {
                id: 1,
                name: 'Red bull',
                amount: 250,
                caffeine: 40,
            },
            {
                id: 2,
                name: 'Monster',
                amount: 500,
                caffeine: 35,
            },
            {
                id: 3,
                name: 'Kaffe',
                amount: 150,
                caffeine: 58,
            },
        ],
        users: [
            {
                id: 1,
                userName: 'Martin123',
                email: 'martin@gmail.com',
                password: '********',
                profilePhoto: 'linkToImg',
                goal: {
                    title: 'Bedre søvn',
                    amount: 150,
                },
                achievements: [
                    { id: 1, globalAchivement: 1 }
                ],
                totalDrinks: [
                    { id: 1, drinkId: 1, date: '19.03.2025', time: '00.00' },
                    { id: 2, drinkId: 3, date: '19.03.2025', time: '08.35' }
                ],
                friends: [
                    { id: 1, userId: 2 },
                ],
                favoriteDrinks: [
                    { id: 2, drinkId: 2 }
                ],
                recievedComments: [],
                givenComments: [],
            },
            {
                id: 2,
                userName: 'username14222',
                email: 'annekari@gmail.com',
                password: '********',
                profilePhoto: 'linkToImg',
                goal: {
                    title: 'Spare penger',
                    amount: 250,
                },
                achivements: [
                    { id: 1, globalAchivement: 3 }
                ],
                totalDrinks: [
                    { id: 1, drinkId: 3, date: '15.04.2027', time: '02.00' },
                    { id: 2, drinkId: 2, date: '19.01.2024', time: '09.35' }
                ],
                friends: [
                    { id: 1, userId: 1 },
                ],
                favoriteDrinks: [],
                recievedComments: [],
                givenComments: [],
            },
        ],
        globalAchivements: [
            { id: 1, achivment: 'yay' },
            { id: 2, achivment: 'tumbs up' },
            { id: 3, achivment: 'score' },
            { id: 4, achivment: 'bobla' }
        ]
    },
}