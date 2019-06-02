using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyAPI.models
{
    public class Model
    {
        public int Id { get; set; }
        public string naam{ get; set; }

        public string Carroserievorm { get; set; }

        public string Motor { get; set; }
         public string vermogen { get; set; }

        public string Brandstof { get; set; }


        public int MerkId { get; set; }

        public Merk Merk { get; set; }
    }
}
