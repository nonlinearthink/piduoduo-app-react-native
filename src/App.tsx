// react native
import React from 'react';
// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
// react native extensions
import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';
import {RootSiblingParent} from 'react-native-root-siblings';
// 界面
import Login from './views/Login';
import Home from './views/Home';
import Creator from './views/Creator';
import Message from './views/Message';
import User from './views/User';
// 样式
import {PrimaryNavigationBarStyle} from './theme/styles/navigationBar';
import {accentIconsColor} from './theme/colors/index';
// redux
import {store, persistor} from './store/index';

const App = () => {
  return (
    <RootSiblingParent>
      {/* 使用 react-redux */}
      <Provider store={store}>
        {/* 使用 redux-persist */}
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Stack key="root">
              <Scene
                key="login"
                component={Login}
                title="登录"
                back
                backButtonTintColor={accentIconsColor}
                titleStyle={PrimaryNavigationBarStyle.titleStyle}
                navigationBarStyle={
                  PrimaryNavigationBarStyle.navigationBarStyle
                }
                rightTitle=" "
                onRight={() => {}}
              />
              <Tabs key="tabbar" swipeEnabled={true} wrap={false} hideNavBar>
                <Scene key="home" component={Home} tabBarLabel="首页" />
                <Scene key="creator" component={Creator} tabBarLabel="写作" />
                <Scene key="message" component={Message} tabBarLabel="消息" />
                <Scene key="user" component={User} tabBarLabel="用户" />
              </Tabs>
            </Stack>
          </Router>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
