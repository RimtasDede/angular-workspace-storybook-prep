# AngularWorkspaceStorybookSetup (Angular 14.2.12, Storybook 7.0.26)

First time setup Storybook for Angular Workspace can be pretty complicated. This project is example and tutorial how to do it.

# How to start on clean generated Angular Workspace

```sh
npx sb init
```

Choose project and say that you want have [Compodoc](https://compodoc.app) also. Required packages will be installed, .storybook directory will be added in to your project directory, few stories examples will be added into project src directory. 

Two Angular builder targets will be added to your choosen project: `storybook` and `build-storybook`.

> To `.gitignore` add `/projects/*/documentation.json` line if dont want add Compodoc generated documentation file into git repository.

# Basic usage

Open storybook in browser

```sh
ng run {project}:storybook
```

Build storybook into /dist/storybook/{project}

```sh
ng run {project}:build-storybook
```

> Build also can be served by running `npx http-server dist/storybook/{project}`. In browser open http://localhost:8080
