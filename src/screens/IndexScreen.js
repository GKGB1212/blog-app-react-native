import React, {useContext} from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen=()=>{
    const {state,addPost}=useContext(Context);

    return (
        <View style={styles.contain}>
            <Button title='Nhấn để thêm' onPress={addPost}/>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={state}
                keyExtractor={valu=>valu.title}
                renderItem={({item})=>{
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}
const styles=StyleSheet.create({
    contain:{
        flex:1
    }
});

export default ()=>{
    return<IndexScreen/>;
}