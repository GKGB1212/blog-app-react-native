import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, deleteBlogPost } = useContext(Context);
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('CreateBlogPost')}>
                <Feather name="plus" size={24} color="white" />
              </TouchableOpacity>
          )
        });
      }, [navigation])
    
    return (
        <View style={styles.contain}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={state}
                keyExtractor={valu => valu.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=>navigation.navigate('Notee',{id: item.id})} >
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <MaterialIcons style={styles.icon} name="delete" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 22
    }
});

export default IndexScreen;