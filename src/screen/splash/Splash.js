import { 
    View, 
    Text,
    Image, 
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const [isGo, setIsGo]=React.useState(true);
    const navigation = useNavigation();

    useEffect(()=>{
        if(isGo==true){
            setTimeout(()=>{
                navigation.navigate('Home');
                setIsGo(false);
            },2000);   
        }
    });

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff'}}>
            <Image source={require('../../assets/splash.png')} style={{width:250, height:200}}/>
            
        </View>
    )
}

export default Splash;