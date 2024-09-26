import { sQuery } from '@/core/squery/squery'

export class UserService {
	#BASE_URL = '/users'

	getAll(searchTerm, onSuccess) {
		return sQuery({
			path: `${this.#BASE_URL}${
				searchTerm
					? `?${new URLSearchParams({
							searchTerm
					  })}`
					: ''
			}`,
			onSuccess
		})
	}
}
