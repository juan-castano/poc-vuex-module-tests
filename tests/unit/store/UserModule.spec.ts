import { UserRepository } from './../../../src/repositories/UserRepository';
import UserModule from "@/store/UserModule";
import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { getModule } from "vuex-module-decorators";
import store from '@/store';

const createUserModuleWrapper = () => {
  createLocalVue().use(Vuex);
  const store = new Vuex.Store({
    modules: {
      userModule: UserModule,
    },
  });
  return getModule(UserModule, store);
};

describe("UserModule.spec", () => {
  it("should define a store instance", () => {
    expect(createUserModuleWrapper()).toBeDefined();
  });

  it("should <allUsers> get a empty array", () => {
    const store = createUserModuleWrapper();
    expect(store.allUsers.length).toEqual(0);
  });

  it("should add to a new name to store", () => {
    const store = createUserModuleWrapper();
    expect(store.allUsers.length).toEqual(0);
    store.ADD_USER("name1");
    expect(store.allUsers.length).toEqual(1);
    expect(store.allUsers[0]).toEqual("name1");
  });

  it("should get element from mock", () => {
    const store = createUserModuleWrapper();
    UserRepository.prototype.fetchUsers = jest.fn().mockReturnValue(new Promise<any>((resolve, _) => {
      resolve({ name: "name-value-1"})
    }));
    expect(store.allElements.length).toEqual(0);
    store.fetchUsers();
    expect(store.allElements.length).toEqual(1);
    expect(store.allElements[0]).toEqual({ name: "name-value-1"});
  });
});
