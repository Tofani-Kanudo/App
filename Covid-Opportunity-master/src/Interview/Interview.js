import React from "react";
import "./Interview.css";
import CompanyCard from "./Card";
import { Hidden } from "@material-ui/core";

function Interview() {
  const objArr = [
    {
      title: "Senior Software Engineer",
      imgsrc:
        "data:image/png;base64,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",
      companyname: "Netflix Inc.",
      type: "Full Time",
      location: "San Francisco, CA",
      applicants: 200,
      deadline: "8 August, 2020",
    },
    {
      title: "Senior Devops Engineer",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSkDajeq3qzTQ6_pgh98SDyeQNYoU3fGSdA-A&usqp=CAU",
      companyname: "Uber",
      type: "Full Time",
      location: "Bengaluru, KA",
      applicants: 140,
      deadline: "28 July, 2020",
    },
    {
      title: "Senior Software Engineer II",
      imgsrc:
        "https://freepngimg.com/thumb/microsoft/28348-7-microsoft-logo-hd.png",
      companyname: "Microsoft Corporation",
      type: "Full Time",
      location: "Hyderabad, Telangana",
      applicants: 253,
      deadline: "25 August, 2020",
    },
  ];
  return (
    <div>
      <Hidden only={["xs"]}>
        <div className="container">
          <div className="card-deck">
            {objArr.map((item) => {
              return <CompanyCard data={item} />;
            })}
          </div>
        </div>
      </Hidden>
      <Hidden only={["lg", "md", "sm", "xl"]}>
        <div className="container" style={{ padding: "20px 0" }}>
          <div className="card-deck" style={{ margin: "0 5% 0 5%" }}>
            {objArr.map((item) => {
              return <CompanyCard data={item} />;
            })}
          </div>
        </div>
      </Hidden>
    </div>
  );
}

export default Interview;
