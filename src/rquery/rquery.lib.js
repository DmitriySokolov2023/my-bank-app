class RQuery {
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(this.selector)
			if (!this.element) {
				throw new Error('Not found')
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector
		} else new Error('Invalid selector type')
	}
	find(selector) {
		const element = new RQuery(this.element.querySelector(selector))
		if (element) {
			return element
		} else {
			throw new Error(`Element not found!`)
		}
	}
	css(property, value) {
		if (typeof property != 'string' || typeof value != 'string') {
			throw new Error('!Srting')
		}
		this.element.style[property] = value
		return this
	}
}

export function $R(selector) {
	return new RQuery(selector)
}
