import * as React from "react";
import { useState } from 'react';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SvgIcon from "@mui/material/SvgIcon";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";


import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const pastMonth = new Date(2020, 10, 15);


export default function SecondStep() {

  const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
  };
  const [range, setRange] = useState(defaultSelected);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, 'PPP')}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
        </p>
      );
    }
  }
  // const defaultSelected = {
  //   from: pastMonth,
  //   to: addDays(pastMonth, 4)
  // };
  // const [range, setRange] = useState(defaultSelected);

  // let footer = <p>Please pick the first day.</p>;
  // if (range?.from) {
  //   if (!range.to) {
  //     footer = <p>{format(range.from, 'PPP')}</p>;
  //   } else if (range.to) {
  //     footer = (
  //       <p>
  //         {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
  //       </p>
  //     );
  //   }
  // }

  const css = `
  // .my-selected:not([disabled]) { 
  //   font-weight: bold; 
  //   border: 2px solid currentColor;
  // }
  // .my-selected:hover:not([disabled]) { 
  //   border-color: blue;
  //   color: blue;
  // }
  .my-today { 
    font-family: 'Arial, Helvetica, sans-serif',
    font-weight: bold;
    font-size: 140%; 
    color: red;
  }
`;

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 4.5, mb: 3 }}>Select Budget</Typography>

        <Box>
          <Select
            sx={{ width: 130 }}
            defaultValue=""
            displayEmpty
            renderValue={(value) => {
              console.log(value);
              return (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <SvgIcon color="primary">
                    <CurrencyExchangeIcon />
                  </SvgIcon>
                  {value}
                </Box>
              );
            }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Typography sx={{ mt: 4.5, mb: 3 }}>Select Date</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>

          <Box sx={{ margin: '20px' }}>
            {/* <style>{css}</style> */}

            <DayPicker
              mode="range"
              defaultMonth={pastMonth}
              selected={range}
              footer={footer}
              onSelect={setRange}
              // modifiersClassNames={{
              //   selected: 'my-selected',
              //   today: 'my-today'
              // }}

            />
          </Box>

          <Box>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="monthly" control={<Radio />} label="monthly" />
                <FormControlLabel value="quarterly" control={<Radio />} label="quarterly" />
                <FormControlLabel value="semiannual" control={<Radio />} label="semiannual" />
                <FormControlLabel value="Year" control={<Radio />} label="Year" />
                <FormControlLabel value="Other" control={<Radio checked />} label="Other" />
              </RadioGroup>
            </FormControl>
          </Box>


          <Box>
            <TextField fullWidth label="" id="fullWidth" />
          </Box>

        </Box>


      </Box>
    </>
  );
}
