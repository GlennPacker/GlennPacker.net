using GlennPacker.Entities.Models;

namespace GlennPacker.Core
{
    public interface IEmailServiceWrapper
    {
        void SendContactUsEmail(EmailMessage emailMessage);
    }
}