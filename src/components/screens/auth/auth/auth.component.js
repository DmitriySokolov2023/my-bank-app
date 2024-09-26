import { BaseScreen } from '@/core/component/base-screen'
import renderService from '@/core/service/render.service'

import { Button } from '@/components/UI/button/button.component'
import { Field } from '@/components/UI/field/field.component'
import { Heading } from '@/components/UI/heading/heading.component'

import { AuthService } from '@/api/auth.service'

import styles from './auth.module.scss'
import template from './auth.template.html'

import { $R } from '@/rquery/rquery.lib'

export class Auth extends BaseScreen {
	#isTypeLogin = false
	#changeFormType(e) {
		e.preventDefault()

		$R(this.element)
			.find('h1')
			.text(this.#isTypeLogin ? 'Sign in' : 'Register')

		this.#isTypeLogin = !this.#isTypeLogin
		e.target.innerText = this.#isTypeLogin ? 'Sign in' : 'Register'
	}

	#handleSubmit = event => {
		console.log(event.target)
	}
	constructor() {
		super('Auth')
		this.authService = new AuthService()
	}
	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new Heading('Sign in'),
				new Button({
					children: 'Submit'
				})
			],
			styles
		)

		$R(this.element)
			.find('#auth-inputs')
			.append(
				new Field({
					placeholder: 'Enter e-mail',
					name: 'email',
					type: 'email'
				}).render()
			)
		$R(this.element)
			.find('#auth-inputs')
			.append(
				new Field({
					placeholder: 'Enter password',
					name: 'password',
					type: 'password'
				}).render()
			)

		$R(this.element)
			.find('#change-form-type')
			.click(this.#changeFormType.bind(this))

		$R(this.element).find('form').submit(this.#handleSubmit)
		return this.element
	}
}
