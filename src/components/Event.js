import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { summary, created, location, description } = event;
  const date = new Date(created).toLocaleDateString();

  const detailsHandler = () => {
    if (showDetails === false) {
      setShowDetails(true);
    }
    if (showDetails === true) {
      setShowDetails(false);
    }
  };

  return (
    <div className="event">
      <h2 className="summary">{summary}</h2>

      <p className="created">{date}</p>
      <p className="location">{location}</p>
      <button className="details-btn" onClick={detailsHandler}>
        {!showDetails ? "show details" : "hide details"}
      </button>

      {showDetails ? (
        <div className="event-details">
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Event;
