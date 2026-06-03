const mainnav = document.querySelector (".navigation");
const hambutton = document.querySelector ("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Quito, Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, Novemeber, 20",
    area: 36780,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  },
  {
    templeName: "Bogota Colombia",
    location: "Bogota DC, Colombia ",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "Recife Brazil",
    location: " Recife, Brazil ",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  }
  
  
];

const gallery = document.querySelector(".gallery");

createTemplecards(temples);
const oldTemplesLink = document.querySelector("#oldTemples");
oldTemplesLink.addEventListener ("click", () => {
  createTemplecards (temples.filter(temple => {
    const year = parseInt (temple.dedicated);
    return year <1900;
  })
);
});

const newTemplesLink = document.querySelector("#newTemples");
newTemplesLink.addEventListener ("click", () => {
  createTemplecards (temples.filter(temple => {
    const year = parseInt (temple.dedicated);
    return year >2000;
  })
);
});
const largeTemplesLink = document.querySelector("#largeTemples");
largeTemplesLink.addEventListener ("click", () => {
  createTemplecards (temples.filter(temple =>
    temple.area > 90000)
  );
});

const smallTemplesLink = document.querySelector("#smallTemples");
smallTemplesLink.addEventListener ("click", () => {
  createTemplecards (temples.filter(temple =>
    temple.area <  10000)
  );
});
function createTemplecards (filteredTemples) {
  document.querySelector(".gallery").innerHTML = "";
  filteredTemples.forEach (temple => {

      const card = document.createElement("section");

      const name = document.createElement("h3");
      name.textContent = temple.templeName;

      const location = document.createElement("p");
      location.innerHTML = `<span>Location:</span> ${temple.location}`;

      const dedicated = document.createElement ("p");
      dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

      const size = document.createElement("p");
      size.innerHTML = `<span>Size:</span> ${temple.area}`;

      const img = document.createElement("img");
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";



      card.append(
          name,
         location,
          dedicated,
          size,
          img
      );

      gallery.appendChild(card);
  });
}

document.getElementById("last-modified").innerHTML = document.lastModified;

