import React from "react";
import { Grid, Card, Typography, Chip } from "@mui/material";

const ResultCard = (postulant) => {
  console.log("POSTULANT", postulant);

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Typography variant="h6">{postulant.name ?? "No name"}</Typography>
      <Typography variant="body1">{postulant.phone ?? "No phone"}</Typography>
      <Typography variant="body1">{postulant.email ?? "No email"}</Typography>
      <Typography variant="body1">{postulant.skills ?? "No skills"}</Typography>
      <Typography variant="body1">
        {postulant.experience ?? "No experience"}
      </Typography>
      <Typography variant="body1">{postulant.cursus ?? "No cursus"}</Typography>
      {/* <Typography variant="body1">{postulant.raw ?? "No raw"}</Typography> */}
      <Typography variant="body1">
        {postulant.tag ? "Tags:" : "No tag"}
      </Typography>
      <Grid container spacing={1}>
        {postulant.tag.length > 0 &&
          postulant.tag.map((tag, index) => (
            <Grid item key={index}>
              <Chip label={tag} sx={{ margin: "0.2rem" }} />
            </Grid>
          ))}
      </Grid>
    </Card>
  );
};

export default ResultCard;
