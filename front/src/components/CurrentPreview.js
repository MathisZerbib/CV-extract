import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const CurrentPreviewComponent = ({ preview, isPdf, onClose, open }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Preview</DialogTitle>
      <DialogContent>
        {isPdf ? (
          <object
            data={preview}
            type="application/pdf"
            width="100%"
            height="500"
          >
            <p>Unable to display PDF file.</p>
          </object>
        ) : (
          <img src={preview} alt="Preview" style={{ maxWidth: "100%" }} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CurrentPreviewComponent;
