import React from 'react'
import Base from 'react-native-vector-icons/Ionicons'

const Icon = ({ size = 26, name, tintColor, color }) => (
    <Base
        name={name}
        size={size}
        style={{ width: size, height: size }}
        color={color ?? tintColor}
    />
)

export default Icon
