# Agent Playground

This project turns [Cursor](https://cursor.com/) into an agentic workflow executor to run tasks on your behalf.

The magic is in the `.cursor/rules` folder. These rules turn Cursor AI into a powerful AI agent that can run scripts and execute tasks on your local machine.

For example, you can ask Cursor to:

- Generate a PDF report from a URL
- Book a flight and hotel
- Resize an image

## Requirements

This project is designed to run on macOS.

### Core Dependencies

- Node.js
- pnpm (TypeScript/Node.js package manager)
- Python
- [uv (Python package manager)](https://docs.astral.sh/uv/) - 10-100x faster than pip
- [Homebrew](https://brew.sh/) - macOS package manager

## Setup

1. Clone this repository

2. Install [uv (Python package manager)](https://github.com/astral-sh/uv)
   
3. (Optional) Install media processing tools:
   ```bash
   brew install imagemagick ghostscript ffmpeg
   ```
4. Install dependencies:

   ```bash
   pnpm install
   ```

5. Setup your AI provider API keys:

   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

## MCP

Recommended MCP servers for Cursor AI. Add them by heading to Cursor Settings > MCP Servers.

```json
{
  "mcpServers": {
    "browsermcp": {
      "command": "npx",
      "args": ["@browsermcp/mcp@latest"]
    },
    "google-maps": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-google-maps"],
      "env": {
        "GOOGLE_MAPS_API_KEY": "YOUR_GOOGLE_MAPS_API_KEY"
      }
    }
  }
}
```

More servers:

- [macos-automator-mcp](https://github.com/steipete/macos-automator-mcp): A Model Context Protocol server for automating macOS tasks using Automator workflows.
- [Peekaboo Tech](https://www.peekaboo.boo/#tech): A MCP for taking screenshots and more.
- [Model Context Protocol Servers List](https://github.com/modelcontextprotocol/servers/tree/main?tab=readme-ov-file): A comprehensive list of available MCP servers and their documentation.

## Structure

```
agent-playground/
├── lib/           # Reusable utilities and shared code
├── scripts/       # Runnable task scripts
├── types/         # Shared TypeScript type definitions
├── data/          # CSV files, JSON data, and other data files
└── package.json   # Project configuration
```

## Usage

1. Open Cursor AI
1. Optionally add any relevent files to the `data/` directory
1. Ask Cursor to do its thing
1. Profit!
