using System.Net.Mail;
using GlennPacker.Entities.Models;

namespace GlennPacker.Core
{
    public interface IEmailService
    {
        void Send(MailMessage mail);
        MailMessage MakeMailMessage(EmailMessage emailMessage);
    }
}