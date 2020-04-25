import * as React from 'react';
import { View,Linking, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,

} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Footer, Title } from 'native-base';
import { WebView } from 'react-native-web';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();


function HomeScreen({ navigation }) {
  return (
    
  <View style={{ flex: 1, justifyContent: 'center' }}>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

    </View>

    <Footer
      style={{ backgroundColor: "#336699", alignContent: 'center', height: 45 }}>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>

        <Icon name="instagram" size={35} color="#ffffff"
          style={{ paddingHorizontal: 23 }}
          onPress={() => navigation.navigate('Google')} />
        <Icon name="facebook-square" size={35} color="#ffffff"
          style={{ paddingHorizontal: 23 }}
          onPress={() => navigation.navigate('Youtube')} />
        <Icon name="whatsapp" size={35} color="#ffffff"
          style={{ paddingHorizontal: 23 }}
          onPress={() => navigation.navigate('Notifications')} />
        <Icon name="snapchat-square" size={35} color="#ffffff"
          style={{ paddingHorizontal: 23 }}
          onPress={() => navigation.navigate('Notifications')} />
        <Icon name="twitter-square" size={35} color="#ffffff"
          style={{ paddingHorizontal: 23 }}
          onPress={() => navigation.navigate('Notifications')} />
      </View>
    </Footer>
  </View>
  
  );
}
function Google({ navigation }) {
  return (
   
       
  <WebView
  source={{ uri: 'https://google.com' }}
 style={{flex:1}}
 />
   
  );
}
function Youtube({ navigation }) {
  return (
    
  <View style={{flex:1}}>
     
      
  <WebView
     source={{ uri: 'https://youtube.com' }}
    style={{flex:1}}
    />
</View>
    
  );
}

const Drawer = createDrawerNavigator();

function Social({navigation}) {
  return (


    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen}
       options={{
       
        headerLeft: () => (
          <Icon name="align-justify" size={28} color="#336699" style={{marginLeft:10}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
        ),
      }}
      />



<Stack.Screen name="Youtube" component={Youtube} />
      <Stack.Screen name="Google" component={Google} />

    </Stack.Navigator>

  );
}
export default Social;