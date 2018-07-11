using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_Users.Models;
using API_Users.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API_Users.Controllers
{
  // [Authorize]
  [Route("api/[controller]")]
  public class KeepsController : Controller
  {
    private readonly KeepRepository _db;
    public KeepsController(KeepRepository repo)
    {
      _db = repo;
    }
    //GEt all Keeps
    [HttpGet]
    public IEnumerable<Keep> GetALL()
    {
      return _db.GetAll();
    }

//create Keep
    [HttpPost]
    public Keep CreateKeep([FromBody]Keep newKeep)
    {
      if (ModelState.IsValid)
      {
        // var user = HttpContext.User;
        // newKeep.UserId = user.Identity.Name;
        return _db.CreateKeep(newKeep);
      }
      return null;
    }

        //get keep by id
    [HttpGet("{id}")]
    public Keep GetById(int id)
    {
      return _db.GetbyKeepId(id);
    }
    //get keep by author
    [HttpGet("author/{id}")]
    public IEnumerable<Keep> GetByAuthorId(string id)
    {
      return _db.GetbyAuthorId(id);
    }
    //edit keep
    [HttpPut("{id}")]
    public Keep EditPost(int id, [FromBody]Keep newKeep)
    {
      return _db.EditKeep(id, newKeep);
    }

  }
}