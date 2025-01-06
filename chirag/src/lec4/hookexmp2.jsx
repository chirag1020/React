import { useState} from "react";

function StateExample2(){
    const[name,setName] = useState("RKU");
    const[age,SetName] = useState("AGE")
    return (
    <div>
        <h1>{name}</h1>
        <input
        type ="text"
        value ={name}
        onChange ={(e) => setName(e.target.value)}
        />
         <h2>{age}</h2>
        <input
        type = "number"
        value =  "21"
        onChange ={(e) => setAge(e.target.value)}
        />
        </div>
        );
}

export default StateExample2;
