const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) {
            return db.users
        }
        return db.users.filter((user) => {
            return user.name.toLowerCase().includes(args.query.toLowerCase())
        })
    },
    posts(parent, args, { db }, info) {
        if (!args.query) {
            return db.posts
        }
        return db.posts.filter((post) => {
            const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
            const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
            return isTitleMatch || isBodyMatch
        })
    },
    comments(parent, args, { db }, info) {
        return db.comments
    },
    me() {
        return {
            id: '123777',
            name: 'Mike',
            email: 'mile@example.com',
            age: 28
        }
    },
    post() {
        return {
            id: '77777',
            title: 'GraphQL 101', 
            body: '',
            published: false
        }
    }
}

export { Query as default }