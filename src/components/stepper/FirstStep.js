import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function FirstStep() {
  const [title, setTitle] = useState('')
  const [purpose, setPurpose] = useState('')

  const handleSubmit = async () => {
    const response = await fetch('http://ec2-18-119-107-103.us-east-2.compute.amazonaws.com/api/Package/CreateFirstStep',
    {
      method: 'POST',
      body: JSON.stringify({
        "name": title,
        "purpose": purpose
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ mt: 2, mb: 1 }}>
        Name of the packages{" "}
      </Typography>
      <TextField
        fullWidth
        label="Insert your package title"
        id="fullWidth"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Typography sx={{ mt: 2, mb: 1 }}>
        {" "}
        purpose of giving the package
      </Typography>
      <TextField
        fullWidth
        label="Insert your goal"
        id="fullWidth"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}

      />
      <button onClick={handleSubmit}>submit</button>
    </Box>
  )
}
