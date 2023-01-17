/// <reference types="vite/client" />

// .tsファイル上から .vueファイルをimportする時はVueコンポーネントであることを宣言
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
