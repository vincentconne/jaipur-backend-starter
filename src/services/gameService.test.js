import * as gameService from "./gameService"

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    const game = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game) // enleve un camel
    expect(game._players[0].hand.length).toBe(1) // verifie qu'il y a bien que 1 carte
    expect(game._players[0].hand).toStrictEqual(["gold"]) // verifie quelle soit bien gold
    expect(game._players[0].camelsCount).toBe(1)
  })

  test("should draw cards", () => {
    // TODO
    const deck = ["gold", "gold", "gold"]
    const drawnCard = gameService.drawCards(deck, 1)
    expect(drawnCard).toStrictEqual(["gold"])
    expect(deck).toStrictEqual(["gold", "gold"])
  })

  test("should init a deck", () => {
    // TODO
    const game = {
      _players: [
        { hand: ["camel", "camel"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(0)
  })
  ///
  const deck = gameService.initDeck()
  expect(deck.length).toBe(52)
})

// npm run test
