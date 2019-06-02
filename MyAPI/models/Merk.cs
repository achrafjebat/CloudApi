using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyAPI.models{
    public class Merk{
        public int Id{get;set;}
        public string naam{get;set;}

           [JsonIgnore]
        public ICollection<Model> model { get; set; }

    }
}