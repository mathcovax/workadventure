import {defineConfig} from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { dts } from "rollup-plugin-dts";

export default defineConfig([
	{
		input: "src/main.ts",
		output: [
			{
				file: "dist/main.mjs",
				format: "esm"
			},
		],
		plugins: [
			esbuild({
				include: /\.[jt]sx?$/,
				exclude: /node_modules/,
				tsconfig: "tsconfig.json",
			})
		]
	},
    {
        input: "src/main.ts",
        output: [{ file: "dist/main.d.ts", format: "es" }],
        plugins: [dts()],
      },
]);
