import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Store } from '@/core/store/store'

import { CardService } from '@/api/card.service'

import styles from './card-info.module.scss'
import template from './card-info.template.html'

export class CardInfo extends ChildComponent {
	constructor() {
		super()
		this.store = Store.getInstance()
		this.cardService = new CardService()
		this.element = renderService.htmlToElement(template, [], styles)
	}

	fillElements() {
		$R(this.element).html(
			renderService.htmlToElement(template, [], styles).innerHTML
		)
	}
	render() {
		return this.element
	}
}
