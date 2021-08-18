using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Twatter.Models
{
    public class Post
    {
        public int PostId { get; set; }
        public string Message { get; set; }
        public string PictureURL { get; set; }

        public User Owner { get; set; }
        public int UserId { get; set; }
    }
}
