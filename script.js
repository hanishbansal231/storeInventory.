
let itemBox = document.querySelector('.itemBox'),
  usPriceBox = document.querySelector('.usPriceBox'),
  rsPriceBox = document.querySelector('.rsPriceBox');



const items = [
  { name: " pen", price: 10 },
  { name: " pencil", price: 20 },
  { name: "notebook", price: 30 },
  { name: "Books", price: 40 }
];

const itemName = () => {
  for (let i = 0; i < items.length; i++) {
    let li = `<li>${items[i].name}</li>`;
    itemBox.innerHTML += li;
  }
};
itemName();

const usPrice = () =>{
  for(let i = 0;i < items.length;i++){
   let li = `<li>${items[i].price}</li>`
   usPriceBox.innerHTML += li;
  }
};
usPrice();


const indianPrice = () =>{
  for(let i = 0;i<items.length;i++){
    let indian = 82.54;
    let price = indian *  items[i].price;
    let li = `<li>${price}</li>`;
    rsPriceBox.innerHTML += li;
  }
};
indianPrice();