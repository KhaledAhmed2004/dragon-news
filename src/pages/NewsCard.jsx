import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, thumbnail_url, details } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={thumbnail_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}
              <Link to={`/news/${_id}`} className="font-bold text-blue-600">
                {" "}
                read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
