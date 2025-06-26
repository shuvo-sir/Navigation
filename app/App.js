import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function App(){
    return (
       
            <Drawer.Navigator>
                <Drawer.Screen 
                    name='Dashboard' 
                    component={DashboardScreen}
                    options={{
                        title: "My Dashboard",
                        drawerLabel: "Dashboard Level",
                        drawerActiveTintColor: "#333",
                        drawerActiveBackgroundColor: "lightblue",
                        drawerContentStyle: {
                            backgroundColor: "#c6cbef",
                        },
                        drawerContentContainerStyle: {
                            backgroundColor: "red",
                        },
                    }}
                />
                <Drawer.Screen name='Settings' component={SettingsScreen}/>
            </Drawer.Navigator>
      
    );
}