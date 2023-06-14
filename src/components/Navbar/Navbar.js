import React from "react";
import { AppBar, Typography, Avatar, Toolbar, Button } from "@mui/material";
import memories from "../../images/memories.png";
import { Link } from "react-router-dom";

function Navbar() {
  const user = null;
  return (
    <AppBar
      sx={{
        borderRadius: 15,
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      position="static"
      color="inherit"
    >
      <div sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          component={Link}
          to="/"
          sx={{ color: "rgba(0,183,255, 1)" }}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          style={{ marginLeft: "15px" }}
          src={memories}
          alt="memories"
          height="60"
        />
      </div>

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "400px",
        }}
      >
        {user ? (
          <din
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "400px",
            }}
          >
            <Avatar
              sx={{
                color: "deepPurple",
                backgroundColor: "deepPurple",
              }}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography
              sx={{ display: "flex", alignItems: "center" }}
              variant="h6"
            >
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </din>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
