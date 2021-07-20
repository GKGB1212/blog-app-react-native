import React, { useContext, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
    const navigation = useNavigation();

    useEffect(() => {
        getBlogPosts();

        console.log('useEffect')

        const listener = navigation.addListener('focus', () => {
            getBlogPosts();
            console.log('useEffect-1')
        });

        //chỉ return khi nào màn hình này bị destroy
        return () => {
            listener.remove();
        };
    }, []);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('CreateBlogPost')}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Notee', { id: item.id })} >
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
        marginTop: 10,
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FDDF9E'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 35
    }
});

export default IndexScreen;