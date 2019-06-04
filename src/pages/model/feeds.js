import Taro from "@tarojs/taro";
import action from "../store/action";
import request from "../utils/request";

export default {
  namespace: "feeds",
  state: { staffList: [] },
  reducers: {
    saveMore(state, { payload }) {
      console.log('bbbbbb', payload)
      return { ...state, staffList: payload.staffList };
    }
  },
  effects: {
    *staffListFn({}, { call, put }) {
      // let { list } = yield call(request, {
      //   url: "sites/SiteSet",
      //   method: 'get',
      //   data: {q:{"page":-1,"where":{"business[~]":1,"isJob":1}}},
      // })
      yield put(action("saveMore", { staffList: ['list',1,1,2,3] }));
},
  }
};
