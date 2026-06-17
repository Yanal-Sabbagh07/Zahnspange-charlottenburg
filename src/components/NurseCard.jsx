import React from "react";
import "../styles/components/NurseCard.scss";
import { useInView } from "react-intersection-observer";

const getInitials = (name) => {
  const parts = name.split(" ").filter((p) => p.replace(".", "").length > 0);
  return parts.map((p) => p.replace(".", "")[0].toUpperCase()).join("").slice(0, 2);
};

const NurseCard = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: ".9",
  });

  return (
    <div className="card-container">
      <div className="image-container">
        {props.img ? (
          <div
            ref={ref}
            className={!inView ? "nurse-img" : "nurse-img nurse-animate"}
            style={{ backgroundImage: props.img }}
          />
        ) : (
          <div
            ref={ref}
            className={!inView ? "nurse-img nurse-initials" : "nurse-img nurse-initials nurse-animate"}
          >
            <span>{getInitials(props.name)}</span>
          </div>
        )}
      </div>

      <div className="details-container">
        <div className="details-wrapper">
          <div className="name-container">
            <h3>{props.name}</h3>
          </div>

          <div className="job-container">
            <p>{props.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseCard;