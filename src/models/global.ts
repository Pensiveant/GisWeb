/**
 * @Description: 全局model
 * @Author: Pensiveant
 * @Date: 2022-06-17 14:37:54
 */

import { Effect, Reducer, history } from 'umi';

export interface GlobalModelState {
  view: __esri.SceneView | __esri.MapView | undefined;
  userInfo:
    | {
        account: string;
      }
    | undefined;
}

interface GlobalModelTypes {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    logout: Effect;
  };
  reducers: {
    updateState: Reducer<GlobalModelState>;
  };
}

const Global: GlobalModelTypes = {
  namespace: 'global',
  state: {
    view: undefined,
    userInfo: undefined,
  },
  effects: {
    *logout({ payload }, { put }) {
      yield put({
        type: 'updateState',
        payload: {
          userInfo: undefined,
        },
      });
      sessionStorage.removeItem('token');
      history.push('/login');
    },
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
export default Global;
