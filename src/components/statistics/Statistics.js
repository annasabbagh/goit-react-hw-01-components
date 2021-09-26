import PropTypes from "prop-types";
import s from "../statistics/Statistics.module.css";
import "../../App";

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((element) => (
          <li className={s.item} key={element.id}>
            <span className={s.label}>{element.label}</span>
            <span className={s.percentage}>{element.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
