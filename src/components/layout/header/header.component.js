import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/service/render.service'

import { UserItem } from '@/components/UI/user-item/user-item.component'

import styles from './header.module.scss'
import template from './header.template.html'

import { $R } from '@/rquery/rquery.lib'

export class Header extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles)
		$R(this.element).find('header').append(new UserItem().render())
		return this.element
	}
}
