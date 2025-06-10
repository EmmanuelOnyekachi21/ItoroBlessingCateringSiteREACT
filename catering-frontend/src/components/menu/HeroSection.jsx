import React, { useContext, useEffect, useState } from 'react';
import styles from './Menu.module.css';
import useCategories from '../../hooks/useCategories';
import api from '../../api';
import ButtonNavigation from './ButtonNavigation';
import CardContainer from '../ui/CardContainer';
import { ArrowRight, Heart, ShoppingCartIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useGetorCreateCode from '../../hooks/useGetorCreateCode';
import AddToCart from '../../utils/addToCart';
import { CartContext } from '../../context/CartContext';

/**
 * Hero Section for the Menu page
 * Fetches dishes, displays categories, and renders menu items dynamically.
 */
const HeroSection = () => {
  const categories = useCategories(); // Custom hook to fetch categories
  const [dishes, setDishes] = useState([]); // Store dishes fetched from API
  const [selectedCategory, setSelectedCategory] = useState('Main dishes'); // Default selected category
  const [fade, setFade] = useState(false); // Fade effect for smoother UI transitions
  const navigate = useNavigate();
  const { setNumberOfItems } = useContext(CartContext);

  // Fetch dishes once on component mount
  useEffect(() => {
    setFade(false);
    api.get('/api/dish/dish')
      .then(res => {
        setDishes(res.data);
        setFade(true);
      })
      .catch(err => console.log(err.message));
  }, []);

  // Filter dishes based on selected category
  const filteredItems = dishes.filter(dish => dish.category.name === selectedCategory);

  // Handle category button click
  const handleCategoryChange = (name) => {
    setFade(false);
    setTimeout(() => {
      setSelectedCategory(name);
      setFade(true);
    }, 100);
  };

  const { add_item, dishInCart } = useContext(CartContext);

 


  return (
    <>
      {/* Hero Section Title */}
      <div className={`container-fluid text-center ${styles.hero}`} style={{ height: '40vh' }}>
        <div className={`${styles.content} ps-md-4`} style={{ paddingTop: '6rem' }} />
        <h1 className='poppins-bold'>Our Menu</h1>
        <p className={`text-muted text-center ${styles.heroText}`}>
          Explore our delicious offerings prepared with fresh ingredients and authentic flavors. Order online for delivery or takeaway.
        </p>
      </div>

      {/* Category Navigation */}
      <div className='container pt-5 pb-3'>
        <div className={`d-sm-flex d-md-none justify-content-center mb-4 ${styles.buttonSmall}`}>
          {/* Small buttons (mobile view) */}
          <ButtonNavigation buttonGroup='btn-group-sm' selectedCategory={selectedCategory} click={handleCategoryChange} categories={categories} />
        </div>
        <div className={`d-none d-md-flex justify-content-center mb-4 ${styles.buttonSmall}`}>
          {/* Large buttons (desktop view) */}
          <ButtonNavigation buttonGroup='btn-group-lg' selectedCategory={selectedCategory} click={handleCategoryChange} categories={categories} />
        </div>
      </div>

      {/* Dish Cards */}
      <div className='container-fluid px-4 pb-3'>
        <div className={`row gx-2 fade-section ${fade ? 'fade-in' : ''} mx-auto`}>
          {filteredItems.map((dish) => {

            const isInCart = (dishInCart[dish.id] || (localStorage.getItem(`cart_item_id_${dish.name}`) ?? false)) ?? false

            return (

              <CardContainer key={dish.id} product={dish}>
                <div className='d-flex gap-2'>
                  <button
                    onClick={() => add_item(dish)}
                    disabled={isInCart}
                    className={`btn d-flex text-white justify-content-around align-items-center ${styles.buttonHover}`}
                    style={{ width: '70%', backgroundColor: 'rgb(var(--orange))' }}
                  >
                    {isInCart ? '' : <span>+</span>}
                    <span> {isInCart ? 'Added to Cart' : 'Add to cart'}</span>
                  </button>
                  <button className='btn btn-light border justify-content-center align-items-center'>
                    <Heart size={16} />
                  </button>
                  <button onClick={() => navigate(`/dishes/${dish.category.slug}/${dish.slug}`)} className='btn btn-light border justify-content-center align-items-center'>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </CardContainer>
            )
          })}
        </div>
      </div>

      {/* How to Order Section */}
      <div className='container pt-5 pb-3'>
        <h2 className='text-center poppins-bold'>How To Order</h2>
        <p className={`text-center ${styles.heroText} mb-4`}>
          Add items to your cart and proceed to checkout. You can choose delivery or pickup options at checkout.
        </p>
        <div className=''>
          <button
            onClick={() => navigate('/cart')}
            className='btn mb-3 text-white mx-auto py-2 px-4 d-flex align-items-center gap-4 border'
            style={{ backgroundColor: 'rgb(var(--orange))' }}
          >
            <ShoppingCartIcon size={16} />
            <span>View Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
