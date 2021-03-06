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

<br/>

### Data Flow & Axios

- 데이터 흐름
  1. 유저가 로그인하고 싶다.
     - Client에 ID, PW 제공한다.
     - Server에 Request
  2. 서버는 DB에 유저의 ID, PW 확인한다.
     - 성공 실패 메시지를 Client에 보여준다.
- `Axios` 활용하여 Client에서 Server로 Request 보낸다.

<br/>

### CORS 이슈, Proxy 설정

- 포트가 다른 현재상황(client: 3000, server: 5000)
- CORS
  - 보안적 이슈를 위해 정책이 존재한다.
- 해결방법
  - 여러 방법이 있지만, server, client에서 각각 설정하는 방법 존재
  - Proxy 이용하는 방법 - [Link](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

<br/>

### Proxy Server

- 유저 - Proxy Server - 인터넷

  - Proxy Server 역할
    - 유저 IP 변환(Hidden)
    - 방화벽
    - 웹 필터
    - 캐쉬 데이너, 공유 데이터 제공 기능

- 사용 이유
  - 인터넷 사용 제어
  - 캐쉬 통한 더 빠른 인터넷 제공
  - 더 나은 보안 제공
  - 이용 제한된 사이트 접근 가능

<br/>

### Concurrently 이용하여 프론트, 백 한번에 켜기

- `npm install concurrently --save`

<br/>

### CSS Framework Ant Design

- Material UI, React Bootstrap, Semantic UI, Ant Design, Materialize...

- `npm i antd --save`

<br/>

<br/>

## Redux

### 개념

- a predictable state container for JavaScript apps: 상태 관리 라이브러리입니다.

- What is State?

| Props                                                               | State                                                                               |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| = "Properties"                                                      |                                                                                     |
| 컴포넌트간 소통하는 방식이다                                        | 컴포넌트 안에서 data의 상태를 지칭한다. 예) 검색창 글 입력 시 글이 변하는 state관리 |
| Downward, Parent에서 Child로 흐른다.                                | state이 변하면 re-render된다.                                                       |
| Parent에서 Props 받으면 Child는 그것을 수정할 수 없다 = 불변성 원리 | mutable                                                                             |

- Redux가 없다면 state가 바뀔때 해당 컴포넌트를 관리하는 부모 컴포넌트에서 값을 업데이트 해야 한다. 시간이 오래 걸릴 수 있다.
- Redux의 `store`에다가 직접 연락하여 상태를 관리한다.

<br/>

### Redux Data Flow

- 단방향적이다.
- Flow

  1. React Component
     - Dispatch(action)
  2. Action
  3. Reducer
  4. Store
     - Subscribe
     - return to `1.`

- Action

  - object
    - 무엇이 일어났는지 설명한다.
    - 예) 사용자가 좋아요 했다, 사용자 정보를 불러왔다. TODO 리스트에 항목 추가했다.

- Reducer

  - 이전 state과 action object를 받은 후에 next state를 return한다.
  - pure function이기에 reducer 내부에서 하지 말아야할 것들
    - mutate its arguments
    - perform side effects like API calls and routing transitions
    - call non-pure functions like `Date.now()`, `Math.random()`

- Store
  - object with few methods
  - holds the whole `state tree` of app
  - only `dispatch` -> `action` => change in `Store`
- `<Provider />`
  - hoc by React Redux
  - lets you bind Redux to React

<br/>

### Redux UP

- 4 dependencies

  1. redux
  2. react-redux
  3. redux-promise : Redux 미들웨어
  4. redux-thunk : Redux 미들웨어

- Redux store는 `항상 plain object`를 받지 않는다!
  - Promise나 Functions를 받는 상황도 존재한다.
  - `redux-thunk` : Functions를 받는 방법을 알려준다. Reducer에게 pass가 아니라 함수를 call 한다.
  - `redux-promise` : Promise를 받는 방법을 알려준다. Promise가 `resolve`, `reject` 되었을 때 dispatching actions를 한다.
- redux devtools를 이용하여 redux 관리 쉽게한다. [Link](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

- Store (reducer를 다양하게 포함한다, 각각 다양한 state을 관리한다.)
  - `CombineReducer`를 통해서 `Root Reducer`로 합쳐준다.
  - User Reducer
  - Comment Reducer
  - Post Reducer
  - Subscribe Reducer
  - Number Reducer

<br/>

### React vs React Hooks

| Class Component       | Functional Component  |
| --------------------- | --------------------- |
| Provide more features | Provide less features |
| Longer code           | Shorter Code          |
| Complex code          | Simpler Code          |
| Slower Performance    | Faster Performance    |

- 기존 Functional Component에서는 Class Component의 "아래"를 사용할 수 없었다.

  - Mounting
    1. constructor
    2. render
    3. "React updates DOM and refs"
    4. componentDidMount
  - Updating
    1. render (New Props, setState(), forceUpdate())
    2. "React updates DOM and refs"
    3. componentDidUpdate
  - Unmounting
    1. componentWillUnmount

- React 16.8 Hooks update
  - Lifecycle, state부여...
  - 다 사용가능하게 되었다.
