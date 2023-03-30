import * as React from "react";
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

export default function SecondStep() {
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
        <Typography sx={{ mt: 4.5, mb: 3 }}>Select Budget</Typography>

        
      </Box>
    </>
  );
}
