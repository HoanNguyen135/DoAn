import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ListUserScreen,InfoUserScreen} from '../Screen'
import { COLORS } from '../contains';
const Stack = createNativeStackNavigator();


function ListUserStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: COLORS.white,
        headerStyle: {
          height: 120,
          backgroundColor: COLORS.logo,
        },
        headerTitleStyle: {
          fontSize: 30,
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="ListUserScreen" component={ ListUserScreen } options={{title: 'Quản lý tài khoản'}}/>
      <Stack.Screen name="InfoUserScreen" component={ InfoUserScreen } options={{title: 'Thông tin chi tiết'}}/>
    </Stack.Navigator>
  );
}

export default ListUserStackScreen;