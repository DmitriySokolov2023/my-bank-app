import { BaseScreen } from '@/core/component/base-screen'
import renderService from '@/core/service/render.service'

import styles from './auth.module.scss'
import template from './auth.template.html'

export class Auth extends BaseScreen {
	constructor() {
		super('Auth')
	}
	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		return this.element
	}
}
