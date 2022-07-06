import React from 'react'
import './Aside.scss'
import Link from '../../UI/Link/Link'
import apps from '../../../assets/icon/apps.svg'
import Image from '../../UI/Image/Image'

const Aside = () => {
   return (
      <aside className='aside'>
         <ul className='aside__list'>
            <li className='aside__list-item'>
               <Link
                  path='/app'
               >
                  <Image
                     src={apps}
                     alt='Apps'
                     size='resize60 image--scale'
                  />
               </Link>
            </li>
         </ul>
      </aside>
   )
}

export default Aside