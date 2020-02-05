import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Momment from "react-moment";
// import { connect } from "react-redux";

const Experience = ({ experience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Momment format="YYYY/MM/DD">{exp.from}</Momment> -{" "}
        {exp.to === null ? (
          "Now"
        ) : (
          <Momment format="YYYY/MM/DD">{exp.to}</Momment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Year</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array
};

export default Experience;
