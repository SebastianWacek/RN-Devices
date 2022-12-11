import 'react-native-gesture-handler';

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import CameraScreen from "./CameraScreen";
import Bateria from "./Bateria";
import AccelerometerScreen from "./AccelerometerScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitle: "Lab5",

                }}>
                <Drawer.Screen name="Kamera" component={CameraScreen} />
                <Drawer.Screen name="Bateria" component={Bateria}/>
                <Drawer.Screen name="Akcelerometr" component={AccelerometerScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}