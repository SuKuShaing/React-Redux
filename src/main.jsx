import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pokemonsReducer } from "./reducers/pokemons.js";
import { Provider } from "react-redux";
import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from "redux";
import { featuring, logger } from "./middlewares/index.js";
import App from "./App.jsx";

// con un enhancer, podemos añadir middlewares al store, puesto que extiende o modifica el comportamiento del store
const composedEnhancer = compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // permite usar la extensión de redux devtools en el navegador
	applyMiddleware(logger) // el middleware logger que hemos creado
);

const store = createStore(
	pokemonsReducer,
	// enhancers
	composedEnhancer
); // crea el store de redux

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			{" "}
			{/* el provider de redux permite que los componentes de react accedan al store */}
			<App />
		</Provider>
	</StrictMode>
);
