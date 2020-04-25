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
import { Container, Header, Content, Footer, Title } from 'native-base';


function Notifications({ navigation }) {
  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
    <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10 }}>
      <TouchableOpacity  >
        <Icon name="align-justify" size={30} color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

      </TouchableOpacity>
      <Text style={{ alignSelf: 'center', marginLeft: 100 }} >Notifications Screen</Text>
    </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>

    <Footer
      style={{ backgroundColor: "grey", alignContent: 'center', height: 45 }}>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <Icon name="home" size={35} color="black"
          style={{ paddingHorizontal: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Icon name="align-justify" size={35} color="black"
          style={{ paddingHorizontal: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        <Icon name="align-justify" size={35} color="black"
          style={{ paddingHorizontal: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          <Icon name="arrow-left" size={30} color="black"
          style={{ paddingHorizontal: 30 }}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

      </View>
    </Footer>
  </View>
  );
}

export default Notifications;