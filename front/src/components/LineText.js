import React from "react";
import { Grid, Typography } from "@mui/material";
function Text({ data, text }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Typography variant="h6">{text}:</Typography>
      <Typography variant="body1">{data}</Typography>
    </div>
  );
}
const defaultProps = {};

const LineText = ({
  name,
  phone,
  email,
  raw,
  tag,
  skills,
  experience,
  cursus,
}) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      {tag.length > 0 && <Text data={tag} text="Tags" />}
      {name.length > 0 && <Text data={name} text="Name" />}
      {phone.length > 0 && <Text data={phone} text="Phone" />}
      {email.length > 0 && <Text data={email} text="Email" />}
      {experience.length > 0 && <Text data={experience} text="Experiences" />}
      {cursus.length > 0 && <Text data={cursus} text="Cursus" />}
      {skills.length > 0 && <Text data={skills} text="Skills" />}

      {email.length > 0 && <Text data={email} text="Email" />}

      {raw.length > 0 && (
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
  );
};

LineText.defaultProps = defaultProps;

export default LineText;
