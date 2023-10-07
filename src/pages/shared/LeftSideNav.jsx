import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="">
        <h1>All Caterogy</h1>
        {categories.map((caterogy) => (
          <Link
            className="block"
            to={`/caterogy/${caterogy.id}`}
            key={caterogy.id}
          >
            {caterogy.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
