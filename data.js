const repairs = [
   
    {
    id: "1",
    type: "Iphone X Max",
    picture: require("./assets/CrackedPhone.png"),
    cost: 99.99
    },

    {
    id: "2",
    type: "Iphone X",
    picture: require("./assets/CrackedPhone.png"),
    cost: 89.99
        },

    {
        id: "3",
        type: "Iphone XR",
        picture: require("./assets/CrackedPhone.png"),
        cost: 79.99
    },
    ];
    export const getProducts = () => {
        return repairs;
        
    }