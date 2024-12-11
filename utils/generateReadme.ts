import getCommand from './getCommand'


export default function generateReadme({
  projectName,
  packageManager,
}) {
  const commandFor = (scriptName: string, args?: string) =>
    getCommand(packageManager, scriptName, args)

  let readme = `# ${projectName}

This template should help get you started developing with xnscu/create-bare.

`
  let npmScriptsDescriptions = `
## as github repo

\`\`\`sh
git init && gh repo create "${projectName}" --public --source=. --remote=origin
\`\`\`

or private repo:

\`\`\`sh
git init && gh repo create "${projectName}" --private --source=. --remote=origin
\`\`\`
`
  readme += npmScriptsDescriptions

  return readme
}
