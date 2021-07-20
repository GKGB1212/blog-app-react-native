import React,{useContext, useLayoutEffect} from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const ShowScreen=({route,navigation})=>{
    const { id } = route.params;

    const {state}=useContext(Context);

    const blogPost=state.find((blogPost)=>blogPost.id===id);

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('Edit',{blogPost})}>
                <Feather name="edit-2" size={35} color="white" />
              </TouchableOpacity>
          )
        });
      }, [navigation])
    
    return(<View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>);
};

const styles=StyleSheet.create({});

export default ShowScreen;