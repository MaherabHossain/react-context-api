import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count : 0
    }

    incrementCount = () =>{
        this.setState({count:this.state.count+1})
    }

    render(){
        const{count} = this.state
        const {children} = this.props
        // return render(count,this.incrementCount)
        return children(count,this.incrementCount)
    }
}

export default Counter;