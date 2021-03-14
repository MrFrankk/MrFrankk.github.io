name: Validate HTML

on:
  push:
    branches:
    - main
  pull_request:
    branches:
    - main
  schedule:
    # Run everyday at 4:30 AM
    - cron: "30 4 * * *"

jobs:
  validate-html:
    runs-on: ubuntu-latest
    steps:
    - name: Check out code
      uses: actions/checkout@master
    - name: Run validate-html
      uses: chabad360/htmlproofer@master
      with:
        directory: "./"
        arguments: "--check_opengraph --check-html --enforce-https --report-invalid-tags --report-missing-names --report-missing-doctype --report-eof-tags --report-mismatched-tags"
    - name: Run html5validator
      uses: Cyb3r-Jak3/html5validator-action@v0.4.4
      with:
        root: "./"
