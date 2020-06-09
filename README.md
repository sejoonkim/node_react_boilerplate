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
