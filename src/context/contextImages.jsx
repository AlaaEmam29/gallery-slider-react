import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
const initialState = {
  images: [],
  isLoading: false,
  errorMessage: "",
  currentPage: 1,
  activeModel: JSON.parse(localStorage.getItem("activeModel")) || false,
  darkMode: JSON.parse(localStorage.getItem("darkMode")) || false,
};
const imagesType = {
  LOADING: "LOADING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
  NEXT_PAGE: "NEXT_PAGE",
  PREV_PAGE: "PREV_PAGE",
  ACTIVE_MODEL: "ACTIVE_MODEL",
  DARK_MODE: "DARK_MODE",
  GO_TO_SLIDE: "GO_TO_SLIDE",
};
const reducer = (state, action) => {
  switch (action.type) {
    case imagesType.LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case imagesType.ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case imagesType.SUCCESS:
      return {
        ...state,
        images: action.payload,
      };
    case imagesType.NEXT_PAGE: {
      const next = (state.currentPage + 1) % state.images.length;
      return {
        ...state,
        currentPage: next,
      };
    }

    case imagesType.PREV_PAGE: {
      const prev =
        (state.currentPage - 1 + state.images.length) % state.images.length;

      return {
        ...state,
        currentPage: prev,
      };
    }
    case imagesType.ACTIVE_MODEL:
      return {
        ...state,
        activeModel: action.payload,
      };
    case imagesType.DARK_MODE:
      return {
        ...state,
        darkMode: action.payload,
      };
    case imagesType.GO_TO_SLIDE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      throw new Error("Action unknown, try again");
  }
};

const contextImages = createContext();
export const ImagesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchImages = async () => {
    dispatch({ type: imagesType.LOADING, payload: true });

    try {
      const response = await axios.get(`https://gallery-slider-react-v1.vercel.app/images.json`);
      dispatch({ type: imagesType.SUCCESS, payload: response.data.data });
      console.log(response.data , "response.data")
    } catch (error) {
      console.log( error.message)
      dispatch({ type: imagesType.ERROR, payload: error.message });
    } finally {
      dispatch({ type: imagesType.LOADING, payload: false });
    }
  };
  const handleNextPage = () => {
    dispatch({ type: imagesType.NEXT_PAGE });
  };
  const handlePrevPage = () => {
    dispatch({ type: imagesType.PREV_PAGE });
  };
  const handleToggleModel = () => {
    dispatch({ type: imagesType.ACTIVE_MODEL, payload: !state.activeModel });
  };
  const handleToggleDarkMode = () => {
    dispatch({ type: imagesType.DARK_MODE, payload: !state.darkMode });
  };
  const goToSlide = (index) => {
    dispatch({ type: imagesType.GO_TO_SLIDE, payload: index });
  };
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    localStorage.setItem("activeModel", JSON.stringify(state.activeModel));
  }, [state.activeModel, state.darkMode]);

  useEffect(() => {
    handleFetchImages();
  }, [state.currentPage]);
  useEffect(() => {
    const html = document.getElementsByTagName("html")[0];

    if (state.darkMode) {
      html.classList.add("dark-mode");
      html.classList.remove("light-mode");
    } else {
      html.classList.remove("dark-mode");
      html.classList.add("light-mode");
    }
  }, [state.darkMode]);

  const value = {
    state,
    handleNextPage,
    handlePrevPage,
    handleToggleModel,
    handleToggleDarkMode,
    goToSlide,
  };

  return (
    <contextImages.Provider value={value}>{children}</contextImages.Provider>
  );
};
export const useImages = () => {
  const context = useContext(contextImages);
  if (context === undefined) {
    throw new Error("useImages must be used within a ImagesProvider");
  }
  return context;
};
