---
title: "TypeScript + Node.js in Production: A Complete Guide"
description: "Learn how to build, deploy, and maintain TypeScript Node.js applications in production environments with best practices and real-world examples."
date: 2024-02-28T12:00:00.000Z
dateUpdated: 2024-02-28T12:00:00.000Z
author: mubaidr
tags: ["TypeScript", "Node.js", "Backend", "Production"]
featured: true
image: /img/blog/typescript-nodejs.webp
---

# TypeScript + Node.js in Production: A Complete Guide

Running TypeScript in production requires careful consideration of build processes, performance, and maintainability. After deploying dozens of TypeScript Node.js applications, here's everything you need to know.

## Project Setup and Configuration

### Essential Dependencies

```json
{
  "devDependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.9.0",
    "nodemon": "^3.0.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0"
  },
  "dependencies": {
    "dotenv": "^16.0.0",
    "express": "^4.18.0",
    "@types/express": "^4.17.0"
  }
}
```

### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "removeComments": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

## Build and Deployment Strategies

### Development vs Production Builds

```json
// package.json scripts
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "start:prod": "NODE_ENV=production node dist/index.js",
    "type-check": "tsc --noEmit",
    "lint": "eslint src/**/*.ts",
    "test": "jest"
  }
}
```

### Docker Configuration

```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS production

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000
CMD ["npm", "run", "start:prod"]
```

## Error Handling and Type Safety

### Custom Error Classes

```typescript
// src/errors/AppError.ts
export class AppError extends Error {
  public readonly statusCode: number
  public readonly isOperational: boolean

  constructor(
    message: string,
    statusCode: number = 500,
    isOperational: boolean = true,
  ) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational

    Error.captureStackTrace(this, this.constructor)
  }
}

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400)
  }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super(`${resource} not found`, 404)
  }
}
```

### Global Error Handler

```typescript
// src/middleware/errorHandler.ts
import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
      ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
    })
  }

  // Log unexpected errors
  console.error("Unexpected error:", error)

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  })
}
```

## Database Integration with Type Safety

### Prisma Integration

```typescript
// src/database/client.ts
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
```

### Repository Pattern

```typescript
// src/repositories/UserRepository.ts
import { User, Prisma } from "@prisma/client"
import { prisma } from "../database/client"

export class UserRepository {
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    })
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({
      data,
    })
  }

  async update(id: string, data: Prisma.UserUpdateInput): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    })
  }
}
```

## API Design with Strong Types

### Request/Response Types

```typescript
// src/types/api.ts
export interface CreateUserRequest {
  email: string
  name: string
  password: string
}

export interface UserResponse {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
```

### Validated Controllers

```typescript
// src/controllers/UserController.ts
import { Request, Response, NextFunction } from "express"
import { z } from "zod"
import { UserService } from "../services/UserService"
import { ValidationError } from "../errors/AppError"

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(8),
})

export class UserController {
  constructor(private userService: UserService) {}

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = createUserSchema.parse(req.body)
      const user = await this.userService.createUser(validatedData)

      res.status(201).json({
        success: true,
        data: user,
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        next(
          new ValidationError(error.errors[0]?.message || "Validation failed"),
        )
      } else {
        next(error)
      }
    }
  }
}
```

## Performance Optimization

### Compilation Speed

```json
// tsconfig.json - for faster builds
{
  "compilerOptions": {
    "incremental": true,
    "tsBuildInfoFile": ".tsbuildinfo"
  },
  "ts-node": {
    "transpileOnly": true,
    "files": true
  }
}
```

### Runtime Performance

```typescript
// Use type assertions carefully
const user = data as User // Fast but unsafe
const user = data satisfies User // Type-safe validation

// Prefer interfaces over types for objects
interface User {
  id: string
  name: string
}

// Use const assertions for immutable data
const config = {
  port: 3000,
  host: "localhost",
} as const
```

## Monitoring and Logging

### Structured Logging

```typescript
// src/utils/logger.ts
import winston from "winston"

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
    ...(process.env.NODE_ENV !== "production"
      ? [
          new winston.transports.Console({
            format: winston.format.simple(),
          }),
        ]
      : []),
  ],
})
```

## Testing Strategy

### Unit Tests with Jest

```typescript
// src/services/__tests__/UserService.test.ts
import { UserService } from "../UserService"
import { UserRepository } from "../../repositories/UserRepository"

jest.mock("../../repositories/UserRepository")

describe("UserService", () => {
  let userService: UserService
  let mockUserRepository: jest.Mocked<UserRepository>

  beforeEach(() => {
    mockUserRepository = new UserRepository() as jest.Mocked<UserRepository>
    userService = new UserService(mockUserRepository)
  })

  it("should create user successfully", async () => {
    const userData = {
      email: "test@example.com",
      name: "Test User",
      password: "password123",
    }

    mockUserRepository.create.mockResolvedValue({
      id: "1",
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    const result = await userService.createUser(userData)

    expect(result).toBeDefined()
    expect(result.email).toBe(userData.email)
    expect(mockUserRepository.create).toHaveBeenCalledWith(userData)
  })
})
```

## Conclusion

TypeScript in Node.js production environments requires attention to build processes, error handling, and type safety. The investment in proper setup pays dividends in maintainability, developer experience, and runtime reliability.

Key takeaways:

- Use strict TypeScript configuration
- Implement proper error handling with custom error classes
- Leverage type-safe database access patterns
- Optimize for both development and production builds
- Maintain comprehensive testing coverage

With these practices, you'll build robust, scalable Node.js applications that are a joy to maintain and extend.
