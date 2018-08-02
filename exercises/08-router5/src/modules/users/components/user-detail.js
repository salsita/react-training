import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as UsersSelectors from 'modules/users/users-selectors';

const UserDetail = ({ userDetail }) => {
  if (!userDetail) {
    return 'Loading...';
  }

  const { id, firstName, lastName, regnalNumber, skills } = userDetail;

  return (
    <div>
      <div>I'm {firstName} {regnalNumber} {lastName}</div>
      <div>I can:</div>
      <ul>
        {skills.map(({ skill, level }) => (
          <li key={`${skill.id}-${id}`}>
            {skill.name} (level {level})
          </li>
        ))}
      </ul>
    </div>
  );
};

UserDetail.propTypes = {
  userDetail: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    regnalNumber: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.shape({
      skill: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired,
      level: PropTypes.number.isRequired
    })).isRequired
  })
};

const mapStateToProps = state => ({
  userDetail: UsersSelectors.getUserDetail(state)
});

export default connect(mapStateToProps)(UserDetail);
