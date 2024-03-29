import { View, Text, Image } from 'react-native'
import React from 'react'
import { SIZES, FONTS, SHADOWS, assets, COLORS } from '../constants'

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
    return (
        <View>
            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: titleSize,
                color: COLORS.text
            }}>{title}</Text>

            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: subTitleSize,
                color: COLORS.text
            }}>{subTitle}</Text>
        </View>
    )
}

export const EthPrice = ({ price }) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <Image
                source={assets.eth}
                resizeMode="contain"
                style={{
                    width: 20,
                    height: 20,
                    marginRight: 2
                }}
            />
            <Text style={{
                fontFamily: FONTS. regular,
                fontSize: SIZES.font,
                color: COLORS.text
            }}>{price}</Text>
        </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    )
}

export const People = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp imgUrl={imgUrl}
                    index={index}
                    key={`People-${index}`}
                />
            ))}
        </View>
    )
}

export const EndDate = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%'
        }}>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.text
            }}>
                Ending in
            </Text>
            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.medium,
                color: COLORS.text
            }}>
                12h 30m
            </Text>
        </View>
    )
}

export const SubInfo = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: "row",
            justifyContent: 'space-between'
        }}>
            <People />
            <EndDate />
        </View>
    )
}