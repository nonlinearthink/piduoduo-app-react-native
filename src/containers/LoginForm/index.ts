// redux
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
// redux action function
import {updateUserInfo, setToken} from '../../store/actions';
// types
import {UserInfo} from '../../types';
// inner components
import LoginForm from './LoginForm';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onSetToken: (token: string) => dispatch(setToken(token)),
  onUpdateUserInfo: (userInfo: UserInfo) => dispatch(updateUserInfo(userInfo)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
