import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pokemonsReducer } from "./reducers/pokemons.js";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App.jsx";

const store = createStore(pokemonsReducer); // crea el store de redux


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>  {/* el provider de redux permite que los componentes de react accedan al store */}
			<App />
		</Provider>
	</StrictMode>
);
