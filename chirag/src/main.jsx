import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StateABC from "./lec2/statemgmt1";
// import StateXYZ from "./lec2/statemgmt2";
//import StateMerge from "./lec2/statemgmt3";
//import MyCustButton from "./lec3/purefunc1";
//import HookExmp1  from "./lec3/hookexmp1";
//import StateExample from "./lec4/hookexmp";
//import StateExample2 from "./lec4/hookexmp2";
//import StateExample3 from "./lec4/hookexmp3";
import Calculator from "./lec5/que1";
//import EmailValidator from "./lec5/que2";
//import TextToggler from "./lec5/que3";
//import CharacterCounter from "./lec5/que4";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <StateMerge/> */}
   { /*<MyCustButton/>
    <br/>
    <MyCustButton var1={true}/>
    <br/>
    <MyCustButton var2={"6CEB"}/>
    <br/>
    <MyCustButton var1={true} var2={"B.Tech"}/>
    <br/> */}
    {/* <HookExmp1/> */}
    {/* <StateExample /> */}
    {/* <StateExample2/> */}
    {/* <StateExample3/> */}

     <Calculator/> 
    

      {/* <EmailValidator /> */}
      {/* <TextToggler /> */}
      {/* <CharacterCounter/> */}
    

  </StrictMode>
);