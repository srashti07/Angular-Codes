// Define the Fruit object type with required properties
class Fruit {
    constructor(id, name, image, unit, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.unit = unit;
        this.price = price;
    }
}
function getFruits() {
    return fetch('http://localhost:3000/fruits/')
        .then(response => response.json())
        .then(jsonData => transform(jsonData))
        .catch(error => console.error(error));
}
function transform(fruitData) {
    fruitData.forEach(item => {
        const transformedFruit = new Fruit(item.id, item.name, item.image, item.unit, item.price);
        showFruit(transformedFruit);
    });
}
function showFruit(transformedFruit) {
    const fruitsContainer = document.getElementById('fruitsContainer');
    const fruitCardHTML = `
        <div class="fruit-card">
            <img src="${transformedFruit.image}" alt="${transformedFruit.name}">
            <h2>${transformedFruit.name}</h2>
            <p>Price: $${transformedFruit.price} per ${transformedFruit.unit}</p>
        </div>
    `;
    if (fruitsContainer) {
        fruitsContainer.innerHTML += fruitCardHTML;
    }
}
//compiler error for "module" will be resolved once node_modules folder is generated by giving 'npm install' command in the terminal
// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
  getFruits
}
