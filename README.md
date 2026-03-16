# m-fabric

Монорепозиторий с лендингами на **Next.js 15 + Tailwind CSS v4**, управляемый через **Turborepo + pnpm workspaces**.

Каждый лендинг — отдельное приложение в `apps/`, которое можно независимо деплоить в Vercel на свой домен.

## Структура

```
m-fabric/
├── apps/
│   ├── landing-starter/     ← Шаблон / первый лендинг
│   └── landing-<name>/      ← Новые лендинги (создаются скриптом)
├── packages/
│   ├── ui/                  ← Общие React-компоненты (Button, Container, Section)
│   ├── tailwind-config/     ← Общая дизайн-система (цвета, шрифты, анимации)
│   └── typescript-config/   ← Общие tsconfig (base, nextjs, react-library)
├── scripts/
│   └── create-landing.mjs   ← Скрипт создания нового лендинга
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Быстрый старт

```bash
# 1. Установить зависимости
pnpm install

# 2. Запустить все лендинги в dev-режиме
pnpm dev

# 3. Запустить конкретный лендинг
pnpm dev --filter @m-fabric/landing-starter
```

## Создание нового лендинга

```bash
pnpm new-landing <name>

# Пример:
pnpm new-landing premium
# → apps/landing-premium/ — готов к работе
```

Скрипт автоматически:
- Копирует `landing-starter` в `apps/landing-<name>`
- Устанавливает уникальный порт dev-сервера
- Обновляет metadata
- Устанавливает зависимости

## Деплой в Vercel

Каждый лендинг деплоится как отдельный проект:

1. **Import Git Repository** в дашборде Vercel
2. **Root Directory** → `apps/landing-<name>`
3. **Framework Preset** → Next.js
4. **Привязать домен** — каждый лендинг = свой домен

> Vercel автоматически определяет Turborepo и собирает только изменившиеся приложения при каждом пуше.

## Общие пакеты

| Пакет | Назначение |
|-------|-----------|
| `@m-fabric/ui` | Переиспользуемые React-компоненты |
| `@m-fabric/tailwind-config` | Дизайн-токены, цвета, шрифты, анимации |
| `@m-fabric/typescript-config` | Базовые tsconfig-пресеты |

## Команды

| Команда | Описание |
|---------|----------|
| `pnpm dev` | Запуск всех лендингов |
| `pnpm build` | Сборка всех лендингов |
| `pnpm lint` | Линтинг всех проектов |
| `pnpm new-landing <name>` | Создание нового лендинга |
| `pnpm dev --filter @m-fabric/landing-<name>` | Запуск конкретного лендинга |