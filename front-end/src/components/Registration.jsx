import React, { useState, useEffect } from 'react'
import './Registration.css';

import {Button, Select, MenuItem, InputLabel, TextField, FormControl, InputAdornment, IconButton, InputProps} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

//Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

const Registration = () => {
    
    const [fname, setFname] = useState('');
    const [fnameFocus, setFnameFocus] = useState(false);

	const [lname, setLname] = useState('');
    const [lnameFocus, setLnameFocus] = useState(false);
    
    const [email, setEmail] = useState('');
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

    const [selectRole, setSelectRole] = useState('');
    const [selectRoleFocus, setSelectRoleFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
	const [success, setSuccess] = useState(false);

    const [eye, setEye] = useState(false);

    const handleEye = () => {
        setEye(!eye);
    }

    const validateEmail = () => {
        if (!emailFocus) return '';
      
        if (email === '') return 'Email is required';
      
        if (!EMAIL_REGEX.test(email)) return 'Invalid email format';
      
        return '';
      };
      
    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
    }, [pwd]);

    return (
        <div id='container'>
            <form id='sign-in-card' noValidate autoComplete='off'>
                <div className='column left'>
                    <div>
                        <img id='yc-logo' src='https://ww1.freelogovectors.net/wp-content/uploads/2023/03/revature-logo-freelogovectors.net_.png?lossy=1&w=2560&ssl=1'/>
                        <h1>Sign up for easy expense submission with Revature's ERS</h1>
                    </div>
                </div>

                {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

                <div className='column right'>
                    <div id='first-and-last'>
                        <div className='input-group'>
                            <TextField 
                                label='First Name' 
                                variant='standard' 
                                type='text' 
                                value={fname} 
                                onChange={(e) => setFname(e.target.value)} 
                                fullWidth
                            />
                        </div>
                        <div className='input-group'>
                            <TextField 
                                label='Last Name' 
                                variant='standard' 
                                type='text' 
                                value={lname} 
                                onChange={(e) => setLname(e.target.value)} 
                                fullWidth 
                            />
                        </div>
                    </div>

                    <div className='required input-group'>
                        <TextField 
                            label='Email' 
                            variant='standard' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            onFocus={() => setEmailFocus(true)} 
                            onBlur={() => setEmailFocus(false)} 
                            helperText={validateEmail()} 
                            error={Boolean(validateEmail())} required />
                    </div>
                    
                    <div className='required input-group'>
                        <TextField 
                            label='Password' 
                            variant='standard' 
                            type={eye?'text':'password'}
                            value={pwd}
                            onChange={(e) => setPwd(e.target.value)}
                            InputProps={{
                                endAdornment: 
                                    <InputAdornment position='end'>
                                        <IconButton  onClick={handleEye}>
                                            {eye ? <VisibilityIcon fontSize='small' /> : <VisibilityOffIcon fontSize='small' />}
                                        </IconButton> 
                                    </InputAdornment>
                            }} required />
                    </div>

                    <div className='required input-group'> 
                        <FormControl variant='standard' required fullWidth>
                            <InputLabel id="select-label">Select Role</InputLabel>
                            <Select labelId="select-label" id="demo-simple-select" label="Select Role">
                                <MenuItem value={10}>Employee</MenuItem>
                                <MenuItem value={20}>Manager</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                        
                    <div className='actions'>
                        <Button 
                            className='button'
                            type='submit' 
                            variant='contained'> 
                                Sign Up
                        </Button>
                    </div>
                </div>
            </form>

            <div id='account-links'>
                <div>
                    Already have an account?
                    <Button className='MuiTypography-root MuiLink-root MuiLink-underlineHover MuiLink-button MuiTypography-colorPrimary' >Log in.</Button>
                </div>
            </div>
        </div>
    )
}

export default Registration