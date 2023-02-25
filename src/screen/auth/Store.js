import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Store = () => {
    console.log('inside store');

    return(
        // <View><Text>sample</Text></View>
        <View style={{flex: 1, backgroundColor: '#8EEAD2', padding: 2, margin: 2}}>
            <View style={styles.topBar}>
                <Text style={{fontSize: 24, fontWeight: '700', color: '#0A6F7A'}}>Health Direct</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row', 
        position: 'absolute', 
        width: '100%', 
        height: 95,
    }
});

export default Store;
