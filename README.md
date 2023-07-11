# AngularWorkspaceStorybookSetup (Angular 14.2.12, Storybook 7.0.26)

First time setup Storybook for Angular Workspace can be pretty complicated. This project is example and tutorial how to do it.

# How to start on clean generated Angular Workspace

```sh
npx sb init
```

Choose project and say that you want have [Compodoc](https://compodoc.app) also. Required packages will be installed, .storybook directory will be added in to your project directory, 

Two Angular builder targets will be added to your choosen project: `storybook` and `build-storybook`.

```sh
# serve storybook and open it in your browser
ng run {project}:storybok

# build storybook into /dist/storybook/{project}
ng run {project}:build-storybook
```
