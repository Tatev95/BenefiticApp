import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function FirstStep(){
  

    return(
        <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 2, mb: 1 }}>
          Name of the packages{" "}
        </Typography>
        <TextField
          fullWidth
          label="Insert your package title"
          id="fullWidth"
        />
        <Typography sx={{ mt: 2, mb: 1 }}>
          {" "}
          purpose of giving the package
        </Typography>
        <TextField fullWidth label="Insert your goal" id="fullWidth" />
      </Box>
    )
}
