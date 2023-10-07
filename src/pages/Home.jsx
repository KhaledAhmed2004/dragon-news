import { useLoaderData } from "react-router-dom";
import Header from "./shared/Header";
import LeftSideNav from "./shared/LeftSideNav";
import MarqueeSection from "./shared/MarqueeSection";
import Navbar from "./shared/Navbar";
import RightSideNav from "./shared/RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <MarqueeSection></MarqueeSection>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          {news.map((sNews) => (
            <NewsCard key={sNews._id} news={sNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
