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
    }
    public class GameManager : IGameManager
    {
        public List<Game> ActiveGames { get; set; }

        public bool EndGame(string gameId)
        {
            ActiveGames.Remove(ActiveGames.Where(x => x.GameId == gameId).FirstOrDefault());
            return true;
        }
    }

}
