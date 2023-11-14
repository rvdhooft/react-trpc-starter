# Turborepo starter

This is an official starter Turborepo.

## About

This project uses [Turborepo](https://turbo.build/repo) as the build system for both the frontend and backend.

Tooling is managed by [Volta](https://volta.sh/) to ensure that developers are all using the same versions of node & yarn.

The frontend is built using [React](https://react.dev/) running on [Vite](https://vitejs.dev/).
UI Library: [MUI](https://mui.com/)

The app uses [tRPC](https://trpc.io/) to quickly connect the client and server in a way that's easy and typesafe.

The server connects to the SQL database using the [Prisma](https://www.prisma.io/) ORM.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `react`: a React app
- `trpc`: a Node + tRPC backend
- `eslint-config-custom`: `eslint` configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Getting Started

1. Install [Volta](https://volta.sh/). This will download the pinned versions of node & yarn for you in the background to make sure everyone is using the same versions.
2. Install the recommended VSCode extensions.
3. Create a `.env.local` file and populate it with the correct local values. An `.env.example` file is available to show the expected variables.
4. Run `yarn` to install all of the packages.
5. Run `yarn prebuild` to run the Prisma generator and any migrations
6. Run `yarn dev` to start running both the frontend and backend

### Extras

#### Prisma Studio

[Prisma Studio](https://www.prisma.io/studio) is the easiest way to see the data in the database. Start it up by running

```
yarn prisma-studio
```

Additionally, you can learn about and try out queries and migrations in the [Prisma Playground](https://playground.prisma.io/).

To add seed data to the database, modify `packages/trpc/prisma/seed.ts` and then run `yarn db-seed`

#### tRPC Panel

[tRPC Panel](https://github.com/iway1/trpc-panel) is the quickest way to see and manually test the available tRPC endpoints. tRPC Panel starts up automatically with the server when you run `yarn dev` and will be available at [http://localhost:5001/panel](http://localhost:5001/panel).

#### Knip

[Knip](https://github.com/webpro/knip) has been added to the base of this repo to help keep the codebase clean. Run the following command to have knip search the repo for unused code and provide a report in a file called unused-code-report.txt at the project's root.

```
yarn find-unused-code
```

This command will find and report unused files, dependencies, and exports. If you'd like to run just a subset, check out the options within the `scripts` section in the root package.json.

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
