// @flow
import React, { type Element } from 'react';
import { Label, Message, Progress } from 'semantic-ui-react';
import { COLOR } from '../../constants';

type Props = {
  count: number,
  overall: number,
  text: string,
  voted: boolean,
};

const OptionPercentage = ({
  count,
  overall,
  text,
  voted,
}: Props): Element<any> => {
  let messageColor: string;
  if (voted) {
    messageColor = COLOR.UI_GENERIC;
  }
  const className: string = count === 0 ? 'hidden' : '';
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

export default OptionPercentage;
