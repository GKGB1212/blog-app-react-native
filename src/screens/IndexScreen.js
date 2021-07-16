import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen=()=>{
    const {state,addPost, deleteBlogPost}=useContext(Context);

    return (
        <View style={styles.contain}>
            <Button title='Nhấn để thêm' onPress={addPost}/>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={state}
                keyExtractor={valu=>valu.title}
                renderItem={({item})=>{
                    return <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <MaterialIcons style={styles.icon} name="delete"/>
                            </TouchableOpacity>
                        </View>
                }}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    contain:{
        flex:1
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderColor:'gray'
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:22
    }
});

export default ()=>{
    return<IndexScreen/>;
}