import { Component } from 'react'

export class LifecycleB extends Component {
    constructor(){
        super()
        this.state = {
            name : "Kumar"
        }
        console.log("LifeCycleB : constructor")
    }

static getDerivedStateFromProps(props, state){
    console.log("LifeCycleB : getDerivedStateFromProps")
    return null
}

componentDidMount(){
    console.log("LifeCycleB : componentDidMount")
}

    render() {
        console.log("LifeCycleB : render")
        return (
        <>
            <h1>Lifecycle B</h1>
        </>
        )
    }
}

export default LifecycleB
