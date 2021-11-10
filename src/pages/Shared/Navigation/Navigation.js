import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            textAlign="left"
                            fontWeight="bold"
                        >
                            Florist <span style={{ color: "black" }}>Shop</span>
                        </Typography>
                        <Button color="inherit" style={{ fontSize: "20px" }}>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Navigation;
