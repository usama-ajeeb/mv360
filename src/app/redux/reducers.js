import * as types from "./types";

const initialState = {
  groups: [],
  isLoading: false,
  error: null,
  property: [],
  trainings: [],
  subGroups: [],
  groupSubCategories: [],
  counties: [],
  cities: [],
  companyDetail: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GROUPS_UPLOAD: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GROUPS_UPLOAD_SUCCESS: {
      return {
        ...state,
        groups: action.payload,
        isLoading: false,
      };
    }
    case types.GROUPS_UPLOAD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case types.GET_GROUPS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_GROUPS_SUCCESS: {
      return {
        ...state,
        subGroups: action.payload,
        isLoading: false,
      };
    }
    case types.GET_GROUPS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case types.COMPANIES_DETAILS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.COMPANIES_DETAILS_SUCCESS: {
      return {
        ...state,
        companyDetail: action.payload,
        isLoading: false,
      };
    }
    case types.COMPANIES_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case types.GROUPS_SUBCATEGORIES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GROUPS_SUBCATEGORIES_SUCCESS: {
      return {
        ...state,
        groupSubCategories: action.payload,
        isLoading: false,
      };
    }
    case types.GROUPS_SUBCATEGORIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case types.GET_COUNTIES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_COUNTIES_SUCCESS: {
      return {
        ...state,
        counties: action.payload,
        isLoading: false,
      };
    }
    case types.GET_COUNTIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }

    case types.GET_CITES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.GET_CITES_SUCCESS: {
      return {
        ...state,
        cities: action.payload,
        isLoading: false,
      };
    }
    case types.GET_CITES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
