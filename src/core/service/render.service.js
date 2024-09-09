class RenderService {
	htmlToElement(html, components = [], styles) {
		const template = document.createElement('template')
		template.innerHTML = html
		const element = template.content.firstChild
		// this.#replaceComponentTags(element, components)

		return element
	}

	#replaceComponentTags(parentElement, components) {
		const componentTagPattern = /^component-/
		const allElement = parentElement.getElementByTagName('*')

		for (element of allElement) {
			const elementTagName = element.tagName.toLowerCase()
			if (componentTagPattern.test(elementTagName)) {
				const componentName = elementTagName
					.replace(componentTagPattern, '')
					.replace(/-/g, '')
			}
			const foundComponent = components.find(Component => {
				const instance =
					Component instanceof ChildComponent ? Component : new Component()

				return instance.constructor.name.toLowerCase() === componentName
			})
		}
	}

	#applyModuleStyles() {}
}

export default new RenderService()
