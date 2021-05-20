import * as React from 'react';
import {Header} from 'react-native-elements';

const MyHeader = (props) => {
return(
    <Header
    centerComponent = {{text:props.title,style:{color:'orange',fontSize:20,fontweight:'bold'}}}
    backgroundColor = 'white'
    
    />
)
}
export default MyHeader