import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import fileType from "file-type";

const ImagePreviewsModal = ({
  imagePreviews,
  isModalOpen,
  closeModal,
  currentPreview,
}) => {
  const [isPDF, setIsPDF] = useState(false);
  const [buffer, setBuffer] = useState(null);

  useEffect(() => {
    if (isModalOpen && currentPreview !== null) {
      const checkFileType = async () => {
        const response = await fetch(imagePreviews[currentPreview].preview);
        const buffer = await response.arrayBuffer();
        const type = await fileType.fromBuffer(buffer);
        setIsPDF(type.mime === "application/pdf");
        setBuffer(buffer);
      };

      checkFileType();
    }
  }, [isModalOpen, currentPreview, imagePreviews]);

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
            {isPDF ? (
              <iframe
                src={`data:application/pdf;base64,${btoa(
                  new Uint8Array(buffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                  )
                )}`}
                width="100%"
                height="600"
                title={imagePreviews[currentPreview].preview}
              />
            ) : (
              <img
                src={imagePreviews[currentPreview].preview}
                alt=""
                sx={{ width: "100%" }}
              />
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ImagePreviewsModal;
