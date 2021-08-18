using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Twatter.Models;

namespace Twatter.Data
{
    public class TwatterContext : DbContext
    {
        public TwatterContext (DbContextOptions<TwatterContext> options)
            : base(options)
        {
        }

        public DbSet<Twatter.Models.Post> Post { get; set; }

        public DbSet<Twatter.Models.User> User { get; set; }

        public DbSet<Twatter.Models.TestModel> TestModel { get; set; }
    }
}
