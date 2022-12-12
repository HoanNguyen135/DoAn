import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { Rooms,ListStudentInRoom,InfoStudent,AreaScreen,InfoAreaScreen,CreateAreaScreen,UpdateInfoStudent } from "../Screen";

const AreaStack = createNativeStackNavigator();

const AreaStackScreen = () => {
  return (
    <AreaStack.Navigator
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
      <AreaStack.Screen name="AreaScreen" component={AreaScreen} options={{title: 'Danh sách các khu'}}/>
      <AreaStack.Screen name="InfoAreaScreen" component={InfoAreaScreen} options={{title: 'Thông tin khu'}}/>
      <AreaStack.Screen name="CreateAreaScreen" component={CreateAreaScreen} options={{title: 'Thêm khu mới'}}/>
      <AreaStack.Screen name="RoomScreen" component={Rooms} options={{title: 'Danh sách phòng'}}/>
      <AreaStack.Screen name="ListStudentInRoomScreen" component={ListStudentInRoom} options={{title: 'Danh sách sinh viên'}}/>
      <AreaStack.Screen name="UpdateInfoStudentScreen" component={UpdateInfoStudent} options={{title: 'Thông tin sinh viên'}}/>
      <AreaStack.Screen name="InfoStudentScreen" component={InfoStudent} options={{title: "Thông tin sinh viên"}}/>
    </AreaStack.Navigator>
  );
};

export default AreaStackScreen;
