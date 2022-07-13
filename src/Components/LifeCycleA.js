import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
       name: 'Caleb'
    }
    console.log('LifeCycle A Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStateFromProps')
    return null
  }

  componentDidMount() {
    console.log('LifeCycleA Did Mount')
  }

  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA