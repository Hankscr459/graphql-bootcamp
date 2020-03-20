import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'

// Setting up a subscription on the server requires
// the use of the PubSub utility from graphql-yoga
// This is used to both create the subscription and
// to publish data to it. It's best to add the PubSub
// onto the servers context object as shown below.
const pubsub = new PubSub()

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
}
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: {
        db,
        pubsub
    }
})

server.start(() => {
    console.log('This server is up!')
})
