import PropTypes from "prop-types";
import css from "./Contact.module.css";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <div className={css.contactCard}>
        <div>
          <p className={css.cardText}>
            <BsFillPersonFill className={css.cardIcon} />
            {name}
          </p>

          <p className={css.cardText}>
            <BsFillTelephoneFill className={css.cardIcon} />
            {number}
          </p>
        </div>
        <button className={css.contactCardBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;