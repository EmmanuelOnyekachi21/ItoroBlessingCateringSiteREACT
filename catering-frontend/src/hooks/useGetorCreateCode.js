import { v4 } from 'uuid'
import React from 'react'

const useGetorCreateCode = () => {
  let cart_code = localStorage.getItem('cart_code');
  if (!cart_code) {
    cart_code = v4();
    localStorage.setItem('cart_code', cart_code);
  }

  return cart_code;

}

export default useGetorCreateCode;