import *as React from "react";
class StateABC extends React.Component {
    state ={
        First: false,
        second : 3.14,
        third : "Chirag",
        fourth: "red",
        fifth: "green",
    };
    render(){
        const {first, second,third} = this.state;
        return(
            <div>
                <button disabled ={first}>My button</button>
                <p style = {{ color: fourth}}>
                    value of float variable is <strong>3.14</strong>
                </p>
                <p style = {{ color : fifth}}>
                value of string  variable is <strong>Chirag</strong>
                </p>
            </div>
        );
    }
}

export default StateABC;