using System;

namespace API_Users.Models
{
    public class Keep
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string UserId{ get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public int Views{ get; set;}
        public int Saves { get; set;}
    }
}