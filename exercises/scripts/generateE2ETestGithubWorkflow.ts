import { argv, exit } from 'process'
import { writeFile } from 'fs'
import { resolve } from 'path'

const exercises = [
  '00-init',
  '01-react-stateful',
  '02-react-stateless',
  '03-redux',
  '04-react-redux',
  '05-reselect',
  '06-redux-saga',
  '07-normalizr',
]
const workflowFile = resolve(__dirname, '../../.github/workflows/main.yml')

const helpMessage = `\
Generate the github workflow for E2E tests

Usage: npx ts-node generateE2ETestGithubWorkflow.ts [OPTIONS]

Available options:
      --write   write the result directly to ${workflowFile} file
  -h, --help    display this help and exit
`

if (argv.includes('--help') || argv.includes('-h')) {
  console.log(helpMessage)
  exit(0)
}

const workflowHeader = `\
name: End-to-end tests

# Controls when the action will run. Triggers the workflow on push
on: [push]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
`

const getCypressJobForDirectory = (dirname: string): string => {
  return `
  # Exercise ${dirname}
  e2e-${dirname}:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Install root dependencies
        uses: bahmutov/npm-install@v1.4.1
        with:
          working-directory: exercises
      - name: Cypress run exercise ${dirname}
        uses: cypress-io/github-action@v2
        with:
          working-directory: exercises/${dirname}
          # start the server
          start: npm start
          # wait for server to start
          wait-on: 'http://localhost:3000'
          # wait for 2 minutes for the server to respond:
          wait-on-timeout: 120
      - uses: actions/upload-artifact@v1
        if: failure()
        with:
          name: ${dirname}-cypress-screenshots
          path: exercises/${dirname}/cypress/screenshots
      - uses: actions/upload-artifact@v1
        if: always()
        with:
          name: ${dirname}-cypress-videos
          path: exercises/${dirname}/cypress/videos
`
}

const getCypressWorkflow = (directories: Array<string>): string => {
  if (directories.length === 0) {
    return ''
  }

  const workflowJobs = directories.map(getCypressJobForDirectory).join('')

  return workflowHeader + workflowJobs
}

const cypressWorkflow = getCypressWorkflow(exercises)

if (argv.includes('--write')) {
  console.log('Writing generated github workflow to', workflowFile)
  writeFile(workflowFile, cypressWorkflow, (err) => {
    if (err) {
      console.error("Couldn't write workflow to", workflowFile, '\n', err)
    }
  })
} else {
  console.log(cypressWorkflow)
}
