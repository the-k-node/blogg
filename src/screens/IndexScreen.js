import React , { useContext } from 'react'
import { View, Text, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({navigation})=>{
    const { state, deleteBlogPost } = useContext(Context)

    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Show',{id: item.id})} >
                            <View style={styles.row} >
                                <Text style={styles.title} > {item.title} </Text>
                                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)} >
                                    <Feather style={styles.icon} name="trash"  />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: ()=> (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} style={{ marginRight:16 }} />
            </TouchableOpacity>
        )
    }
}

const styles = ({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 16,
    },
    title:{
        fontSize: 18,

    },
    icon:{
        fontSize: 24,
    }
})


export default IndexScreen