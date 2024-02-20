import { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(){
        super()
        this.state = {
            name : "Tushar"
        }
        console.log("LifeCycleA : constructor")
    }

static getDerivedStateFromProps(props, state){
    console.log("LifeCycleA : getDerivedStateFromProps")
    return null
}

componentDidMount(){
    console.log("LifeCycleA : componentDidMount")
}

    render() {
        console.log("LifeCycleA : render")
        return (
        <>
            <h1>Lifecycle A</h1>
            <LifecycleB/>
        </>
        )
    }
}

export default LifecycleA
