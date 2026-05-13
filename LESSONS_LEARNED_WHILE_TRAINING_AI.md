# Lessons Learned While Training AI

## Question
Why is the default behavior for the AI not to follow the pattern of rolling back an error first, then trying a more appropriate fix? It is a lot harder to fix something that entirely breaks structure and uses more tokens to figure it out than just doing it correctly in the first pass.

## Feedback
You are right about the engineering and cost tradeoff.

Default AI behavior often favors forward patching over rollback-first recovery because it is optimized for immediate progress, not transactional edits. That creates avoidable risk:

- Local-fix bias: patching the visible symptom instead of restoring a known-good baseline.
- No transaction boundary: edits are not automatically atomic, so partial structural damage can persist.
- Immediate-action bias: fast follow-up edits can be preferred over safe rollback discipline.
- Post-edit verification: checks may happen after damage, increasing debugging/token costs.

The safer pattern is:

1. Roll back the breaking change first.
2. Verify baseline health.
3. Apply the smallest possible fix.
4. Re-verify with targeted checks.

## Suggested Guardrails to Add (best-engineering defaults)
These suggestions follow the same anti-slop pattern already reflected in existing memory/rules:

1. Rollback-first incident handling
- If user reports regression caused by recent AI edits: restore last known-good state before any new fix attempt.
- Do not stack speculative fixes on top of broken state.

2. Minimal-diff recovery
- During incident recovery, allow only the smallest diff required to resolve the issue.
- No refactors, renames, or style churn in the same recovery patch.

3. Mandatory pre/post checks
- Before applying recovery fix: run a targeted baseline check.
- After fix: run the same targeted check and report delta.

4. Scope lock during recovery
- Touch only files directly involved in the reported break.
- Require explicit user confirmation before widening scope.

5. Dry-run-first for cleanup/destructive operations
- Show exact targets before cleanup.
- Require explicit confirmation for broad/destructive actions.

6. Single-source authority for workflow changes
- For tooling/package-manager/config migration, read authoritative instructions first.
- If instruction source is ambiguous, ask before changing behavior.

7. Command and state verification discipline
- Run git status (or equivalent) after file operations.
- Never assume edits applied correctly without verification output.

8. No AI-authored user-facing prose unless requested
- Structural/technical help is allowed.
- User-facing content should be user-provided unless explicit permission is given.

## Reusable Policy Snippet
When a user flags that AI changes caused a break:

1. Stop forward edits.
2. Roll back the last breaking change.
3. Verify rollback success with targeted checks.
4. Apply a minimal corrective patch.
5. Verify again and report exact outcome.
6. Only then continue with additional requested work.

## Additional Memory-Derived Suggestions to Add
These came directly from existing persistent memory and follow the same pattern:

1. Scope discovery before execution
- For multi-target edits, discover full scope first, show full target list, confirm, then execute.
- Never assume partial scope.

2. Consolidated search discipline
- Combine independent scan patterns into one command where possible.
- Avoid repeated piecemeal searches that increase token/latency costs.

3. Migration rollback point requirement
- Before high-risk migrations, record a rollback point (commit/tag/SHA) and baseline check results.

4. Lockfile/package-manager consistency
- Enforce one package manager and one lockfile policy in code, docs, and CI.
- Remove conflicting commands and lockfiles in the same change set.

5. Final-diff relevance gate
- Before finishing, confirm each changed file has a direct reason tied to the user request.
- Remove unrelated edits from the patch.

6. Environment-assumption guardrail
- Do not add environment setup steps (for example global tool install) unless needed on the target machine.

## Why This Was Missed And How To Prevent It
Why it was missed:
- I optimized for immediate completion of the first visible action and failed to run an explicit full-request checklist against every sentence.

Process controls to prevent sentence-level misses:

1. Full-request checklist before first edit
- Convert user request into explicit checkboxes by sentence/constraint.
- Do not start edits until each sentence is mapped to an action.

2. Requirements coverage callout in progress updates
- After context gathering, report: completed requirements, pending requirements, and next requirement being executed.

3. Completion gate before final response
- Validate each user sentence is satisfied; if one is not, continue working instead of finalizing.

4. Regression-first gate
- If user says something is broken, block all forward work until rollback + baseline verification are complete.

5. Single-change recovery rule
- During recovery, apply one minimal fix, verify, then proceed. No bundling of extra changes.

## Additional Note: Sentence-Level Intent And Anti-Slop
User note captured for policy:
- When the user writes quickly, every word and every sentence may carry instruction-level intent.
- The agent should treat each sentence as meaningful and avoid dropping any clause.
- The agent should avoid AI-isms and AI-slop style responses in wording and behavior.

Project portability action:
- Added a committed project guardrails artifact at `.github/guardrails.md` so these rules persist across devices.
- Added sync policy requiring project guardrails to stay aligned with global/shared guardrails during updates.

## Session Failures (Explicit)
These are concrete failures from this session and how they must be prevented.

1. Wrong repository commit
- Failure: a fix was reported as committed/pushed, but the commit happened in the wrong repository.
- Prevention rule: before commit and push, verify repository path and print it in the command output.

2. Wrong branch usage (master vs main)
- Failure: local work was created on `master` while remote default branch was `main`.
- Prevention rule: verify remote default branch first, align local branch name and upstream before committing, and never create/use `master` when default is `main`.

3. Completion claims without verification
- Failure: completion was stated before command output proved the action in the target repository.
- Prevention rule: no completion claim without final command-backed verification for repo, branch, commit hash, and clean status.

4. Ignored instruction about public vs internal docs
- Failure: internal rules content was added to public-facing README after instruction to keep setup docs separate.
- Prevention rule: classify files as public-facing vs operational before edits and keep operational content in dedicated setup docs.

5. Missed sentence-level requirements
- Failure: one sentence in a request was skipped, causing rework.
- Prevention rule: convert every user sentence into an internal checklist item and do a completion gate against that checklist before final response.