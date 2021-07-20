import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';
const CreateScreen = ({ navigation }) => {

    const { addPost } = useContext(Context);

    return <BlogPostForm onSubmit={(title, content)=>{
        addPost(title,content,()=>navigation.navigate('Note'))
    }}/>
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 5
    }
});

export default CreateScreen;