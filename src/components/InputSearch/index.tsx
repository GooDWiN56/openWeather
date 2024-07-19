import * as React from "react";
import { TextField, InputAdornment, useTheme } from "@mui/material";
import { IconMapPin } from "@tabler/icons-react";

interface IInputSearch {
  value: string;
  setValue: (prop: string) => void;
  pressKeyFunction: (event: any) => void;
}

const InputSearch = ({ value, setValue, pressKeyFunction }: IInputSearch) => {
  const theme = useTheme();
  // поле ввода города
  return (
    <>
      <TextField
        autoFocus
        helperText="Нажмите Enter для подтверждения"
        id="input-search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconMapPin
                size={18}
                stroke={1}
                color={theme.palette.primary.main}
              />
            </InputAdornment>
          ),
        }}
        label="Город"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setValue(event.target.value)
        }
        onKeyDown={(event: any) => pressKeyFunction(event)}
        size="small"
        sx={{
          "& .MuiInputBase-root": { bgcolor: "#fff" },
          "& .MuiFormHelperText-root": { fontSize: 11 },
        }}
        variant="outlined"
        value={value}
      />
    </>
  );
};

export default InputSearch;
