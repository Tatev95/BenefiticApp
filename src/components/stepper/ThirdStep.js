import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { DataGrid } from '@mui/x-data-grid';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const variants = [
  {
    id: 3,
    name: 'Voucher',
  },
  {
    id: 1,
    name: 'Top Up',
  },
  {
    id: 2,
    name: 'Game Key',
  },
  {
    id: 12,
    name: 'Other',
  },
  {
    id: 11,
    name: 'Nintendo',
  },
  {
    id: 10,
    name: 'Xbox',
  },
];


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },

];


export default function ThirdStep() {

  const [variantName, setVariantName] = React.useState([{
    id: 11,
    name: 'Nintendo',
  }, {
    id: 10,
    name: 'Xbox'
  },]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const preventDuplicate = value.filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i);
    setVariantName(
      // On autofill we get a the stringified value.
      typeof preventDuplicate === 'string' ? preventDuplicate.split(',') : preventDuplicate
    );
  };


  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ mt: 2, mb: 1 }}>List of Partticipants </Typography>
      <Box sx={{ display: 'flex' }}>
        {" "}
        <Button sx={{ backgroundColor: 'gray', color: 'white', borderRadius: '5px 0 0 5px' }}>
          <SearchIcon />
        </Button>
        <TextField fullWidth label="Search..." id="fullWidth" />
      </Box>
      <Typography sx={{ mt: 2, mb: 1 }}>
        {" "}
        purpose of giving the package
      </Typography>





      {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div> */}
    </Box>
  );
}
