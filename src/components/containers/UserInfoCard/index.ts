// redux
import {connect} from 'react-redux';
// types
import {StoreState} from '../../../types';
// inner components
import UserInfoCard from './UserInfoCard';

const mapStateToProps = (state: StoreState) => ({
  isLogin: state.session.isLogin,
  user: state.user,
});

export default connect(mapStateToProps, null)(UserInfoCard);
