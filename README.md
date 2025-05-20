# design-system

## 소개

https://www.figma.com/design/fGu30Kh6rhi5xypuH6u8OU/Chakra-UI-Figma-Kit--Community-?node-id=1411-9854&t=S36HXSTHhk8KuE31-1</br>
디자인 파일을 기반으로 한 UI 컴포넌트 라이브러리입니다.

## 기술 스택

코어: TypeScript, React </br>
스타일링: scss (css module) </br>
패키지 매니저: Yarn Berry</br>
빌드: Vite, Rollup </br>
CI/CD: GitHub Actions </br>

## 패키지 설치

https://www.npmjs.com/package/@celinejoo/design-system?activeTab=code</br>
npm i @celinejoo/design-system

## 스토리북

https://celinejoo.github.io/design-system/

## 개발명령어

yarn storybook # 스토리벅 개발 서버 실행</br>
yarn build-storybook # 스토리벅 정적 HTML 빌드</br>
yarn build # 라이브러리 번들 빌드 (Rollup)</br>
yarn lint # ESLint 코드 검사</br>
yarn type-check # 타입 검사 (tsc)

## 폴더구조

.
├── src/ </br>
│ ├── components/ # 각 UI 컴포넌트 디렉토리 (Button, Checkbox 등)</br>
│ │ ├── Button.modules.scss/</br>
│ │ └── Button.stories.tsx/</br>
│ │ ├── Button.tsx/</br>
│ │ ├── Button.types.tsx/</br>
│ │ ├── index.ts/</br>
│ ├── styles/</br>
│ │ ├── css/</br>
│ │ └── tokens/ # 디자인 토큰 정의 (color, foundation, typography 등)</br>
│ │ ├── utils/ # 토큰 관련 유틸 함수</br>
│ ├── utils/ # 공통 유틸 함수 (cx.ts 등)</br>
├── dist/ # 빌드 결과 (출시 대상)</br>
├── package.json</br>
└── README.md</br>
