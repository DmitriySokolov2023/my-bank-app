import { $R } from '@/rquery/rquery.lib'

export class FormService {
	constructor(form) {
		this.form = form
		this.data = {}
	}

	getFormDataInputs() {
		if (this.form.tagName.toLowerCase() === 'form') {
			for (let node of $R(this.form).find('#auth-inputs').element.childNodes) {
				const input = $R(node).find('input').element
				this.data[input.name] = input.value
			}
			return this.data
		} else {
			throw new Error('Element must be a form')
		}
	}
}
