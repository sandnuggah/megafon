import React, {Component} from 'react'
import {Link} from 'react-router'
import style from './style.css'

class Header extends Component {
  render () {
    return (
      <header className={style['normal']}>
        <h1>
          <Link to='/'>Megafon</Link>
        </h1>
      </header>
    )
  }
}

export default Header
