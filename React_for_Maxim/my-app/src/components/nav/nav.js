import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

 const Nav = () => {
    return (
        <nav className='menu'>
            <Link className='menu' to="/">Главная</Link>
            <Link className='menu' to="/shop">Магазин</Link>
            <Link className='menu' to="/products">Продукты</Link>
            <Link className='menu' to="/about">О нас</Link>
            <Link className='menu' to="/contacts">Контакты</Link>
        </nav>
    )
 }

export default Nav