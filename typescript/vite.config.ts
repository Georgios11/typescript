import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: true, // Listen on all local IPs
		port: 5173,
		hmr: {
			protocol: "ws",
			host: "localhost",
			port: 5173,
		},
	},
	optimizeDeps: {
		exclude: [],
		include: [],
	},
	build: {
		commonjsOptions: {
			include: [],
		},
	},
});
