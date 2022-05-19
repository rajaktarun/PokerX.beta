using Intel.PokerX.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.DataProviders
{
    public class GameFactory
    {
        
        public Player CreatePlayer(PlayerType playerType, string playerName = null )
        {
            var newPlayer = new Player()
            {
                Name = playerName == null? $"BOT{new Random().Next(100)}": playerName,
                Id = Guid.NewGuid().ToString(),
                Cards = new List<PockerCard>(),
                Type = playerType
            };
            return newPlayer;
        }
    }
}
