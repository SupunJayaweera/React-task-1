import logo from "../images/react.png";

function MainHeader() {
  return (
    <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img src={logo} style={{ height: "35px", verticalAlign: "top" }} />
      <span className="h2 pt-4 text-white-50">React Course</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "white",
  backgroundColor: "grey",
};

function SubHeader() {
  return (
    <div>
      <h3 style={subHeaderStyle} className="text-center">
        This Will be a interesting Course
      </h3>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};

export default Header;
