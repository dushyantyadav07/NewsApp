import React, { Component } from 'react'
import './background.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <footer className='bgd text-light text-center p-1 mt-2'>
            <p>copyright@newsapp.com</p>
          </footer>
      </div>
    )
  }
}
