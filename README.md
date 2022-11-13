## VITE (REACT / TYPESCRIPT SETUP)
```sh
npm create vite @latest
```
Type in a project name, choose react and typescript 

```sh
cd project-name
```

```sh
code . 
```
```sh
git remote add origin git@github.com:UgegeDaniel/react-boilerplate.git
```
```sh
git init
```
```sh
git add.
```
```sh
git commit -m 'initial commit' && git push origin
```
## ESLINT (AIR BNB STANDARD) SETUP 

```sh
npx install-peerdeps --dev eslint-config-airbnb && npm install eslint-config-airbnb-typescript @typescript-eslint/eslint-plugin@^5.13.0 @typescript-eslint/parser@^5.0.0 --save-dev
```
```sh
npm init @eslint/config
```
### .eslintrc.json
```json
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "ignorePatterns": ["vite.config.ts"],
    "plugins": [
        "react"
    ],
    "rules": {
    }
}
```

```sh
npx eslint . --ext .js,.jsx,.ts,.tsx --fix
```

## REACT TESTING LIBRARY SETUP 

```sh
npm install --save-dev @testing-library/react && npm install @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest jest-extended @types/node
```

## REACT LOADER SPINNER 
```sh
npm install react-loader-spinner
```