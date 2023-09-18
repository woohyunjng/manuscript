import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				token: {
					fontFamily: "'Do Hyeon', sans-serif;",
				},
			}}
		>
			<App />
		</ConfigProvider>
	</React.StrictMode>
);