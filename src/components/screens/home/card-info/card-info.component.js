import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Store } from '@/core/store/store'

import { formatCardNumber } from '@/utils/format/format-card-number'
import { formatToCurrency } from '@/utils/format/format-to-currency'

import { CardService } from '@/api/card.service'

import styles from './card-info.module.scss'
import template from './card-info.template.html'

export class CardInfo extends ChildComponent {
	CODE = '*****'
	constructor() {
		super()
		this.store = Store.getInstance()
		this.cardService = new CardService()
		this.element = renderService.htmlToElement(template, [], styles)
	}

	#copyCardNumber(e) {
		navigator.clipboard.writeText(e.target.innerText).then(() => {
			e.target.innerText = 'Card number copied'
			setTimeout(() => {
				e.target.innerText = formatCardNumber(this.card.number)
			}, 2000)
		})
	}

	#toggleCvc(cardCvcElement) {
		const text = cardCvcElement.text()
		text === this.CODE
			? cardCvcElement.text(this.card.cvc)
			: cardCvcElement.text(this.CODE)
	}

	fillElements() {
		$R(this.element).html(
			renderService.htmlToElement(template, [], styles).innerHTML
		)
		$R(this.element)
			.findAll(':scope > div')
			.forEach(child => {
				child.addClass('fade-in')
			})

		$R(this.element)
			.find('#card-number')
			.text(formatCardNumber(this.card.number))
			.click(this.#copyCardNumber.bind(this))

		$R(this.element).find('#card-expire-date').text(this.card.expireDate)

		const cardCvcElement = $R(this.element).find('#card-cvc')
		console.log(cardCvcElement)
		cardCvcElement.text(this.CODE).css('width', '44px')

		$R(this.element)
			.find('#toggle-cvc')
			.click(this.#toggleCvc.bind(this, cardCvcElement))

		$R(this.element)
			.find('#card-balance')
			.text(formatToCurrency(this.card.balance))
	}

	fetchData() {
		this.cardService.byUser(data => {
			if (data?.id) {
				this.card = data
				console.log(this.card)
				this.fillElements()
				this.store.updateCard(data)
			} else {
				this.store.updateCard(null)
			}
		})
	}
	render() {
		if (this.store.state.user) this.fetchData()
		return this.element
	}
}
