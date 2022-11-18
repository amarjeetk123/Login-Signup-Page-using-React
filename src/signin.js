import React from 'react'
import "./App.css"
import {TextField, Button, Divider} from "@material-ui/core"
import {Link} from "react-router-dom"



// import FormControlLabel from "@material-ui/core/FormControlLabel"
// import Checkbox from "@material-ui/core/Checkbox"
// import CheckboxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
// import CheckboxIcon from "@material-ui/icons/CheckBox"
import PersonAddIcon from "@material-ui/icons/PersonAdd"

function Signup() {
    return (
        <div>
            <div className='icon'>
                <div className='icon_class'>
                    <PersonAddIcon color="primary"  className='icon_color'  />
                </div>
                <div className='text'> Sign Up </div>
            </div>

            <div className='row m-2'>
                <div className='col-6  p-2'>
                    <TextField id="firstname" type="text" variant="outlined"  label="Enter First Name"/>
                </div>
                <div className='col-6  p-2'>
                <TextField id="lastname" type="text" variant="outlined"  label="Enter First Name" />
                </div>
            </div>

            <div className='row m-2 '>
            <TextField id="email" className='p-2' type="email" variant="outlined"  label="Enter Email"  />
            <TextField id="password" className='p-2' variant="outlined" type="password"  label="Enter Password"  />
            <Button variant='contained'  color='primary' >Create Account</Button>
            </div>

            <Divider variant='middle' color="primary" ></Divider>

            <p className='text-cetner'>
               <Link to="/login" className='text-black-50' >
                  
                    <h5> Already have an account ?</h5>
                </Link>
            </p>
        </div>
    )
}
export default Signup;
