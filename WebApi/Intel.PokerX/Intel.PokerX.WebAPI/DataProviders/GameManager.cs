using Intel.PokerX.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.DataProviders
{
    public interface IGameManager
    {
        List<Game> ActiveGames { get; set; }
        bool EndGame(string gameId);

        Game CreateNewGame(string playerName, Dictionary<string, int> cardRank, Dictionary<string, string> iconPath);
    }
    public class GameManager : IGameManager
    {
        public List<Game> ActiveGames { get; set; }

        public bool EndGame(string gameId)
        {
            ActiveGames.Remove(ActiveGames.Where(x => x.GameId == gameId).FirstOrDefault());
            return true;
        }

        public Game CreateNewGame(string playerName, Dictionary<string, int> cardRank, Dictionary<string, string> iconPath)
        {
            Game newGame = new Game()
            {
                GameId = Guid.NewGuid().ToString(),

            };
            GameFactory gameFactory = new GameFactory();
            var playerList = new List<Player>();
            playerList.Add(gameFactory.CreatePlayer(PlayerType.Human, playerName));
            playerList.Add(gameFactory.CreatePlayer(PlayerType.Bot, "BOT1"));
            playerList.Add(gameFactory.CreatePlayer(PlayerType.Bot, "BOT2"));
            playerList.Add(gameFactory.CreatePlayer(PlayerType.Bot, "BOT3"));

            var freeCards =ShuffleCardsBetweenPlayers(cardRank, iconPath, playerList);
            newGame.FreeCards = freeCards;
            newGame.Players = playerList;
            return newGame;
        }

        private List<PockerCard> ShuffleCardsBetweenPlayers(Dictionary<string, int> cardRank, Dictionary<string, string> iconPath, List<Player> players)
        {
            var cards = cardRank.Select(x => x.Key).ToList();
            for(int i = 0; i< 14; i++)
            {
                var random = new Random();
                var nextCard = cards[random.Next(cards.Count())];
                cards.Remove(nextCard);
                players[0].Cards.Add( new PockerCard() { Name = nextCard, IconPath = iconPath[nextCard] });

                nextCard = cards[random.Next(cards.Count())];
                cards.Remove(nextCard);
                players[1].Cards.Add(new PockerCard() { Name = nextCard, IconPath = iconPath[nextCard] });

                nextCard = cards[random.Next(cards.Count())];
                cards.Remove(nextCard);
                players[2].Cards.Add(new PockerCard() { Name = nextCard, IconPath = iconPath[nextCard] });

                nextCard = cards[random.Next(cards.Count())];
                cards.Remove(nextCard);
                players[3].Cards.Add(new PockerCard() { Name = nextCard, IconPath = iconPath[nextCard] });
            }

            return cards.Select(x => new PockerCard() { Name = x, IconPath = iconPath[x] }).ToList();
        }
    }

}
