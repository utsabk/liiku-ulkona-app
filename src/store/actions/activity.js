import {
  GET_ACTIVITY_TYPES,
  GET_ACTIVITIES_WITH_CODE_TYPE,
  GET_ACTIVITY_WITH_ID,
  ADD_TO_FAVUORITES_LIST,
  REMOVE_FROM_FAVUORITES_LIST,
} from '../types';
import { customFetch, API_URL } from '../../services/fetch';

export const setState = (action, result) => {
  return {
    type: action,
    payload: result,
  };
};

export const getActivityTypesList = (query) => {
  return async (dispatch) => {
    try {
      if (query) {
        const results = await customFetch(`${API_URL}/activities/types?name=${query}`);
        await dispatch(setState(GET_ACTIVITY_TYPES, results));

        return results || [];
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getActivitiesList = (typeCode) => {
  return async (dispatch) => {
    try {
      if (typeCode) {
        const results = await customFetch(`${API_URL}/activities?code=${typeCode}`);
        if (!results.length) {
          alert('No such activities in this region');
        }
        await dispatch(setState(GET_ACTIVITIES_WITH_CODE_TYPE, results));
        return results || [];
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getActivityWithId = (Id) => {
  return async (dispatch) => {
    try {
      if (Id) {
        const result = await customFetch(
          `http://lipas.cc.jyu.fi/api/sports-places/${Id}?lang=en`
        );
        await dispatch(setState(GET_ACTIVITY_WITH_ID, result));
        return result || {};
      }
    } catch (err) {
      throw new Error(err);
    }
  };
};

// when an item selected from favourites list
// it will save to activityDetails state
export const setActivity = (activity) => {
  return (dispatch) => {
    dispatch(setState(GET_ACTIVITY_WITH_ID, activity));
  };
};

// when clear search pressed 
export const setActivities = (activity) => {
  return (dispatch) => {
    dispatch(setState(GET_ACTIVITIES_WITH_CODE_TYPE, activity));
  };
};

export const addToFavoritesList = (activity) => {
  return (dispatch) => {
    dispatch(setState(ADD_TO_FAVUORITES_LIST, activity));
  };
};

export const removeFromFavoritesList = (activity) => {
  return (dispatch) => {
    dispatch(setState(REMOVE_FROM_FAVUORITES_LIST, activity));
  };
};
