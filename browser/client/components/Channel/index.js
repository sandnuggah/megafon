import React from 'react'
import style from './style.css'
import {Link} from 'react-router'
import {IoFlag} from 'react-icons/lib/io'

const Channel = ({topic, title, description}) => {
  return (
    <Link to={'channels/' + topic}>
      <li className={style['normal']}>
        <div className={style['icon']}>
          <IoFlag size={45} color='#ff0000' />
        </div>

        <div className={style['content']}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </li>
    </Link>
  )
}

export default Channel
