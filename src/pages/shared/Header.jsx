import moment from "moment/moment";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM DD, YYYY")}</p>
    </div>
  );
};

export default Header;
