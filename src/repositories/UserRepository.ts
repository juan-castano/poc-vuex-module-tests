export class UserRepository {
  /**
   * fetchUsers
   */
  public async fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response;
  }
}
