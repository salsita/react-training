# Development scripts

## End-to-end tests github workflow

`createE2ETestWorkflow.ts` script generates the github workflow definition for End-to-End tests of exercises in `exercises` directory.

### Usage

To execute run 
```sh
npx ts-node createE2ETestWorkflow.ts
```

this will write the generated workflow definition to the console.

To rewrite the associated workflow file located at `.github/workflows/main.yml` run
```sh
npx ts-node createE2ETestWorkflow.ts --write
```

### Adding directories to workflow

The exercises are expected to be found at `exercises/<exercise>` directories. The directory names are currently hardcoded in the script.

In order to add exercises to the workflow the corresponding directory names shall be added to the script.
