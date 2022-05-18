using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.Models
{
    public class Player
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public List<string> Cards { get; set; }
    }
}
