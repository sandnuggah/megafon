const config = require('./config')
const app = require('koa')()
const IO = require('koa-socket')
const router = require('koa-router')()
const sample = require('lodash/sample')
const casual = require('casual')

new IO().attach(app)

setInterval(function () {
  const channel = sample(['nmr', 'forbifart-sthlm'])

  app.io.broadcast(channel, {
    channel: channel,
    kind: sample(['bell', 'tweet', 'info']),
    title: casual.title,
    description: casual.description,
    createdAt: new Date()
  })
}, 5000)

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port)
