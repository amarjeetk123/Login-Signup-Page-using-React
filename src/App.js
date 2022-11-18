
import Login from './login';
import Signup from './signin';

// import {Switch , Route} from "react-router-dom"
import { Container } from '@material-ui/core';

function App() {
  return (
    <>

    <Container maxWidth="sm"  className='main'>
    <div className='app'>
      <switch>
      <Signup />
     <Login /> 
      </switch>
    </div> 
    </Container>    
    </>
  );
}

export default App;
