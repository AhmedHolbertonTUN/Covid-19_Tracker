import React from "react";
import Card from "./Card";

function CovidSummary(props) {
  return (
    <div className="summary">
      <Card
        image="https://cdn4.iconfinder.com/data/icons/medical-flat-19/128/avatar_people_patient_boy_fever_sick_illness-512.png"
        title="Total Confirmed"
        number={props.totalConfirmed}
      />
      <Card
        image="https://image.flaticon.com/icons/png/512/2895/2895449.png"
        title="Total Recovered"
        number={props.totalRecov}
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmYoxvT4TG1Y23p9yMX0kXzxq4f3oYJ3tSg&usqp=CAU"
        title="Total Deaths"
        number={props.totalDeath}
      />
    </div>
  );
}

export default CovidSummary;
