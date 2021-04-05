import React from 'react'
import { Link } from 'react-router-dom'

import Calculator from './Calculator/Calculator'


const MainPage = () => (
  <div>
    <Link to="/">GO</Link>
    <br />
    <Calculator />
  </div>
)


export default MainPage
