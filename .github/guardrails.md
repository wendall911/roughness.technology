# Project Guardrails

These rules are committed with this repository and should travel with the project across devices.

## Sync Policy
- Keep this file in sync with global rules at `/home/wendallc/.config/Code/User/prompts/global-guardrails.instructions.md`.
- On any project guardrail update, mirror equivalent updates to the global/shared guardrails.
- If there is a conflict, apply the stricter rule.

## Execution Scope
- Follow explicit user requests exactly; do not perform adjacent or substituted actions unless asked.
- Treat every user sentence as an instruction-bearing requirement until explicitly resolved.
- Before first edit, create an internal checklist that maps each sentence/constraint to a concrete action.

## Error Recovery
- If user reports a regression introduced by recent AI edits: roll back the breaking change first.
- Verify rollback success with targeted checks before attempting a new fix.
- Apply one minimal corrective change at a time, then verify before any additional edits.

## Requirements Coverage Gate
- Before final response, confirm each sentence-level requirement is satisfied.
- If any requirement is unsatisfied, continue work instead of finalizing.

## Cleanup and Destructive Actions
- Run dry-run previews first and show exact targets.
- Do not use force-remove patterns.
- Require explicit confirmation before broad/destructive operations.

## Verification Discipline
- After each change, run a targeted status/check command and report outcome.
- Never assume an edit succeeded without verification output.

## Communication Quality
- Use direct, specific language.
- Avoid AI-isms, filler phrasing, and generic "AI-slop" response patterns.

## Content Rule
- No AI written text for user-facing copy unless explicitly requested.