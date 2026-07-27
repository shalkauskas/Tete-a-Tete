# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Minimal Impact**: Changes should only touch what's necessary. Avoid introducing bugs.

### Naming & Style

- Match the existing code style and patterns in this repository.
- Use camelCase everywhere, except adapter functions and services (when inlining data transformations).

### Comments

- Do not add explanatory comments for straightforward code.
- Avoid repeating what the code already expresses.
- Only add comments for complex business logic, edge cases, or external API quirks.

## Workflow

> **`tasks/`** is Claude's ephemeral scratch space for the current branch/session. Write freely here — it is gitignored and never committed. Use it for `todo.md` (plans), `lessons.md` (self-improvement rules), and any other working notes.

### Planning

- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions).
- Write plan to `tasks/todo.md` with checkable items and check in before starting.
- If something goes sideways, STOP and re-plan — don't keep pushing.
- Track progress by marking items complete as you go.
- Add a review section to `tasks/todo.md` when done.

### Execution

- **At session start**: review `tasks/lessons.md` for patterns relevant to the current work.
- After ANY correction from the user: update `tasks/lessons.md` with a rule that prevents the same mistake — not just what went wrong, but why and how to avoid it next time.
- Use subagents liberally to keep the main context window clean. One task per subagent.
- For non-trivial changes, ask "is there a more elegant way?" before presenting.
- When given a bug report: just fix it. Point at logs, errors, failing tests — then resolve them.

### Verification

- Never mark a task complete without proving it works.
- Run tests, check logs, demonstrate correctness.
- Ask yourself: "Would a staff engineer approve this?"
