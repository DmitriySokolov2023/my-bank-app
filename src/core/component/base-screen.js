import { getTitle } from '@/config/seo.config'

export class BaseScreen {
	constructor(title) {
		this.title = getTitle(title)
		document.title = this.title
	}

	render() {
		throw new Error('Error')
	}
}
