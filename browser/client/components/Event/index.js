import React from 'react'
import style from './style.css'
import moment from 'moment'

import {
  IoIosInformatoutline,
  IoIosBellOutline,
  IoSocialTwitter
} from 'react-icons/lib/io'

const icons = {
  info: <IoIosInformatoutline size={35} color='#0000ff' />,
  bell: <IoIosBellOutline size={35} color='#ff0000' />,
  tweet: <IoSocialTwitter size={35} color='#1da1f2' />
}

const Event = ({kind, title, description, createdAt}) => {
  return (
    <li className={style['normal']}>
      <div className={style['icon']}>
        {icons[kind]}
      </div>

      <div className={style['content']}>
        <h2>{title}</h2>

        <time dateTime={createdAt}>
          Publicerad {moment(createdAt).fromNow()}
        </time>

        <p>
          {description}
        </p>
      </div>
    </li>
  )
}

export default Event
