const products = [
    {"title": "Collar", "price": 300, "id": 1, "unidad": 0, "imagen": "./productImages/collar.png"},
    {"title": "Alimento", "price": 3500, "id": 2, "unidad": 0, "imagen": "./productImages/alimento.png"},
    {"title": "Hueso", "price": 250, "id": 3, "unidad": 0, "imagen": "./productImages/hueso.png"},
    {"title": "Pelota", "price": 400, "id": 4, "unidad": 0, "imagen": "./productImages/pelota.png"},
    {"title": "Bocadillo", "price": 500, "id": 5, "unidad": 0, "imagen": "./productImages/Bocadillos.png"},
    {"tittle": "Correa", "price": 350, "id": 6, "unidad": 0, "imagen": "./productImages/correa.png"},
    {"tittle": "Arnes", "price": 2500, "id": 7, "unidad": 0, "imagen": "./productImages/Arnes.png"},
    {"title": "Alimento Gatos", "price": 3000, "id": 8, "unidad": 0, "imagen": "./productImages/alimentoparagatos.png"},
    {"title": "Collar de cuero", "price": 4000, "id": 9, "unidad": 0, "imagen": "./productImages/collardecuero.png"},
    {"title": "Royal Canin", "price": 4000, "id": 10, "unidad": 0, "imagen": "./productImages/royalcanin.png"}
];

export const data = new Promise((resolve, reject) => {
    let condition = true;
    setTimeout(()=>{
        condition ? resolve(products) : reject("no hay comida para el michi :(")
    },3000)
});