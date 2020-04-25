import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,

} from '@react-navigation/drawer';
import { Container, Header, Content, Footer, Title } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Notifications from './Notifications'


function Feed({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }}>
      <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10 }}>
        <TouchableOpacity  >
          <Icon name="align-justify" size={30} color="#336699"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', marginLeft: 120, fontWeight: 'bold' }} >Home Screen</Text>
      </View>
      <View style={{ flex: 1, marginTop: 10, backgroundColor: '#e6e6e6' }}>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Icon name="mobile" size={600} color="black"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />

          <Button
            title="Toggle drawer"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        </View></View>


      <Footer
        style={{ backgroundColor: "#336699", alignContent: 'center', height: 45 }}>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Icon name="home" size={35} color="#ffffff"
            style={{ paddingHorizontal: 33 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          <Icon name="align-justify" size={35} color="#ffffff"
            style={{ paddingHorizontal: 33 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          <Icon name="align-justify" size={35} color="#ffffff"
            style={{ paddingHorizontal: 33 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
          <Icon name="cog" size={35} color="#ffffff"
            style={{ paddingHorizontal: 33 }}
            onPress={() => navigation.navigate('Notifications')} />
        </View>
      </Footer>

    </View>
  );
}

export default Feed;