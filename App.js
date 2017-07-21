import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableHighlight,
  Image,
  Navigator
} from 'react-native';
 

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
 
 class navigatorProject extends Component{
render(){
let defaultName = 'firstPageName';
let defaultComponent = FirstPageComponent;
return(
<Navigator
initialRoute = {{name: defaultName, component: defaultComponent}}　　
(route) => {
return Navigator.SceneConfigs.FloatFromRight;　　
}
}
renderScene = {
(route, navigator) =>{
let Component = route.component;
return <Component{...route.params} navigator = {navigator} />　
}
/>
);
} 
} 

class FirstPageComponent extends Component{
clickJump(){
const{navigator} = this.props;
if(navigator){
navigator.push({　　
name: "SecondPageComponent",
component: SecondPageComponent
});
} 
}
render(){
return(
<View style = {styles.container}>
<Text>Pop</Text>
<TouchableHighlight
underlayColor = "rgb(180,135,250)"
activeOpacity = {0.5}
style = {{
borderRadius: 8,
padding: 8,
marginTop: 8,
backgroundColor: "#F30"
}}
onPress = {this.clickJump.bind(this)}>
<Text>Push</Text>
</TouchableHighlight>
</View>
);
}
} 

class SecondPageComponent extends Component{
clickJump(){
const{navigator} = this.props;
if(navigator){
navigator.pop();　　
}
}
render(){
return(
<View style = {styles.container}>
<Text>Push</Text>
<TouchableHighlight
underlayColor = "rgb(180, 135, 250)"
activeOpacity = {0.5}
style = {{
borderRadius: 8,
padding: 8,
marginTop: 5,
backgroundColor: "#F30"
}}
onPress = {this.clickJump.bind(this)}>
<Text>PoP</Text>
</TouchableHighlight>
</View>
);
}
} 
const styles = StyleSheet.create({
　container: {
　　flex: 1,
　　justifyContent: 'center',
　　alignItems: 'center',
　　backgroundColor: '#FFFFFF',
　},
});
AppRegistry.registerComponent('navigatorProject', () => navigatorProject);


class TextInputG extends Component {
 
  render() {
    return (
      <View style={styles.container}>
 
        
        <View style={styles.textInputViewStyle}>
          <TextInput
            style={styles.textInputStyle}
            
            placeholder='Telphone'/>
        </View>
        {/*Password*/}
        <View style={styles.textInputViewStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder='Password'
            
            secureTextEntry={true}/>
        </View>
 
       
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    // backgroundColor: 'black',
    marginTop: 140,
 
  },

  textInputViewStyle: {
    
    width: width - 30,
    height: 45,
  
    borderRadius: 18,
    
    borderColor: 'blue',
    
    borderWidth: 1,
    
    paddingLeft: 10,
    paddingRight: 10,
    
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    
    alignSelf: 'center',
 
 
  },
  
  textInputStyle: {
    width: width - 30,
    height: 35,
    paddingLeft: 8,
    backgroundColor: '#00000000',
    // alignSelf: 'center',
   
    marginTop: Platform.OS === 'ios' ? 4 : 8,
  },
 
  
  textLoginViewStyle: {
    width: width - 30,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 20,
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  textLoginStyle: {
    fontSize: 18,
    color: 'white',
 
 
  },
 
});
 
module.exports = TextInputG;