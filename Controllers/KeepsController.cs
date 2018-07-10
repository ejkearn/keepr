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
  [Authorize]
  [Route("api/[controller]")]
  public class KeepsController : Controller
  {
        private readonly KeepRepository _db;
    public KeepsController(KeepRepository repo)
    {
      _db = repo;  
    }
            [HttpGet]
        public IEnumerable<Keep> Get()
        {
            return new List<Keep>();
        }
  }
}