import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainBody() {
  const whatWeWillLearn = "React Js";
  const totalLecture = 3;

  return (
    <div>
      <p>
        In this Course, we will learn {whatWeWillLearn} by building taskOpedia!
        <br />
        Total Lecture - {totalLecture}
      </p>

      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>
      {/* <div>
        Enter Task :{" "}
        <input maxLength={5} readOnly={false} placeholder="Ben"></input>
      </div> */}
    </div>
  );
}

function MainHeader() {
  return (
    <div>
      <h1 className="heading1">React Course</h1>
    </div>
  );
}

const subHeaderStyle = {
  color: "blue",
  backgroundColor: "yellow",
};

function SubHeader() {
  return (
    <div>
      <h3 style={subHeaderStyle}>This Will be a interesting Course</h3>
    </div>
  );
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p style={{ color: "gray", backgroundColor: "black" }}>Happy Coding!</p>
    </div>
  );
}

function Students() {
  const fullName = "Cris Wally";
  const programingExp = 2;

  return (
    <div className="container p-4">
      <div className="row">Students Enrolled</div>
      <div className="row border">
        <div className="col-1">
          <img
            src={`https://ui-avatars.com/api/?name=${fullName}`}
            className="w-100"
          ></img>
        </div>
        <div className="col-10">
          {fullName}
          <br /> Coding Experience {programingExp} years.
        </div>
      </div>
    </div>
  );
}

root.render(
  <React.StrictMode>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </React.StrictMode>
);
