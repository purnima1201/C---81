import * as React from 'react'
import{View,Text,StyleSheet,Alert,FlatList} from 'react-native'
import db from '../config'
import MyHeader from '../components/myHeader'
import { ListItem } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class BookDonate extends React.Component{
    constructor(){
        super()
        this.state = {
            requestedBooksList: []
        }
        this.requestref = null
    }
    getRequestedBookslist = () => {
        this.requestref = db.collection('requested_books')
        .onSnapshot(snapshot => {
            var requestedBooksList = snapshot.docs.map(document =>  document.data())
            this.setState({
                requestedBooksList:requestedBooksList
            })
        })

        
    }
componentDidMount(){
this.getRequestedBookslist()
}
componentWillUnmount(){
    this.requestref()
}
keyExtractor = (item,index) => index.toString() 

renderItem = (item,i) => {
return(
    <ListItem
    key = {i}
    title = {item.book_name}
    subtitle = {item.reason_to_request}
  titleStyle = {{color:'black',fontWeight:'bold',}}
  rightElement = {
      <TouchableOpacity style = {StyleSheet.button}>
          <Text>View</Text>
      </TouchableOpacity>
  }
    />

)
}
    render(){
        return(
            <View style = {{flex:1}}>
<MyHeader title = 'DonateBooks' navigation={this.props.navigation}/>
<View style = {{flex:1}}>
{
    this.state.requestedBooksList.length === 0 ?
    (
    <View>

        <Text>List of all Books</Text>

        </View> 
        )
            :(
<FlatList
keyExtractor = {this.keyExtractor}
data = {this.state.requestedBooksList}
renderItem = {this.renderItem}
/>
            )
}

</View>
            </View>
        )
    }
}