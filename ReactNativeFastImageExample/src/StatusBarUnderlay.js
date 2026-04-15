import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function StatusBarUnderlay() {
    const insets = useSafeAreaInsets()
    return <View style={[styles.statusBarUnderlay, { height: insets.top }]} />
}

const styles = StyleSheet.create({
    statusBarUnderlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
})
