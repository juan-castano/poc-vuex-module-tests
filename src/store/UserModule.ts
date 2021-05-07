import { UserRepository } from './../repositories/UserRepository';
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

@Module({ name: "user-module" })
export default class UserModule extends VuexModule {
    private myUsers: string[] = [];
    private elements: any[] = [];

    get allUsers() {
        return this.myUsers;
    }

    get allElements() {
        return this.elements;
    }
    
    get userRepository() {
        return new UserRepository();
    }

    /**
     * ADD_USER
     */
    @Mutation
    public ADD_USER(name: string) {
        this.myUsers.push(name);
    }

    @Mutation
    public ADD_ELEMENT(element: any) {
        this.elements.push(element);
    }

    @Action
    /**
     * name
     */
    public async fetchUsers() {
        const response = await this.userRepository.fetchUsers();
        this.context.commit("ADD_ELEMENT", response);
    }    
}