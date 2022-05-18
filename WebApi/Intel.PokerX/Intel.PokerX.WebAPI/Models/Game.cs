using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.Models
{
    public class Game
    {
        public string GameId { get; set; }

        public List<Player> Players {get; set; }
    }
}
