import React from 'react'
import './Aside.scss'
import Link from '../../UI/Link/Link'
import apps from '../../../assets/icon/apps.svg'

const Aside = () => {
   return (
      <aside className='aside'>
         <ul className='aside__list'>
            <li className='aside__list-item'>
               <Link
                  path='/app'
               >
                  <img className='aside__list-item-img' src={apps} alt='Apps' />
               </Link>
            </li>
         </ul>
      </aside>
   )
}

export default Aside