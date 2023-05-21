const products = {
  product1: {
    name: "1 Piece Digital Printed Loose Fabric",
    type: "Shirt",
    length: "3",

    image: "product1.jpg",
    price: 9.99,
  },
  product2: {
    name: "1 Piece Digital Printed Loose Fabric",
    image: "product2.jpg",
    price: 19.99,
  },
  product3: {
    name: "1 Piece Digital Printed Loose Fabric",
    image: "product3.jpg",
    price: 29.99,
  },
  product4: {
    name: "1 Piece Digital Printed Loose Fabric",
    image: "product24.jpg",
    price: 4.99,
  },
  product5: {
    name: "1 Piece Digital Printed Loose Fabric",
    image: "product5.jpg",
    price: 39.99,
  },
};

//Cart System
let cart = [];

//add items in cart
function addItem(productName) {
  let productNum = parseInt(productName.match(/\d+/)[0]);
  cart.push(products["product" + productNum]);
  updateCart();
}

//remove item from cart
function removeItem(productName) {
  // let productNum = parseInt(productName.replace("product", "")); // 1
  let productNum = parseInt(productName.match(/\d+/)[0]);
  let index = cart.findIndex(
    (item) => item === products["product" + productNum]
  );
  if (index !== -1) {
    cart.splice(index, 1);
    updateCart();
  }
}

function updateCart() {
  let totalPrice = 0;
  let count = 0;
  let cartTable = document.getElementById("table");
  let quantities = Object.fromEntries(cart.map((item) => [item.name, 0])); // initialize quantities to 0 for each item name

  cart.forEach((item) => {
    count++;
    totalPrice += item.price;

    // Check if table row with id of item.name already exists
    let row = document.getElementById(`${item.name}`);
    if (row) {
      // if row already exists, update quantity and total price
      quantities[item.name]++; // increment quantity for this product
      let quantitySpan = document.getElementById(`quantity${item.image}`);
      if (quantitySpan) {
        quantitySpan.innerText = quantities[item.name];
      }
      let totalSpan = row.querySelector(".total");
      totalSpan.innerText = item.price * quantities[item.name] + "pkr"; // update total price
    } else {
      // if row doesn't exist, create a new one with quantity 1
      quantities[item.name] = 1; // initialize quantity for this product
      let tr = document.createElement("tr");
      tr.id = `${item.name}`;
      tr.innerHTML = `
        <td id="${item.name}">
          <div class="item">
            <img class="product-img" src="../bundle/images/${item.image}" alt="" />
            <div class="cart-row">
              <p class="product-info">
                <b>${item.name}</b><br />
                <span>${item.type}</span><br />
                <span>${item.length}m</span>
              </p>
              <img class="bin" src="../bundle/images/bin.png" alt="" onclick="removeItem('${item.image}')"/>
            </div>
          </div>
        </td>
        <td>
          <p class="price">${item.price}pkr</p>
        </td>
        <td>
          <div class="quantity">
            <button class="minus" onclick="addItem(${item.image})">+</button>
            <p><span id="quantity${item.image}">1</span></p>
            <button class="plus" onclick="removeItem(${item.image})">-</button>
          </div>
        </td>
        <td>
          <p class="total">${item.price}</p>
        </td>
      `;
      cartTable.appendChild(tr);
    }
  });
  totalPrice = Math.ceil(totalPrice);
  document.getElementById("count").textContent = count;
  document.getElementById("totalPrice").innerText = totalPrice + "pkr";

  // Check if any table rows need to be removed
  let rowsToRemove = [];
  let rows = cartTable.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let rowId = rows[i].getAttribute("id");
    if (!cart.some((item) => item.name === rowId)) {
      rowsToRemove.push(rows[i]);
    }
  }
  console.log(rowsToRemove);
  rowsToRemove.forEach((row) => cartTable.removeChild(row));
}

// function updateCart() {
//   let totalPrice = 0;
//   let count = 0;
//   let cartTable = document.getElementById("table");
//   let quantities = Object.fromEntries(cart.map((item) => [item.name, 0])); // initialize quantities to 0 for each item name

//   cart.forEach((item) => {
//     count++;
//     totalPrice += item.price;

//     // Check if table row with id of item.name already exists
//     let row = document.getElementById(`${item.name}`);
//     if (row) {
//       // if row already exists, update quantity and total price
//       quantities[item.name]++; // increment quantity for this product
//       let quantitySpan = document.getElementById(`quantity${item.image}`);
//       if (quantitySpan) {
//         quantitySpan.innerText = quantities[item.name];
//       }
//       let totalSpan = row.querySelector(".total");
//       totalSpan.innerText = item.price * quantities[item.name] + "pkr"; // update total price
//     } else {
//       // if row doesn't exist, create a new one with quantity 1
//       quantities[item.name] = 1; // initialize quantity for this product
//       let tr = document.createElement("tr");
//       tr.id = `${item.name}`;
//       tr.innerHTML = `
//         <td id="${item.name}">
//           <div class="item">
//             <img class="product-img" src="../bundle/images/${item.image}" alt="" />
//             <div class="cart-row">
//               <p class="product-info">
//                 <b>${item.name}</b><br />
//                 <span>${item.type}</span><br />
//                 <span>${item.length}m</span>
//               </p>
//               <img class="bin" src="../bundle/images/bin.png" alt="" onclick="removeItem('${item.image}')"/>
//             </div>
//           </div>
//         </td>
//         <td>
//           <p class="price">${item.price}pkr</p>
//         </td>
//         <td>
//           <div class="quantity">
//             <button class="minus" onclick="addItem(${item.image})>+</button>
//             <p><span id="quantity${item.image}">1</span></p>
//             <button class="plus" onclick="removeItem(${item.image})">-</button>
//           </div>
//         </td>
//         <td>
//           <p class="total">${item.price}</p>
//         </td>
//       `;
//       cartTable.appendChild(tr);
//     }
//   });
//   totalPrice = Math.ceil(totalPrice);
//   document.getElementById("count").textContent = count;
//   document.getElementById("totalPrice").innerText = totalPrice + "pkr";
// }

// // function updateSRC() {
// //   window.addEventListener("hashchange", function () {
// //     const productId = window.location.hash.substr(1);
// //     const product = products[productId];
// //     document.querySelector("#product-info h1").innerHTML = product.name;
// //     document.querySelector("#product-info img").src = product.image;
// //     document.querySelector("#product-info img").alt = product.name;
// //     document.querySelector("#product-info p").innerHTML = product.price;
// //   });
// // }

//Cart Sorting System
// Sort products in ascending order based on price
function sortProductsByPriceAscending(products) {
  let sortedProducts = {};
  Object.keys(products)
    .sort(function (a, b) {
      return products[a].price - products[b].price;
    })
    .forEach(function (key) {
      sortedProducts[key] = products[key];
    });
  return sortedProducts;
}

// Sort products in descending order based on price
function sortProductsByPriceDescending(products) {
  let sortedProducts = {};
  Object.keys(products)
    .sort(function (a, b) {
      return products[b].price - products[a].price;
    })
    .forEach(function (key) {
      sortedProducts[key] = products[key];
    });
  return sortedProducts;
}

// Sort products alphabetically by name
function alphabeticallySort() {
  const sortedByName = Object.values(products).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}