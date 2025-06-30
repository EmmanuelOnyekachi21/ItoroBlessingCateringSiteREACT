import React, { useContext, useEffect, useState } from "react";
import api from "../../api";
import OptionsDropdown from "./OptionsDropdown";
import OrderSection from "./OrderSection";
import { DishContext } from "../../context/DishContext";
import { toast } from "react-toastify";
import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";

const EditDishModal = ({ cartItem, extras }) => {
  // const {incrementQuantity, decrementQuantity} = useContext(DishContext);
  const [cartItemId, setCartItemId] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    incrementQuantity,
    decrementQuantity,
    quantity,
    setQuantity,
    note,
    setNote,
    extras: xtras,
    setExtras: setXtras,
    setOrderOption,
    orderOption,
  } = useContext(DishContext);

  useEffect(() => {
    api
      .get(
        `api/cart/get_cart_item?cart_code=${localStorage.getItem(
          "cart_code"
        )}&dish_id=${cartItem.id}`
      )
      .then((res) => {
        console.log(res.data);
        setQuantity(res.data.quantity);
        setNote(res.data.special_instruction);
        setOrderOption(res.data.delivery_option);
        setCartItemId(res.data.id);
        const xtraObj = {};
        res.data.extra_items.forEach((extra) => {
          xtraObj[extra.extra_id] = { quantity: extra.quantity };
        });
        console.log(xtraObj);
        setXtras(xtraObj);
      })
      .catch((err) => console.log(err.message));
  }, [cartItem]);

  console.log(xtras, note, orderOption, quantity, cartItemId, cartItem.id);

  const calculateTotal = () => {
    let baseTotal = cartItem.price * quantity;

    // console.log(Object.entries(xtras));
    Object.entries(xtras).forEach(([id, value]) => {
      // let xtras_price = 0
      for (const group of extras) {
        const found = group.extras.find((opt) => opt.id === parseInt(id));
        if (found) baseTotal += found.price * value.quantity;
      }
    });
    return baseTotal;
  };

  const handleSave = () => {
    setLoading(true);
    api
      .patch(`api/cart/update_item/${cartItemId}/`, {
        extra_items: xtras,
        dish: cartItem.id,
        orderOption,
        quantity,
        note,
      })
      .then((res) => {
        console.log(res.data);
        toast.success(res.data.message);

        // close the modal manually using Bootstrap
        const modalElement = document.getElementById("editCartModal");
        const bsModal = Modal.getInstance(modalElement);
        if (!bsModal) {
          bsModal = new Modal(modalElement);
        }
        bsModal.hide();

        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Something unexpected occured");
        setLoading(false);
      });
  };

  return (
    <>
      {loading && (
        <div
          style={{ zIndex: 9999 }}
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
        >
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div
        className="modal fade"
        id="editCartModal"
        tabIndex="-1"
        aria-labelledby="editCartModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editCartModalLabel">
                Edit {cartItem.name} in cart
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              {/* Dish Cart Item */}
              <span className="text-muted mt-2 d-block">
                {cartItem.description}
              </span>

              {/* Quantity selector */}
              <div className="mt-3">
                <h4 className="mb-2 d-inline-block lato-bold">Quantity</h4>
                <div className="input-group input-spinner">
                  <div className="input-group-prepend">
                    <button
                      disabled={quantity === 1 || loading}
                      onClick={decrementQuantity}
                      className="btn border btn-light"
                    >
                      -
                    </button>
                  </div>
                  <input
                    type="text"
                    className="text-center border-none border"
                    value={quantity}
                    readOnly
                    style={{ width: "4rem", padding: "0" }}
                    disabled={loading}
                  />
                  <div className="input-group-append">
                    <button
                      onClick={incrementQuantity}
                      className="border btn btn-light"
                      disabled={loading}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Adding Extras */}
              <div className="">
                <h4 className="mt-4 poppins-bold">Add-ons</h4>
                <div className="mb-3">
                  {extras.map((extra) => (
                    <OptionsDropdown
                      options={extra.extras}
                      extra={extra}
                      key={extra.id}
                    />
                  ))}
                </div>
              </div>

              {/* Special Instructions */}
              <div className="mb-5">
                <label
                  htmlFor="Special Instructions"
                  className="form-label fs-4 poppins-bold"
                >
                  Special Instructions
                </label>

                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="form-control"
                  disabled={loading}
                  id="specialInstructions"
                  placeholder="Add any special requests (e.g., spice level, allergies)"
                  rows={3}
                ></textarea>
              </div>

              {/* Total Price */}
              <div
                className="d-flex justify-content-between mx-auto"
                style={{ width: "95%" }}
              >
                <h4 className="poppins-bold">Total Price:</h4>
                <h3
                  className="lato-bold"
                  style={{ color: "rgb(var(--orange))" }}
                >
                  ₦{calculateTotal()}
                </h3>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDishModal;
