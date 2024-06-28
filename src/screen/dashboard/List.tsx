import React from 'react';
import { View, FlatList, Text, StyleSheet, ScrollView } from 'react-native';
import { ExStyles } from '../../styles/global';

const List = () => {
    const users = [
        {
            id: 1,
            name: 'hitesh',
        },
        {
            id: 2,
            name: 'gamer',
        },
        {
            id: 3,
            name: 'jack',
        },
        {
            id: 4,
            name: 'domy',
        },
        {
            id: 5,
            name: 'sdfdsf',
        },
        {
            id: 6,
            name: 'gamersd',
        },
        {
            id: 7,
            name: 'jacked',
        },
        {
            id: 8,
            name: 'domyde',
        },
        {
            id: 9,
            name: 'hitded',
        },
        {
            id: 10,
            name: 'gamesdsr',
        },
        {
            id: 11,
            name: 'jacker',
        },
        {
            id: 12,
            name: 'domysds',
        },
        {
            id: 13,
            name: 'jacker',
        },
        {
            id: 14,
            name: 'domysds',
        },
    ];

    const CapitalLetter = (string: string) => {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <View>
            <Text style={[ExStyles.cusHeading]}> List Showing with Flatlist</Text>

            <ScrollView>
                {users.map((val, i) => (
                    <View key={i}>
                        <Text style={[ExStyles.HeadFont, styles.list]}>{CapitalLetter(val.name)}</Text>
                    </View>
                ))
                }
            </ScrollView>
            {/* <FlatList
        data={users}
        renderItem={({item}) => <Text style={[ExStyles.HeadFont,styles.list]}>{CapitalLetter(item.name)}</Text>}
        // keyExtractor={(item)=>{item.id}}
      /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        shadowColor: 'gray',
        shadowOpacity: 0,
        backgroundColor: "#ededed",
        margin: 15,
        padding: 15,
        borderRadius: 10,
        marginTop: 1,
    }
})
export default List;
