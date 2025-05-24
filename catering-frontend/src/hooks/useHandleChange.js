import React from 'react'

// the `e` is passed by default when we use onChange event
// Addinng e to list of parameters, i.e export const useHandleChange = (setformData) => {},
// means that it runs everytime it is loaded which is wrong.  But the one below runs only when user types.
export const useHandleChange = (setformData) => {
  return (e) => {
    const { name, value } = e.target
    setformData((prev) => (
      { ...prev, [name]: value }
    ))

  }
}
