import React, { useState, useEffect } from "react";
import "../styles.css";
import axios from "axios";
import CovidSummary from "./CovidSummary";
import LineGraph from "./LineGraph";

function SelectCountry() {
  const [Countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [totalConfirmed, setTotalConfirmed] = useState("--");
  const [totalRecov, setTotalRecov] = useState("--");
  const [totalDeath, setTotalDeath] = useState("--");
  const [X, setX] = useState([]);
  const [Y, setY] = useState([]);
  const [showChart, setSchowChart] = useState(true);

  useEffect(() => {
    axios.get(`https://api.covid19api.com/summary`).then((res) => {
      setCountries(res.data.Countries);
      setTotalConfirmed(res.data.Global.TotalConfirmed);
      setTotalRecov(res.data.Global.TotalRecovered);
      setTotalDeath(res.data.Global.TotalDeaths);
    });
    axios
      .get(`https://api.covid19api.com/dayone/country/${country}`)
      .then((res) => {
        let l = res.data.length;
        setTotalConfirmed(res.data[l - 1].Confirmed);
        setTotalRecov(res.data[l - 1].Recovered);
        setTotalDeath(res.data[l - 1].Deaths);
      });
    //Graph chart :
    axios
      .get(`https://api.covid19api.com/dayone/country/${country}`)
      .then((res) => {
        let l = res.data.length;
        console.log(res.data.slice(l - 25, l));
        let resultX = res.data
          .slice(l - 25, l)
          .map((a) => a.Date.slice(0, -10));
        let resultY = res.data.slice(l - 25, l).map((a) => a.Confirmed);
        setX(resultX);
        setY(resultY);
        setSchowChart(false);
      });
  }, [country]);
  return (
    <div>
      <div className="header">
        <div className="title">
          <img src="/coronavirus.png" alt="pic" height="45px" />
          <h2>
            Corona<span style={{ color: "red" }}>Tracker</span>
          </h2>
        </div>
      </div>
      <label>Choose your country : </label>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Global</option>
        {Countries.map((el) => (
          <option key={el.id} value={el.Slug}>
            {el.Country}
          </option>
        ))}
      </select>
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecov={totalRecov}
        totalDeath={totalDeath}
      />
      <LineGraph x={X} y={Y} show={showChart} />
    </div>
  );
}

export default SelectCountry;
