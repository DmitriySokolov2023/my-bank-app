import { sQuery } from '@/core/squery/squery'

export class StatisticsService {
	#BASE_URL = '/transactions'

	getAll(onSuccess) {
		return sQuery({
			path: this.#BASE_URL + `?${new URLSearchParams({ orderBy: 'desc' })}`,
			onSuccess
		})
	}
}
