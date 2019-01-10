let comments = [ 
    {id:0,msg:"Hello"},
    {id:1,msg:"Hello1"},
    {id:2,msg:"Hello2"},
]

let blogPosts = [
    {id:0,msg:"文章1"},
    {id:1,msg:"文章2"},
    {id:2,msg:"文章3"},
]

let listeners = []

const DataSource = {
    getComments(){
        return comments
    },
    getBlogPosts(){
        return blogPosts
    },
    getBlogPost(id){
        return blogPosts.find(function(blog){
            return blog.id===id
        })
    },
    addBlogPost(blog){
        blogPosts.push(blog)
        DataSource.broadCast()
    },
    updateBlogPost(blog){
        let hasUpdate = false
        for(let i=0;i<blogPosts.length;i++){
            const curBlog = blogPosts[i]
            if(blog.id === curBlog.id ){
                blogPosts[i] = Object.assign({},curBlog,blog)
                hasUpdate=true
            }
        }

        if(hasUpdate){
            DataSource.broadCast()
        }
    },
    addComment(comment){
        comments.push(comment)
        DataSource.broadCast()
    },
    addChangeListener(hander){
        listeners.push(hander)
    },
    removeChangeListener(hander){
        let listenersNew = []
        for(let i=0;i<listeners.length;i++){
            const listener = listeners[i]
            if(listener !== hander ){
                listenersNew.push( listener )
            }
        }
        listeners = listenersNew
    },
    broadCast(){
        listeners.map(listener=>listener())
    }
}

export default DataSource