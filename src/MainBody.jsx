import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

class MainBody extends React.Component {
  render() {
    const whatWeWillLearn = "React Js";
    const totalLecture = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this Course, we will learn {whatWeWillLearn} by building
          taskOpedia!
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
        <div className="container row">Students Enrolled</div>
        <Student
          experience={2}
          name={"Chris Wally"}
          headShot="https://api.lorem.space/image/face?w=150&h=151"
        >
          <StudentReview />
        </Student>
        <Student
          experience={5}
          name={"Barry Allen"}
          headShot="https://api.lorem.space/image/face?w=150&h=153"
        >
          <StudentReview />
        </Student>
        <Student
          experience={3}
          name={"Oliver Queen"}
          headShot="https://api.lorem.space/image/face?w=150&h=150"
        />
      </div>
    );
  }
}

export default MainBody;
