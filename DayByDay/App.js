import React, { Component } from 'react';
import dayjs from 'dayjs';
import { AppRegistry, Text, View, StyleSheet, Dimensions, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    render() {
        return (
            <View style={styles.messagePageContainer}>
                <View style={styles.bgBox}>
                <View style={styles.messagePageTopContainer}>
                    <Text style={styles.messagePageTitle}>Day By Day</Text>
                </View>
                <Text style={styles.time}>{dayjs().format("hh:mm")}</Text>
                <Text style={styles.date}>{dayjs().format("dddd, DD MMMM")}</Text>
                <View style={styles.messagePageTextInputCon}>
                    <TextInput style={styles.messagePageTextInput}
                        multiline='true'
                        placeholder='Click here to create a new habit!'
                    />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        alert('Habit Created');
                    }}
                >
                    <Image
                        source={{ uri: 'https://codehs.com/uploads/b88c1508b56dd02907824aebba5c7d16'}}
                        style={{height:65, width:65, marginTop:20,}}
                    />
                </TouchableOpacity>
                <View style={styles.habitsDisplay}>
                </View>
                </View>
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
      marginTop:100,
      height:deviceHeight/10,
      width:deviceWidth/1.15,
      alignItems:'center',
      justifyContent:'center',
    },
    bgBox: {
        backgroundColor: 'cornsilk',
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
    },
    habitsDisplay: {
        backgroundColor: 'dimgrey',
        height: deviceHeight/2.9,
        width: deviceWidth/1.1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius:50,
        marginTop:10,
    },
    time: {
        fontFamily: 'Calibri',
        fontSize:80,
        marginTop:20,
        color: 'lightsteelblue',
    },
    date: {
        fontFamily: 'impact',
        fontSize:20,
        color: 'lightsteelblue',
    },
});