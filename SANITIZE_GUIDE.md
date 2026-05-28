Sanitized Demo Guide

This project includes a small sanitizer script that creates a public-friendly copy of the repository at `demo-sanitized/`.

What it does

- Copies project files into `demo-sanitized/` excluding `node_modules`, `.git`, and `dist`.
- Replaces likely sensitive strings with placeholders: emails, URLs, API keys, GitHub links, and a small list of client/company names.
- Writes `SANITIZED_README.md` inside `demo-sanitized/` with run instructions.

How to run

From the project root:

```bash
npm run sanitize
```

After the script finishes, review `demo-sanitized/` manually. The script uses heuristics and will not be perfect; always manually verify and remove any sensitive information before publishing.

Publishing the demo

- Create a new GitHub repository (public) and push the contents of `demo-sanitized/`.
- Alternatively, open `demo-sanitized/` in CodeSandbox by importing the GitHub repo or by uploading the folder.

Notes and customization

- Edit `scripts/sanitize.js` to add custom client/company names to the `clientNames` array for redaction.
- The script replaces GitHub links with `[REDACTED_GITHUB]`. If you want to keep certain handles public, update the regex or perform replacements after the copy.
- Always run a final manual review before publishing.
