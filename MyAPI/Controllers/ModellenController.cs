using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyAPI.models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MyAPI.Controllers
{
    [Route("api/modellen")]
    [ApiController]
  
    public class ModellenController : ControllerBase
    {
        public LibraryContext _context { get; set; }
        public ModellenController(LibraryContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Model> GetModellen()
        {
            return _context.model.ToList();
        }
        
        [Route("{id}")]
        [HttpGet]
        public ActionResult<Model> GetModel(int id)
        {
            var deModel = _context.model.Include(b => b.Merk)
                                        .SingleOrDefault(b => b.Id == id);
            if (deModel == null)
                return NotFound();

            return deModel;
        }
         [Authorize]
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteModel(int id)
        {
            var deModel = _context.model.Find(id);
            if (deModel == null)
                return NotFound();

            _context.model.Remove(deModel);
            _context.SaveChanges();          
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Model> AddModel([FromBody]Model model)
        {
            _context.model.Add(model);
            _context.SaveChanges();
            return Created("", model);
        }

        [HttpPut]
        public ActionResult<Model> UpdateModel([FromBody]Model model)
        {
            _context.model.Update(model);
            _context.SaveChanges();
            return Created("", model);
        }
    }
}
