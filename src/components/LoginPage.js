import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
// import { handleInitialData } from '../actions/shared';
// import 'semantic-ui-css/semantic.min.css';

class LoginPage extends Component {
  // static propTypes = {
  //   dispatch: PropTypes.func.isRequired,
  //   loading: PropTypes.bool.isRequired,
  // };

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   document.title = 'Would You Rather...?';
  //   dispatch(handleInitialData());
  // }

  render() {
    console.log('>> LOGIN PAGE');
    const countryOptions = [
      {
        key: 'af',
        value: 'af',
        image: {
          avatar: true,
          // src: 'https://avatars.io/twitter/sarah_edo',
          src: 'images/sarahedo.jpg',
        },
        text: 'Afghanistan',
      },
    ];

    return (
      <div>
        Hello World!
        <Select
          placeholder="Select your country"
          options={countryOptions}
          // loading
          // disabled
        />
      </div>
    );
  }
}

// function mapStateToProps({ authedUser }) {
//   console.log('****** authedUser', authedUser); // eslint-disable-line
//   return {
//     loading: authedUser === null,
//   };
// }

// export default connect(mapStateToProps)(App);
export default LoginPage;
