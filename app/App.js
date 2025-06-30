import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfileScreen from "../screens/ProfileScreen";
import CourseListScreen from "../screens/CourseListScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";


const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "blck"
            }}
        >
            <Tab.Screen name="Course List" component={CourseListScreen}/>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarLabel: "My profile",
                    tabBarIcon: ({color}) => (
                        <Ionicons name="person" size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen name="Setting"component={SettingsScreen}/>
        </Tab.Navigator>
    )
}