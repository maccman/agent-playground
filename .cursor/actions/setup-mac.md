---
description: Set up a new Mac for this repo — installs Xcode tools, Homebrew, Node.js, pnpm, Python, uv, and project dependencies
alwaysApply: false
---

# Mac Setup Action

When the user triggers this action, walk them through setting up their Mac for this repo.
Run each step automatically. After each install command, verify it succeeded before moving on.
Speak in plain, friendly language — assume the user has never used a terminal before.

## Steps

1. **Xcode Command Line Tools** — Run `xcode-select -p` to check. If missing, run `xcode-select --install` and tell the user a system dialog will appear — they should click "Install" and wait for it to finish before continuing. Pause and ask the user to confirm when the install is done.

2. **Homebrew** — Run `brew --version` to check. If missing, install via:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   After installing, ensure `brew` is on the PATH (source the shellenv for Apple Silicon: `eval "$(/opt/homebrew/bin/brew shellenv)"`).

3. **nvm (Node Version Manager)** — Run `nvm --version` to check. If missing, install via:
   ```
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
   ```
   Then source the shell profile so `nvm` is available: `source ~/.zshrc`.

4. **Node.js** — Run `node --version` to check. If missing, run `nvm install --lts` to install the latest LTS version.

5. **pnpm** — Run `pnpm --version` to check. If missing, run `npm install -g pnpm`.

6. **Python 3** — Run `python3 --version` to check. If missing, run `brew install python`.

7. **uv (Python package manager)** — Run `uv --version` to check. If missing, run `brew install uv`.

8. **tsx (TypeScript runner)** — Already a devDependency, but verify global availability with `pnpm dlx tsx --version` or rely on the project-local install.

9. **Media / PDF tools** — Optional (ask the user). Install these Homebrew packages if not already present:
   - `imagemagick`
   - `ghostscript`
   - `ffmpeg`
   Run: `brew install imagemagick ghostscript ffmpeg`

10. **csvkit** — Run `uv tool install csvkit` (or `pipx install csvkit`) so `csvkit` and `csvsql` are available on the PATH.

11. **Project dependencies** — Run `pnpm install` from the repo root.

12. **Environment variables** — Check if a `.env` file exists in the repo root. If not, copy `.env.example` to `.env` and tell the user they need to paste in their API keys:
    - `OPENAI_API_KEY`
    - `ANTHROPIC_API_KEY`
    - `GOOGLE_GENERATIVE_AI_API_KEY`

    Explain where to get each key (OpenAI: https://platform.openai.com/api-keys, Anthropic: https://console.anthropic.com/settings/keys, Google AI: https://aistudio.google.com/apikey). They only need the providers they plan to use. Ask them for each key one by one, and once you have all the keys, then update the .env file. 

## Finish

Once everything is installed, run a quick smoke test: `pnpm start scripts/say_hello.ts`. If it succeeds, congratulate the user — they're all set!
