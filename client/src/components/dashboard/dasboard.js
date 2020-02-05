import React, { useEffect, Fragment } from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { getCurrentProfile } from "../redux/actions/profile";
import PropTypes from "prop-types";
import Spinner from "../Layout/spinner";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fa fa-user">Welcome {user && user.name}</i>
      </p>
      {profile !== null ? <Fragment>has</Fragment> : <Fragment>
        <p>You have not yet setup a profile,please add some info</p>
        <Link to="/create-profile" className="btn btn-primary my-1">
          Create  Profile
        </Link>
        </Fragment>}
    </Fragment>
  );
};

Dashboard.protoTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);