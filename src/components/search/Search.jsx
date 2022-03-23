import React from "react";
import { TextField, FormControl, Box, InputAdornment } from "@mui/material";
import { LoupeIcon } from "../../assets";

const Search = (props) => {
  const { onChange, value, xs, sm } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: `${xs}`, sm: `${sm}` },
        justifyContent: { xs: "center", md: "end", lg: "end" },
        width: { sm: "20%", md: "168px", lg: "168px", xl: "270px" },
        mx: { xs: "22px" },
      }}
    >
      <FormControl>
        <TextField
          sx={{ borderRadius: "15px" }}
          size="small"
          variant="outlined"
          value={value}
          onChange={onChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LoupeIcon fill="black" width={17} height={17} />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Box>
  );
};

export default Search;
