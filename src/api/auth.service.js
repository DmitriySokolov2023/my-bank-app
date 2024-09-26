import { NotificationService } from '@/core/service/notification.service'
import { sQuery } from '@/core/squery/squery'
import { Store } from '@/core/store/store'

export class AuthService {
	#BASE_URL = '/auth'

	constructor() {
		this.store = Store.getInstance()
		this.notificationService = new NotificationService()
	}

	main(type, body) {
		return sQuery({
			path: `${this.#BASE_URL}/${type}`,
			body,
			method: 'POST',
			onSuccess: data => {
				this.store.login(data.user, data.accessToken)
				this.notificationService.show('success', 'You login')
			}
		})
	}
}
