// react native
import React from 'react';
// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
// react native extensions
import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Icon} from 'react-native-elements';
// 界面
import Login from './views/Login';
import Home from './views/Home';
import Creator from './views/Creator';
import Message from './views/Message';
import User from './views/User';
// 样式
import {PrimaryNavigationBarStyle} from './theme/styles/navigationBar';
import {accentIconsColor, darkPrimaryColor} from './theme/colors/index';
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
              <Tabs
                key="tabbar"
                swipeEnabled={true}
                wrap={false}
                hideNavBar
                activeTintColor={darkPrimaryColor}>
                <Scene
                  key="home"
                  component={Home}
                  tabBarLabel="首页"
                  icon={({focused}) => (
                    <Icon
                      name="home"
                      type="antdesign"
                      color={focused ? darkPrimaryColor : ''}
                    />
                  )}
                />
                <Scene
                  key="creator"
                  component={Creator}
                  tabBarLabel="写作"
                  icon={({focused}) => (
                    <Icon
                      name="edit"
                      type="antdesign"
                      color={focused ? darkPrimaryColor : ''}
                    />
                  )}
                />
                <Scene
                  key="message"
                  component={Message}
                  tabBarLabel="消息"
                  icon={({focused}) => (
                    <Icon
                      name="message1"
                      type="antdesign"
                      color={focused ? darkPrimaryColor : ''}
                    />
                  )}
                />
                <Scene
                  key="user"
                  component={User}
                  tabBarLabel="用户"
                  icon={({focused}) => (
                    <Icon
                      name="user"
                      type="antdesign"
                      color={focused ? darkPrimaryColor : ''}
                    />
                  )}
                />
              </Tabs>
            </Stack>
          </Router>
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  );
};

export default App;
