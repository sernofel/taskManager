import React from "react";
import { Link, Typography } from "@material-ui/core";

export function Copyright() {
  return (
    <Typography variant="body1" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
