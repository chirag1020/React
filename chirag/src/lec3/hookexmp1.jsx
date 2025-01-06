import {useState} from "react";
function HookExmp1() {
    const [name] = useState("hello wolrd");
    return <h1>(name)</h1>
}
export default HookExmp1;
