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

import Feed from './Feed';
import Notifications from './Notifications'



function Browser({ navigation }) {
  return (<View>
    <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10 }}>
      <TouchableOpacity  >
        <Icon name="align-justify" size={30} color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

      </TouchableOpacity>
      <Text style={{ alignSelf: 'center', marginLeft: 100 }} >Notifications Screen</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Browser Screen</Text>
    </View></View>
  );
}

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
      <Drawer.Screen name="Feed" component={Feed} ></Drawer.Screen>
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Browser" component={Browser} />
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
