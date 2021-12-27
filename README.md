# login 
node.js + express.js + React.js 를 이용한
로그인 페이지

## 셋팅
$ npm init <br>
$ npm install express --save<br>
root 경로에 index.js 생성<br>

### mongoDB
https://cloud.mongodb.com/ <br>
몽고DB 생성 <br>

### mongoose 
$ npm install mongoose --save<br>

### body-parser
$ npm install body-parser --save

### postMan
https://www.postman.com/

### NODE MON
소스변경시 서버 내렸다킬 필요없어짐 굿<br>
$ npm install nodemon --save-dev <br>
package.json script 에 <br>
"backend": "nodemon index.js" 추가 <br>
// backend 는 원하는대로 적어도됨

## git
https://git-scm.com/ <br>

#### init<br>
$ git init<br>

#### 상태보기<br>
$ git status<br>

#### 올릴준비
$ git add .

#### 삭제
$ git rm --cached node_modules -r

#### 커밋
git commit -m " 처음 저장소에 올림 "

### key.js 생성
dev.js 와 prod.js 에 몽고디비 정보 기입 <br>
gitignore 에서 예외처리

#### bcrypt 다운로드
$ npm i bcrypt --save

#### json web token
$ npm i jsonwebtoken --save <br>
https://www.npmjs.com/package/jsonwebtoken

#### cookie parser
$ npm i cookie-parser --save

#### react
$ npx create-react-app <project-name>

#### react-router-dom
$ npm i react-router-dom --save

#### axios
$ npm axios --

#### CORS (프록시설정)
https://create-react-app.dev/docs/proxying-api-requests-in-development/
$ npm install http-proxy-middleware --save

#### front back server 한번 켜기ㅋ
$ npm i concurrently --save <br>

package.json 에 <br>
"dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""

#### css 프레임웤크
Ant Design <br>
https://ant.design/ <br>
$ npm i antd --sava

#### redux 설치
$ npm i redux react-redux redux-promise redux-thunk --sava <br>
redux-promise : redux state 에 promise 형태의 값을 받을 수 있게해줌 <br>
redux-thunk : redux state 에 Function 형태의 값을 받을 수 있게해줌 <br>
크롬확장프로그램 redux extension 설치