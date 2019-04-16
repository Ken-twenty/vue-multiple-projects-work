# multiple_projects_work

## 初始化
```
yarn install
```

### 开发环境编译与热加载
```
yarn serve
```
  1. 单独 serve 一个子项目
  2. serve 入口站点（可选具体可进入的子项目）

### 生产环境编译与压缩
```
yarn build
```
  - 同 `serve`

### 单项目代码检查与修正
```
yarn lint
```

### 全局代码检查与修正
```
yarn lint:all
```

### 单元测试
```
yarn test:unit
```

### 自定义配置
参考 [Configuration Reference](https://cli.vuejs.org/config/).

## 版本

### node: v8.x LTS

### iView: v3.x stable

## Note

  1. `common` 存放所有项目公用的资源

  2. 子项目可直接在 `src/projects` 下新建，`index.html` 与 `main.js` 是必须的，其余文件可结合具体需要（需要同步入口站点的 `children-routes.js`）

  3. `pre-commit` 监听的是暂存区的文件（已 `add`，未 `commit`），命令行与可视化操作皆可触发 `lint`

## 命名规则

  1. 项目名：`aa_bb_cc`

  2. `*.js`, `*.less`: `aa-bb-cc`

  3. `*.vue`: `AaaaBbbb`

  4. `const`, `class`: `AaaaBbbb`

  5. `let`, `function`: `aaaaBbbb`

  6. `env`: `AA_BB_CC`

## TODO

  1. `public` 文件夹独立

  2. 整合打包时子项目独立文件夹

  3. 未测试整合打包时的 vue-i18n
