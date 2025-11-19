nums = [14, 25, 3, 1];
console.log(nums.sort(compareFn));


const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
// console.log(simpleList.sort()); this does not sorth the list right because capital letters
let lowerList = simpleList.map(function(fruit){
     return fruit.toLocaleLowerCase(); // filters the list to create a new list
})
console.log(lowerList.sort());

let searchTerm = 'b';
let filterFruit = lowerList.filter(searchFruit);
function searchFruit(fruit){
    return fruit.includes(searchTerm);
}
console.log(filterFruit)


function compareFn(a,b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}


const products = [
    {
        productName: "Wireless Mouse",
        price: 29.99
    },
    {
        productName: "Bluetooth Keyboard",
        price: 49.99
    },
    {
        productName: "Laptop Stand",
        price: 39.99
    }
];
console.log(products.sort(compareSn));

function compareSn(a,b) {
    if (a.price < b.price) {
        return -1;
    } else if (a.price > b.price) {
        return 1;
    }
    return 0;
}




const animals = [
    {
        name: "Lion",
        traits: ["brave", "strong", "fierce", "wild"]
    },
    {
        name: "Elephant",
        traits: ["large", "gentle", "smart", "wild"]
    },
    {
        name: "Fox",
        traits: ["sly", "quick", "clever", "wild"]
    },
    {
        name: "Dog",
        traits: ["loyal", "friendly", "playful", "cuddly"]
    },
    {
        name: "Cat",
        traits: ["quiet", "independent", "curious", "cuddly"]
    }
];

let query = "dog";
let filteredList = animals.filter(searchList);

function searchList(item){
    return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
}
console.log(filteredList);

let queryTrait = "cuddly";

let filteredTraits = animals.filter(searchTrait);
function searchTrait(item){
    return item.traits.find((traits) =>
        traits.toLocaleLowerCase().includes(queryTrait.toLocaleLowerCase())
)
}
console.log(filteredTraits);