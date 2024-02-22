import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/sum.ts",
    output: [
      {
        file: "build/bundle.ts",
        format: "esm",
      },
    ],
    plugins: [typescript({ tsconfig: "./tsconfig.json" })],
  },
];
