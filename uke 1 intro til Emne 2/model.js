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
            volume: 0,
            caffeine: 0,
        },
        setNewGoal: {
            goal: '',
            volume: 0,
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
                volume: 250,
                caffeine: 40,
            },
            {
                id: 2,
                name: 'Monster',
                volume: 500,
                caffeine: 35,
            },
            {
                id: 3,
                name: 'Kaffe',
                volume: 150,
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
            },
            {
                id: 2,
                userName: 'username14222',
                email: 'annekari@gmail.com',
                password: '********',
                profilePhoto: 'linkToImg',
            },
            {
                id: 3,
                userName: 'username1222',
                email: 'petterkaare@gmail.com',
                password: '********',
                profilePhoto: 'linkToImg',
            }
        ],



        dailyGoals: [
            { id: 1, userId: 3, title: 'spare penger', volume: 250 },
            { id: 2, userId: 2, title: 'sove bedre', volume: 200 },
            { id: 3, userId: 3, title: 'mindre angst', volume: 300 },
        ],
        userAchivements: [
            { id: 1, userId: 3, globalAchivements: 2 },
            { id: 2, userId: 1, globalAchivements: 1 },
        ],
        totalDrinks: [
            { id: 1, userId: 3, drinkId: 2, date: '19.01.2024', time: '09.35' },
            { id: 1, userId: 3, drinkId: 1, date: '19.01.2024', time: '11.00' },
        ],
        friends: [
            { id: 1, userId: 1, friendId: 2 },
            { id: 2, userId: 1, friendId: 3 },
        ],

        globalAchivements: [
            { id: 1, achievement: 'yay' },
            { id: 2, achievement: 'tumbs up' },
            { id: 3, achievement: 'score' },
            { id: 4, achievement: 'bobla' },
        ],
        favoriteDrinks: [],
        recievedComments: [],
        givenComments: [],

    },
}