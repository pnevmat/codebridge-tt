export interface card {
	id: number
	imageUrl: string
	publishedAt: string
	summary: string
	title: string
	url: string
}

export interface hilightedCard {
	id: number
	imageUrl: string
	publishedAt: string
	summary: string
	title: string
	url: string
	titleId: string
	summaryId: string
}