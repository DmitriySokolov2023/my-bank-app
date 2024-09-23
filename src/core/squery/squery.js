import { SERVER_URL } from '@/config/url.config'

import { extractErrorMessage } from './extract-error-message'

export async function sQuery({
	path,
	body = null,
	headers = {},
	onSuccess = null,
	onError = null,
	method = 'GET'
}) {
	let isLoading = true
	let error = null
	let data = null
	const url = `${SERVER_URL}/api${path}`

	const accessToken = ''

	const requestOptions = {
		method,
		headers: { 'Content-Type': 'application/json', ...headers }
	}

	if (accessToken) {
		requestOptions.headers.Authorization = `Bearer ${accessToken}`
	}

	if (body) {
		requestOptions.body = JSON.stringify(body)
	}

	try {
		const response = await fetch(url, requestOptions)
		if (response.ok) {
			data = await response.json()
			if (onSuccess) {
				onSuccess(data)
			}
		} else {
			const errorData = await response.json()
			const errorMessage = extractErrorMessage(errorData)

			if (onError) {
				onError(errorMessage)
			}
		}
	} catch (errorData) {
		const errorMessage = extractErrorMessage(errorData)
		if (errorMessage) {
			onError(errorMessage)
		}
	} finally {
		isLoading = false
	}
	return { isLoading, error, data }
}

// class SQuery {
// 	constructor(path) {
// 		this.path = path
// 		this.data = null
// 	}
// 	async get() {
// 		const response = await fetch(this.path)

// 		if (response.ok) {
// 			this.data = await response.json()
// 		}

// 		return this.data
// 	}
// }
// export const $Q = path => {
// 	return new SQuery(path)
// }
