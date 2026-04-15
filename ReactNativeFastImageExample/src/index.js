import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import FastImageExamples from './FastImageExamples'
import FastImageGrid from './FastImageGrid'
import DefaultImageGrid from './DefaultImageGrid'
import Icon from './Icons/Icon'

const Tab = createBottomTabNavigator()

const navTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#ffffff',
    },
}

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <NavigationContainer theme={navTheme}>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="FastImageExample"
                            component={FastImageExamples}
                            options={{
                                title: 'FastImage',
                                tabBarLabel: 'FastImage Example',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="information-circle" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="ImageGrid"
                            component={DefaultImageGrid}
                            options={{
                                title: 'RN Image',
                                tabBarLabel: 'Image Grid',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="image" color={color} size={size} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="FastImageGrid"
                            component={FastImageGrid}
                            options={{
                                title: 'FastImage grid',
                                tabBarLabel: 'FastImage Grid',
                                tabBarIcon: ({ color, size }) => (
                                    <Icon name="images" color={color} size={size} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}
