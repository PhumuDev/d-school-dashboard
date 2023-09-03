import { useState } from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link} from "react-router-dom"; //allows adding links when you click on menu items
import {tokens} from "../../theme";
import  HomeOutlinedIcon  from "@mui/icons-material/HomeOutlined";
import  PeopleOutlinedIcon  from "@mui/icons-material/PeopleOutlined";
import  ContactsOutlinedIcon  from "@mui/icons-material/ContactsOutlined";
import  ReceiptOutlinedIcon  from "@mui/icons-material/ReceiptOutlined";
import  PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
// import  CalenderTodayOutlinedIcon  from "@mui/icons-material/CalenderTodayOutlined";
import  HelpOutlinedIcon  from "@mui/icons-material/HelpOutlined";
import  BarChartOutlinedIcon  from "@mui/icons-material/BarChartOutlined";
import  PieChartOutlinedIcon  from "@mui/icons-material/PieChartOutlined";
import  TimelineOutlinedIcon  from "@mui/icons-material/TimelineOutlined";
import  MenuOutlinedIcon  from "@mui/icons-material/MenuOutlined";
import  MapOutlinedIcon  from "@mui/icons-material/LightModeOutlined";

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
                        <Item
                            title = "Overview"
                            to= "/"
                            icon = {<HomeOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />

                        <Item
                            title = "Electricity"
                            to= "/electricity"
                            icon = {<BarChartOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        />

                        <Item
                            title = "Water"
                            to= "/water"
                            icon = {<PieChartOutlinedIcon/>}
                            selected = {selected}
                            setSelected = {setSelected}
                        /> 
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default SideBar;