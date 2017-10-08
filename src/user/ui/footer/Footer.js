import React, { Component } from 'react'
import { Link } from 'react-router'

import './Footer.css'

export default class Footer extends React.Component {
  render(){
    return(
      <footer>
        <div className="FooterSpacer">
          <div className="FooterContainer">
              <div className="FooterLinks">
                <div className="Mini-Col">
                  <div className="Title">Lorem</div>
                  <Link to="/">Enter</Link>
                  <Link to="/">Enter</Link >
                  <Link to="/">In</Link >
                  <Link to="/">Here</Link >
                </div>
                <div className="Mini-Col">
                  <div className="Title">Community</div>

                  <Link to="/">Forums</Link >
                  <Link to="/">Facebook</Link >
                  <Link to="/">Twitter</Link >
                </div>
                <div className="Mini-Col">
                  <div className="Title">Resources</div>
                  <Link to="/">Videos</Link >
                  <Link to="/">Examples</Link >
                  <Link to="/">Tools</Link >
                </div>
                <div className="Mini-Col">
                  <div className="Title">More</div>
                  <Link to="/">Blog</Link >
                  <Link to="/">Github</Link >
                  <Link to="/">Anything</Link >
                  <Link to='/'>Lorem</Link >
                </div>

              </div>
              <section>
                <img className="FooterLogo" src={require('../../../static/go-sofi-tag.png') } alt={'goSOFI Logo'}  />
                <p>Copyright © 2017 goSOFI</p>
              </section>
            </div>
        </div>
      </footer>
)}
}
