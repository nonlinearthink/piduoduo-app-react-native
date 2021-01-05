// react native 官方插件
import React from 'react';
// react native 第三方插件
import {Router, Stack, Scene} from 'react-native-router-flux';
import {RootSiblingParent} from 'react-native-root-siblings';
// 界面
import Login from './views/Login';
import Home from './views/Home';
// 样式
import {PrimaryNavigationBarStyle} from './theme/styles/navigationBar';
import {accentIconsColor} from './theme/colors/index';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <RootSiblingParent>
      <Router>
        <Stack key="root">
          <Scene
            key="login"
            component={Login}
            title="登录"
            back
            backButtonTintColor={accentIconsColor}
            titleStyle={PrimaryNavigationBarStyle.titleStyle}
            navigationBarStyle={PrimaryNavigationBarStyle.navigationBarStyle}
          />
          <Scene key="home" component={Home} />
        </Stack>
      </Router>
    </RootSiblingParent>
  );
};

export default App;
