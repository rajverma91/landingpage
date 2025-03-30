"use client";
import { useEffect } from "react";

const SEO = ({ pageTitle }) => {
  useEffect(() => {
    document.title = pageTitle + " - At Borning Studio, we believe in the power of collaboration to bring ideas to life.";
  }, []);
};

export default SEO;