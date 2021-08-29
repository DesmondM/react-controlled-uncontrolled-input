
import './App.css';
import ControlledInputs from './ControlledInputs';
import Form from './Form';
import SignupForm from './SignupForm';
import SignupFormSuccess from './SignupFormSuccess';
import SimpleBtn from './SimpleBtn';
import { ToggleBtn } from './ToggleBtn';
import UncontrolledInputs from './UncontrolledInputs';

function App() {
  return (
    <>
      <UncontrolledInputs/> 
       <ControlledInputs/> 
      <SignupFormSuccess/>
       <SignupForm/> 
  {/*     <Form></Form> */ }
<SimpleBtn/>
<ToggleBtn/>
    </>
  );
}

export default App;
