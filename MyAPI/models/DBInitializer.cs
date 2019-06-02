using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyAPI.models
{
    public class DBInitializer
    {
        public static void Initialize(LibraryContext context)
        {
            
            context.Database.EnsureCreated();

                
                var merk1 = new Merk()
                {
                    naam = "BMW"
                };
                

                var model1 = new Model()
                {
                    naam = "x4m",
                    Carroserievorm = "SUV",
                    Motor = "3.0",
                    vermogen = "510 pk",
                    Brandstof = "benzine"
                };

                 var model2 = new Model()
                {
                    naam = "x3m",
                    Carroserievorm = "SUV",
                    Motor = "3.0",
                    vermogen = "510 pk",
                    Brandstof = "benzine"
                };

                context.model.Add(model1);
                context.model.Add(model2);
            
        }
    }
}
