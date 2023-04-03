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

function createData(companyName, category) {
    return { companyName, category };
}

const rows = [
    createData('Amazon', 'Shop'),
    createData('Amazon', 'Shop'),
    createData('Amazon', 'Shop'),
    createData('Amazon', 'Shop'),
    createData('Amazon', 'Shop'),



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


export default function ForthStep() {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [open, setOpen] = useState(true);
    const [openSport, setopenSport] = useState(true);
    const [openFood, setopenFood] = useState(true);
    const [openHospitality, setopenHospitality] = useState(true);
    const [openEducation, setopenEducation] = useState(true);
    const [openLogistics, setopenLogistics] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickSport = () => {
        setopenSport(!openSport);
    };

    const handleClickFood = () => {
        setopenFood(!openFood);
    };

    const handleClickHospitality = () => {
        setopenHospitality(!openHospitality);
    };

    const handleClickEducation = () => {
        setopenEducation(!openEducation);
    };

    const handleClickLogistics = () => {
        setopenLogistics(!openLogistics);
    };


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ mt: 2, mb: 1 }}>List of Services </Typography>
            <Box sx={{ display: "flex" }}>
                <Typography sx={{ ml: "42px", mr: "195px" }}>Services</Typography>{" "}
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
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleClick}>
                            <Checkbox />
                            <ListItemText primary="Category" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>

                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton onClick={handleClickSport}>
                                            <Checkbox />
                                            <ListItemText primary="Sport" />
                                            {openSport ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openSport} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>

                                                    <Checkbox />
                                                    <Typography>
                                                        Fitnes XXX
                                                    </Typography>
                                                </ListItemButton>
                                                <ListItemButton sx={{ pl: 4 }}>

                                                    <Checkbox />
                                                    <Typography>
                                                        FlexFit
                                                    </Typography>
                                                </ListItemButton>
                                                <ListItemButton sx={{ pl: 4 }}>

                                                    <Checkbox />
                                                    <Typography>
                                                        Fit Line Sport
                                                    </Typography>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </ListItemButton>
                            </List>

                            {/* category */}
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton onClick={handleClickFood}>
                                            <Checkbox />
                                            <ListItemText primary="Food" />
                                            {openFood ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openFood} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <Checkbox />
                                                    <Typography>
                                                        KFC
                                                    </Typography>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </ListItemButton>
                            </List>
                            {/* category */}

                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton onClick={handleClickHospitality}>
                                            <Checkbox />
                                            <ListItemText primary="Hospitality" />
                                            {openHospitality ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openHospitality} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <Checkbox />
                                                    <Typography>
                                                        Gyumri Bk
                                                    </Typography>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </ListItemButton>
                            </List>


                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton onClick={handleClickEducation}>
                                            <Checkbox />
                                            <ListItemText primary="Education" />
                                            {openEducation ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openEducation} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <Checkbox />
                                                    <Typography>
                                                        GITC
                                                    </Typography>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </ListItemButton>
                            </List>

                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <List
                                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton onClick={handleClickLogistics}>
                                            <Checkbox />
                                            <ListItemText primary="Logistics" />
                                            {openLogistics ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openLogistics} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton sx={{ pl: 4 }}>
                                                    <Checkbox />
                                                    <Typography>
                                                        Gyumri Bk
                                                    </Typography>
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    </List>
                                </ListItemButton>
                            </List>

                        </Collapse>
                    </List>
                </Box>
                <Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 774, }} aria-label="custom pagination table">
                            <TableBody sx={{ width: 774, maxHeight: 688 }}>
                            <TableRow >
                                        <TableCell component="th" scope="row">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell align="left">
                                            Company Name
                                        </TableCell>
                                        <TableCell align="left">
                                            Category
                                        </TableCell>
                                    </TableRow>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (<>
                                   
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.companyName}
                                        </TableCell>
                                        <TableCell align="left">
                                            {row.category}
                                        </TableCell>
                                    </TableRow>
                                </>

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
                </Box>


            </Box>
        </Box>
    );
}
