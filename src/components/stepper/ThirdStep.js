import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

import { DataGrid } from "@mui/x-data-grid";

import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(firstName, lastName, branch, department, phone) {
  return { firstName, lastName, branch, department, phone };
}

const rows = [
  createData('Adam', 'Smith', 'Branch 1', 'Department 1', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 2', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 3', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),
  createData('Adam', 'Smith', 'Branch 1', 'Department 4', "093 000 000"),

]

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
    name: "Voucher",
  },
  {
    id: 1,
    name: "Top Up",
  },
  {
    id: 2,
    name: "Game Key",
  },
  {
    id: 12,
    name: "Other",
  },
  {
    id: 11,
    name: "Nintendo",
  },
  {
    id: 10,
    name: "Xbox",
  },
];



export default function ThirdStep() {
  
  const [open, setOpen] = useState(true);
  const [openTwo, setOpenTwo] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (event) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};


  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickTwo = () => {
    setOpenTwo(!openTwo);
  };

  const [variantName, setVariantName] = useState([
    {
      id: 11,
      name: "Nintendo",
    },
    {
      id: 10,
      name: "Xbox",
    },
  ]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const preventDuplicate = value.filter(
      (v, i, a) => a.findIndex((t) => t.id === v.id) === i
    );
    setVariantName(
      // On autofill we get a the stringified value.
      typeof preventDuplicate === "string"
        ? preventDuplicate.split(",")
        : preventDuplicate
    );
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ mt: 2, mb: 1 }}>List of Partticipants </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ ml: "42px", mr: "195px" }}>Company</Typography>{" "}
        <Button
          sx={{
            backgroundColor: "gray",
            color: "white",
            borderRadius: "5px 0 0 5px",
          }}
        >
          <SearchIcon />
        </Button>
        <TextField fullWidth label="Search..." id="fullWidth" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <ListItemIcon><Checkbox /></ListItemIcon>
              <ListItemText primary="Branch 1" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Box width="250px" sx={{ height: '250px', overflowY: 'scroll' }}>
                    <MenuItem><Checkbox />Department 1</MenuItem>
                    <MenuItem><Checkbox />Department 2</MenuItem>
                    <MenuItem><Checkbox />Department 3</MenuItem>
                    <MenuItem><Checkbox />Department 4</MenuItem>
                    <MenuItem><Checkbox />Department 5</MenuItem>
                    <MenuItem><Checkbox />Department 6</MenuItem>
                    <MenuItem><Checkbox />Department 7</MenuItem>
                    <MenuItem><Checkbox />Department 8</MenuItem>
                  </Box>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClickTwo}>
              <ListItemIcon><Checkbox /></ListItemIcon>
              <ListItemText primary="Branch 2" />
              {openTwo ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openTwo} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Box width="250px" sx={{ height: '250px', overflowY: 'scroll' }}>
                    <MenuItem><Checkbox />Department 1</MenuItem>
                    <MenuItem><Checkbox />Department 2</MenuItem>
                    <MenuItem><Checkbox />Department 3</MenuItem>
                    <MenuItem><Checkbox />Department 4</MenuItem>
                    <MenuItem><Checkbox />Department 5</MenuItem>
                    <MenuItem><Checkbox />Department 6</MenuItem>
                    <MenuItem><Checkbox />Department 7</MenuItem>
                    <MenuItem><Checkbox />Department 8</MenuItem>
                  </Box>
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
        <Box>
          <div style={{ height: 575, width: 773, textAlign: 'left' }}>
            <Typography>Total 8</Typography>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 773, height: 575 }} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                <Checkbox/>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.lastName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.branch}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.department}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.phone}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
          </div>
        </Box>
      </Box>
   </Box>
  );
}
