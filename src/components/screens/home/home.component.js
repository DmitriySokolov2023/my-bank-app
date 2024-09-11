import { BaseScreen } from '@/core/component/base-screen'
import renderService from '@/core/service/render.service'

import styles from './home.module.scss'
import template from './home.template.html'

import { $R } from '@/rquery/rquery.lib'

export class Home extends BaseScreen {
	constructor() {
		super('Home')
	}
	render() {
		const element = renderService.htmlToElement(template, [], styles)

		$R(element).find('h1').css('color', '#7e0bf2')

		return element.outerHTML
	}
}
