export class Layout {
	constructor({ router, children }) {
		this.children = children
		this.router = router
	}
	render() {
		const headerHTML = `<header>
		<nav>
		<a href="/">Home</a>
		<a href="/about-us">About Us</a>
		<a href="/auth">Auth</a>
		</nav>
		</header>`

		return `
			${headerHTML}
			<main>
				${this.children}
			</main>
		`
	}
}
