# `graphql-code-generator` Bug Reproduction

## Scenario:

- Two packages: `packages/my-configs`, and `packages/my-sources`
- GraphQL configs are stored in `packages/my-configs`
- The config includes two documents:
  - One in current directory `./InsideDocument.graphql`
  - One "outside" (above) current directory
    `../my-sources/OutsideDocument.graphql`
- Both documents are correctly included in generation
- However, **only `InsideDocument.graphql` triggers watch mode events, while
  `OutsideDocument.graphql` does not**

## To Reproduce:

```bash
cd packages/my-configs

# Generate the types
npm run generate

# Observe: It _correctly_ produces _both_ InsideUserQuery and OutsideUserQuery
cat types.ts

# Now, run watch mode
npm run start

# Edit (save) packages/my-configs/InsideDocument.graphql
# Observe: It triggers a rebuild

# Edit (save) packages/my-sources/OutsideDocument.graphql
# Observe: it _does not_ trigger a rebuild
```
