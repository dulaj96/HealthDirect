import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const Store = () => {
    console.log('inside store');

    return(
        <View style={{flex: 1, backgroundColor: '#8EEAD2'}}>
            <View style={styles.topBar}>
                <Text style={{fontSize: 24, fontWeight: '700', color: '#0A6F7A'}}>Health Direct</Text>
                <TouchableOpacity style={styles.topSearch}>
                    <Image 
                        source={require('../../assets/mainHome/search.png')} 
                        style={{height:20, width:20}}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.topChat}>
                    <Image 
                        source={require('../../assets/mainHome/chat.png')} 
                        style={{height:20, width:20}}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.tabBar}>
                <View style={styles.tabIcons}>
                    <TouchableOpacity style={{height: '100%', width: '20%'}}>
                        <Image 
                            style={{width: 25, height: 25}} 
                            source={require('../../assets/mainHome/home.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: '100%', width: '20%'}}>
                        <Image 
                            style={{width: 25, height: 25}} 
                            source={require('../../assets/mainHome/pharmacy.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: '100%', width: '20%'}}>
                        <Image 
                            style={{width: 25, height: 25}} 
                            source={require('../../assets/mainHome/charity.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: '100%', width: '20%'}}>
                        <Image 
                            style={{width: 25, height: 25}} 
                            source={require('../../assets/mainHome/bell.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            style={{width: 25, height: 25}} 
                            source={require('../../assets/mainHome/menu.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.midBar}>
                <View style={{marginRight: 45}}>
                    <TouchableOpacity >
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#0f0f0f'}}>My Pharmacies</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{marginLeft: 45}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#0f0f0f'}}>Post for exchanging</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{margin: 3}}>
                <View style={{height:7, backgroundColor:'#D9D9D9'}} />
            </View>
            <View style={{margin: 15}}>
                <Text style={{fontSize: 16, fontWeight: '500', color: '#02646F'}}>Recommended for you</Text>
            </View>
            <View style={{justifyContent:'center', alignItems: 'center', padding: 8}}>
                <Image 
                    source={require('../../assets/store/pham1.png')}
                    style={{width: '100%', height: 110}}
                />
            </View>
            <View style={{justifyContent:'center', alignItems: 'center', padding: 8}}>
                <Image 
                    source={require('../../assets/store/pham2.png')}
                    style={{width: '100%', height: 110}}
                />
            </View>
            <View style={{justifyContent:'center', alignItems: 'center', padding: 8}}>
                <Image 
                    source={require('../../assets/store/pham3.png')}
                    style={{width: '100%', height: 110}}
                />
            </View>
            <View style={{margin: 10}}>
                <TouchableOpacity>
                    <Text style={{color:'#4EA19A', fontSize:15, textAlign:'center', fontWeight: 'bold'}}>See more</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row', 
        padding: 8, 
        margin: 8
    },
    topSearch: {
        width: 25,
        height: 25,
        backgroundColor: '#11A5BA',
        borderRadius: 50,
        left: 300,
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center'
    },
    topChat: {
        width: 25,
        height: 25,
        backgroundColor: '#11A5BA',
        borderRadius: 50,
        left: 330,
        position: 'absolute',
        justifyContent:'center',
        alignItems: 'center' 
    },
    tabBar: {
        backgroundColor: '#11A5BA',
        width: '100%',
        height: 50,
        justifyContent:'center',
        alignItems: 'center',
    },
    tabIcons: {
        flexDirection: 'row',
        // width: 50,
        // height: 50,
        justifyContent:'center',
        alignItems: 'center', 
    },
    midBar: {
        flexDirection: 'row', 
        padding: 8, 
        margin: 8,
        justifyContent:'center',
        alignItems: 'center'
    }
});

export default Store;
