import React from "react";
import { TextField } from "@mui/material";

type InputTextProps = {
  label: string;
  [key: string]: any;
};

export const InputText = React.forwardRef(({ label, ...rest }: InputTextProps, ref) => {
  const onKeyPress = 'onSubmit' in rest ? (e: any) => {
    if (e.key === "Enter") {
      rest.onSubmit(e);
    }
  } : undefined;

  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      // ref
      ref={ref as any}
      // disable auto complete
      autoComplete="off"
      // static label position
      InputLabelProps={{
        shrink: true,
      }}
      // onkeypress enter
      onKeyPress={onKeyPress}
      {...rest}
    />
  );
});
