using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twatter.Models
{
    public class TestModel
    {
        public int Id { get; set; }
        public string DisplayName { get; set; }
        public string Username { get; set; }
        public bool IsVerified { get; set; }
        public string Message { get; set; }
        public string ImageURL { get; set; }
        public string AvatarURL { get; set; }

    }
}
