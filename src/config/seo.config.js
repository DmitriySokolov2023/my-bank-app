const SITE_NAME = 'DM Bank'

export const getTitle = title => {
	return title ? `${SITE_NAME} | ${title}` : 'Pure JS'
}
