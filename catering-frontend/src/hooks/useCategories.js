import React, { useEffect, useState } from 'react'
import api from '../api.js'

// Custom hook to fetch categories from API
const useCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    api.get('/api/categories')
      .then(res => {
        setCategories(res.data)
      })
      .catch(err => console.log(err.message))
  }, [])

  return categories
}

export default useCategories
