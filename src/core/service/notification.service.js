import { $R } from '@/rquery/rquery.lib'

export class NotificationService {
	constructor({ title, element }) {
		this.title = title
		this.element = element
	}

	popup() {
		const element = $R(this.element).find('#notification')

		if (element) {
			element.html(`${this.title}`)
		}
	}
}
