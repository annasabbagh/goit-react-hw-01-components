import PropTypes from "prop-types";
import "../App";

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((element) => (
          <li className="item" key={element.id}>
            <span className="label">{element.label}</span>
            <span className="percentage">{element.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
