import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
const BlogPostForm = ({onSubmit, initialValues}) => {

    const [title, setTitle] = useState(initialValues?initialValues.title:'');
    const [content, setContent] = useState(initialValues?initialValues.content:'');

    return (<View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(newTitle) => setTitle(newTitle)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={(newContent) => setContent(newContent)}
        />
        <Button
            title='Edit Post'
            onPress={()=>onSubmit(title, content)}/>
    </View>);
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

export default BlogPostForm;