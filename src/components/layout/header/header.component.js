import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/service/render.service'

import { UserItem } from '@/components/UI/user-item/user-item.component'

import styles from './header.module.scss'
import template from './header.template.html'

import { Logo } from './logo/logo.component'
import { LogoutButton } from './logout-button/logout-button.component'
import { Search } from './search/search.component'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()

		this.router = router
	}
	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				new UserItem({
					name: 'Dmitriy',
					avatarPath:
						'https://avatars.mds.yandex.net/i?id=6cca0de5884e51152f929e020731af786663b85f-11401793-images-thumbs&n=13'
				}),
				Logo,
				Search,
				new LogoutButton({
					router: this.router
				})
			],
			styles
		)
		// $R(this.element)
		// 	.find('header')
		// 	.append(
		// 		new UserItem({
		// 			name: 'Dmitriy',
		// 			avatarPath:
		// 				'https://avatars.mds.yandex.net/i?id=b9f61175e689c320cd0ca6a78f09bd6bd7820393-12714516-images-thumbs&n=13'
		// 		}).render()
		// 	)
		return this.element
	}
}
