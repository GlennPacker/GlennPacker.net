namespace GlennPacker.Entities
{
    public interface IConfiguration
    {
        string EmailPassword { get; }
        string EmailHost { get; }
        int EmailPort { get; }
        string EmailSender { get; }
        string EmailSenderName { get; }
    }
}