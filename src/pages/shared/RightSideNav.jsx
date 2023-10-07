import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import bqZone1 from "../../assets/qZone1.png";
import bqZone2 from "../../assets/qZone2.png";
import bqZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <h1 className="text-2xl">Login With</h1>
        <button className="btn btn-outline btn-info w-full">
          <FcGoogle className="text-2xl"></FcGoogle> google
        </button>
        <button className="btn btn-outline btn-info w-full">
          <FaGithub className="text-2xl text-black"></FaGithub> github
        </button>
      </div>

      <div className="">
        <h1 className="text-2xl my-6">Find Us On</h1>

        <a
          className="flex items-center text-2xl p-2 gap-1 rounded-t-lg border"
          href=""
        >
          <BsFacebook></BsFacebook>Facebook
        </a>
        <a className="flex items-center text-2xl p-2 gap-1 border-x" href="">
          <BsTwitter></BsTwitter>Twitter
        </a>
        <a
          className="flex items-center text-2xl p-2 gap-1 rounded-b-lg border"
          href=""
        >
          <BsInstagram></BsInstagram>Instagram
        </a>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl">Q-Zone</h1>
        <img src={bqZone1} alt="" />
        <img src={bqZone2} alt="" />
        <img src={bqZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
