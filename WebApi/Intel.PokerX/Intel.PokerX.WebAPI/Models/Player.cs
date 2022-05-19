using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.Models
{
    public enum PlayerType
    {
        Bot,
        Human
    }
    public class Player
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public PlayerType Type { get; set; }

        public List<PockerCard> Cards { get; set; }
    }
}
