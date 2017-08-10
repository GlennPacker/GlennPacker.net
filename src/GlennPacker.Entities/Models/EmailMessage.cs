namespace GlennPacker.Entities.Models
{
    public class EmailMessage
    {
        public EmailMessage() { }

        public EmailMessage(ContactUs contact)
        {
            Message = contact.Message;
            SetReplyTo(contact.Email, contact.Name);
        }

        public void SetTo(string email, string name)
        {
            To = new Person(email, name);
        }

        public void SetFrom(string email, string name)
        {
            From = new Person(email, name);
        }

        public void SetReplyTo(string email, string name)
        {
            ReplyTo = new Person(email, name);
        }

        public Person To { get; private set; }
        public Person ReplyTo { get; private set; }
        public Person From { get; private set; }
        public string Message { get; set; }
        public string Subject { get; set; }
    }
}