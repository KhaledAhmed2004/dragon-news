import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="flex items-center">
      <button className="btn btn-secondary">Latest</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
