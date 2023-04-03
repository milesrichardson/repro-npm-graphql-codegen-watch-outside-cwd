import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: [
    "InsideDocument.graphql",
    // BUG: This will not be picked up during watch mode (but it generates correctly)
    "../my-sources/OutsideDocument.graphql",
  ],
  generates: {
    "types.ts": { plugins: ["typescript", "typescript-operations"] },
  },
};

export default config;
