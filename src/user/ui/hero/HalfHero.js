import React, {Component} from 'react'
import { Link } from 'react-router'

import './Hero.css'

export default class HalfHero extends React.Component {

  render(){
    return(
      <div className="HalfHero">
      <h1 className="HalfHeroHeader">
      How it works
      </h1>
      <h4 className="HeroText">GoSOFI microscholarships provide disadvantaged youth with time and with
      technical skills so that they may impact the future global economy.</h4>
      <button className="HeroButton pure-button pure-button-primary">
      <Link to='/about'>
        LEARN MORE</Link></button>

      </div>
    )}
}
