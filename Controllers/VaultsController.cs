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
  public class VaultsController : Controller
  {
    private readonly VaultRepository _db;
    public VaultsController(VaultRepository repo)
    {
      _db = repo;
    }
    //GEt all Vaults
    [HttpGet]
    public IEnumerable<Vault> GetALL()
    {
      return _db.GetAll();
    }

//create Vault
    [HttpPost]
    public Vault Createvault([FromBody]Vault newVault)
    {
      if (ModelState.IsValid)
      {
        // var user = HttpContext.User;
        // newKeep.UserId = user.Identity.Name;
        return _db.CreateVault(newVault);
      }
      return null;
    }

        //get Vault by id
    [HttpGet("{id}")]
    public Vault GetById(int id)
    {
      return _db.GetbyVaultId(id);
    }
    //get Vault by author
    [HttpGet("author/{id}")]
    public IEnumerable<Vault> GetByAuthorId(string id)
    {
      return _db.GetbyAuthorId(id);
    }
    //edit Vault
    [HttpPut("{id}")]
    public Vault EditVault(int id, [FromBody]Vault newVault)
    {
      return _db.EditVault(id, newVault);
    }

  }
}