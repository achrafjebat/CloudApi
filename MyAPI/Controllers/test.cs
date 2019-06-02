using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyAPI.models;
using System.Linq;

namespace mMAPI.Controllers
{
    [Route("api/test")]
    public class BooksController : ControllerBase
    {
        static List<Model> list = new List<Model>();
        static Model[] list2 = new Model[20];

        static BooksController()
        {
            list.Add(new Model()
            {
                Id = 1,
                naam = "m5",
                Carroserievorm = "saloon",
                Motor = "3.0",
                vermogen = "510 pk",
                Brandstof = "benzine"
            });

            list.Add(new Model()
            {
                Id = 2,
                naam = "m6",
                Carroserievorm = "saloon",
                Motor = "3.0",
                vermogen = "510 pk",
                Brandstof = "benzine"
            });
        }

        [HttpGet]
        public List<Model> GetModelen()
        {
            return list;
        }


        [Route("{id}")]
        [HttpGet]
        public ActionResult<Model> GetModel(int id)
        {
            var  deModel = list.FirstOrDefault(Model => Model.Id == id);
            if (deModel == null)
                return NotFound();

            return deModel;
        }



        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteModel(int id)
        {
            var deModel = list.FirstOrDefault(Model => Model.Id == id);
            if (deModel == null)
                return NotFound();

            list.Remove(deModel);
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Model> AddModel([FromBody]Model Model)
        {
            var max = list.Max(b => b.Id);
            Model.Id = max + 1;
            Model.naam = "z4";
            Model.Motor = "2.0";
            list.Add(Model);
            return Created("", Model);
        }
    }
}








