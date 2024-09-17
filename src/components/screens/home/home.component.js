import { BaseScreen } from '@/core/component/base-screen'
import renderService from '@/core/service/render.service'

import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super('Home')
	}
	render() {
		const element = renderService.htmlToElement(template, [], styles)

		return element
	}
}
