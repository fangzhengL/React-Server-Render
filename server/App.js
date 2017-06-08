import compression from 'compression';
import path from "path"
import Koa from 'koa'
import serve from 'koa-static'
import Router from 'koa-router'

import React from "react"
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from "../src/router"


import html from "./viewHook/html"

var dirname = path.resolve('./');

const app = new Koa()
const router = Router()

app .use(router['routes']())
    .use(serve(path.join(dirname, 'public')))
    .use(router.routes())
    .use(router.allowedMethods())

router.get('/', function (ctx,next) {
    match({ routes, location: ctx.req.url }, (err, redirect, props) => {
        if (err) {

            ctx.status = 500;

        } else if (redirect) {
            ctx.body = err.message
            ctx.res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            const appHtml = renderToString(<RouterContext {...props}/>)
            ctx.body = html(appHtml)
        } else {
            res.status(404).send('Not Found')
        }
    })

})

app.listen(3000);



