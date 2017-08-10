using System;
using System.Configuration;

namespace GlennPacker.Entities
{
    public class Configuration : IConfiguration
    {

        public string EmailPassword => GetString("EmailPassword");
        public string EmailHost => GetString("EmailHost");
        public int EmailPort => GetInt("EmailPort");
        public string EmailSender => GetString("EmailSender");
        public string EmailSenderName => GetString("EmailSenderName");

        private static string GetString(string key) => ConfigurationManager.AppSettings.Get(key);
        private static int GetInt(string value) => Convert.ToInt32(GetString(value));
    }
}
