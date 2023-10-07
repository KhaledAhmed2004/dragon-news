import { useParams } from "react-router-dom";
import Header from "./shared/Header";
import RightSideNav from "./shared/RightSideNav";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4">
        <div className="col-span-3">{<p>{id}</p>}</div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
