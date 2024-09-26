import { sQuery } from '@/core/squery/squery'

export class StatisticsService {
	#BASE_URL = '/statistics'

	main() {
		return sQuery({
			path: this.#BASE_URL,
			onSuccess
		})
	}
}
