const bodyParser = require('body-parser')
const routes = require('./routes')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const app = require('express')()
const logging = require('./logging')

app.set('host', process.env.APP_HOST || '0.0.0.0')
app.set('port', process.env.APP_PORT || '8009')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.disable('x-powered-by')

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

apolloServer.applyMiddleware({ app, path: '/graphql' })
logging.log('info', 'GraphQL path started at %s', apolloServer.graphqlPath)

/**
 * Error Handler.
 */
if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'local'
) {
  // only use in development
  const errorHandler = require('errorhandler')
  app.use(errorHandler())
} else {
  app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('Server Error')
  })
}

app.use(routes)

module.exports = app
