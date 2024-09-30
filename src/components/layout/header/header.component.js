import ChildComponent from '@/core/component/child.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'
import { Store } from '@/core/store/store'

import { UserItem } from '@/components/ui/user-item/user-item.component'

import styles from './header.module.scss'
import template from './header.template.html'

import { Logo } from './logo/logo.component'
import { LogoutButton } from './logout-button/logout-button.component'
import { Search } from './search/search.component'

export class Header extends ChildComponent {
	constructor({ router }) {
		super()

		this.store = Store.getInstance()
		this.store.addObserver(this)

		this.router = router

		this.userItem = new UserItem({
			avatarPath:
				'https://avatars.mds.yandex.net/i?id=6cca0de5884e51152f929e020731af786663b85f-11401793-images-thumbs&n=13',
			name: 'Dmitriy'
		})
	}

	update() {
		this.user = this.store.state.user

		const authSideElement = $R(this.element).find('#auth-side')

		if (this.user) {
			authSideElement.show()
			this.userItem.update(this.user)
			this.router.navigate('/')
		} else {
			authSideElement.hide()
		}
	}

	render() {
		this.element = renderService.htmlToElement(
			template,
			[
				Logo,
				new LogoutButton({
					router: this.router
				}),
				Search,
				this.userItem
			],
			styles
		)

		this.update()

		return this.element
	}
}
