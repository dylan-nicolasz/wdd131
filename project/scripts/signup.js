const products = [
  {
    id: "fc-1888",
    name: "Student",
  },
  {
    id: "fc-2050",
    name: "Enterpreneur",
  },
  {
    id: "fs-1987",
    name: "Business owner",
  },
  {
    id: "ac-2000",
    name: "HH. RR. Manager  ",
  },
  {
    id: "jj-1969",
    name: "Company employee ",
  }
];

document.addEventListener("DOMContentLoaded", () => {
    populateProducts(products);
});

function populateProducts(productList) {
    const productSelect = document.getElementById("infomenu");
    if (!productSelect) return;

    productList.forEach(product => {
        const option = document.createElement("option");

        option.value = product.id;        
        option.textContent = product.name;  
        
        
        productSelect.appendChild(option);
    });
}

const inputPassword = document.getElementById("pwd");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener ("click", () => {
  if (inputPassword.type === 'password'){
    inputPassword.type = 'text';
    togglePassword.textContent = '🔒';
  }
  else {
    inputPassword.type = 'password';
    togglePassword.textContent = '👁';
  }
});

document.getElementById("last-modified").innerHTML = document.lastModified;

document.getElementById("year").textContent= new Date().getFullYear();