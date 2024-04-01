const productAlert = document.getElementById("product-alert");
const closeAlertBtn = document.getElementById("close-btn");
const productText = document.getElementById("product-text");
const productImage = document.getElementById("product-image");
const names = ["John", "Alice", "Bob", "Emma", "Betty"];
const products = [
    {
        name: "Nike Red Shoes",
        image: "asset/shoe1.jpg",
    },
    {
        name: "Green Nike Shoes",
        image: "asset/shoe1-1.jpg",
    },
    {
        name: "Awesome Black Shirt",
        image: "asset/shoe1-2.jpg",
    },
    {
        name: "Brown Shoe",
        image: "asset/shoe1-3.jpg",
    },
    {
        name: "White Nike Shoe",
        image: "asset/shoe1.jpg",
    },
];

function getRandomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomTime() {
    return Math.floor(Math.random() * 59) + 1;
}

const getRandomDisplayTime = () => Math.random() * (8 - 5) + 3;
const showAlert = () => {
    const randomName = getRandomItemFromArray(names);
    const randomProduct = getRandomItemFromArray(products);
    const { name, image } = randomProduct;
    productImage.src = image;
    productText.innerHTML = `<p class="message">${randomName} purchased ${name}</p> <p class="time">${getRandomTime()} mins ago</p>`;
    productAlert.style.display = "flex";
};

closeAlertBtn.addEventListener("click", () => {
    productAlert.style.display = "none";
    setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);
});

setTimeout(showAlert, Math.floor(getRandomDisplayTime()) * 1000);