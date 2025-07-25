import { defineESLintConfig } from '@ocavue/eslint-config'

export default defineESLintConfig(
  {
    react: true,
  },
  {
    ignores: ['eslint.config.mjs'],
  },
  {
    languageOptions: {
      parserOptions: {
        allowDefaultProject: true,
      },
    },
    rules: {
      // Require curly braces for all control statements
      curly: ['error', 'all'],
      // Disable unsafe assignment rule
      '@typescript-eslint/no-unsafe-assignment': 'off',
      // Disable floating promises rule
      '@typescript-eslint/no-floating-promises': 'off',
      // Disable unsafe member access rule
      '@typescript-eslint/no-unsafe-member-access': 'off',
      // Disable unsafe return rule
      '@typescript-eslint/no-unsafe-return': 'off',
      // Disable unsafe argument rule
      '@typescript-eslint/no-unsafe-argument': 'off',
      // Disable unsafe type rule
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      // Disable unsafe call rule
      '@typescript-eslint/no-unsafe-call': 'off',
      // Disable unsafe this rule
      '@typescript-eslint/no-unsafe-this': 'off',
      // Disable unsafe index signature rule
      '@typescript-eslint/no-unsafe-index-signature': 'off',
      // Disable unsafe property access rule
      '@typescript-eslint/no-unsafe-property-access': 'off',
    },
  },
)
