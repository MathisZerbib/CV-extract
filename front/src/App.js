import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import {
  Button,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";

function Name({ name }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Typography variant="h6">Name:</Typography>
      <Typography variant="body1">{name}</Typography>
    </div>
  );
}

function Phone({ phone }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Typography variant="h6">Phone:</Typography>
      <Typography variant="body1">{phone}</Typography>
    </div>
  );
}

function Email({ email }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Typography variant="h6">Email:</Typography>
      <Typography variant="body1">{email}</Typography>
    </div>
  );
}

function App() {
  const [files, setFiles] = useState([]);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [raw, setRaw] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDropHandler = (acceptedFiles) => {
    setImagePreviews(
      acceptedFiles.map((file, index) => ({
        preview: URL.createObjectURL(file),
        index,
      }))
    );
  };

  const openModal = (index) => {
    setCurrentPreview(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentPreview(null);
    setIsModalOpen(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    // create FormData object to send file as multipart/form-data
    const formData = new FormData();
    files.forEach((file) => {
      // Check if the file is an image or pdf
      const isImage = file.type.startsWith("image/");
      const isPdf = file.type === "application/pdf";
      if (!isImage && !isPdf) {
        console.error(`File ${file.name} is not an image or pdf`);
        return; // skip this file and continue with others
      }

      const key = isImage ? "images[]" : "pdfs[]";
      formData.append(key, file);
    });
    imagePreviews.forEach((preview) => {
      // Send an HTTP GET request to the image URL to get the raw image file.
      axios.get(preview.preview, { responseType: "blob" }).then((response) => {
        // Convert the response data into a Blob object.
        const imageFile = new File([response.data], "image.jpg", {
          type: response.headers["content-type"],
        });

        formData.append("files[]", imageFile);

        if (formData.getAll("files[]").length === imagePreviews.length) {
          // send POST request to backend URL
          axios
            .post("http://localhost:3000/recognize", formData)
            .then((response) => {
              console.log(response.data);
              if (response.data[0].name.length > name.length)
                setName(response.data[0].name);
              if (response.data[0].phone.length > phone.length)
                setPhone(response.data[0].phone);
              if (response.data[0].email.length > email.length)
                setEmail(response.data[0].email);
              if (response.data[0].raw.length > raw.length)
                setRaw(response.data[0].raw);
            });
        }
      });
    });
  };

  return (
    <div
      style={{
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
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50vw",
          padding: "1rem",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "1rem" }}>
          JobMe CV Converter
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <Dropzone onDrop={onDropHandler}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "20vh",
                  border: "2px dashed grey",
                  borderRadius: "5px",
                  cursor: "pointer",
                  margin: "1rem",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "grey",
                    textAlign: "center",
                    padding: "1rem",
                  }}
                >
                  Drag and drop business card images here or click to select
                  files
                </Typography>
              </div>
            )}
          </Dropzone>
          {imagePreviews.length > 0 && (
            <Grid container spacing={2}>
              {imagePreviews.map((preview) => (
                <Grid item xs={12} md={4} key={preview.index}>
                  <Card
                    style={{ position: "relative", overflow: "hidden" }}
                    onClick={() => openModal(preview.index)}
                  >
                    <img
                      src={preview.preview}
                      alt=""
                      style={{ width: "100%" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background: "rgba(0, 0, 0, 0.6)",
                        color: "white",
                        padding: "0.5rem",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {preview.preview.substring(
                        preview.preview.lastIndexOf("/") + 1
                      )}
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: "1rem" }}
          >
            Recognize
          </Button>
        </form>
      </Card>
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
              style={{ width: "100%" }}
            />
          </DialogContent>
        </Dialog>
      )}
      {name || phone || email || raw ? (
        <div style={{ marginTop: "1rem" }}>
          <Typography variant="h5" gutterBottom>
            Recognized Text
          </Typography>
          {name && Name({ name })}
          {phone && Phone({ phone })}
          {email && Email({ email })}
          {raw && (
            <Grid item xs={12}>
              <Typography variant="h6" style={{ marginTop: "1rem" }}>
                {raw.length > 0 && "Raw text:"}
              </Typography>
              {raw.map((sentence, index) => (
                <Typography variant="body1" key={index}>
                  {sentence}
                </Typography>
              ))}
            </Grid>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
