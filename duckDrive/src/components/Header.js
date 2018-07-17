import React from 'react';
import { View, Text } from "react-native";

const Header = (props) => {
    const { textstyle, container } = styles;

    return(
        <View style={container}>
            <Text style = {textstyle}>{props.headerText}</Text>
        </View>
    );
};

 const styles = {
     container: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
     },
     textstyle: {
         fontSize: 20
     }
 }

export default Header;