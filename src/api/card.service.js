import { NotificationService } from '@/core/service/notification.service'
import { sQuery } from '@/core/squery/squery'

export class CardService {
	#BASE_URL = '/cards'

	constructor() {
		this.store = Store.getInstance()
		this.notificationService = new NotificationService()
	}

	byUser(onSuccess) {
		return sQuery({
			path: `${this.#BASE_URL}/by-user`,
			method: 'GET',
			onSuccess
		})
	}

	create() {
		return sQuery({
			path: this.#BASE_URL,
			method: 'POST'
		})
	}

	updateBalance(amount, type, onSuccess) {
		return sQuery({
			path: `${this.#BASE_URL}/balance/${type}`,
			method: 'PATCH',
			body: { amount: +amount },
			onSuccess: () => {
				this.notificationService.show(
					'success',

					'Balance successfully changed!'
				)
				onSuccess()
			}
		})
	}

	transfer({ amount, toCardNumber }, onSuccess) {
		return sQuery({
			path: `${this.#BASE_URL}/transfer-money`,
			method: 'PATCH',
			body: {
				amount: +amount,
				fromCardNumber: this.store.user.card.number,
				toCardNumber
			},
			onSuccess: () => {
				this.notificationService.show(
					'success',

					'Balance successfully changed!'
				)
				onSuccess()
			}
		})
	}
}
