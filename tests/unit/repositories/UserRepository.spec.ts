import { UserRepository } from "./../../../src/repositories/UserRepository";

const createUserRepositoryWrapper = () => {
  return new UserRepository();
};

describe("UserRepository.spec", () => {
  it("should fetch data from server", async () => {
    globalThis.fetch = jest.fn().mockReturnValue(
      new Promise<any>((resolve, _) => {
        resolve({ name: "value" });
      })
    );
    const repository = createUserRepositoryWrapper();
    const response = await repository.fetchUsers();
    expect(response).toEqual({ name: "value"});
  });
});
