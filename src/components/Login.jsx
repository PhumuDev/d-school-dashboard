import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";
import { useState, useEffect } from 'react';

const Login = ({onToggleAdmin, isAdmin}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    const handleLogout = (e) => {
        onToggleAdmin();
    };

    // Switch admin mode on when login details are correct
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            onToggleAdmin();
            console.log(formValues);
        }
    }, [formErrors]);

    // Validate login details
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
        errors.username = "Username is required.";
        }else if (values.username !=="Wanda") {
            errors.username = "Username does not exist.";
        }

        if (!values.password) {
        errors.password = "Password is required.";
        } else if (values.password !=="1234") {
        errors.password = "Password is incorrect.";
        }
        return errors;
    };

    return(

        <div class = "login" style={{backgroundColor: colors.primary[400], border:"3px solid"+ colors.primary[500]}}>
            {!isAdmin &&(

                <form onSubmit={handleSubmit}>
                    <div className='middle-container'>
                        <Typography
                            className = "login-heading" 
                            variant ="h4"
                            color={colors.grey[100]}
                            fontWeight ="bold" 
                            sx={{mb: "5px"}}
                        >
                            Login
                        </Typography>
                    </div>
                    <div className="ui divider"></div>
                    <div className = "ui form">
                        <div className = "field">
                        <Typography
                            variant ="h6"
                            color={colors.grey[100]}
                            fontWeight ="bold" 
                            sx={{mb: "5px"}}
                        >
                            Username
                        </Typography>
                            <input
                                type = "text"
                                name = "username"
                                placeholder = "Username"
                                value = {formValues.username}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <p className = "error-message">{formErrors.username}</p>
                        <div className = "field">
                        <Typography
                            variant ="h6"
                            color={colors.grey[100]}
                            fontWeight ="bold" 
                            sx={{mb: "5px"}}
                        >
                            Password
                        </Typography>
                            <input
                                type = "password"
                                name = "password"
                                placeholder = "Password"
                                value = {formValues.password}
                                onChange={handleChange}
                            >
                            </input>
                        </div>
                        <p className = "error-message">{formErrors.password}</p>

                        <div className = "middle-container">
                            <button 
                            style={{backgroundColor: colors.primary[400], border:"1px solid"+colors.grey[100], color:colors.grey[100]}} 
                            className = "basic-button"
                            >
                                Login
                            </button>
                        </div>
                    </div>

                </form>
            )}
            {isAdmin &&(
                <form onSubmit={handleLogout}>
                    <div className = "middle-container">
                        <Typography
                        className = "login-heading" 
                        variant ="h4"
                        color={colors.grey[100]}
                        fontWeight ="bold" 
                        sx={{mb: "5px"}}
                        >
                            Hi, Admin!
                        </Typography>
                        <div className="feedback-message">You are logged in.</div>
                        <button 
                        style={{backgroundColor: colors.primary[400], border:"1px solid"+colors.grey[100], color:colors.grey[100]}} 
                        className = "logout-button"
                        // onClick={onToggleAdmin()}
                        >
                            Log Out
                        </button>
                    </div>
                </form>
                
            )}
            
        </div>
    )
}

export default Login;