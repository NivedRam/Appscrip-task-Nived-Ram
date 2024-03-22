import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import "./navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { FormControl, Grid, InputLabel, Select } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const listItemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  color: "black",
  marginLeft: "40px",
  fontWeight: 700,
  fontSize: "20px",
};

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ backgroundColor: "black", height: "100%", py: "4px" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
          justifyContent="center"
          height="100%"
        >
          {!isMobile && (
            <Grid className="navbar-strip" item xs={4}>
              <Typography align="center" color="#e64a69">
                <span style={{ marginInline: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1" />
                      <rect width="7" height="5" x="14" y="3" rx="1" />
                      <rect width="7" height="9" x="14" y="12" rx="1" />
                      <rect width="7" height="5" x="3" y="16" rx="1" />
                    </g>
                  </svg>
                </span>
                Lorem Ipsum dolor
              </Typography>
            </Grid>
          )}
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
            item
            xs={!isMobile?4:12}
          >
            <Typography  color="#e64a69">
              <span style={{ marginInline: "20px" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="7" height="9" x="3" y="3" rx="1" />
                    <rect width="7" height="5" x="14" y="3" rx="1" />
                    <rect width="7" height="9" x="14" y="12" rx="1" />
                    <rect width="7" height="5" x="3" y="16" rx="1" />
                  </g>
                </svg>
              </span>
              Lorem Ipsum dolor
            </Typography>
          </Grid>
          {!isMobile && (
            <Grid className="navbar-strip" item xs={4}>
              <Typography align="center" color="#e64a69">
                <span style={{ marginInline: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect width="7" height="9" x="3" y="3" rx="1" />
                      <rect width="7" height="5" x="14" y="3" rx="1" />
                      <rect width="7" height="9" x="14" y="12" rx="1" />
                      <rect width="7" height="5" x="3" y="16" rx="1" />
                    </g>
                  </svg>
                </span>
                Lorem Ipsum dolor
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: "25px" }}>
        <AppBar
          sx={{ backgroundColor: "white", boxShadow: "none" }}
          position="static"
        >
          <Toolbar>
            <Grid container>
              <Grid md={4} item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignContent: "center",
                    height: "100%",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingInline: "20px",
                  }}
                >
                  <img
                    src="/icons/Logo.svg"
                    style={{ height: "40px", marginLeft: "30px" }}
                    alt="Main Logo"
                  />
                </Box>
              </Grid>
              <Grid md={4} item>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "black", fontWeight: 800, fontSize: "38px" }}
                    variant="h4"
                  >
                    LOGO
                  </Typography>
                </Box>
              </Grid>
              <Grid md={4} item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    style={{ height: "100%", padding: "10px" }}
                    src="/icons/heart.svg"
                    alt="Favourite"
                  />
                  <img
                    style={{ height: "100%", padding: "10px" }}
                    src="/icons/search-normal.svg"
                    alt="Search"
                  />
                  <img
                    style={{ height: "100%", padding: "10px" }}
                    src="/icons/shopping-bag.svg"
                    alt="Cart"
                  />
                  <img
                    src="/icons/profile.svg"
                    alt="Profile"
                    style={{ height: "100%", padding: "10px" }}
                  />
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
                    <InputLabel
                      id="demo-simple-select-standard-label"
                      sx={{ fontWeight: 700, color: "black" }}
                    >
                      ENG
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      //   value={age}
                      //   onChange={handleChange}
                      label="ENG"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>

     {!isMobile&& <Box
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <ul
          style={{
            listStyleType: "none",
            padding: 15,
            display: "flex",
            marginBottom: "20x",
            justifyContent: "center",
            borderBottom: "1px solid #d8d4d4",
            marginTop: "40px",
            cursor: "pointer",
          }}
        >
          <li style={listItemStyle}>
            <a href="/">SHOP</a>
          </li>
          <li style={listItemStyle}>
            {" "}
            <a href="/">SKILLS</a>
          </li>
          <li style={listItemStyle}>
            {" "}
            <a href="/">STORIES</a>
          </li>
          <li style={listItemStyle}>
            {" "}
            <a href="/">ABOUT</a>
          </li>
          <li style={listItemStyle}>
            {" "}
            <a href="/">CONTACT US</a>
          </li>
        </ul>
      </Box>}

      {renderMobileMenu}
      {renderMenu}
    </>
  );
}
