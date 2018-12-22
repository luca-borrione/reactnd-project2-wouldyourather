import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getUserById } from '../../selectors/users';
import PreviewCard from '../../components/homePage/PreviewCard';

const mapStateToProps = (state, { question }) => ({
  author: getUserById(state, question.author),
});

export default connect(
  mapStateToProps,
)(toJS(PreviewCard));
