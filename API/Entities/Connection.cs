namespace API.Entities
{
    public class Connection
    {
        public Connection()
        {
        }

        public Connection(string connectionId, string username)
        {
            ConnectionId = connectionId;
            Username = username;
        }

        //entity name + Id = primary key
        public string ConnectionId { get; set; }    
        public string Username { get; set; }
    }
}