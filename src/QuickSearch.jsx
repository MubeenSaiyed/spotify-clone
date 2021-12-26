import {
  Box,
  Button,
  Input,
  Modal,
  Typography,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useDataLayerValue } from "./DataLayer";
import "./QuickSearch.css";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  // bgcolor: "background.paper",
  bgcolor: "rgb(238, 238, 238)",
  color: "white",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};

function QuickSearch() {
  const [{ isSearchActive }, dispatch] = useDataLayerValue();

  const handleClose = () => {
    dispatch({
      type: "SET_IS_SEARCH_ACTIVE",
      isSearchActive: false,
    });
  };
  return (
    <div className="quicksearch">
      <Modal
        open={isSearchActive}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            label="Search by Song, Album, Artist"
            id="fullWidth"
            autoFocus
          />
        </Box>
      </Modal>
    </div>
  );
}

export default QuickSearch;
