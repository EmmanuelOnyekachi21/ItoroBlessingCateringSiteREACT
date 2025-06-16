import { toast } from "react-toastify";
import api from "../api";

const AddToCart = (cart_code, dish, data) => {
  const dish_id = dish.id;
  console.log(dish.name, dish_id )
  // const { quantity, orderOption, note, extras } = useContext(DishContext);
  const { quantity, orderOption, note, xtras } = data;
  const cartItemData = {
    cart_code,
    dish_id,
    extra_items: xtras,
    note,
    orderoption: orderOption,
    quantity,
  }

  //Fnctionality to allow user add item to cart
  api.post('/api/cart/add_item/', cartItemData)
    .then(res => {
      console.log(res.data);
      localStorage.setItem(`cart_item_id_${dish.name}`, dish_id)
      toast.success('Item added successfully')
    })
    .catch(err => {
      console.log(err.message);
    })
};

export default AddToCart;