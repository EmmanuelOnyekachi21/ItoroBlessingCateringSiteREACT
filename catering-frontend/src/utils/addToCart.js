import api from "../api";

const AddToCart = (cart_code, dish, extra_item_id = null) => {
  const dish_id = dish.id;
  console.log(dish.name, dish_id )
  const data = {
    cart_code,
    dish_id,
    extra_item_id,
  }

  //Fnctionality to allow user add item to cart
  api.post('/api/cart/add_item/', data)
    .then(res => {
      console.log(res.data);
      localStorage.setItem(`cart_item_id_${dish.name}`, dish_id)
    })
    .catch(err => {
      console.log(err.message);
    })
};

export default AddToCart;