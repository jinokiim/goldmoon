## 주요 기능

- 이벤트를 생성한 뒤 익명으로 질문을 등록합니다.
- 이벤트 생성한 사용자는 이벤트를 마감할 수 있습니다.
- 사용자는 등록된 질문에 좋아요를 클릭할 수 있습니다.
  - 한번 좋아요 클릭한 뒤 2번 좋아요할 수 없습니다.
- 익명 질문은 최대 300자까지만 지원합니다.

## .env 파일 템플릿

```
publicApiKey=퍼블릭key
projectId=프로젝트id
FIREBASE_AUTH_HOST={프로젝트id}.firebaseapp.com
privateKey=프라이빗key
clientEmail=이메일
PORT=3000
HOST=localhost
PROTOCOL=http
```

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 formatting, 세미콜론(;) 누락, 코드 변경이 없는 경우
- refactor : 코드 리팩토링
- test : 테스트 코드, 리팽토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
