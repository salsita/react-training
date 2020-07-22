# Development scripts

## End-to-end tests github workflow

`createE2ETestWorkflow.ts` script generates the YAML defining the github workflow configuration for End-to-End tests for exercises in `exercises` directory.

### Usage

To execute run 
```sh
npx ts-node createE2ETestWorkflow.ts
```

this will write the generated YAML to the console.

### Adding directories to workflow

The exercises are expected to be found at `exercises/<exercise>` directories. The directory names are currently hardcoded in the script.

In order to add exercises to the workflow the directory names shall be added to the script.
