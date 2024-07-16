import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ISnackbars {
  message: string;
  open: boolean;
  severity: "success" | "warning" | "error";
  setOpen: (props: boolean) => void;
}
const Snackbars = ({ message, open, severity, setOpen }: ISnackbars) => {
  const handleClose = () => setOpen(false);
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Snackbars;
