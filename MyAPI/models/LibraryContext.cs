using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyAPI.models
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) 
                                    : base(options)
        {

        }
        public DbSet<Model> model { get; set; }

        public DbSet<Merk> Merken { get; set; }
    }
}
