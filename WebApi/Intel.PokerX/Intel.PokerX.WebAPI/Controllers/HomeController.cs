using Intel.PokerX.WebAPI.DataProviders;
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

        [HttpPost]
        [Route("Test")]
        public ActionResult<string> SortPokerCards([FromBody] string[] input)
        {
            var sortedCards = CardRankProvider.SortCard(input);
            return Ok(sortedCards);
        }
    }
}
