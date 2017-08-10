using System.Net.Mail;
using GlennPacker.Core;
using GlennPacker.Entities;
using GlennPacker.Entities.Models;
using Moq;
using NUnit.Framework;

namespace GlennPacker.Services.Tests
{
    [TestFixture]
    public class EmailServiceWrapperTests
    {
        private Mock<IConfiguration> _configuration;
        private Mock<IEmailService> _emailService;
        private EmailServiceWrapper _sut;

        [SetUp]
        public void Init()
        {
            _configuration = new Mock<IConfiguration>();
            _emailService = new Mock<IEmailService>();
            _sut = new EmailServiceWrapper(_emailService.Object, _configuration.Object);
        }

        [Test]
        public void SendContactUsEmail_BuildsEmailObject()
        {
            // Arrange
            var mailMessage = new EmailMessage();
            _emailService.Setup(r => r.MakeMailMessage(It.IsAny<EmailMessage>()));
            
            var emailSenderName = "name";
            _configuration.SetupGet(r => r.EmailSenderName).Returns(emailSenderName);

            var emailSender = "a@a.com";
            _configuration.SetupGet(r => r.EmailSender).Returns(emailSender);

            _emailService.Setup(r => r.MakeMailMessage(It.IsAny<EmailMessage>())).Callback<EmailMessage>((mail) =>
            {
                mailMessage = mail;
            });

            _emailService.Setup(r => r.Send(It.IsAny<MailMessage>()));

            var emailMessage = new EmailMessage();
            emailMessage.SetFrom("sender@a.a", "sender");

            // Act
            _sut.SendContactUsEmail(emailMessage);

            // Assert
            _configuration.VerifyGet(r => r.EmailSender, Times.Exactly(2));
            _configuration.VerifyGet(r => r.EmailSenderName, Times.Exactly(2));
            _emailService.Verify(r => r.MakeMailMessage(It.IsAny<EmailMessage>()), Times.Once);
            _emailService.Verify(r => r.MakeMailMessage(It.IsAny<EmailMessage>()), Times.Once);
            _emailService.Verify(r => r.Send(It.IsAny<MailMessage>()), Times.Once);

            Assert.IsNotNull(mailMessage, "email is null");
            Assert.IsNotNull(mailMessage.To, "email to is null");
            Assert.IsNotNull(mailMessage.From, "email from is null");
            Assert.AreEqual(emailSender, mailMessage.To.Email, "email to address");
            Assert.AreEqual(emailSenderName, mailMessage.To.Name, "email to name");
            Assert.AreEqual(emailSender, mailMessage.From.Email, "email from address");
            Assert.AreEqual(emailSenderName, mailMessage.From.Name, "email from name");
            Assert.AreEqual("Contact from website", emailMessage.Subject);
        }
    }
}
