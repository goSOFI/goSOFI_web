import React, {Component} from 'react'
import { Link } from 'react-router'

import './Hero.css'

export default class Hero extends React.Component {

  render(){
    return(
      <div className="Hero">
      <img className="HeroLogo"
      src={require('../../../static/go-sofi-tag-logo.png')}
      alt={'goSOFI Logo'}  />
      <h4 className="HeroText">GoSOFI microscholarships provide disadvantaged youth with time and with
      technical skills so that they may impact the future global economy.</h4>
      <div className="HeroButtonContainer"><button className="HeroButton pure-button pure-button-primary">
      <Link to='/about'>
      HOW IT WORKS</Link></button>
      <button className="HeroButton pure-button pure-button-primary">
      <Link to='/about'>
      DONATE</Link></button>
      </div>
      </div>
    )}
}
