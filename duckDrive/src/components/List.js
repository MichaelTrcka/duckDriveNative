import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class List extends Component {
    render() {
        return (
            <View style={styles.list}>
                <Text> Duck List Here </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#a1785d",
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        padding :20,
        marginTop:20 
      }
})
export default List;