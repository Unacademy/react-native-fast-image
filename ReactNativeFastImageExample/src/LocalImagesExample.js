import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import withCacheBust from './withCacheBust'
import FastImage from 'react-native-fast-image'
import Section from './Section'
import FeatureText from './FeatureText'
import FieldsImage from './images/fields.jpg'
import FieldsBase64 from './images/fields.js'
import FieldsWebP from './images/fields.webp'
import JellyfishGIF from './images/jellyfish.gif'
import JellyfishWebP from './images/jellyfish.webp'
import BulletText from './BulletText'

const Image = ({ source, ...p }) => (
    <FastImage style={styles.imageSquare} source={source} {...p} />
)

const Row = p => <View style={styles.row} {...p} />

const Example = ({ name, source }) => (
    <Row>
        <BulletText>{name}</BulletText>
        <Image source={source} />
    </Row>
)

class PhotoExample extends Component {
    state = {}

    pick = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
        })
        if (result.didCancel) {
            return
        }
        const asset = result.assets?.[0]
        if (asset?.uri) {
            this.setState({
                image: { uri: asset.uri },
            })
        }
    }

    render() {
        return (
            <Row>
                <BulletText>photo library</BulletText>
                <TouchableOpacity onPress={this.pick}>
                    <Image style={styles.imageSquare} source={this.state.image}>
                        <Text style={{ color: 'white', fontWeight: '900' }}>
                            Pick Photo
                        </Text>
                    </Image>
                </TouchableOpacity>
            </Row>
        )
    }
}

const LocalImagesExample = () => (
    <View>
        <Section>
            <FeatureText>• Local images.</FeatureText>
        </Section>
        <View style={styles.container}>
            <Example name="Require" source={require('./images/fields.jpg')} />
            <Example name="Import" source={FieldsImage} />
            <Example name="GIF" source={JellyfishGIF} />
            <Example name="Animated WebP" source={JellyfishWebP} />
            <Example name="Base64" source={{ uri: FieldsBase64 }} />
            <Example name="WebP" source={FieldsWebP} />
            <PhotoExample />
        </View>
    </View>
)

const styles = StyleSheet.create({
    row: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    imageSquare: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        backgroundColor: '#ddd',
        margin: 20,
        marginTop: 10,
        width: 100,
        flex: 0,
    },
})

export default withCacheBust(LocalImagesExample)
