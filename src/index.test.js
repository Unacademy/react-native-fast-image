import { StyleSheet } from 'react-native'
import React from 'react'
import renderer, { act } from 'react-test-renderer'
import FastImage from './index.js'

const style = StyleSheet.create({ image: { width: 44, height: 44 } })

test('FastImage renders correctly.', () => {
    let instance
    act(() => {
        instance = renderer.create(
            <FastImage
                source={{
                    uri: 'https://facebook.github.io/react/img/logo_og.png',
                    headers: {
                        token: 'someToken',
                    },
                    priority: FastImage.priority.high,
                }}
                style={style.image}
            />,
        )
    })
    expect(instance.toJSON()).toMatchSnapshot()
    act(() => {
        instance.unmount()
    })
})

test('Renders a normal Image when not passed a uri.', () => {
    let instance
    act(() => {
        instance = renderer.create(
            <FastImage
                source={require('../ReactNativeFastImageExampleServer/pictures/jellyfish.gif')}
                style={style.image}
            />,
        )
    })
    expect(instance.toJSON()).toMatchSnapshot()
    act(() => {
        instance.unmount()
    })
})

test('Renders Image with fallback prop.', () => {
    let instance
    act(() => {
        instance = renderer.create(
            <FastImage
                source={require('../ReactNativeFastImageExampleServer/pictures/jellyfish.gif')}
                style={style.image}
                fallback
            />,
        )
    })
    expect(instance.toJSON()).toMatchSnapshot()
    act(() => {
        instance.unmount()
    })
})
