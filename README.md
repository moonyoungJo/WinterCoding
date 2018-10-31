# WinterCoding

접근가능한 url : https://wintercode-moonyoung.herokuapp.com/
<br />(최초 접속시 5초정도 연결시간이 걸립니다.)

## 리눅스(윈도우도 동일)기준 실행 방법
-- Node.js(v8 이상)이 설치되어 있다는 가정하에 설명합니다.
1. 깃을 통해 다운로드 받는다. <br />
git clone https://github.com/moonyoungJo/WinterCoding
2. cd WinterCoding
3. cd backend
4. npm install
5. npm start

http://localhost:8080로 접속하여서 결과를 확인할 수 있습니다.<br />
서버종료는 ctrl+c 입니다.<br />
실행이 용이하도록 nedb를 이용하였으므로, 별도의 데이터베이스 연결이 필요하지 않습니다.<br />
<br />

## 사용기술
backend : node.js(express 프레임워크)<br />
frontend : react, redux, sass<br />
module: Nedb
<br />

## 설계
### 백엔드
node.js를 이용하였습니다. /주소로 접근을 하면 리액트로 만든 웹어플리케이션을 보내고, 그 후로는 ajax를 이용하여 정보만 주고 받습니다. <br />
<br />

#### 제공하는 rest api
GET /post : todo list를 가져옵니다. <br />
POST /post  {title:'', content:'', priority:'', date:''} : todo를 추가합니다. <br />
PUT /post {_id:'', title:'', content:'', priority:'', date:''} : todo를 수정합니다. <br />
DELETE /post/{id} : id를 가진 todo를 제거합니다. <br />

### 프론트 엔드
프론트엔드는 리액트 라이브러리를 사용하여 구현하였습니다.<br />

#### 소스코드 구성
frontend/src폴더에 들어가면 다음과 같이 폴더가 구성되어 있습니다. <br/>
> components : 리덕스와 연결되지 않은 프레젠테이션 컴포넌트들이 위치합니다.<br />
> containers : 리덕스와 연결된 컨테이너 컴포넌트들이 위치합니다.<br />
> lib : 여러 컴포넌트에서 공통적으로 사용되는 코드와 백엔드의 REST API에 접근하는 코드들이 위치합니다.<br />
> pages : 각 페이지별로 제공할 페이지 컴포넌트들이 위치합니다.<br />
> store : Ducks구조(액션/액션생성자/리듀서함수)를 가지는 리덕스 모듈들과 스토어 생성 함수가 위치합니다.<br />
> styles : 여러 컴포넌트에서 공통적으로 사용되는 스타일 코드들이 위치합니다.<br />

#### 컴포넌트 구성
화면의 컴포넌트 구성은 아래와 같습니다.
![_](https://user-images.githubusercontent.com/24985152/47773489-918cf100-dd2d-11e8-98f3-4f6ec526398c.png)

## 구현 화면
### 메인화면
![main](https://user-images.githubusercontent.com/24985152/47773485-8f2a9700-dd2d-11e8-8c3e-ad18137676b7.png)

### 알람을 클릭했을 때
![alarm](https://user-images.githubusercontent.com/24985152/47773472-89cd4c80-dd2d-11e8-9309-4277207fb863.png)

### 일정추가하기를 누르거나 수정을 눌렀을 때 에디팅 
![editing](https://user-images.githubusercontent.com/24985152/47773478-8c2fa680-dd2d-11e8-8b00-5f312cc09697.png)
