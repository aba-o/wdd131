const recipes = [
    {
        image: "image/apple-crisp.jpg",
        type: "Dessert",
        name: "Apple Crisp",
        rating: 4,
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    },
];

const container = document.getElementById("content"); 
const footer = container.querySelector("footer");

recipes.forEach(recipe => {
    const article = document.createElement("article");
    article.id = "recipes";

    article.innerHTML = `
        <img class="image" src="${recipe.image}" alt="${recipe.name}">
        <section class="details">
            <div class="food-type">
                <button>${recipe.type}</button>
            </div>
            <h2 class="food-name">${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
            </span>
            <p class="hide">${recipe.description}</p>
        </section>
    `;

    container.insertBefore(article, footer);
});
