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
  public class VaultKeepsController : Controller
  {
    private readonly VaultKeepRepository _db;
    public VaultKeepsController(VaultKeepRepository repo)
    {
      _db = repo;
    }
    //GEt all Vaults
    // [HttpGet]
    // public IEnumerable<VaultKeep> GetALL()
    // {
    //   return _db.GetAll();
    // }

//create VaultKeep
    [HttpPost]
    public VaultKeep CreateVaultKeep([FromBody]VaultKeep newVaultKeep)
    {
      if (ModelState.IsValid)
      {
        // var user = HttpContext.User;
        // newKeep.UserId = user.Identity.Name;
        return _db.CreateVaultKeep(newVaultKeep);
      }
      return null;
    }

        //get VaultKeep by id
    [HttpGet("{id}")]
    public VaultKeep GetById(int id)
    {
      return _db.GetbyVaultKeepId(id);
    }
    //get Vault by author
    [HttpGet("author/{id}")]
    public IEnumerable<VaultKeep> GetByAuthorId(string id)
    {
      return _db.GetbyAuthorId(id);
    }
        [HttpGet("keep/{id}")]
    public IEnumerable<VaultKeep> GetByKeepId(int id)
    {
      return _db.GetbyKeepId(id);
    }
        [HttpGet("vault/{id}")]
    public IEnumerable<VaultKeep> GetByVaultId(int id)
    {
      return _db.GetbyVaultId(id);
    }
    //edit Vault
    [HttpPut("{id}")]
    public VaultKeep EditVault(int id, [FromBody]VaultKeep newVaultKeep)
    {
      return _db.EditVaultKeep(id, newVaultKeep);
    }

  }
}