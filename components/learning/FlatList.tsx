import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { users } from './data'

const FlatListCompo = () => {
  return (
    <View>
        <Text style={{fontSize:27,color:'black'}}>Component in loop with FlatList</Text>
        <FlatList
            data={users}
            renderItem={({item}) => <UserData  item={item} />}
        />
    </View>
  )
}

const UserData = (props:{item:{id:number,name:String,email:String}}) =>{
    const item = props.item;
    return(
        <View key={item.id} style={styles.box}>
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.item}>{item.email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        fontSize:20,
        color:"black",
        padding:5,
        margin:5,
        flex:1,
    },
    box:{
        flexDirection:"row",
        borderWidth:2,
        backgroundColor:"#ededed",
        margin:5,
        borderRadius:10
    }
})

export default FlatListCompo