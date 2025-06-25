# ⚙️ Webpack React TypeScript Template

Универсальный шаблон для фронтенд-разработки с использованием Webpack 5, React 19, TypeScript, SCSS и удобной конфигурацией.

---

## 📦 Установка

```bash
npm install
```

## 🚀 Скрипты
| Скрипт               | Назначение                                               |
| -------------------- | -------------------------------------------------------- |
| `npm start`          | Запуск dev-сервера с HMR на `localhost:3000`             |
| `npm run build`      | Сборка проекта в development-режиме                      |
| `npm run build:prod` | Сборка production-версии проекта                         |
| `npm run analyzer`   | Анализ production-сборки через `webpack-bundle-analyzer` |


## 🗂 Структура проекта
<pre>
webpack_template/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── locales/
├── src/
│   └── index.tsx
├── config/
│   └── build/
│       ├── buildWebpack.ts
│       ├── buildLoaders.ts
│       ├── buildPlugins.ts
│       ├── buildResolvers.ts
│       ├── buildDevServer.ts
│       └── types/
│           └── types.ts
├── webpack.config.ts
├── tsconfig.json
├── package.json
└── README.md</pre>


## 📁 Алиасы

Настроен алиас @ на src, как в Webpack, так и в TypeScript.

## 🎨 Стили

Поддержка SCSS и CSS-модулей:

## 🖼 SVG как компоненты
```bash
import Logo from '@/assets/logo.svg';

export const Header = () => <Logo />;
```

## 🛠 Возможности сборки
<pre>| Возможность                | Поддержка |
| -------------------------- | --------- |
| Dev-сервер                 | ✅        |
| HMR (горячая перезагрузка) | ✅        |
| Разделение кода            | ✅        |
| SCSS / CSS-модули          | ✅        |
| SVG как компоненты         | ✅        |
| Копирование `locales/`     | ✅        |
| Поддержка favicon          | ✅        |
| Алиасы (`@`)               | ✅        |
| Анализатор бандла          | ✅        |
</pre>