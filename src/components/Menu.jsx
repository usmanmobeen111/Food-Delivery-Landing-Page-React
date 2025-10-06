import React from 'react'
import { menuItems } from '../utils/menuData'

const Menu = () => {
  return (
    <div>
      {
        menuItems.map((item)=>(
            <div>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <span>{item.price}</span>
               <span>{item.category}</span>
            </div>
        ))
      }
    </div>
  )
}

export default Menu
