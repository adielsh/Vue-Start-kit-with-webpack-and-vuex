import AppService from "../services/ProductService";

const types = {
  FETCH: "product/fetch",
  GET: "product/get",
  DELETE: "product/remove",
  CREATE: "product/create",
  UPDATE: "product/update",

}

const state = {
  all: []
}

const Service = new AppService

const actions = {
  [types.CREATE](context, product){
    return Service.create(product).then(
      (data) => {
        if (data.success) {
          context.commit(types.CREATE, data.data);
        }
      });
  }
}

const mutations = {
  [types.CREATE](state, app){
    state.apps.push(app)
    state.nowApp = app
  }
}

const getters = {

}

export default {
  state,
  actions,
  mutations,
  getters
}
