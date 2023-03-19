import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const ImagePreviewsModal = ({
  imagePreviews,
  isModalOpen,
  closeModal,
  currentPreview,
}) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, rgba(220,220,220,0.2), rgba(255,255,255,0.2))",
        padding: "2rem",
      }}
    >
      {isModalOpen && currentPreview !== null && (
        <Dialog open={isModalOpen} onClose={closeModal}>
          <DialogTitle>
            {imagePreviews[currentPreview].preview.substring(
              imagePreviews[currentPreview].preview.lastIndexOf("/") + 1
            )}
          </DialogTitle>
          <DialogContent>
            <img
              src={imagePreviews[currentPreview].preview}
              alt=""
              sx={{ width: "100%" }}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ImagePreviewsModal;
