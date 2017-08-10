using System.Net;
using System.Net.Mail;
using GlennPacker.Core;
using GlennPacker.Entities;
using GlennPacker.Entities.Models;

namespace GlennPacker.Services
{
    public class EmailService : IEmailService
    {

        private readonly IConfiguration _configuration;

        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void Send(MailMessage mail)
        {
            var client =  new SmtpClient
            {
                Port = _configuration.EmailPort,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Host = _configuration.EmailHost,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(_configuration.EmailSender, _configuration.EmailPassword)
            };
            client.Send(mail);
        }

        public MailMessage MakeMailMessage(EmailMessage emailMessage)
        {
            var mailMessage = new MailMessage
            {
                From = new MailAddress(emailMessage.From.Email, emailMessage.From.Name),
                Subject =  emailMessage.Subject,
                Body = emailMessage.Message
            };

            mailMessage.ReplyToList.Add(emailMessage.ReplyTo.Email);
            mailMessage.To.Add(new MailAddress(emailMessage.To.Email, emailMessage.To.Name));
            return mailMessage;
        }
    }
}
