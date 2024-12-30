import *as React from "react";
class Statexyz extends React.Component {
    state ={
        First: false,
        second : 3.14,
        third : "Chirag",
        fourth: "red",
        fifth: "green",
    };
    constructor(){
        super();
        setTimeout(( ) => {
            this.setState ({
        First: false,
        second : 4.28,
        third : "Bavaliya",
        fourth: "bule",
        fifth: "purple",
            });
        },3000);

    }
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

export default Statexyz;