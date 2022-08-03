import { View, Text } from 'react-native'
import { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
    const [text, setText] = useState(data.description.slice(0, 100))
    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <NFTTitle
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.extraLarge}
                    subTitlesSize={SIZES.font}
                />

                <EthPrice price={data.price} />
            </View>

            <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
                <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.bold,
                    color: COLORS.text
                }}>Description</Text>

                <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.large
                }}>
                    {text}
                    {!readMore && '...'}
                    <Text style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.bold,
                        color: COLORS.text,
                    }} >
                        {readMore ? ' Mostrar Menos' : ' Leer Mas'}
                    </Text>
                </Text>
            </View>
        </>
    )
}

export default DetailsDesc