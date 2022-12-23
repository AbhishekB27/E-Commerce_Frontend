import React from "react";
class ErrorBoundary extends React.Component{ // class based component
    state = {hasError: false,error:null}
    static getDerivedStateFromError(error){
        return {
            hasError:true,
            error
        }
    }
    render(){
        if(this.state.hasError){
            return this.props.fallback
        }
        return this.props.children
    }
}

export default ErrorBoundary
