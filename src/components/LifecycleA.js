import React, {Component} from "react"

class LifecycleA extends component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Vishwas'
        }
        console.log("LifecycleA constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default LifecycleA