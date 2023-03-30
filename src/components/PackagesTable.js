import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

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
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
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

function createUser(
  first_name,
  last_name,
  branch,
  bepartment,
  position,
  email,
  phone,
  birth_day
) {
  return {
    first_name,
    last_name,
    branch,
    bepartment,
    position,
    email,
    phone,
    birth_day,
  };
}

const rows = [
  createUser(
    "Ann",
    "Smith",
    "first branch",
    "first dep",
    "dev",
    "ann@gmail.com",
    777,
    "12.01.1994"
  ),
  createUser(
    "Joe",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  createUser(
    "AAA",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  createUser(
    "SSS",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  createUser(
    "HHH",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  createUser(
    "vvv",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  createUser(
    "xxx",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  createUser(
    "dacds",
    "Brown",
    "sec branch",
    "sec dep",
    "pm",
    "joe@gmail.com",
    123,
    "07.04.1999"
  ),
  
];

export default function PackageTable() {
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableBody>
          <TableRow sx={{fontWeight: 'bold'}}>
          <TableCell component="th" scope="row">
                First Name
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Last Name
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Branch
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Department
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Position
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Email
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Phone
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                Brth day
              </TableCell>
          </TableRow>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.first_name}>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.last_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.branch}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.bepartment}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.position}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.phone}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.birth_day}
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
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
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
  );
}

