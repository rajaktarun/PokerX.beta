using Intel.PokerX.WebAPI.DataProviders;
using NUnit.Framework;

namespace Intel.PokerX.WebAPI.uTest
{
    public class GameFactoryTest
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void CreatePlayer_WhenCalledForBotPlayerType_ShouldReturnBotPlayer()
        {
            GameFactory gameFactory = new GameFactory();
            var actualResult = gameFactory.CreatePlayer(Models.PlayerType.Bot, "Bot1");
            Assert.AreEqual("Bot1", actualResult.Name);
            Assert.AreEqual(Models.PlayerType.Bot, actualResult.Type);
        }

        [Test]
        public void CreatePlayer_WhenCalledForHumanPlayerType_ShouldReturnHumanPlayer()
        {
            GameFactory gameFactory = new GameFactory();
            var actualResult = gameFactory.CreatePlayer(Models.PlayerType.Human, "Tarun");
            Assert.AreEqual("Tarun", actualResult.Name);
            Assert.AreEqual(Models.PlayerType.Human, actualResult.Type);
        }
    }
}