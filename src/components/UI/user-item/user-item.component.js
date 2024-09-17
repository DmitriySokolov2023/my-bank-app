import ChildComponent from '@/core/component/child.component'
import renderService from '@/core/service/render.service'
import styles from './user-item.module.scss'
import template from './user-item.template.html'

export class UserItem extends ChildComponent{
	render(){
		this.element = renderService.htmlToElement(template, [], styles)

		return this.element
	}
}