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
import LineText from "./components/LineText";
import ResultCard from "./components/ResultCard";
function App() {
  const [files, setFiles] = useState([]);
  const [currentPreview, setCurrentPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tag, setTag] = useState([]);

  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [cursus, setCursus] = useState([]);

  const [raw, setRaw] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postulants, setPostulants] = useState([]);

  const onDropHandler = (acceptedFiles) => {
    setImagePreviews(
      acceptedFiles.map((file, index) => ({
        preview: URL.createObjectURL(file),
        index,
        isPdf: file.type === "application/pdf",
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
        const contentType = response.headers["content-type"];
        let fileName;

        // Check if the response data is a PDF file
        if (contentType === "application/pdf") {
          fileName = "document.pdf";
        } else {
          fileName = "image.png";
        }

        // Convert the response data into a Blob object.
        const imageFile = new File([response.data], fileName, {
          type: contentType,
        });

        formData.append("files[]", imageFile);

        // Check if all files have been uploaded before making POST request
        if (formData.getAll("files[]").length === imagePreviews.length) {
          // send POST request to backend URL
          let results = [];
          axios
            .post("http://localhost:3000/recognize", formData)
            .then((response) => {
              if (response.data.length === 0) {
                console.log("No data received");
                return;
              }
              console.log("Data received");
              console.log(response.data);
              response.data.map((data) => {
                results.push(data);
              });
              setPostulants(results);
              postulants.map((data) => {
                setRaw(data.raw);
                setName(data.name);
                setPhone(data.phone);
                setEmail(data.email);
                setSkills(data.skills);
                setExperience(data.experience);
                setCursus(data.cursus);
                setTag(data.tag);
              });
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
                  width: "100px",
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
                  +
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
                    {preview.isPdf ? (
                      <>
                        <object
                          data={preview.preview}
                          type="application/pdf"
                          width="100%"
                          height="180px"
                        >
                          <Typography variant="body1">
                            This browser does not support PDFs. Please download
                            the PDF to view it.
                          </Typography>
                        </object>
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
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
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
      {/* <div
        style={{
          width: "50vw",
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {raw ||
        name ||
        phone ||
        email ||
        skills ||
        experience ||
        cursus ||
        tag ? (
          <LineText
            {...{ raw, name, phone, email, skills, experience, cursus, tag }}
          />
        ) : null}
      </div> */}
      <Grid container spacing={2} style={{ marginTop: "2rem" }}>
        {postulants.length > 0 &&
          postulants.map((postulant) => {
            return (
              <Grid item xs={12} md={4} key={postulant}>
                <ResultCard {...postulant} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default App;
