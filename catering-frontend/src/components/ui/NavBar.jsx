import React, { useContext, useEffect, useRef, useState } from 'react'
import { AlignJustify, ChefHat, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import NavBarLinks from './NavBarLinks'
// import styles from './NavBarLinks.module.css'
import styles from './NavBar.module.css'
import { CartContext } from '../../context/CartContext'

const NavBar = () => {
    // Define state for dropdown toggle
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();
    const buttonRef = useRef();
    const {numberOfItems} = useContext(CartContext)

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            // If the dropdown exists AND the click was outside of it…
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };

    }, [])

    return (
        <nav className={`shadow-sm position-fixed w-100 top-0 ${styles.navBarBlur}`} style={{ zIndex: '50', height: '4rem' }}>
            <div className="d-flex align-items-center px-4" style={{ justifyContent: 'space-between', height: '100%' }}>
                {/* Left side: Logo */}
                <div className="d-flex align-items-center order-0">
                    <ChefHat className='text-warning' style={{ height: '3rem', width: '3rem' }} />
                    <span className='poppins-semibold fs-3 ms-2'>Itoro Eats</span>
                </div>

                {/* Middle: Nav Links (Desktop only) */}
                <div className='d-none d-md-block'>
                    <ul className="navbar-nav d-none d-lg-flex flex-md-row" style={{ gap: '1rem' }}>
                        <NavBarLinks />
                        <ul className='d-lg-flex d-none ms-5 gap-3' style={{ listStyle: 'none' }}>
                            <li className="nav-item poppins-regular">
                                <a className="nav-link footer-hover" href="/login">Login</a>
                            </li>
                            <li className="nav-item poppins-regular">
                                <a className="nav-link  btn px-2" style={{ backgroundColor: 'rgb(var(--orange))' }} href="/register">Create Account</a>
                            </li>
                        </ul>
                    </ul>
                </div>

                {/* <div className='d-flex align-items-center d-md-block d-none'>
                    <a className='poppins-regular nav-item' style={{ color: 'black', textDecoration: 'none' }}> Login </a>
                    <button className='btn' style={{ backgroundColor: 'rgb(var(--orange))' }}> Create Account </button>
                </div> */}

                {/* Right side: Cart */}
                <div className='d-flex align-items-center gap-5'>

                    <div className="position-relative me-5">
                        <ShoppingCart className={`${styles.cartHover}`} />
                        <span className={`text-bg-dark badge position-absolute ${styles.top} rounded-circle ${styles.reduceSize}`} style={{ width: '1.5rem', height: '1.5rem' }}>{ numberOfItems ?? '' }</span>
                    </div>
                    {/* Hamburger icon */}
                    <button
                        className={`${styles.buttonDesign} d-lg-none d-flex`}
                        onClick={toggleDropdown}
                        aria-label='Toggle Navigation'
                        aria-expanded={isDropdownOpen}
                        ref={buttonRef}
                    >
                        <span className={isDropdownOpen ? styles.open : ''}></span>
                        <span className={isDropdownOpen ? styles.open : ''}></span>
                        <span className={isDropdownOpen ? styles.open : ''}></span>
                    </button>
                </div>
            </div>

            {/* Dropdown for small screens */}
            {isDropdownOpen && (
                <div ref={dropdownRef} className={`${styles.dropdownMenu} d-lg-none`}>
                    <ul className="navbar-nav fs-3 d-flex mb-4 flex-column">
                        <NavBarLinks />
                    </ul>
                </div>
            )}

            {isDropdownOpen && (
                <div className={styles.overlay} onClick={toggleDropdown}></div>
            )}
        </nav>
    )
}

export default NavBar