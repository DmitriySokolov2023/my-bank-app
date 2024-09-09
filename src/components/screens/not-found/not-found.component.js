import { BaseScreen } from '@/core/component/base-screen'

export class NotFound extends BaseScreen {
	constructor() {
		super('Not Found')
	}
	render() {
		return `<h1>Not Found</h1>`
	}
}
