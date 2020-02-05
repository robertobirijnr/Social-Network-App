import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Momment from "react-moment";

const Education = ({ education }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Momment format="YYYY/MM/DD">{edu.from}</Momment> -{" "}
        {edu.to === null ? (
          "Now"
        ) : (
          <Momment format="YYYY/MM/DD">{edu.to}</Momment>
        )}
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degrees</th>
            <th className="hide-sm">Year</th>
            <th />
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array
};

export default Education;
