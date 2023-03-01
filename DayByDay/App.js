import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.messagePageContainer}>
                <ImageBackground
                    source={{uri: 'https://codehs.com/uploads/85a7b3b2f023eae7717b2cac12b47426'}}
                    style={{height:deviceHeight, width:deviceWidth, alignItems:'center'}}
                >
                <View style={styles.messagePageTopContainer}>
                    <Text style={styles.messagePageTitle}>Day By Day</Text>
                </View>
                <View style={styles.messagePageTextInputCon}>
                    <TextInput style={styles.messagePageTextInput}
                        multiline='true'
                        placeholder='Click here to create a new habit!'
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        alert('Message Pinned');
                    }}
                >
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/b88c1508b56dd02907824aebba5c7d16'}}
                        style={{height:65, width:65, marginTop:20,}}
                    />
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    messagePageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'grey',
    },
    messagePageTopContainer: { 
        flexDirection:'row',
        backgroundColor:'dimgrey',
        height: deviceHeight/10,
        width: deviceWidth,
        alignItems:'center',
        justifyContent:'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    messagePageTitle: {
        fontSize:30,
        fontWeight:'bolder',
        color:'white',
        fontFamily: 'American Typewriter',
    },
    messagePageTextInput: {
      marginBottom:0,
      backgroundColor:'dimgrey',
      justifyContent:'center',
      fontSize:20,
      color:'cornsilk',
      height:deviceHeight/11,
      width:deviceWidth/1.25,
      textAlignVertical:'top',
    },
    messagePageTextInputCon: {
      marginBottom:0,
      borderRadius:20,
      backgroundColor:'dimgrey',
      marginTop:200,
      height:deviceHeight/10,
      width:deviceWidth/1.15,
      alignItems:'center',
      justifyContent:'center',
    },
});