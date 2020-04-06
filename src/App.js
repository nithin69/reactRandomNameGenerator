import React, { useState, useEffect } from "react";
import "./styles.css";
import Axios from "axios";
import Card from "./Card";

export default function App() {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const response = await Axios.get("https://randomuser.me/api/");
    console.log("response", response);
    const details = response.data.results[0];
    console.log("details", details);
    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <h1>Nithin</h1>
      <Card details={details} />
    </div>
  );
}
