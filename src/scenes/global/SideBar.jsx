import { useState } from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from "react-router-dom"; //allows adding links when you click on menu items
import {tokens} from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import  BarChartOutlinedIcon  from "@mui/icons-material/BarChartOutlined";
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import  TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import  MenuOutlinedIcon  from "@mui/icons-material/MenuOutlined";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import { LightModeOutlined } from "@mui/icons-material";

// Menu Item
const Item = ({title, to,icon, selected, setSelected}) => { 
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem 
            active ={selected === title}
            style ={{color: colors.grey[100]}}
            onClick={() => setSelected(title)} 
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    )
}

const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false); //represents whether sidebar is collapsed or not
    const [selected, setSelected] = useState('Dashboard')   //represents which item is selected


    return (
        <Box
            /* Add css to override default css */
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`, 
                },

                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important", 
                },

                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },

                "& .pro-inner-item: hover": {
                    color: "#868dfb !important",
                },

                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape = "square">
                    {/*Logo and Menu Icon*/}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon = {isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style = {{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display= "flex"
                                justifyContent = "space-between"
                                alignItems= "center"
                                ml= "15px"

                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    MENU
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*DSchool Label*/}
                    {!isCollapsed && (
                        <Box mb = "25px">
                            <Box textAlign="center">
                                <Typography
                                    variant = "h2"
                                    color = {colors.grey[100]}
                                    fontWeight = "Bold"
                                    sx = {{m: "10px 0 0 0"}}
                                >
                                    D-School
                                </Typography>
                                <Typography variant = "h5" color = {colors.greenAccent[500]}>
                                    6-Star Rated Building
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    
                    {/* Menu Items */}
                    <Box paddingLeft={!isCollapsed ? undefined : 0}>
                        
                        
                        

                        {!isCollapsed &&(
                            // Hide items when Sidebar is collapsed 
                        <>
                            <Item
                            title = "Overview"
                            to= "/"
                            icon = {<HomeOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                            />

                            <Typography
                            variant = "h6"
                            color= {colors.grey[300]}
                            sx ={{m: "15px 0 5px 20px"}}
                            >
                                Electricity
                            </Typography>

                            <Item
                                title = "Solar Generation"
                                to= "/electricity"
                                icon = {<LightModeOutlined/>}
                                selected = {selected}
                                setSelected = {setSelected}
                            />
                            <Item
                                title = "Energy Consumption"
                                to= "/electricity"
                                icon = {<WbIncandescentOutlinedIcon/>}
                                selected = {selected}
                                setSelected = {setSelected}
                            />

                            <Item
                                title = "Cost Savings"
                                to= "/electricity"
                                icon = {<SavingsOutlinedIcon/>}
                                selected = {selected}
                                setSelected = {setSelected}
                            />
                            <Typography
                                variant = "h6"
                                color= {colors.grey[300]}
                                sx ={{m: "15px 0 5px 20px"}}
                            >
                                Water
                            </Typography>

                            <Item
                                title = "Total Water Usage"
                                to= "/water"
                                icon = {<WaterDropOutlinedIcon/>}
                                selected = {selected}
                                setSelected = {setSelected}
                            /> 
                        </>         
                        )}
                        


                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default SideBar;