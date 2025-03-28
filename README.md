
<img src="https://github.com/user-attachments/assets/77f0b1fd-a907-43d8-bcd8-b987f7c2c209" width="800">
<br>
<br>

## 💬 프로젝트 소개
**라이엇 API를 이용한 League of Legends 정보 App**
<br><br>
- **실시간 데이터 제공**: 라이엇 API를 통해 게임의 챔피언, 아이템, 무료 챔피언 정보를 실시간으로 제공합니다.


> - **작업 기간** : 2025. 03. 10 - 2025. 03. 18
> - **배포 주소** : https://nextjs-riot-app.vercel.app

<br />


## ⚙ 프로젝트 기능 소개
- **Next.js**의 **App router**로 이루어진 프로젝트입니다.
- **SSG, SSR, ISR, CSR** 네 가지 렌더링 기법을 사용하여 각 페이지를 구현했습니다.
- **챔피언 리스트, 아이템 리스트** 그리고 **주간 무료 챔피언 리스트 정보**를 제공합니다.
- **Tailwind CSS**를 사용하여 반응형 디자인을 적용하고, **Next Link Component**을 이용해 페이지 간 네비게이션을 처리합니다.

<br>

## 📄 페이지 구성
### Home
<img src="https://github.com/user-attachments/assets/2ea80201-97a8-46e2-ad03-f8dfdea8da9b" width="700">
<br>

### Champions
<img src="https://github.com/user-attachments/assets/efa72ec0-7c03-4f5f-af93-ae586728040d" width="700">
<br>

### Item List
<img src="https://github.com/user-attachments/assets/9e9e45cc-22e8-4343-b74c-da7e5935633f" width="700">
<br>

### Champion Rotation
<img src="https://github.com/user-attachments/assets/ae660c70-d722-468b-88c7-8023bd29aeee" width="700">
<br>

### Champion Details
<img src="https://github.com/user-attachments/assets/eb8cc0bf-d84a-48ba-add0-606ef3a06fc6" width="700">
<br>

## 🚀 트러블 슈팅
- #### [챔피언 리스트 Fetch 과정에서의 문제 해결](https://debnjin.tistory.com/107)
- #### [Route Handlers: 챔피언 로테이션 데이터 가져오기](https://debnjin.tistory.com/109)

<br />

## 📁 프로젝트 구조
```markdown
📁
nextjs-riot-app
├─ public
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ rotation/route.ts  # Route Handlers fetching Riot API
│  │  ├─ champions
│  │  │  ├─ page.tsx           # Champion list page
│  │  │  └─ [id]/page.tsx      # Champion Detail page
│  │  ├─ items
│  │  │  └─ page.tsx           # Item list page
│  │  ├─ layout.tsx            # Global Layout
│  │  ├─ page.tsx              # Home page
│  │  └─ rotation
│  │     └─ page.tsx           # Free Champion list page
│  ├─ components               # UI Components
│  ├─ types
│  │  ├─ Champion.ts           # Champion types
│  │  └─ Item.ts               # Item types
│  └─ utils
│     ├─ clientApi.ts          # API for client side
│     ├─ commonApi.ts          # API for both side
│     └─ serverApi.ts          # API for server side
```

<br />

## 🧶 기술 스택
<div align="left">

### Environment
<img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=https://upload.wikimedia.org/wikipedia/commons/a/a7/Visual_Studio_Code_1.35_icon.svg&logoColor=white" />
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
<br>

### Development
 
<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&amp;logo=Tailwind CSS&amp;logoColor=white">
</div>

