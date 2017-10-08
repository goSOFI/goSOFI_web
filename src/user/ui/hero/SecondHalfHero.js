import React, {Component} from 'react'
import { Link } from 'react-router'

import './Hero.css'

export default class ArticlesHalfHero extends React.Component {

  render(){
    return(
      <div className="SecondHalf">
      <h1 className="OtherHeroHeader">
      Donate
      </h1>
      <h4 className="HeroText">GoSOFI microscholarships provide disadvantaged youth with time and with
      technical skills so that they may impact the future global economy.</h4>
<div className="SecondHeroButtonContainer">
      <button className="HeroButton pure-button pure-button-primary">
      <Link to='/about'>
        DONATE</Link></button>
        <button className="HeroButton pure-button pure-button-primary">
        <Link to='/about'>
          STUDENT PROGRESS</Link></button>
          </div>
      </div>
    )}
}
