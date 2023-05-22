import "./privilegesCard.css";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

function PrivilegesCard({ text }) {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__images"></div>
        <div className="card__context">
          <p className="card__text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default PrivilegesCard;
