import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const run = (command) => execSync(command, { encoding: 'utf8' }).trim();

const failures = [];

const fail = (message) => failures.push(message);

try {
    const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
    const version = pkg.version;
    const expectedTag = `v${version}`;

    const branch = run('git branch --show-current');
    if (branch !== 'main') {
        fail(`Current branch is "${branch}"; expected "main".`);
    }

    const status = run('git status --porcelain');
    if (status.length > 0) {
        fail('Working tree is not clean; commit/stash changes before deployment.');
    }

    const subject = run('git log -1 --pretty=%s');
    const expectedSubject = `Release ${version}`;
    if (subject !== expectedSubject) {
        fail(`HEAD commit subject is "${subject}"; expected "${expectedSubject}".`);
    }

    const headTags = run('git tag --points-at HEAD');
    const tags = headTags
        ? headTags
              .split('\n')
              .map((x) => x.trim())
              .filter(Boolean)
        : [];
    if (!tags.includes(expectedTag)) {
        fail(`HEAD is missing expected tag "${expectedTag}".`);
    }

    if (failures.length > 0) {
        console.error('Deployment verification failed:');
        for (const item of failures) {
            console.error(`- ${item}`);
        }
        process.exit(1);
    }

    console.log('Deployment verification passed.');
    console.log(`- Branch: ${branch}`);
    console.log(`- Commit: ${subject}`);
    console.log(`- Tag: ${expectedTag}`);
} catch (error) {
    console.error('Deployment verification failed due to command error.');
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
}
