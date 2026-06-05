# React + TypeScript + Vite Best Practices Guide (AI Reference)

## Purpose

This document defines recommended standards, conventions, and best practices for building modern React applications using TypeScript and Vite.

The goal is to maximize:

- Maintainability
- Scalability
- Type safety
- Performance
- Developer experience
- Consistency across the codebase

---

# Core Principles

## 1. Type Safety First

Always prefer explicit and strict typing.

### Good

```tsx
interface User {
  id: string;
  name: string;
}

function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

### Avoid

```tsx
function UserCard({ user }: any) {
  return <div>{user.name}</div>;
}
```

### Rules

- Never use `any` unless absolutely unavoidable.
- Prefer `unknown` over `any`.
- Enable strict TypeScript mode.
- Type all component props.
- Type all API responses.
- Type custom hooks.
- Type context values.

---

## 2. Keep Components Small

Each component should have a single responsibility.

### Good

```tsx
<UserProfile />
<UserAvatar />
<UserActions />
```

### Avoid

```tsx
<UserEverythingComponent />
```

### Guidelines

- Aim for components under 200 lines.
- Extract reusable logic into hooks.
- Extract reusable UI into components.
- Avoid deeply nested JSX.

---

## 3. Prefer Composition Over Inheritance

React is built around composition.

### Good

```tsx
<Card>
  <UserInfo />
</Card>
```

### Avoid

```tsx
class UserCard extends BaseCard {}
```

---

# Project Structure

Recommended structure:

```text
src/
│
├── app/
│   ├── router/
│   ├── providers/
│   └── store/
│
├── pages/
│   ├── Dashboard/
│   └── Users/
│
├── features/
│   ├── auth/
│   ├── users/
│   └── products/
│
├── components/
│   ├── ui/
│   ├── forms/
│   └── layout/
│
├── hooks/
│
├── services/
│
├── lib/
│
├── types/
│
├── constants/
│
├── utils/
│
├── assets/
│
└── main.tsx
```

---

# File Naming

## Components

```text
UserCard.tsx
LoginForm.tsx
ProductList.tsx
```

Use PascalCase.

---

## Hooks

```text
useAuth.ts
useDebounce.ts
useUsers.ts
```

Always start with `use`.

---

## Utilities

```text
date.ts
formatCurrency.ts
validation.ts
```

Use camelCase.

---

## Types

```text
user.types.ts
auth.types.ts
api.types.ts
```

---

# React Component Standards

## Prefer Function Components

### Good

```tsx
export function UserCard() {
  return <div>User</div>;
}
```

Avoid class components.

---

## Named Exports Preferred

### Good

```tsx
export function UserCard() {}
```

### Avoid

```tsx
export default UserCard;
```

Reason:

- Easier refactoring
- Better autocomplete
- Safer imports

---

## Define Props Explicitly

### Good

```tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export function Button({
  label,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}
```

---

## Avoid React.FC

Prefer:

```tsx
interface Props {
  title: string;
}

export function Header({ title }: Props) {
  return <h1>{title}</h1>;
}
```

Instead of:

```tsx
const Header: React.FC<Props> = () => {};
```

---

# State Management

## Local State First

Use the smallest state scope possible.

Priority:

1. Component state
2. Context
3. Global state

---

## Keep State Minimal

Store only what cannot be derived.

### Good

```tsx
const fullName = `${firstName} ${lastName}`;
```

### Avoid

```tsx
const [fullName, setFullName] = useState("");
```

---

## Use Reducers for Complex State

### Good

```tsx
const [state, dispatch] = useReducer(
  reducer,
  initialState
);
```

When:

- Multiple state transitions
- Complex forms
- Workflows

---

# Custom Hooks

## Extract Reusable Logic

### Good

```tsx
function useUser(id: string) {
  // logic
}
```

---

## Keep Hooks Focused

### Good

```tsx
useAuth()
useUsers()
useProducts()
```

### Avoid

```tsx
useEverything()
```

---

# API Layer

## Never Call APIs Directly in Components

### Good

```tsx
services/
└── userService.ts
```

```tsx
export async function getUser(id: string) {
  return api.get(`/users/${id}`);
}
```

---

## Centralize HTTP Client

```tsx
lib/api.ts
```

Example:

```tsx
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## Validate External Data

Use:

- Zod
- Valibot
- ArkType

Example:

```tsx
const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
});
```

Never trust backend responses.

---

# Data Fetching

Recommended:

- TanStack Query

### Benefits

- Caching
- Retry
- Refetching
- Optimistic updates

Example:

```tsx
const { data, isLoading } = useQuery({
  queryKey: ["user", id],
  queryFn: () => getUser(id),
});
```

---

# Forms

Recommended stack:

- React Hook Form
- Zod

Example:

```tsx
const form = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

Avoid uncontrolled custom validation logic.

---

# TypeScript Standards

## Prefer Interfaces for Objects

```tsx
interface User {
  id: string;
  name: string;
}
```

---

## Use Type for Unions

```tsx
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

---

## Avoid Enum

Prefer:

```tsx
const USER_ROLE = {
  ADMIN: "admin",
  USER: "user",
} as const;
```

Instead of:

```tsx
enum UserRole {}
```

---

## Never Ignore Type Errors

Avoid:

```tsx
// @ts-ignore
```

Use only as last resort.

---

# Performance

## Memoize Only When Needed

Use:

```tsx
useMemo()
useCallback()
React.memo()
```

Only after measuring.

Do not prematurely optimize.

---

## Lazy Load Pages

```tsx
const Dashboard = lazy(
  () => import("./Dashboard")
);
```

```tsx
<Suspense fallback={<Loader />}>
  <Dashboard />
</Suspense>
```

---

## Stable Keys

### Good

```tsx
users.map(user => (
  <UserCard key={user.id} />
));
```

### Avoid

```tsx
key={index}
```

---

# Styling

Recommended order:

1. Tailwind CSS
2. CSS Modules
3. Styled Components (if required)

---

## Avoid Inline Styles

### Avoid

```tsx
<div style={{ marginTop: 10 }}>
```

Prefer classes.

---

# Error Handling

## Error Boundaries

Wrap application sections.

```tsx
<ErrorBoundary>
  <App />
</ErrorBoundary>
```

---

## Handle Async Errors

```tsx
try {
  await saveUser();
} catch (error) {
  logger.error(error);
}
```

Never swallow errors.

---

# Environment Variables

All variables must begin with:

```env
VITE_API_URL=
VITE_APP_NAME=
```

Access via:

```tsx
import.meta.env.VITE_API_URL
```

Never expose secrets in frontend code.

---

# Testing

Recommended stack:

- Vitest
- React Testing Library
- MSW

---

## Test Behavior

Prefer:

```tsx
screen.getByRole("button");
```

Instead of:

```tsx
container.querySelector();
```

---

## Test User Interactions

```tsx
await user.click(button);
```

Instead of testing implementation details.

---

# Accessibility

## Always Use Semantic HTML

### Good

```tsx
<button>Save</button>
```

### Avoid

```tsx
<div onClick={save}>
```

---

## Every Form Field Needs

```tsx
<label htmlFor="email">
```

---

## Images

```tsx
<img
  src={avatar}
  alt="User avatar"
/>
```

---

# Security

## Never Trust User Input

Validate:

- Forms
- URL params
- Query params
- API responses

---

## Escape Dangerous HTML

Avoid:

```tsx
dangerouslySetInnerHTML
```

Unless absolutely necessary.

---

# Logging

Use a centralized logger.

### Good

```tsx
logger.error(error);
```

### Avoid

```tsx
console.log();
```

in production code.

---

# Vite Best Practices

## Use Path Aliases

vite.config.ts

```ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src")
  }
}
```

Usage:

```tsx
import { Button } from "@/components/ui/Button";
```

---

## Keep Build Fast

Avoid:

- Huge barrel exports
- Massive dependencies
- Unused libraries

---

## Enable Code Splitting

```tsx
lazy()
```

```tsx
import()
```

where appropriate.

---

# Recommended Stack

## Core

- React
- TypeScript
- Vite

## Routing

- React Router

## Data Fetching

- TanStack Query

## Forms

- React Hook Form
- Zod

## State Management

- Zustand (small/medium apps)
- Redux Toolkit (large apps)

## Styling

- Tailwind CSS

## Testing

- Vitest
- React Testing Library
- MSW

## Linting

- ESLint
- TypeScript ESLint
- Prettier

---

# AI Coding Rules

When generating code:

1. Always use TypeScript.
2. Never use `any`.
3. Prefer named exports.
4. Prefer functional components.
5. Keep components focused.
6. Extract reusable logic into hooks.
7. Validate API responses.
8. Use TanStack Query for server state.
9. Use React Hook Form + Zod for forms.
10. Use path aliases (`@/`).
11. Follow feature-based architecture.
12. Use strict typing everywhere.
13. Avoid duplicated logic.
14. Prefer composition over inheritance.
15. Use semantic HTML.
16. Consider accessibility by default.
17. Optimize only when necessary.
18. Write maintainable code before clever code.
19. Avoid premature abstraction.
20. Produce production-ready code unless explicitly instructed otherwise.

---
End of Guide