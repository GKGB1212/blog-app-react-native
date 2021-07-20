import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';
const EditScreen = ({ navigation, route }) => {

    const { editBlogPost } = useContext(Context);

    const { blogPost } = route.params;

   return (
        <BlogPostForm
        initialValues={{ title:blogPost.title, content:blogPost.content}}
        onSubmit={(title,content)=>//chỉ để title và content thôi bơri vì 2 cái này hiện k có ở function này
            {editBlogPost(blogPost.id,title,content,()=>{navigation.goBack()});
        }}/>)
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

export default EditScreen;