using GlennPacker.Core;
using GlennPacker.Entities;
using GlennPacker.Entities.Models;

namespace GlennPacker.Services
{
    public class EmailServiceWrapper : IEmailServiceWrapper
    {
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;

        public EmailServiceWrapper(IEmailService emailService, IConfiguration configuration)
        {
            _emailService = emailService;
            _configuration = configuration;
        }


        public void SendContactUsEmail(EmailMessage emailMessage)
        {
            emailMessage.Subject = "Contact from website";
            emailMessage.SetFrom(_configuration.EmailSender, _configuration.EmailSenderName);
            emailMessage.SetTo(_configuration.EmailSender, _configuration.EmailSenderName);
            
            var email = _emailService.MakeMailMessage(emailMessage);
            _emailService.Send(email);
        }
    }
}
