import * as React from "react";
import IconButton from "@mui/material/IconButton";

import Tooltip from "@mui/material/Tooltip";
import { IconTrash } from "@tabler/icons-react";

interface IDeleteButton {
  index: number;
  handleClick: (item: number) => void;
}

const DeleteButton = ({ index, handleClick }: IDeleteButton) => {
  return (
    <Tooltip title="Удалить">
      <IconButton
        onClick={() => handleClick(index)}
        size="small"
        color="error"
        sx={{ ml: 1, mt: -0.5 }}
      >
        <IconTrash size={20} />
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;
