using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyAPI.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace MyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MerkenController : ControllerBase
    {
       public LibraryContext _context { get; set; }
        public MerkenController(LibraryContext ctxt)
        {
            _context = ctxt;
        }

        [HttpGet]
        public List<Merk> GetMerken()
        {
            return _context.Merken.ToList();
        }

        [Route("{id}")]
        [HttpGet]
        public ActionResult<Merk> GetMerk(int id)
        {
            var deMerk = _context.Merken.Find(id);
            if (deMerk == null)
                return NotFound();

            return deMerk;
        }

        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteMerk(int id)
        {
            var deMerk = _context.Merken.Find(id);
            if (deMerk == null)
                return NotFound();

            _context.Merken.Remove(deMerk);
            _context.SaveChanges();     
            return NoContent();
        }

        [HttpPost]
        public ActionResult<Merk> AddMerk([FromBody]Merk Merk)
        {
            _context.Merken.Add(Merk);
            _context.SaveChanges();
            return Created("", Merk);
        }

        [HttpPut]
        public ActionResult<Merk> UpdateMerk([FromBody]Merk Merk)
        {
            _context.Merken.Update(Merk);
            _context.SaveChanges();
            return Created("", Merk);
        }
    }
}