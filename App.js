import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,

} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './Home';
import Notifications from './Notifications'
import Gameplay from './Gameplay';
import Social from './Social';
import Setting from './Setting';



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        style={{}}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home}
        options={{
          drawerIcon: config => <Icon name="home" size={20} color="#336699"
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        }}
      ></Drawer.Screen>
      <Drawer.Screen name="Notifications" component={Notifications}
        options={{
          drawerIcon: config => <Icon name="bell" size={20} color="#336699"
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        }}
      />
      <Drawer.Screen name="Gameplay" component={Gameplay}
        options={{
          drawerIcon: config => <Icon name="gamepad" size={20} color="#336699"
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        }}
      />
      <Drawer.Screen name="Social" component={Social}
        options={{
          drawerIcon: config => <Icon name="comments" size={20} color="#336699"
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        }}
      />
      <Drawer.Screen name="Setting" component={Setting}
        options={{
          drawerIcon: config => <Icon name="cog" size={20} color="#336699"
            style={{ paddingHorizontal: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
