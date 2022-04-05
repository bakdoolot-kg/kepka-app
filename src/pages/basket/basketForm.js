import React, {useState} from "react";
import {Box, TextField, Typography} from "@mui/material";

const BasketForm = () => {
  const [name, setName] = useState()
  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <Box
      sx={{
        maxWidth: {md: '30%'}
      }}
      component='form'
      noValidate
    >
      <Typography
        className='form-info'
        sx={{
          mt: {md: "50px"},
          mb: {md: "25px"},
          fontWeight: "700"
        }}
      >
        Ваша информация
      </Typography>
      <TextField
        id='name'
        label='Имя'
        value={name}
        onChange={handleChange}
        fullWidth
      />
      <br/>
      <TextField
        sx={{mt: "33px"}}
        id='phone'
        label='Номер'
        placeholder='+996 777 888 999'
        fullWidth
      />
    </Box>
  )
}

export default BasketForm