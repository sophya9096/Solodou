import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/native';
import SideBar from '../SideBar';
import B_A_BA from '../../screens/B_A_BA';
import Infos from '../../screens/Infos';
import Cms from '../../screens/Cms';
import Jeux from '../../screens/Jeux';
import {cours} from '../../api/coursApi';

const Stack = createStackNavigator();

function navigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="B_A_BA"
        component={B_A_BA}
        options={{headerShown: false}}
        initialParams={{cours: cours[0]}}
      />
      <Stack.Screen
        name="Infos"
        component={Infos}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Cms" component={Cms} options={{headerShown: false}} />
      <Stack.Screen
        name="Jeux"
        component={Jeux}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideBar {...props} />}
      openByDefault={false}>
      <Drawer.Screen name="navigationStack" component={navigationStack} />
    </Drawer.Navigator>
  );
}
