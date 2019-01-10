// @flow
import React, { type Element, type Node } from 'react';
import {
  GridColumn,
  Container,
  Grid,
  Header,
  Image,
  GridRow,
  Segment,
} from 'semantic-ui-react';
import { addBasenameToUrl } from '../../utils/helpers';

type Props = {
  avatarURL: string,
  children: Node,
  className?: string,
  header: string,
  id?: string,
};

const CardContainer = ({
  avatarURL,
  children,
  className,
  header,
  id,
}: Props): Element<any> => (
  <div id={id} className={`${className || ''} card`.trim()}>
    <Header as="h3" block attached="top">
      <span>
        {header}
        <Image
          className="small-avatar"
          avatar
          src={addBasenameToUrl(avatarURL)}
          size="mini"
          centered
          verticalAlign="middle"
        />
      </span>
    </Header>
    <Segment attached>
      <Grid columns={2} divided>
        <GridRow>
          <GridColumn className="avatar-container">
            <Image
              className="big-avatar"
              avatar
              src={addBasenameToUrl(avatarURL)}
              size="small"
              centered
              verticalAlign="middle"
            />
          </GridColumn>
          <GridColumn className="content-container">
            <Container>
              {children}
            </Container>
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  </div>
);

CardContainer.defaultProps = {
  className: '',
  id: undefined,
};

export default CardContainer;
