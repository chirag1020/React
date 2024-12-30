import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import StateABC from './lec2/statemgmt1' 
import Statexyz from './lec2/statemgmt2';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateABC/>
    <Statexyz/>
  </StrictMode>,
);
