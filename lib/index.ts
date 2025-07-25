import { config } from 'dotenv'

// Load environment variables from .env file
const result = config()

if (result.error) {
  console.warn(
    '⚠️  No .env file found or error loading .env file:',
    result.error.message,
  )
  console.log('💡 Tip: Copy .env.example to .env and add your API keys')
}

/**
 * Get an environment variable with optional validation
 */
export function getEnvVar(name: string, required = false): string | undefined {
  const value = process.env[name]

  if (required && !value) {
    throw new Error(
      `❌ Required environment variable ${name} is not set. Check your .env file.`,
    )
  }

  return value
}

/**
 * Validate that required AI provider API keys are present
 */
export function validateAiKeys(
  providers: ('openai' | 'anthropic' | 'google')[] = [],
): void {
  const keyMap = {
    openai: 'OPENAI_API_KEY',
    anthropic: 'ANTHROPIC_API_KEY',
    google: 'GOOGLE_GENERATIVE_AI_API_KEY',
  }

  const missing: string[] = []

  for (const provider of providers) {
    const envVar = keyMap[provider]
    if (!getEnvVar(envVar)) {
      missing.push(envVar)
    }
  }

  if (missing.length > 0) {
    throw new Error(
      `❌ Missing required API keys: ${missing.join(', ')}. Check your .env file.`,
    )
  }
}

// Re-export dotenv config for manual loading if needed
export { config as loadEnv }
