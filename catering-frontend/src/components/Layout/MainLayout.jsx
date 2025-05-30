import React from 'react'
import Navbar from '../ui/NavBar'
import {Outlet} from 'react-router-dom'
import styles from './MainLayout.module.css'
import Footer from '../ui/Footer'
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
  return (
    <div className={styles.layout}>
        <Navbar />
        <ToastContainer />
        <div className={styles.content}>
            <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
    </div>
  )
}

export default MainLayout