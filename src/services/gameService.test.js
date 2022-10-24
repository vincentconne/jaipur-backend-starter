import * as gameService from "./gameService"

/* describe("Game service", () => {
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
}) */

describe("Game service", () => {
  test("should init a deck", () => {
    const defaultDeck = gameService.initDeck()
    expect(defaultDeck.length).toBe(52)
    expect(defaultDeck.filter((card) => card === "diamonds").length).toBe(6)
    // etc
  })

  test("should draw cards", () => {
    const deck = ["camel", "diamonds", "gold"]
    const drawnCard = gameService.drawCards(deck, 1)
    expect(deck.length).toBe(2)
    expect(drawnCard).toStrictEqual(["camel"])
  })

  test("should put camels from hand to herd", () => {
    const game = {
      _players: [
        { hand: ["camel", "gold"], camelsCount: 0 },
        { hand: ["gold", "gold"], camelsCount: 0 },
      ],
    }
    gameService.putCamelsFromHandToHerd(game)
    expect(game._players[0].hand.length).toBe(1)
    expect(game._players[0].hand).toStrictEqual(["gold"])
    expect(game._players[0].camelsCount).toBe(1)

    expect(game._players[1].hand.length).toBe(2)
    expect(game._players[1].hand).toStrictEqual(["gold", "gold"])
    expect(game._players[1].camelsCount).toBe(0)
  })
})

// npm run test
