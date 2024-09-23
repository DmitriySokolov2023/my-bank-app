import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/service/render.service'

import styles from './search.module.scss'
import template from './search.template.html'

import { $R } from '@/rquery/rquery.lib'

export class Search extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		$R(this.element).find('input').input({
			placeholder: 'search',
			type: 'search',
			name: 'search'
		})
		return this.element
	}
}
