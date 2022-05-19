using Intel.PokerX.WebAPI.DataProviders;
using Intel.PokerX.WebAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Intel.PokerX.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly IGameManager GameManager;
        private readonly ICardRankProvider CardRankProvider;

        public HomeController(IGameManager gameManager,
            ICardRankProvider cardRankProvider)
        {
            GameManager = gameManager;
            CardRankProvider = cardRankProvider;
        }

        [HttpGet]
        [Route("Test")]
        public ActionResult<string> Test()
        {
            return Ok("[ 'Hello' ]");
        }

        [HttpGet]
        [Route("newgame/{name}")]
        public ActionResult<Game> LaunchNewGame(string name)
        {
            var newGame = GameManager.CreateNewGame(name, CardRankProvider.CardRank, CardRankProvider.IconPath);
            return Ok(newGame);
        }

        [HttpGet]
        [Route("endgame/{gameId}")]
        public ActionResult<Game> CloseGame(string gameId)
        {
            var newGame = GameManager.EndGame(gameId);
            return Ok(newGame);
        }

        [HttpPost]
        [Route("Test")]
        public ActionResult<string> SortPokerCards([FromBody] string[] input)
        {
            var sortedCards = CardRankProvider.SortCard(input);
            return Ok(sortedCards);
        }

        [HttpPost]
        [Route("sort")]
        public ActionResult<string> SortCards([FromBody] PockerCard[] input)
        {
            var sortedCards = CardRankProvider.SortCard(input.Select(x=> x.Name).ToArray());
            return Ok(sortedCards.Select(x => new PockerCard()
            {
                Name = x,
                IconPath = CardRankProvider.IconPath[x]
            }));
        }
    }
}
