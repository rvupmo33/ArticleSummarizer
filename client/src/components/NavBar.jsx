import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid #AFAFAF",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  padding: theme.spacing(0.25, 0.5),
  paddingLeft: `calc(1em + ${theme.spacing(2)})`,
  width: "100%",
  fontSize: "0.875rem",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.25, 0.5),
    fontSize: "0.875rem",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbar">
        <h3>
          <FontAwesomeIcon icon={faNewspaper} />
          &nbsp; DailyRecap
        </h3>
        <div className="navLinks">
          <a href="/Home">
            <h4>Home</h4>
          </a>
          <a href="/News">
            <h4>News</h4>
          </a>
          <a href="/Team">
            <h4>Team</h4>
          </a>
          <a href="/Contact">
            <h4>Contact</h4>
          </a>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#ff5722" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {/* <a href="#">
            <h4 className="subscriptionBtn">Subscribe</h4>
          </a> */}
        </div>
      </div>
      <hr />
      <hr />
    </div>
  );
};

export default NavBar;
