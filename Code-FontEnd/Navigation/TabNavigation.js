import React,{useState} from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import MyTabs from ".";
import { ListRegisterDormScreen } from "../Screen";
import AuthStackScreen from "./AuthNavigation";
import { useSelector } from 'react-redux';
import ListUserStackScreen from './ListUserNavigation';
import AreaStackScreen from './AreaNavigation';

const TabStack = createNativeStackNavigator();

const TabStackScreen = () => {

  const user = useSelector((states)=> states.User.user)


  return (
    user.length>0 ? (<TabStack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontSize: 30,
        },
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
      }}
    >
      <TabStack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
      <TabStack.Screen name="ListUser" component={ListUserStackScreen} options={{headerShown: false}}/>
      <TabStack.Screen name="AreaStackScreen" component={AreaStackScreen} options={{headerShown: false}}/>
      <TabStack.Screen name="ListRegisterDorm" component={ListRegisterDormScreen} options={{title: 'Danh sách đơn nội trú'}}/>
    </TabStack.Navigator>
  ): (
    <AuthStackScreen/>
  )
  );
};

export default TabStackScreen;
