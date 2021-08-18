using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twatter.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string UserTag { get; set; }
        public bool IsVerified { get; set; }
        public string PictureURL { get; set; }

        public List<Post> Posts { get; set; }
    }
}
