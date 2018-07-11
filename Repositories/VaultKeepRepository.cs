using System.Collections.Generic;
using System.Data;
using API_Users.Models;
using Dapper;

namespace API_Users.Repositories
{
  public class VaultKeepRepository : DbContext
  {
    public VaultKeepRepository(IDbConnection db) : base(db)
    {
    }
    // Create Post
    public VaultKeep CreateVaultKeep(VaultKeep newVaultKeep)
    {
      int id = _db.ExecuteScalar<int>(@"
                INSERT INTO vaultkeeps (userId, vaultId, keepId)
                VALUES (@UserId, @VaultId, @KeepId);
                SELECT LAST_INSERT_ID();
            ", newVaultKeep);
      newVaultKeep.Id = id;
      return newVaultKeep;
    }
    
    // // GetAll Post
    // public IEnumerable<VaultKeep> GetAll()
    // {
    //   return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps;");
    // }

        // GetbyId
    public VaultKeep GetbyVaultKeepId(int id)
    {
      return _db.QueryFirstOrDefault<VaultKeep>("SELECT * FROM vaultkeeps WHERE id = @id;", new { id });
    }
    // GetbyAuthor
    public IEnumerable<VaultKeep> GetbyAuthorId(string id)
    {
      return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps WHERE userId = @id;", new { id });
    }
    // GetbyKeepId
    public IEnumerable<VaultKeep> GetbyKeepId(int id)
    {
      return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps WHERE keepId = @id;", new { id });
    }
        // GetbyVaultId
    public IEnumerable<VaultKeep> GetbyVaultId(int id)
    {
      return _db.Query<VaultKeep>("SELECT * FROM vaultkeeps WHERE vaultId = @id;", new { id });
    }
    // Edit
    public VaultKeep EditVaultKeep(int id, VaultKeep Vaultkeep)
    {
      Vaultkeep.Id = id;
      var i = _db.Execute(@"
                UPDATE vaultkeeps SET
                    keepId = @KeepId
                    vaultId = @VaultId
                WHERE id = @Id
            ", Vaultkeep);
      if (i > 0)
      {
        return Vaultkeep;
      }
      return null;
    }
    // Delete
    public bool DeleteVaultKeep(int id)
    {
      var i = _db.Execute(@"
      DELETE FROM vaultkeeps
      WHERE id = @id
      LIMIT 1;
      ", new { id });
      if (i > 0)
      {
        return true;
      }
      return false;
    }

    // Add get user favs to user
  }


}