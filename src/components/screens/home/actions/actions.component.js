import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import { NotificationService } from '@/core/services/notification.service'
import renderService from '@/core/services/render.service'
import validationService from '@/core/services/validation.service'
import { Store } from '@/core/store/store'

import { Button } from '@/components/ui/button/button.component'
import { Field } from '@/components/ui/field/field.component'

import { CardService } from '@/api/card.service'

import styles from './actions.module.scss'
import template from './actions.template.html'

export class Actions extends ChildComponent {
	constructor() {
		super()

		this.store = Store.getInstance().state
		this.cardService = new CardService()
		this.notificationService = new NotificationService()
	}

	updateBalance(event, type) {
		event.preventDefault()
		if (!this.store.user) {
			this.notificationService.show('error', 'Please auth')
		}

		$R(event.target).text('Sending...').attr('disabled', true)

		const inputValue = $R(this.element).find('input').element

		const amount = inputValue.value
		if (!amount) {
			validationService.showError($R(this.element).find('label'))
		}

		this.cardService.updateBalance(amount, type, () => {
			inputValue.value = ''
		})
	}
	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Field({
					placeholder: 'Enter amount',
					name: 'number',
					type: 'amount'
				})
			],
			styles
		)

		$R(this.element)
			.find('#actions-buttons')
			.append(
				new Button({
					children: 'Top-Up',
					variant: 'green',
					onClick: e => this.updateBalance(e, 'top-up')
				}).render()
			)
		$R(this.element)
			.find('#actions-buttons')
			.append(
				new Button({
					children: 'Withdrawal',
					variant: 'purple',
					onClick: e => this.updateBalance(e, 'withdrawal')
				}).render()
			)
		return this.element
	}
}
