using Intel.PokerX.WebAPI.DataProviders;
using NUnit.Framework;
using System.Linq;

namespace Intel.PokerX.WebAPI.uTest
{
    public class CardRankProviderTests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void SortCard_WhenCalled_ShouldBeSorted()
        {
            CardRankProvider rankProvider = new CardRankProvider();
            var input = new string[] {"JD" ,"2T", "5D" };
            var actualResult = rankProvider.SortCard(input).ToArray();
            Assert.AreEqual("2T", actualResult[0]);
            Assert.AreEqual("5D", actualResult[1]);
            Assert.AreEqual("JD", actualResult[2]);
        }

        [Test]
        public void SortCard_WhenCalled_ShouldNotBeNull()
        {
            CardRankProvider rankProvider = new CardRankProvider();
            Assert.IsNotNull(rankProvider.CardRank);
        }

        [Test]
        public void IconPath_WhenCalled_ShouldNotBeNull()
        {
            CardRankProvider rankProvider = new CardRankProvider();
            Assert.IsNotNull(rankProvider.IconPath);
        }
    }
}
