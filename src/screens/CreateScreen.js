import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
const CreateScreen = ({ navigation }) => {

    const { addPost } = useContext(Context);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (<View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput
            style={styles.input}
            value={content}
            onChangeText={(text) => setContent(text)}
        />
        <Button
            title='Add Post'
            onPress={()=>{
                if(title!=''&&content!=''){
                    addPost(title,content,()=>{
                        navigation.navigate('Note');
                    });
                }else{
                    alert('Warrning','Please enter title and content!');
                }
            }}
        />
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

export default CreateScreen;