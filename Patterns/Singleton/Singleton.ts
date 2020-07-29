class Database
{
  static _instance: Database
  static _stringConn: string

  protected constructor()
  {
    console.log("Instance DB created")
  }

  public static getDatabase(): Database
  {
    if(this._instance == null)
    {
      this._instance = new Database()
    }
    return this._instance
  }

  public connect = (stringConn: string): void => console.log("Databese conection was established!")
  public executeQuery = (query: string): void => console.log("Query successfully executed!")
}

const Singleton = (): void => {

  const connection = Database.getDatabase()
  connection.connect("StringConnection")
  connection.executeQuery("SELECT money FROM BillGatesAccount")
}

export default Singleton