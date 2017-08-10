namespace GlennPacker.Entities.Models
{
    public class Person
    {
        public Person(string email, string name)
        {
            Email = email;
            Name = name;
        }

        public string Name { get; set; }
        public string Email { get; set; }
    }
}