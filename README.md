# Mystery Snap

This is a simple MetaMask Snap that returns random numbers and answers. Below are the steps for publishing a Snap to NPM for anyone to use.

## Setup

`snap.manifest.json`: 

```JSON
{
  "version": "1.0.0",
  "proposedName": "Mystery Snap",
  "description": "A simple MetaMask Snap that returns random numbers and answers.",
  "repository": {
    "type": "git",
    "url": "https://github.com/Montoya/random-snap.git"
  },
  "source": {
    "shasum": "05E9ZMYL2tHWlHoTF9z4vnDqbxMFw3KfeEvHyfQeMRE=",
    "location": {
      "npm": {
        "filePath": "dist/bundle.js",
        "iconPath": "images/icon.svg",
        "packageName": "mystery-snap",
        "registry": "https://registry.npmjs.org/"
      }
    }
  },
  "initialPermissions": {
    "snap_confirm": {}
  },
  "manifestVersion": "0.1"
}
```

`source` contains what will be published to NPM for distributing the Snap. Proposed package name is `mystery-snap` (this is the only field that needs to be modified from `template-snap`). Also, the icon at `images/icon.svg` should be changed to something unique.

`package.json` (partial): 

```JSON
{
  "name": "mystery-snap",
  "version": "0.9.0",
  "description": "A simple MetaMask Snap that returns random numbers and answers.",
  "repository": {
    "type": "git",
    "url": "https://github.com/Montoya/random-snap.git"
  },
```

## Acknowledgements

Crystal Ball icon by [OpenMoji](https://openmoji.org/).