import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";




export default function AddUser({postData}) {

  return (
    <Box sx={{ width: '100%',
    //  padding: '38px'
      }}>




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

    </Box>
  );
}