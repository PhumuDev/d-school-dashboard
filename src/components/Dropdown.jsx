import React from 'react';
import { Typography, Box, useTheme } from "@mui/material";
import {tokens} from "../theme";
import { useState, useEffect } from "react";



const Dropdown = ({setVideoLink, setSlideshowTimer}) => {

    
    const [mode, setMode] = useState("general"); //Control what view is being shown in the settings dropdown
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const initialValues = { videoLink: "", timerInterval:5 };
    const [formValues, setFormValues] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isComplete, setIsComplete] = useState(false); //Stores whether action on Settings has been completed
    
    function DropdownItem({itemName, onClick}) {
        return (
            <a href="#" className="menu-item" style={{color: colors.grey[100]}} onClick={onClick}>
                <Typography 
                variant ="h6"
                color={colors.grey[100]} 
                sx={{mb: "5px"}}
                className="dropdown-label"
                >
                    {itemName}
                </Typography>
            </a>
        );
        }

    //Convert video to correct format
    const convertVideoLink = (originalLink) => {
        // Extract the video ID from the original link
        const videoId = originalLink.split('v=')[1];
      
        // Construct the new video link format
        const newLink = `https://www.youtube.com/embed/${videoId}`;
      
        return newLink;
    };

    //Convert interval to correct format
    const convertTimerInterval = (originalTimeInterval) => {
      
        // Construct the new video link format
        const newTimeInterval = originalTimeInterval*1000;
      
        return newTimeInterval;
    };

    //handle entering of input in forms
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //Handle submition of forms
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmit(true);
    };

    // Change video/timer when submitted
    useEffect(() => {
        if (isSubmit && mode==="edit-video") {
            const newVideoLink = convertVideoLink(formValues.videoLink);
            setVideoLink(newVideoLink);
            setIsComplete(true);
        }
        if (isSubmit && mode==="edit-timer") {
            const newTimerInterval = convertTimerInterval(formValues.timerInterval);
            setSlideshowTimer(newTimerInterval);
            setIsComplete(true);
        }
    });

    return(
        <div className = "dropdown" style={{backgroundColor: colors.primary[400], border:"3px solid"+ colors.primary[500]}}>
            
            {/* Show specific menu based on the DropdownItem clicked */}

            {/* Show general menu */}
            {mode==="general" &&(
                <div>
                    <div className = "middle-container">
                        <Typography 
                            variant ="h4"
                            color={colors.grey[100]}
                            fontWeight ="bold" 
                            sx={{mb: "5px"}}
                            
        
                        >
                            Settings
                        </Typography>
                    </div>
                    <DropdownItem onClick={() => setMode("edit-video")} itemName="Edit Video"></DropdownItem>
                    <DropdownItem onClick={() => setMode("edit-timer")} itemName="Edit Slideshow Timer"> </DropdownItem>
                </div>

            )}

            {/* Show edit video menu */}
            {mode==="edit-video" &&(
                <div>
                    <form onSubmit={handleSubmit}>
                    <div className='middle-container'>
                        <Typography
                            className = "login-heading" 
                            variant ="h5"
                            color={colors.grey[100]}
                            fontWeight ="bold" 
                            sx={{mb: "5px"}}
                        >
                            Edit Video
                        </Typography>
                    </div>
                    <div className="ui divider"></div>
                    <div className = "ui form">
                        <div className = "field">
                            <div className='middle-container'>
                                <div className="feedback-message">Enter the new video link</div>
                                <input
                                    type = "text"
                                    name = "videoLink"
                                    placeholder = "https://youtube.com/example"
                                    value = {formValues.videoLink}
                                    onChange={handleChange}
                                >
                                </input>
                            </div>
                        </div>
                        {isSubmit && isComplete && (
                            <div className="feedback-message">The overview video has been changed!</div>
                        )}
                        <div className = "middle-container">
                            <button 
                            style={{backgroundColor: colors.primary[400], border:"1px solid"+colors.grey[100], color:colors.grey[100]}} 
                            className = "basic-button"
                            >
                                Done
                            </button>
                        </div>
                        
                    </div>

                </form>
                    <div className = "middle-container">
                        <div className = "middle-container">
                            <button 
                            style={{backgroundColor: colors.primary[400], border:"1px solid"+colors.grey[100], color:colors.grey[100]}} 
                            className = "basic-button"
                            onClick={() => {setMode("general"); setIsSubmit(false);}}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>

            )}

            {/* Show edit slideshow timer menu */}
            {mode==="edit-timer" &&(
                <div>
                    <form onSubmit={handleSubmit}>
                    <div className='middle-container'>
                        <Typography
                            className = "login-heading" 
                            variant ="h5"
                            color={colors.grey[100]}
                            fontWeight ="bold" 
                            sx={{mb: "5px"}}
                        >
                            Edit Slideshow Timer
                        </Typography>
                    </div>
                    <div className="ui divider"></div>
                    <div className = "ui form">
                        <div className = "field">
                            <div className='middle-container'>
                                <div className="feedback-message">Enter the new timer interval in seconds</div>
                                <input
                                    type = "number"
                                    name = "timerInterval"
                                    placeholder = "5"
                                    value = {formValues.timerInterval}
                                    onChange={handleChange}
                                >
                                </input>
                            </div>
                        </div>
                        {isSubmit && isComplete && (
                            <div className="feedback-message">The slideshow timer has been changed!</div>
                        )}
                        <div className = "middle-container">
                            <button 
                            style={{backgroundColor: colors.primary[400], border:"1px solid"+colors.grey[100], color:colors.grey[100]}} 
                            className = "basic-button"
                            >
                                Done
                            </button>
                        </div>
                        
                    </div>

                </form>
                    <div className = "middle-container">
                        <div className = "middle-container">
                            <button 
                            style={{backgroundColor: colors.primary[400], border:"1px solid"+colors.grey[100], color:colors.grey[100]}} 
                            className = "basic-button"
                            onClick={() => {setMode("general"); setIsSubmit(false);}}
                            >
                                Back
                            </button>
                        </div>
                    </div>
                </div>

            )}
            
            
        </div>
    )
}

export default Dropdown;