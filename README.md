# Webpack + Typescript + React19 구성

Webpack과 TypeScript를 이용하여 구성된 모던 웹 개발 프로젝트입니다. 이 프로젝트는 TypeScript를 사용하여 개발된 웹 애플리케이션을 빌드하고, 개발을 용이하게 하기 위해 hot-reloading을 제공하는 개발 서버를 포함합니다.

## 구성

이 프로젝트는 다음과 같은 주요 설정을 포함합니다:

- Webpack:
  - html-webpack-plugin을 사용한 HTML 파일 생성
  - ts-loader를 통한 TypeScript 지원
  - style-loader와 css-loader를 이용한 CSS 지원
- TypeScript:
  - .ts 및 .tsx 파일을 위한 지원
- 개발 서버:
  - 자동 리로딩 기능
  - localhost:3000에서 실행
- React:
  - React 19 버전 사용
  - @types/react 및 @types/react-dom 설치
- Babel:
  - @babel/core, @babel/preset-env, @babel/preset-react 설치
  - babel-loader를 통한 Babel 지원

### 설치 항목

```
npm i -D webpack webpack-cli
npm i -D webpack-dev-server
npm i -D typescript ts-loader
npm i -D html-webpack-plugin
npm i -D style-loader css-loader
npm i react@canary react-dom@canary
npm i -D @types/react @types/react-dom
npm i -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```
