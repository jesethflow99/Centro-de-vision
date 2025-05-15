import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { motion } from "framer-motion";
import Set_theme from "../../components/set_theme/Set_theme";


import "./Header.css";

function TemporaryDrawer({list}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{backgroundColor:"var(--color-bg)", height:"100vh", paddingTop:"2rem", maxHeight:"100vh"}} >
        {list.map((text, index) => (
          <ListItem key={text} disablePadding sx={{color:"var(--color-primary)"}}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>

          </ListItem>
        ))}
        <Button
              variant="contained"
              style={{ backgroundColor: "var(--color-secondary)", marginTop:"1rem", width:"100%" }}
            >
              Agendar Cita
            </Button>
            <Set_theme/>
      </List>
    </Box>
  );

  return (
    <div className="nav_mobile">
      <Button onClick={toggleDrawer(true)} variant="outlined" sx={{color:"var(--color-primary)" ,border:"1px solid var(--color-primary)"}} ><i class="bi bi-list"></i></Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

const Header = ({list=["Servicios","Nosotros","Citas","Contacto"]}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="header" 
    >
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <div className="logo_text">Centro de Visión</div>
        
      </div>

      <div className="nav">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <a variant="text">{item}</a>
            </li>
          ))}
          
          <li>

            <Button
              variant="contained"
              style={{ backgroundColor: "var(--color-secondary)" }}
            >
              Agendar Cita
            </Button>
            
          </li>
          <li><Set_theme /></li>
        </ul>
        <TemporaryDrawer list={list}  />
      </div>
    </motion.div>
  );
};

export default Header;
