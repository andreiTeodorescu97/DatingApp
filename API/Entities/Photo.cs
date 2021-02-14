using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Photos")]
    public class Photo
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public string PublicId { get; set; }

        //fully defining the relathionship between an AppUser and his Photos
        public AppUser AppUser {get;set;}
        public int AppUserId { get; set; }
    }
}