using GlennPacker.Entities.Models;
using NUnit.Framework;

namespace GlennPacker.Entities.Tests
{
    [TestFixture]
    public class EmailMessageTests
    {
        private ContactUs _contactUs;

        [SetUp]
        public void Init()
        {
            _contactUs = new ContactUs {Email = "a@a.com", Message = "message", Name = "name"};
        }

        [Test]
        public void ConstructorWithContactUs()
        {
            // Arrange
            
            // Act
            var result = new EmailMessage(_contactUs);

            // Assert
            Assert.AreEqual(_contactUs.Message, result.Message);
            Assert.IsNotNull(result.ReplyTo);
            Assert.AreEqual(_contactUs.Email, result.ReplyTo.Email);
            Assert.AreEqual(_contactUs.Name, result.ReplyTo.Name);
        }

        [Test]
        public void SetTo()
        {
            // Arrange
            var emailMessage = new EmailMessage(_contactUs);

            // Act
            emailMessage.SetTo("to@a.a", "name to");

            // Assert
            Assert.AreEqual("to@a.a", emailMessage.To.Email);
            Assert.AreEqual("name to", emailMessage.To.Name);
        }

        [Test]
        public void SetFrom()
        {
            // Arrange
            var emailMessage = new EmailMessage(_contactUs);

            // Act
            emailMessage.SetFrom("to@a.a", "name to");

            // Assert
            Assert.AreEqual("to@a.a", emailMessage.From.Email);
            Assert.AreEqual("name to", emailMessage.From.Name);
        }

        [Test]
        public void SetReplyTo()
        {
            // Arrange
            var emailMessage = new EmailMessage(_contactUs);

            // Act
            emailMessage.SetReplyTo("to@a.a", "name to");

            // Assert
            Assert.AreEqual("to@a.a", emailMessage.ReplyTo.Email);
            Assert.AreEqual("name to", emailMessage.ReplyTo.Name);
        }
    }
}
