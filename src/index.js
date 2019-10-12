import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../index";
import "./index.scss";
Reactdom.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root"),
);
