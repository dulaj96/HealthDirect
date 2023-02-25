import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {

  const navigation = useNavigation();

  return(
    <View style={{flex: 1, backgroundColor: '#8EEAD2'}}>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/splash.png')} 
          style={styles.loginLogo}
        />
      </View>
      <View style={styles.box}>
        <TextInput 
          placeholder='Email Address or Phone Number'
          style={{}}
        />
      </View>
      <View style={styles.box}>
        <TextInput 
          placeholder='Password'
          style={{}}
        />
      </View>
      <View style={{
        margin: 5, 
        padding: 5, 
        alignItems: 'center', 
        justifyContent: 'center'}}
      >
        <TouchableOpacity 
          style={styles.button1}
          onPress={() => navigation.navigate('AccountType')}
        >
          <Text style={{fontWeight: 'bold', textAlign:'center', fontSize:16, color:'#fff'}}>Log in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{
            color:'#4EA19A', 
            fontSize:15, 
            textAlign:'center',
            
            }}>
            Forgot Your Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <View style={{height:3, backgroundColor:'#ddd', width:'100%', margin: 40}}></View>
      </View>
      <View style={{
        margin: 5, 
        padding: 5, 
        alignItems: 'center', 
        justifyContent: 'center'}}
      >
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{fontWeight: 'bold', textAlign:'center', fontSize:16, color:'#fff'}}>Create New  Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5
  },
  loginLogo: {
    width: '100%',
    height: 220
  },
  box: {
    borderWidth: 0,
    borderRadius: 4,
    borderColor: '#fff',
    margin: 10,
    marginHorizontal: 25,
    padding: 5,
    backgroundColor: '#fff'
  },
  button1: {
    borderRadius: 10,
    backgroundColor: '#3262a8',
    padding: 15,
    marginTop: 50,
    width: 120,
  },
  button2: {
    borderRadius: 10,
    backgroundColor: '#FC883C',
    padding: 15,
    width: 180,
  }
});

export default Login;