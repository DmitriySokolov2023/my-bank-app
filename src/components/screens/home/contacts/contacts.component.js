import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Store } from '@/core/store/store'

import { Heading } from '@/components/UI/heading/heading.component'
import { UserItem } from '@/components/ui/user-item/user-item.component'

import { formatCardNumberWithDashes } from '@/utils/format/format-card-number'

import { UserService } from '@/api/user.service'

import styles from './contacts.module.scss'
import template from './contacts.template.html'

import { TransferField } from './transfer-field/transfer-field.component'

export class Contacts extends ChildComponent {
	constructor() {
		super()

		this.store = Store.getInstance().state
		this.userService = new UserService()
	}

	fetchData = () => {
		if (!this.store.user) return

		this.userService.getAll(null, users => {
			if (!users) return
			users.forEach(user => {
				$R(this.element)
					.find('#contacts-list')
					.append(
						new UserItem(user, true, () => {
							$R('[name="card-number"]').element.value =
								formatCardNumberWithDashes(user.card.number)
						}).render()
					)
			})
		})
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[TransferField, new Heading('Transfer money')],
			styles
		)
		if (this.store.user) this.fetchData()

		return this.element
	}
}
