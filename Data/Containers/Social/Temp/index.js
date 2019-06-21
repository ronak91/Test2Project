import React from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container } from 'native-base';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';

import TabView from './TabView';
import TabIcon from './TabIcon';

import NearBy from './screens/NearBy.js'
import NearByDetail from './screens/NearByDetail.js'
import Message from './screens/Message.js'
import PersonalChat from './screens/PersonalChat.js'
import Discovery from './screens/Discovery.js'
import Favorite from './screens/Favorite.js'
import Filter from './screens/Filter.js'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const onBackPress = () => {
    if (Actions.state.index !== 0) {
      return false
    }
    Actions.pop()
    return true
  }

const Example = () => (
  <Container>
    <StatusBar barStyle='light-content' />
    <Router
      createReducer={reducerCreate}
      getSceneStyle={getSceneStyle}
      uriPrefix={prefix}
      backAndroidHandler={onBackPress}>

      <Overlay key="overlay">
          <Lightbox key="lightbox">
            <Stack
              hideNavBar
              key="root"
              titleStyle={{ alignSelf: 'center' }} >
                <Scene key="tab_2_2" component={PersonalChat} hideNavBar />
                <Scene key="tab_3_2" component={Filter} hideNavBar />
                <Scene hideNavBar panHandlers={null} initial key="mainTab">
                  <Tabs
                    key="tabbar"
                    swipeEnabled ={false}
                    showLabel={false}
                    tabBarStyle={styles.tabBarStyle}
                    activeBackgroundColor="white"
                    inactiveBackgroundColor="white"
                    tabBarPosition={'bottom'}>
                    <Stack
                      key="tab_1"
                      title="Nearby"
                      tabBarLabel="TAB #1"
                      inactiveBackgroundColor="#FFF"
                      activeBackgroundColor="#DDD"
                      icon={TabIcon}
                      titleStyle={{ color: 'green', alignSelf: 'center' }}
                      initial
                       >
                      <Scene
                        key="tab1_1"
                        component={NearBy}
                        onRight={() => alert('Right button')}
                        rightTitle="Right"
                        hideNavBar
                      />

                      <Scene
                        key="tab1_2"
                        component={NearByDetail}
                        hideNavBar
                        titleStyle={{ color: 'black', alignSelf: 'center' }}
                      />
                    </Stack>

                    <Stack
                      key="tab_2"
                      title="Message"
                      icon={TabIcon}
                    >
                      <Scene
                        key="tab_2_1"
                        component={Message}
                        hideNavBar  />

                    </Stack>

                    <Stack key="tab_3">
                      <Scene
                        key="tab_3_1"
                        component={Discovery}
                        title="Discovery"
                        icon={TabIcon}
                        hideNavBar
                      />
                    </Stack>
                    <Stack key="tab_4">
                      <Scene key="tab_4_1"
                        component={Favorite}
                        title="Favorite"
                        hideNavBar
                        icon={TabIcon} />
                    </Stack>
                    <Stack key="tab_5">
                      <Scene
                        key="tab_5_1"
                        component={TabView}
                        title="Profile"
                        icon={TabIcon} />
                    </Stack>
                  </Tabs>
                </Scene>


            </Stack>


          </Lightbox>
      </Overlay>
    </Router>
  </Container>
);

export default Example;
