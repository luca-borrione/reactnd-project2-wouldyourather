import React from 'react';
import PropTypes from 'prop-types';
import { Label, Message, Progress } from 'semantic-ui-react';
import { COLOR } from '../../constants';

const Result = ({
  count,
  overall,
  text,
  voted,
}) => {
  let messageColor;
  if (voted) {
    messageColor = COLOR.UI_GENERIC;
  }
  const className = count === 0 ? 'hidden' : '';
  return (
    <Message color={messageColor}>
      {voted && (
        <Label circular color="yellow">
          <span>Your<br />Vote</span>
        </Label>
      )}
      <Message.Header>{text}</Message.Header>
      <Message.Content>
        <Progress
          className={className}
          color={COLOR.UI_GENERIC}
          precision={0}
          progress
          total={overall}
          value={count}
        />
        <span className="">
          <b>{`${count} of ${overall} votes`}</b>
        </span>
      </Message.Content>
    </Message>
  );
};

Result.propTypes = {
  count: PropTypes.number.isRequired,
  overall: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  voted: PropTypes.bool.isRequired,
};

export default Result;
