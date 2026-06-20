let count = localStorage.getItem("reviewCount");

if (count === null) {
    count = 1;
} 
else {
    count = Number(count) + 1;
}

localStorage.setItem("reviewCount", count);

document.querySelector("#review-count").textContent = count;

const menuButton = document.querySelector("#menu-btn");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});