## NodeJS와 ExpressJS

### NodeJS

- 자바스크립트를 서버 사이드에서 사용 가능하게 하는 자바스크립트 런타임 엔진

### ExpressJS

- NodeJS를 쉽게 이해할 수 있는 프레임워크
- `index.js`에서 기본적인 `express js` 앱 만들기

<br/>

## MongoDB 연결하기

- MongoDB 계정생성 및 cluster 생성하기

- MongoDB에 성공적으로 연결되었는지 확인하기

<br/>

## MongoDB Model & Schema

- `User Schema`
  - Model은 Schema를 감싼다.
  - Schema는 하나하나의 DB에 저장되는 요소들을 의미한다.

<br/>

## Git Basics

- `git status`
  - 깃의 상태를 보기 원할 때 사용된다.
- `.gitignore`
  - git push 시 필요없는 파일/폴더를 지정한다.

<br/>

## BodyParser, PostMan, 회원 가입 기능

- BodyParser

  - ID
  - PW

- PostMan
  - complete API development environment

<br/>

## Nodemon 설치하기

`npm install nodemon --save-dev`

<br/>

## Bcrypt로 비밀번호 암호화하기

- salt를 이용해서 비밀번호 암호화

- 비밀번호를 바꿀 때만 비밀번호 암호화하기

<br/>

## 로그인 기능

1. DB에서 요청한 email 찾기
2. DB에서 요청한 email이 있다면, 비밀번호가 같은지 확인하기
3. 비밀번호까지 같다면 Token을 생성하기

- 암호화된 패스워드를 복호화할 수 없다

### 토큰 생성 with jsonwebtoken

- 사용자의 이메일과 비밀번호가 요청된 것과 동일할 때,
  - 토큰을 생성한다.

<br/>

### Auth 기능 만들기

- client-cookie(token) vs server-DB(token)
  - 페이지가 이동할 때마다 체크한다.

1. 클라이언트 쿠키에서 토큰을 가져온다
2. 토큰을 복호화한 후 유저를 찾는다.
3. 유저가 있으면 인증 성공, 없으면 불가

<br/>

### Logout 기능

- 유저의 토큰을 지운다면 Auth -> 실패해서 로그인이 풀린다.

<br/>

<br/>

## React란?

### 개념

- 정의: Library, made by Facebook, released in 2013
- 특징: Components, module과 비슷하게 재사용성이 뛰어나다.

- Real DOM, Virtual DOM
  - ex) 10개의 리스트
    - 그 중 한 가지의 리스트만 update 됨
    - real: 전테 리스트 다시 reload
    - virtual: 바뀐 리스트만 DOM에서 적용된다.
  - virtual DOM = real DOM과 같은 property 갖고 있으면서, real DOM을 가볍게 복사했다.
  - How gets UPDATED?
    1. JSX를 렌더링한다. -> virtual DOM이 update 됨
    2. virtual DOM이 이전 virtual DOM에서 찍어준 snapshot과 비교를 해서 바뀐 부분을 찾는다. = `diffing`
    3. 바뀐 부분만 real DOM에서 바꿔준다.

<br/>

### 리액트 시작하기

- 이전: babel, webpack 설정을 통해 일일히 설정해야 했다.
  - babel: 최신 JS 문법을 지원하지 않는 browser들을 위해 최신 JS 문법을 구형 browser에서도 작동하게 변환 시켜준다. (ES6 -> ES5)
  - webpack: static module bundler
    - JS, HTML, library, framework!! 복잡!
    - 많은 모듈 합하여 간단하게 한다.
      - ex) Sass -> CSS
- 현재: `create-react-app .`
  - . 은 현대 디렉토리에 설치한다는 것이다.
- npm vs npx
  - npm: 레지스트리(라이브러리) 저장소 역할한다.
    - build 시 활용된다.
    - local -> /node_modules
    - global
  - npx
    - 다운없이 npm registry에서 `create-react-app`을 찾아서 실행시킨다.
    - 장점
      1. save disk space
      2. always use the most recent Version
- 구조: webpack은 `/public`을 상관하지 않는다. Only `/src`

<br/>

### Boiler Plate에 특성화된 구조

- `src/`

  - \_actions, \_reducer : Redux를 위한 폴더들이다.

  - components/views : Page들을 넣는다.

  - components/views/Sections : 해당 페이지에 관련된 CSS 파일이나, component들을 넣는다.

  - App.js : Routing 관련 처리한다.

  - Config.js : 환경 변수 정한다.

  - hoc : Higher Order Component

    - 다른 component를 갖는 function이다

      예) Auth (HOC)

      - ADMIN COMPONENT(Admin 유저만 들어갈 수 있다)
      - 유저가 Admin인지 확인한 후 출입여부를 결정한다.

  - utils: 여러 군데에서 쓰일 수 있는 것들을 포함한다. 어디서는 쓸 수 있다.

<br/>

### React Router DOM

- `App.js`에 적용하기
  - 참고 [Link](https://reacttraining.com/react-router/web/example/basic)
