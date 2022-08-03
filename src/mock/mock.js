const products = [
    {"title": "Collar", "price": 300, "id": 1, "unidad": 0, "imagen": "https://i.imgur.com/Igb4Ouu.png", "category": "accesorios"},
    {"title": "Alimento", "price": 3500, "id": 2, "unidad": 0, "imagen": "https://i.imgur.com/BYqYPzm.png", "category": "alimentoPerro"},
    {"title": "Hueso", "price": 250, "id": 3, "unidad": 0, "imagen": "https://i.imgur.com/39ESxVo.png", "category": "Juguete"},
    {"title": "Pelota", "price": 400, "id": 4, "unidad": 0, "imagen": "https://i.imgur.com/SXvUudJ.png", "category": "Juguete"},
    {"title": "Bocadillo", "price": 500, "id": 5, "unidad": 0, "imagen": "https://i.imgur.com/0NjfLB2.png", "category": "alimentoPerro"},
    {"title": "Correa", "price": 350, "id": 6, "unidad": 0, "imagen": "https://i.imgur.com/x7iRlet.png", "category": "accesorios"},
    {"title": "Arnes", "price": 2500, "id": 7, "unidad": 0, "imagen": "https://i.imgur.com/6ep1DMS.png", "category": "accesorios"},
    {"title": "Alimento Gatos", "price": 3000, "id": 8, "unidad": 0, "imagen": "https://i.imgur.com/pOXXLYZ.png", "category": "Alimento Gato"},
    {"title": "Collar de cuero", "price": 4000, "id": 9, "unidad": 0, "imagen": "https://i.imgur.com/iwIL2PL.png", "category": "accesorios"},
    {"title": "Royal Canin", "price": 4000, "id": 10, "unidad": 0, "imagen": "https://i.imgur.com/eSptx77.png", "category": "alimentoPerro"}
];

export const data = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(()=>{
        condition ? resolve(products) : reject("no hay comida para el michi :(")
    },2000)
});