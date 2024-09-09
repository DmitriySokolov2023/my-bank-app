import { BaseScreen } from '@/core/component/base-screen'
import renderService from '@/core/service/render.service'

import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super('Home')
	}
	render() {
		const element = renderService.htmlToElement(template)
		return element
	}
}
