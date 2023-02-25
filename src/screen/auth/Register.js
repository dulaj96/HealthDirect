import { 
    View, 
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Register = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#8EEAD2'}}>
      <View style={{alignItems: 'center', justifyContent: 'center',padding: 10, margin: 10}}>
        <Image 
            source={require('../../assets/register.png')}
            style={styles.registerLogo}
        />
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Full Name'/>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Email Address'/>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='NIC Number'/>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Phone Number'/>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Password'/>
      </View>
      <View style={styles.box}>
        <TextInput placeholder='Confirm Password'/>
      </View>
      <View style={{
        padding: 5, 
        margin: 5, 
        alignItems: 'center', 
        justifyContent: 'center'}}
      >
        <TouchableOpacity style={styles.button}>
        <Text style={{fontWeight: 'bold', textAlign:'center', fontSize:16, color:'#fff'}}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View >
        <View style={{height:3, backgroundColor:'#ddd', width:'100%', margin: 30}}></View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{
            color:'#4EA19A', 
            fontSize:15, 
            textAlign:'center',
            }}>
            Already have an Account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 0,
        borderRadius: 4,
        borderColor: '#fff',
        margin: 8,
        marginHorizontal: 25,
        padding: 3,
        backgroundColor: '#fff'
    },
    registerLogo: {
        width: 100,
        height: 100
    },
    button: {
        borderRadius: 10,
        backgroundColor: '#3262a8',
        padding: 15,
        marginTop: 20,
        width: 120,
    }
});

export default Register;