import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../contains";
import { ListRepairScreen, AddRepairScreen } from "../Screen";

const RepairStack = createNativeStackNavigator();

const RepairStackScreen = () => {
  return (
    <RepairStack.Navigator
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
      <RepairStack.Screen
        name="ListRepairScreen"
        component={ListRepairScreen}
        options={{ title: "Danh sách sửa chữa" }}
      />
      <RepairStack.Screen
        name="AddRepairScreen"
        component={AddRepairScreen}
        options={{ title: "Thêm sửa chữa" }}
      />
    </RepairStack.Navigator>
  );
};

export default RepairStackScreen;
