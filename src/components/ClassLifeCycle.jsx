
import {Component} from "react";

class ClassLifeCycle extends Component{
    constructor(props){     //# it is the 1st method in mounting phase
        super(props)
        this.state = {
            favSport : "Football"
        }
    }

    // static getDerivedStateFromProps(props,state){       //# it is the 2nd method in mounting phase
    //     //$ console.log(props)
    //     //$ console.log(state)
    //     return {favSport: props.favSport}       //# changes the state object from the props
    // }


    shouldComponentUpdate(){    //# this method returns booleans type // if true then it will update otherwise not // it manage state update
        return true     //$ state will update --> Hockey
        // return false       //$ state will not update --> Cricket
    }


    getSnapshotBeforeUpdate(prvProps,prvState){
        console.log(prvProps);
        console.log(prvState);
    }


    componentDidUpdate(){
        console.log(this.state)
    }

    // componentDidMount(){    //# it is the last method of mounting phase // it executes only once after the initial render
    //     setTimeout(()=>{
    //         this.setState({favSport: "Hockey"})
    //     },2000)
    // }


    componentWillUnmount(){     //# this method will execute when the component is going to remove from webpage
        alert("Hey SomeOne Removing Me")
    }

    render(){       //# it is the 3rd method in moutning phase
        return(     //# This is used to write jsx inside class component
            <>
                <h1>Class Based Component</h1>
                <h2>favSport = {this.state.favSport}</h2>
            </>
        )
    }
}

export default ClassLifeCycle;
