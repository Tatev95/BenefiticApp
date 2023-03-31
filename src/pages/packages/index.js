import * as React from "react";
import Layout from "@/components/Layout";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import BackupIcon from "@mui/icons-material/Backup";
import UsersTable from "../../components/UsersTable";
import PackageDialog from "@/components/PackageDIalog";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PackageTable from "@/components/PackagesTable";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import PropTypes from 'prop-types';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: '#FAFAFA',
  color: "gray",
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "25ch",
      // "&:focus": {
      //   width: "20ch",
      // },
    },
  },
}));
const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#40a9ff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1890ff',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#635ee7',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);



export default function Packages() {
  const [age, setAge] = React.useState("");
  const [filter, setFilter] = React.useState("");
  // const [open, setOpen] = React.useState(false);
  // const [filteredList, setFilteredList] = React.useState(rows);
  const [value, setValue] = React.useState(0);

  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };


  const [openUpload, setOpenUpload] = React.useState(false);

  const handleClickOpenUpload = () => {
    setOpenUpload(true);
  };

  const handleCloseUpload = () => {
    setOpenUpload(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleFilterChange = (filter) => {
    console.log("aaaaaaaaa");

    setFilter(filter);
    console.log(filter, "filter");
  };

  function handleInputChange(event) {
    // alert('hi')
    // console.log(event.target.value);
    console.log(event.target.value);
  }
  

  return (
    <Layout>
      <Box>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>Packages</div>
          <div>
            <Button onClick={handleClickOpen}>
              {" "}
              <AddBoxIcon />
            </Button>


            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              PaperProps={{
                sx: {
                  width: '1500px',
                  height: '1083px',
                  maxWidth: "1106px"
                  
                }
              }}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                Create Benefit Package
              </BootstrapDialogTitle>
              <DialogContent
              // sx={{width: "1500px"}}
              //  dividers
              >

                <PackageDialog />

              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose}>
                  Save changes
                </Button>
              </DialogActions>
            </BootstrapDialog>

            {/* <Dialog */}

            {/* sx={{ width: '1500px', margin: '0 auto' }} */}
            {/* open={open} */}
            {/* onClose={handleClose} */}
            {/* aria-labelledby="alert-dialog-title" */}
            {/* aria-describedby="alert-dialog-description" */}
            {/* > */}
            {/* <DialogTitle id="alert-dialog-title"> */}
            {/* Create Benefit Package */}
            {/* </DialogTitle> */}

            {/* <PackageDialog /> */}
            {/* </Dialog> */}



          </div>
        </div>
      </Box>

      <Box sx={{ width: '296px' }}>
        <Box sx={{ bgcolor: '#fff', width: '250px' }}>
          <AntTabs value={value} onChange={handleChangeTab} aria-label="ant example" sx={{ width: '240px' }}>
            <AntTab label="Packages" />
            <AntTab label="Draft Packages" />
          </AntTabs>
          <Box sx={{ p: 3 }} />
        </Box>

      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#FFFFFF", boxShadow: "none" }}>
          <Toolbar>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search Here…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "700px",
                }}
              >
                <Box component="div" sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Employees
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Partner
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 200 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Box>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <PackageTable />
    </Layout>
  );
}
