import { BaseScreen } from '@/core/component/base-screen'
import renderService from '@/core/service/render.service'

import { Button } from '@/components/UI/button/button.component'
import { Heading } from '@/components/UI/heading/heading.component'

import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super('Home')
	}
	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Button({
					children: 'Fetch',
					variant: 'green',
					onClick: () => alert()
				}),
				new Heading('Home')
			],
			styles
		)

		return element
	}
}
