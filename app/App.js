import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ProfileScreen from "../screens/ProfileScreen";
import CourseListScreen from "../screens/CourseListScreen";
import SettingsScreen from "../screens/SettingsScreen";


const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Course List" component={CourseListScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
            <Tab.Screen name="Setting"component={SettingsScreen}/>
        </Tab.Navigator>
    )
}