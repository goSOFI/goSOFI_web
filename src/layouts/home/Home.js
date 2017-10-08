import React, { Component } from 'react'
import Hero from '../../user/ui/hero/Hero'
import StudentSignUpForm from '../../user/ui/studentsignup/StudentSignUpForm'
import HalfHero from '../../user/ui/hero/HalfHero'
import SecondHalfHero from '../../user/ui/hero/SecondHalfHero'
import ArticlesHalfHero from '../../user/ui/hero/ArticlesHero'

import './Home.css'
class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
          <Hero />
          <StudentSignUpForm />
          <HalfHero />
          <SecondHalfHero />
          <ArticlesHalfHero />
          </div>
        </div>
      </main>
    )
  }
}

export default Home
