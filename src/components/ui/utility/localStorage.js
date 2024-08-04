//getting the Shopping cart from Local storage
const getShoppingCart = () => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

//adding the Shopping cart from Local storage
const addToCart = (id) => {
  let shoppingCart = getShoppingCart();

  //add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//adding to cart new method
const addToCartNew = (shoppingCart) => {
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//remove 1 item the Shopping cart from Local storage
const removeSingleItemFromCart = (id) => {
  const shoppingCart = getShoppingCart();

  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

//deleting the Shopping cart from Local storage
const deleteCart = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  getShoppingCart,
  addToCart,
  removeSingleItemFromCart,
  deleteCart,
  addToCartNew,
};
