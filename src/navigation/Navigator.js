import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../contants/Colors'
import ProfileScreen from '../screens/ProfileScreen';
import YourBagScreen from '../screens/YourBagScreen';
import YouBagListScreen from '../screens/YouBagListScreen';
import PaymentOptionsScreen from '../screens/PaymentOptionsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AddCreditCardScreen from '../screens/AddCreditCardScreen';
import DashboardScreen from '../screens/DashboardScreen';
import MyCartScreen from '../screens/MyCartScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SingleProduct from '../screens/SingleProduct';
import SingleService from '../screens/SingleService';
const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} />
        </ProfileStack.Navigator>
    );
}
const HomeStack = createStackNavigator();
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} />
        </HomeStack.Navigator>
    );
}
const DashboardStack = createStackNavigator();
function DashboardStackScreen() {
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
            <DashboardStack.Screen name="Services" component={ServicesScreen} />
            <DashboardStack.Screen name="Products" component={ProductsScreen}  />
            <DashboardStack.Screen name="SingleProduct" component={SingleProduct} options={{ headerShown: false }} />
            <DashboardStack.Screen name="SingleService" component={SingleService} options={{ headerShown: false }} />
        </DashboardStack.Navigator>
    );
}
const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="DashboardScreen" component={DashboardStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="YourBag" component={YourBagScreen} />
            <Tab.Screen name="YouBagList" component={YouBagListScreen} />
            <Tab.Screen name="PaymentOptions" component={PaymentOptionsScreen} />
            <Tab.Screen name="MyCart" component={MyCartScreen} />
            <Tab.Screen name="EditProfile" component={EditProfileScreen} />
            <Tab.Screen name="AddCreditCard" component={AddCreditCardScreen} />
            <Tab.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            {/* <Tab.Screen name="Test" component={TestScreen} /> */}

        </Tab.Navigator>
    )
}

export default Navigator

const styles = StyleSheet.create({})
