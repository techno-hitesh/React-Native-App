import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { ExStyles } from '../styles/global'
import { users } from './data'
const Grid = () => {
    return (
        <View>
            <Text style={ExStyles.cusHeading}>Grid Setup</Text>
            <View style={styles.rowFlex}>
                {/* <ScrollView> */}
                    {users.map((val, i) => (
                        <View key={i}>
                            <Text style={styles.item}>{val.name}</Text>
                        </View>
                    ))
                    }
                {/* </ScrollView> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowFlex: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    item: {
        fontSize: 25,
        backgroundColor: '#ededed',
        margin: 7,
        padding: 5,
        width: 120,
        height: 120,
        textAlignVertical: "center",
        textAlign: "center",
        color:"black"
    }
})

export default Grid