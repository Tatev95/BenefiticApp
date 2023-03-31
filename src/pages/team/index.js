import * as React from "react";
import { useState } from "react";
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
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import BackupIcon from "@mui/icons-material/Backup";
import UsersTable from "../../components/UsersTable";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddUser from "@/components/AddUser";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
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


export default function Team({
  // myData
}) {
  const [age, setAge] = React.useState("");
  const [filter, setFilter] = React.useState([]);

  const [filterDep, setFilterDep] = React.useState([]);
  const [filterPos, setFilterPos] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [openUpload, setOpenUpload] = React.useState(false);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [branchId, setBranchId] = useState(0);
  const [departmentId, setDepartmentId] = useState(0);
  const [positionId, setPositionId] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };


  // console.log({selectedDate: selectedDate && selectedDate.toLocalTimeString()})

  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    companyId: 0,
    phoneCodeId: 0,
    phoneNumber: "",
    email: "",
    departmentId: 0,
    positionId: 0,
    birthDate: "",
  });

  React.useEffect(() => {
    const filter = {
      companyId: 1,
      searchText,
      branchId,
      departmentId,
      positionId,
    };

    axios
      .post(
        `http://ec2-18-119-107-103.us-east-2.compute.amazonaws.com/api/Company/GetUsers`,
        filter
      )
      .then((response) => {
        setData(response.data);
        // console.log("dataaaaaa");
      })
      .catch((error) => {
        console.log(error, "erroorr");
      });
  }, [searchText, branchId, departmentId]);

  React.useEffect(() => {
    axios
      .get(
        "http://ec2-18-119-107-103.us-east-2.compute.amazonaws.com/api/Company/Branches/1"
      )
      .then((res) => {
        setFilter(res.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        "http://ec2-18-119-107-103.us-east-2.compute.amazonaws.com/api/Company/Departments/1"
      )
      .then((res) => {
        setFilterDep(res.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        "http://ec2-18-119-107-103.us-east-2.compute.amazonaws.com/api/Company/Positions/1"
      )
      .then((res) => {
        setFilterPos(res.data);
      });
  }, []);

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
  const addUser = () => {
    const user = {
      firstName: postData.firstName,
      lastName: postData.lastName,
      companyId: 1,
      phoneCodeId: 1,
      phoneNumber: postData.phoneNumber,
      email: postData.email,
      departmentId: postData.departmentId,
      positionId: 1,
      // birthDate: 'postData.birthDate',
      birthDate: '2011-03-29T12:53:32.006Z',
    };
    axios
      .post(
        "http://ec2-18-119-107-103.us-east-2.compute.amazonaws.com/api/Company/AddUser",
        user
      )
      .then((res) => {
        // setPostData(res.data);
        console.log(res);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error, "erroorr");
      });
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Layout>
      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>TEAM</div>
          {/* {myData.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            )
          })} */}
          <div>
            <Button onClick={handleClickOpenUpload}>
              {" "}
              <DriveFolderUploadIcon />
            </Button>
            <Dialog
              open={openUpload}
              onClose={handleCloseUpload}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Upload Members</DialogTitle>
              <DialogContent>
                <TextField
                  id="outlined-basic"
                  label="File title"
                  variant="outlined"
                  sx={{
                    marginRight: "20px",
                    marginBottom: "20px",
                    width: "500px",
                  }}
                />
                <Box
                  sx={{
                    width: "500px",
                    height: "70px",
                    border: "1px dashed",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  Select a file
                  <BackupIcon />
                  <Button
                    variant="outlined"
                    sx={{
                      height: "50px",
                    }}
                  >
                    {" "}
                    Select file
                  </Button>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>

            <Button onClick={handleClickOpenAdd}>
              {" "}
              <AddBoxIcon postData={postData}/>
            </Button>


            <BootstrapDialog
              onClose={handleCloseAdd}
              aria-labelledby="customized-dialog-title"
              open={openAdd}
              PaperProps={{
                sx: {
                  width: '1500px',
                  height: '1083px',
                  textAlign: 'center'
                  
                }
              }}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseAdd}>
              Add Members
              </BootstrapDialogTitle>
              <DialogContent>
                {/* <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros.
                </Typography> */}

                {/* <AddUser/> */}
                <FormControl>
            <TextField 
              id="outlined-basic"
              label="First name"
              variant="outlined"
              onChange={(event) => {
                setPostData({
                  ...postData,
                  firstName: event.target.value,
                });
              }}
              value={postData.firstName}
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
              }}
            /> 
            <TextField
              id="outlined-basic"
              label="Last name"
              variant="outlined"
              onChange={(event) => {
                setPostData({
                  ...postData,
                  lastName: event.target.value,
                });
              }}
              value={postData.lastName}
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={branchId}
              label="Branch"
              onChange={(e) => {
                // setBranchId(e.target.value);
                console.log(e.target.value, 'select e.t.v')
              }}
            >
              {filter.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={departmentId}
              label="DepartmentId"
              onChange={(event) => {
                setPostData({
                  ...postData,
                  departmentId: event.target.value,
                });
                console.log(event.target.value, 'event.target.value')
              }}
            // onChange={(e) => {
            //   setDepartmentId(e.target.value);
            //   console.log(departmentId, "depid");
            // }}
            >
              {filterDep.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              onChange={(event) => {
                setPostData({
                  ...postData,
                  phoneNumber: event.target.value,
                });
              }}
              value={postData.phoneNumber}
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Position"
              variant="outlined"
              onChange={(event) => {
                setPostData({
                  ...postData,
                  position: event.target.value,
                });
              }}
              value={postData.position}
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Mail"
              variant="outlined"
              onChange={(event) => {
                setPostData({ ...postData, email: event.target.value });
              }}
              value={postData.email}
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
              }}
            />

      

            <TextField
              id="outlined-basic"
              label="Date"
              variant="outlined"
              onChange={(event) => {
                setPostData({
                  ...postData,
                  birthDate: event.target.value,
                });
              }}
              value={postData.birthDate}
              sx={{
                marginRight: "20px",
                marginBottom: "20px",
              }}
            /> 
             </FormControl>
                {/* <AddUser/> */}

              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleCloseAdd}>
                  Save changes
                </Button>
              </DialogActions>
            </BootstrapDialog>

         

          </div>
        </div>
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
                    // onChange={(e) => setData(e.target.value)}
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
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
                      Branch
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={branchId}
                      label="Branch"
                      onChange={(e) => {
                        setBranchId(e.target.value);
                      }}
                    >
                      {filter.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Department
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={departmentId}
                      label="DepartmentId"
                      onChange={(e) => {
                        setDepartmentId(e.target.value);
                      }}
                    >
                      {filterDep.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 200 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Position
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={positionId}
                      label="Position"
                      onChange={(e) => {
                        setPositionId(e.target.value);
                      }}
                    >
                      {filterPos.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      <UsersTable
        data={data}
        filter={filter}
        filterDep={filterDep}
        filterPos={filterPos}
      />
    </Layout>
  );
}


// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   console.log(data);
//   console.log('data');
//   return {
//     props: {
//       myData: data,
//     }
//   }
// }