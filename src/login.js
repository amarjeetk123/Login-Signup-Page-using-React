import React from 'react'
import "./App.css"

import { TextField, Button, Divider } from "@material-ui/core"
import { Link } from "react-router-dom"

import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import CheckboxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import CheckboxIcon from "@material-ui/icons/CheckBox"
// import PersonAdd from "@material-ui/icons/PersonAdd"
import PersonIcon from "@material-ui/icons/Person"

// export default function Login() {
//   return (
//     <div>login</div>
//   )
// }

const Login = () => {
    return (
        <div>
            <div className='icon'>
                <div className='icon_class'>
                    <PersonIcon color="primary" className='icon_color' />
                </div>
                <div className='text'> Log in </div>
            </div>

            <div className='row m-2'>
                <TextField id="email" className='p-2' type="email" variant="outlined" label="Enter Email" />
                <TextField id="password" className='p-2' variant="outlined" type="password" label="Enter Password" />

                <FormControlLabel
                    control={<Checkbox
                        icon={<CheckboxOutlineBlankIcon fontSize='small' />}
                        checkedIcon={<CheckboxIcon fontSize='small' />}
                        name="checked1"
                    />}
                    label = "Remeber me."
                 />

               <Button variant='contained'  color='primary'>Log in</Button>
            </div>

            <Divider variant='middle' ></Divider>

            <p className='text-cetner'>
                <Link to="\signin" className='text-black-50'>
                    
                    <h5>Create Account</h5>
                </Link>
            </p>
        </div>
    )
}
export default Login;
