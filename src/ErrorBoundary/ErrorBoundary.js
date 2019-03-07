import React, { Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError:true,
            errorMessage: error
        })
    }

    render(){
        if(this.state.hasError){
            return <h1>Something went horribly wrong... Sorry. Here's the error message nobody knows what it means anyways: {this.state.errorMessage}</h1>;
        }else{
            return this.props.children;
        }
    }

}

export default ErrorBoundary