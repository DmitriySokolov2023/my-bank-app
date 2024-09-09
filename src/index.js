import '@/styles/global.scss'

import { Router } from './core/router/router'
import renderService from './core/service/render.service'

new Router()

renderService.htmlToElement(`<div>Block</div>`)
