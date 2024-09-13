import renderService from '@/core/service/render.service'

import styles from './layout.module.scss'
import template from './layout.template.html'

import { $R } from '@/rquery/rquery.lib'
import { Header } from './header/header.component'

export class Layout {
	constructor({ router, children }) {
		super()
		this.router = router
		this.children = children
	}
	render() {
		this.element = renderService.htmlToElement(template, [], styles)

		const mainElement = $R(this.element).find('main')

		const contentContainer = $R(this.element).find('#content')
		contentContainer.append(this.children)

		mainElement.before(new Header().render()).append(contentContainer.element)

		return this.element
	}
}
