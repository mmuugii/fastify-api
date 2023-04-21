// entry point for api

const fastify = require(`fastify`)({
    logger: true
})

// declare a route
fastify.get('/', async (request, reply) => {
    return { hello: world }
})

// run server
const start = async () => {
    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()