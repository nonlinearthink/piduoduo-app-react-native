// react native
import React from 'react';
// react native extensions
import {Router, Stack, Scene, Tabs} from 'react-native-router-flux';
import {RootSiblingParent} from 'react-native-root-siblings';
import {Icon} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// redux tools
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './store';
// screens
import {
  Login,
  Home,
  Creator,
  Message,
  User,
  Setting,
  Article,
  Write,
  Publish,
  Composition,
} from './screens';
// styles
import {accentIconsColor, darkPrimaryColor} from './theme/colors';
import {appStyle, PrimaryNavigationBarStyle} from './theme/styles';

const generateTabScene = () => {
  const tabs = [
    {
      key: 'Home',
      content: Home,
      label: '首页',
      icon: {type: 'antdesign', name: 'home'},
    },
    {
      key: 'Creator',
      content: Creator,
      label: '写作',
      icon: {type: 'antdesign', name: 'edit'},
    },
    {
      key: 'Message',
      content: Message,
      label: '首页',
      icon: {type: 'antdesign', name: 'message1'},
    },
    {
      key: 'User',
      content: User,
      label: '首页',
      icon: {type: 'antdesign', name: 'user'},
    },
  ];
  return tabs.map((item) => {
    return (
      <Scene
        key={item.key}
        component={item.content}
        tabBarLabel={item.label}
        icon={({focused}) => (
          <Icon
            name={item.icon.name}
            type={item.icon.type}
            color={focused ? darkPrimaryColor : ''}
          />
        )}
      />
    );
  });
};

export default class App extends React.Component {
  render() {
    return (
      <RootSiblingParent>
        {/* 使用 react-redux */}
        <Provider store={store}>
          {/* 使用 redux-persist */}
          <PersistGate loading={null} persistor={persistor}>
            <SafeAreaProvider>
              <Router sceneStyle={appStyle.rootContainer}>
                <Stack key="root">
                  <Tabs
                    key="Tabbar"
                    wrap={false}
                    swipeEnabled
                    hideNavBar
                    activeTintColor={darkPrimaryColor}>
                    {generateTabScene()}
                  </Tabs>
                  <Scene
                    key="Login"
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
                  <Scene key="Article" component={Article} hideNavBar />
                  <Scene key="Publish" component={Publish} hideNavBar />
                  <Scene key="Write" component={Write} hideNavBar />
                  <Scene key="Composition" component={Composition} hideNavBar />
                  <Scene
                    key="Setting"
                    component={Setting}
                    title="设置"
                    back
                    backButtonTintColor={accentIconsColor}
                    titleStyle={PrimaryNavigationBarStyle.titleStyle}
                    navigationBarStyle={
                      PrimaryNavigationBarStyle.navigationBarStyle
                    }
                    rightTitle=" "
                    onRight={() => {}}
                  />
                </Stack>
              </Router>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </RootSiblingParent>
    );
  }
}
