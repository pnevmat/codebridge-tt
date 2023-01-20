import {hilightedCard} from './types'
const chooseCards = (cards: Array<hilightedCard>, keywords: Array<string>, searchIn: string) => {
	const chosenCards: Array<hilightedCard> | [] = []

	cards.forEach(card => {
		const cardWords = (card as any)[searchIn].split(' ')
		keywords.forEach(keyword => {
			cardWords.forEach((word: string) => {
				if (word.toLowerCase() === keyword.toLowerCase() && !chosenCards.find(item => item === card)) {
					chosenCards.push(card as never)
				}
			})
		})
	})
	
	return chosenCards
}

export default chooseCards