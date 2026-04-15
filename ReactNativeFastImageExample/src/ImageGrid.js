import React, { useCallback, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import StatusBarUnderlay from './StatusBarUnderlay'

const getImageUrl = (id, width, height) =>
    `https://unsplash.it/${width}/${height}?image=${id}`

const MARGIN = 2

const ImageGrid = ({ ImageComponent }) => {
    const insets = useSafeAreaInsets()
    const [images, setImages] = useState([])
    const [error, setError] = useState(false)
    const [itemHeight, setItemHeight] = useState(0)

    React.useEffect(() => {
        fetch('https://unsplash.it/list')
            .then(res => res.json())
            .then(setImages)
            .catch(() => setError(true))
    }, [])

    const onLayout = useCallback(e => {
        const width = e.nativeEvent.layout.width
        setItemHeight(width / 4)
    }, [])

    const getItemLayout = useCallback(
        (_, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
        }),
        [itemHeight],
    )

    const renderItem = useCallback(
        ({ item }) => {
            const uri = getImageUrl(item.id, 100, 100)
            return (
                <View style={styles.imageContainer}>
                    <ImageComponent source={{ uri }} style={styles.image} />
                </View>
            )
        },
        [ImageComponent],
    )

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Error fetching images.</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                onLayout={onLayout}
                style={[styles.list, { marginTop: insets.top }]}
                columnWrapperStyle={[
                    styles.columnWrapper,
                    { height: itemHeight },
                ]}
                data={images}
                renderItem={renderItem}
                numColumns={4}
                keyExtractor={item => String(item.id)}
                getItemLayout={getItemLayout}
            />
            <StatusBarUnderlay />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
    },
    list: {
        flex: 1,
    },
    columnWrapper: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: -MARGIN,
        marginRight: -MARGIN,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        margin: MARGIN,
        backgroundColor: '#eee',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'stretch',
    },
})

export default ImageGrid
