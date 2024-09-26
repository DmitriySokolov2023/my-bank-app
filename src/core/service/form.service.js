import { $R } from '@/rquery/rquery.lib'

export class FormService {
	constructor(form) {
		this.form = form
		console.log(form)
	}

	getFormDataInputs() {
		if (this.form.tagName.toLowerCase() === 'form') {
			console.log($R(this.form).find('label').element)
		} else {
			throw new Error('Element must be a form')
		}
	}
}
