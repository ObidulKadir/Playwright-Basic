
# Setting Up Playwright

This guide will walk you through the process of setting up Playwright in a new project using both the command line and the Visual Studio Code (VS Code) extension.

# Installation via Command Line
## Step 1: Create a New Folder and Open in VS Code
- Create a new folder for your project.
- Open the folder in Visual Studio Code.
## Step 2: Initialize Playwright

- Open the terminal in VS Code and run the following command:

```
  npm init playwright@latest
```


## Step 3: Project Structure
After running the command, the following files and folders will be created:
```
package.json: Node project management file.
playwright.config.js: Configuration file for Playwright.
tests/: A folder containing basic example tests.
tests-examples/: A folder containing detailed example tests.
.gitignore: A file to specify which files should be ignored by Git during commits and pushes.
playwright.yml: A configuration file for CI/CD pipelines (e.g., GitHub workflows).

```
## Step 4: Verify Playwright Installation
To check if Playwright has been added successfully, run:

```
npm playwright -v
```

## Step 5: Check Playwright Command Options
To see the available command options for Playwright, run:

```
npx playwright -h
```

# Installation via VS Code Extension
Step 1: Create a New Folder and Open in VS Code.

Step 2: Install Playwright Extension

- Go to the Extensions section in VS Code.
- Search for "Playwright" and install the extension provided by Microsoft.

Step 3: To Install Playwright.
- Open the Command Palette by going to View > Command Palette.

- Type playwright and select Install Playwright.

Step 4: Select Browsers
Choose the browsers you want to install (e.g., Chromium, Firefox, WebKit) and click OK.

Step 5: Project Setup
The extension will automatically install the necessary libraries and created the folder.


