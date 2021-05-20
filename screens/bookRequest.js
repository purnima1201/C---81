import * as React from 'react'
import{View,Text,StyleSheet,Alert,TextInput,KeyboardAvoidingView} from 'react-native'
import MyHeader from '../components/myHeader'
import firebase from 'firebase'
import db from '../config'
import { KeyboardAvoidingViewBase } from 'react-native'

export default class BookRequest extends React.Component{
    constructor(){
        super();
        this.state = {
            userId: firebase.auth().currentUser.email,
            bookName: '',
            reason:''
        }
    }
    render(){
        return(
            <View style = {{flex:1}}>
            <MyHeader 
            title = 'Request Books' navigation={this.props.navigation}
            />
            <KeyboardAvoidingView>
            <TextInput
            style = {styles.inputBox}
            placeholder = {'Enter Book Name'}
            onChangeText ={(text) => {
this.setState({
    bookName:text
})
            }}    
            value = {this.state.bookName}
            />
            <TextInput
            style = {styles.inputBox}
            placeholder = {'Reason to request'}
            multiline = {true}
           numberOfLines = {8}
            onChangeText ={(text) => {
this.setState({
    reason:text
})
            }}
            value = {this.state.reason}
/>
            </KeyboardAvoidingView>
            </View>
        )
    }
}
const style = StyleSheet.create({
    imputBox:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderColor:'black',
        borderRadius:10,
        borderWidth:10,
        marginTop:20,
        padding:10
    },
    button:{
       width:'75%',
       height:50,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10,
       backgroundColor:'blue',
       marginTop:20 
    }
})