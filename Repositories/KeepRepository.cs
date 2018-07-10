using System.Collections.Generic;
using System.Data;
using API_Users.Models;
using Dapper;


namespace API_Users.Repositories
{
  public class KeepRepository : DbContext
  {
    public KeepRepository(IDbConnection db) : base(db)
    {
    }
    // Create Post
    public Keep CreateKeep(Keep newKeep)
    {
      string id = _db.ExecuteScalar<string>(@"
                INSERT INTO keeps (title, body, authorId)
                VALUES (@Title, @Body, @AuthorId);
                SELECT LAST_INSERT_ID();
            ", newKeep);
      newKeep.Id = id;
      return newKeep;
    }
    
    // GetAll Post
    public IEnumerable<Keep> GetAll()
    {
      return _db.Query<Keep>("SELECT * FROM keeps;");
    }
    // GetbyAuthor
    public IEnumerable<Keep> GetbyAuthorId(string id)
    {
      return _db.Query<Keep>("SELECT * FROM keeps WHERE authorId = @id;", new { id });
    }
    // GetbyId
    public Keep GetbyKeepId(string id)
    {
      return _db.QueryFirstOrDefault<Keep>("SELECT * FROM keepss WHERE id = @id;", new { id });
    }
    // Edit
    public Keep EditKeep(string id, Keep keep)
    {
      keep.Id = id;
      var i = _db.Execute(@"
                UPDATE keeps SET
                    title = @Title,
                    body = @Body
                WHERE id = @Id
            ", keep);
      if (i > 0)
      {
        return keep;
      }
      return null;
    }
    // Delete
    public bool DeleteKeep(string id)
    {
      var i = _db.Execute(@"
      DELETE FROM keeps
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