import React from 'react'
import { View, Text, SafeAreaView,StyleSheet,Image } from 'react-native'
import Animated from 'react-native-reanimated'
//theme
import{COLORS,FONTS,images, SIZES} from '../../constants/'

const {onboarding1,onboarding2,onboarding3}=images

//dummay data
const onBoardings=[
    {
        title:`Let's Travelling`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        img:onboarding1
    },
    {
        title:`Navigation`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        img:onboarding2
    },
    {
        title:`Destination`,
        description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        img:onboarding3
    }
]
export default function OnBoarding() {
const renderContent=()=>{
    return <Animated.ScrollView
    horizontal
    scrollEnabled
    pagingEnabled
    snapToAlignment="center"
    showsHorizontalScrollIndicator={false}
    >
            {onBoardings?.map((item,index)=>(
                <View key={index} style={{
                    width: SIZES.width
                }}>
                    <View style={{
                        flex:1,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                       />
                    </View>
                    <View style={{
                        position: "absolute",
                        bottom: '10%',
                        left:40,
                        right:40
                    }}>
                        <Text style={{
                            ...FONTS.h1,
                            color: COLORS.gray,
                            textAlign:'center'
                        }}>{item?.title}</Text>
                        <Text style={{
                            ...FONTS.body3,
                            textAlign:'center',
                            marginTop:SIZES.base,
                            color:COLORS.gray
                        }}>{item?.description}</Text>
                    </View>
                </View>
            ))}
    </Animated.ScrollView>
}

    return (
     <SafeAreaView style={styles.container}>
{renderContent()}
     </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.white
    }
})