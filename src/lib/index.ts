import dayjs from 'dayjs'

export const generateId = () => {
	return Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
}

export const parseDate = (date: string) => {
	const d = dayjs(date)
	if (!d.isValid()) return ''
	return d.format('DD.MM.YYYY HH:mm')
}

export const lessThanNow = (date: string) => {
	if (date === '') return false
	return dayjs(date).isBefore(dayjs())
}
