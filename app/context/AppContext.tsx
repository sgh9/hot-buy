import {  Dispatch, FC, ReactNode, createContext, useContext, useReducer } from "react";

interface IAppContexProvider {
    children: ReactNode ,
}

interface IAction {
    type: string,
    payload: any
}


interface IAppState {
    cartProducts:  any[],
}

interface IValue {
    state: IAppState,
    dispatch: Dispatch<IAction>;
}

export interface IAppContext {
    state: IAppState
    dispatch: React.Dispatch<IAction>
  }

const intialState:IAppState  = {
    cartProducts: []
};

const AppContext = createContext<IAppContext>({
    state: intialState,
    dispatch: () => {}
  });

const reducer = (state: IAppState, action: IAction)=> {
    const { type, payload } = action;

    switch(type) {
        case "ADD":
            return {
                ...state,
                cartProducts: [ ...state.cartProducts, payload]
            }
    }

    return state;
}


const AppContextProvider= ({ children }: IAppContexProvider)=> {
    const[state, dispatch] = useReducer(reducer, intialState as IAppState);

    const removeFromCart = ()=> {

    }

    const value = {
        state,
        dispatch,
        removeFromCart
    }

    return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>  
    )
}

export const useAppContext = ()=> useContext(AppContext);

export default AppContextProvider;

