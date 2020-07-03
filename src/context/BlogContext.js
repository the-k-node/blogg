import createDataContext from './createDataContext'

// const BlogContext = React.createContext()

const blogReducer = (state, action)=>{
    switch(action.type){
        case 'add_blogpost':
            return [...state, {id: Math.random() * 999999, title: `Blog Post #${state.length + 1}` }]
        case 'delete_blogpost':
            return [...state]
        default:
            return state
    }
}

const addBlogPost = (dispatch)=>{
    return ()=>{
        dispatch({ type: 'add_blogpost' })
    }
}

// export const BlogProvider = ( {children} )=>{
    
//     const [blogPosts, dispatch] = useReducer(blogReducer,[])

//     // const addBlogPost = ()=>{
//     //     setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length+1}` }])
//     // }

//     const addBlogPost = ()=>{
//         dispatch({ type: 'add_blogpost' })
//     }


//     return (
//         <BlogContext.Provider value={{ data:blogPosts, addBlogPost }} >
//             {children}
//         </BlogContext.Provider>
//     )
// }

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost}, 
    [] 
)