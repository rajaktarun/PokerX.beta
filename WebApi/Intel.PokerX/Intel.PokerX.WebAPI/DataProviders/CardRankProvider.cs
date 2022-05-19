using Intel.PokerX.WebAPI.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.DataProviders
{
    public interface ICardRankProvider
    {
        Dictionary<string, int> CardRank { get; set; }

        Dictionary<string, string> IconPath { get; set; }

        IEnumerable<string> SortCard(string[] cardToSort);
    }
    public class CardRankProvider: ICardRankProvider
    {
        public Dictionary<string, int> CardRank { get; set; }

        public Dictionary<string, string> IconPath { get; set; }

        public CardRankProvider()
        {
            string text = System.IO.File.ReadAllText(@".\DataProviders\CardRank.json");
            CardRank = JsonConvert.DeserializeObject<Dictionary<string,int>>(text);

            string iconPath = System.IO.File.ReadAllText(@".\DataProviders\IconPath.json");
            IconPath = JsonConvert.DeserializeObject<Dictionary<string, string>>(iconPath);
        }

        public IEnumerable<string> SortCard(string[] cardToSort)
        {
            var cards = cardToSort.Select(x => new PockerCard()
            {
                Name = x,
                Rank = CardRank[x]
            });

            return cards.OrderBy(x => x.Rank).Select(x => x.Name);
        }
    }
}
