import { argv } from 'process'
import { writeFile } from 'fs'

const EXERCISES = ['00-init']
const WORKFLOW_FILE = '../../.github/workflows/main.yml'

const HEADER = `\
name: End-to-end tests

# Controls when the action will run. Triggers the workflow on push
on: [push]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
`

const getCypressJobForDir = (dirname: string): string => {
  return `
  # Exercise ${dirname}
  e2e-${dirname}:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Install root dependencies
        uses: bahmutov/npm-install@v1
        with:
          working-directory: exercises
          useLockFile: false
      - name: Cypress run exercise ${dirname}
        uses: cypress-io/github-action@v2
        with:
          # we have already installed all dependencies above
          install: false
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

  return (
    HEADER +
    directories.reduce(
      (accumulator, dir) => accumulator + getCypressJobForDir(dir),
      ''
    )
  )
}

const cypressWorkflow = getCypressWorkflow(EXERCISES)

if (process.argv.includes('--write')) {
  console.log('Writing generated github workflow to', WORKFLOW_FILE)
  writeFile(WORKFLOW_FILE, cypressWorkflow, (err) => {
    if (err) {
      console.error("Couldn't write workflow to", WORKFLOW_FILE, err)
    }
  })
} else {
  console.log(cypressWorkflow)
}
