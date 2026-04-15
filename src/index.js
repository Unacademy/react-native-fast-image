import React, { forwardRef, memo } from 'react'
import {
    View,
    Image,
    NativeModules,
    requireNativeComponent,
    StyleSheet,
} from 'react-native'

const FastImageViewNativeModule = NativeModules.FastImageView

const RESIZE_MODE = {
    contain: 'contain',
    cover: 'cover',
    stretch: 'stretch',
    center: 'center',
}

const PRIORITY = {
    low: 'low',
    normal: 'normal',
    high: 'high',
}

const CACHE_CONTROL = {
    immutable: 'immutable',
    web: 'web',
    cacheOnly: 'cacheOnly',
}

function FastImageBase({
    source,
    tintColor,
    onLoadStart,
    onProgress,
    onLoad,
    onError,
    onLoadEnd,
    style,
    children,
    fallback,
    forwardedRef,
    resizeMode = RESIZE_MODE.cover,
    ...props
}) {
    const resolvedSource = Image.resolveAssetSource(source)

    if (fallback) {
        return (
            <View style={[styles.imageContainer, style]} ref={forwardedRef}>
                <Image
                    {...props}
                    resizeMode={resizeMode}
                    tintColor={tintColor}
                    style={StyleSheet.absoluteFill}
                    source={resolvedSource}
                    onLoadStart={onLoadStart}
                    onProgress={onProgress}
                    onLoad={onLoad}
                    onError={onError}
                    onLoadEnd={onLoadEnd}
                />
                {children}
            </View>
        )
    }

    return (
        <View style={[styles.imageContainer, style]} ref={forwardedRef}>
            <FastImageView
                {...props}
                resizeMode={resizeMode}
                tintColor={tintColor}
                style={StyleSheet.absoluteFill}
                source={resolvedSource}
                onFastImageLoadStart={onLoadStart}
                onFastImageProgress={onProgress}
                onFastImageLoad={onLoad}
                onFastImageError={onError}
                onFastImageLoadEnd={onLoadEnd}
            />
            {children}
        </View>
    )
}

const FastImageMemo = memo(FastImageBase)

const FastImage = forwardRef((props, ref) => (
    <FastImageMemo forwardedRef={ref} {...props} />
))

FastImage.displayName = 'FastImage'

const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
    },
})

FastImage.resizeMode = RESIZE_MODE

FastImage.priority = PRIORITY

FastImage.cacheControl = CACHE_CONTROL

FastImage.preload = sources => {
    FastImageViewNativeModule.preload(sources)
}

const FastImageView = requireNativeComponent('FastImageView', FastImage, {
    nativeOnly: {
        onFastImageLoadStart: true,
        onFastImageProgress: true,
        onFastImageLoad: true,
        onFastImageError: true,
        onFastImageLoadEnd: true,
    },
})

export default FastImage
