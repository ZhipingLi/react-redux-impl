import { createContext } from "react";

const Provider = createContext()

export default Provider

/**
 * Example（index.jsx）:
 * 
 * const root = ReactDOM.createRoot(document.getElementById('root'));
 * root.render(
 *  <Provider.Provider value={store}>
 *    <App />
 *  </Provider.Provider>
 * )
 */