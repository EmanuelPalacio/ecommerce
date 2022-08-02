const products = [
    {"title": "Collar", "price": 300, "id": 1, "unidad": 0, "imagen": "./productImages/collar.png", "category": "accesorios"},
    {"title": "Alimento", "price": 3500, "id": 2, "unidad": 0, "imagen": "./productImages/alimento.png", "category": "alimentoPerro"},
    {"title": "Hueso", "price": 250, "id": 3, "unidad": 0, "imagen": "./productImages/hueso.png", "category": "Juguete"},
    {"title": "Pelota", "price": 400, "id": 4, "unidad": 0, "imagen": "./productImages/pelota.png", "category": "Juguete"},
    {"title": "Bocadillo", "price": 500, "id": 5, "unidad": 0, "imagen": "./productImages/Bocadillos.png", "category": "alimentoPerro"},
    {"tittle": "Correa", "price": 350, "id": 6, "unidad": 0, "imagen": "./productImages/correa.png", "category": "accesorios"},
    {"tittle": "Arnes", "price": 2500, "id": 7, "unidad": 0, "imagen": "./productImages/Arnes.png", "category": "accesorios"},
    {"title": "Alimento Gatos", "price": 3000, "id": 8, "unidad": 0, "imagen": "./productImages/alimentoparagatos.png", "category": "Alimento Gato"},
    {"title": "Collar de cuero", "price": 4000, "id": 9, "unidad": 0, "imagen": "./productImages/collardecuero.png", "category": "accesorios"},
    {"title": "Royal Canin", "price": 4000, "id": 10, "unidad": 0, "imagen": "./productImages/royalcanin.png", "category": "alimentoPerro"}
];

export const data = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(()=>{
        condition ? resolve(products) : reject("no hay comida para el michi :(")
    },3000)
});