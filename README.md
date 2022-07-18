# Mystery Snap

This is a simple MetaMask Snap that returns random numbers and answers. Below are the steps for publishing a Snap to NPM for anyone to use.

## Prerequisite

Before you begin, you should familiarize yourself with the npm documentation for [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).

You will also need an npm account. 

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
  "version": "1.0.0",
  "description": "A simple MetaMask Snap that returns random numbers and answers.",
  "repository": {
    "type": "git",
    "url": "https://github.com/Montoya/random-snap.git"
  },
```

*Make sure that the version numbers in `snap.manifest.json` and `package.json` match.*

## Publishing

Once your Snap is ready for release, use the following command to publish: 

`npm publish`

*If you are running this for the first time, you may have to log in via the command line, then run this command again.*

You should see output like this: 

```Bash
% npm publish
📦  mystery-snap@1.0.0
=== Tarball Contents === 
2.7kB README.md         
1.7kB dist/bundle.js    
2.1kB images/icon.svg   
1.6kB package.json      
617B  snap.manifest.json
1.3kB src/index.js      
=== Tarball Details === 
name:          mystery-snap                            
version:       1.0.0                                   
filename:      mystery-snap-1.0.0.tgz                  
package size:  3.6 kB                                  
unpacked size: 10.1 kB                                 
shasum:        ...
integrity:     ...
total files:   6                                       

Publishing to https://registry.npmjs.org/
+ mystery-snap@1.0.0
```

After publishing, you can visit your npm account dashboard and see your newly published Snap package:

<img src="tutorial-assets/tutorial-publish.png" width="492" height="184" alt="Published Snap">

Then, any dApp can use the published Snap ID to connect to this Snap: 

```JavaScript
const snapId = `npm:mystery-snap`;
```

MetaMask will automatically fetch the Snap from the npm registry. 

This repository includes a simple dApp website that uses the Snap published to npm. You can try it here: [https://montoya.github.io/random-snap](https://montoya.github.io/random-snap).

## Acknowledgements

Crystal Ball icon by [OpenMoji](https://openmoji.org/).

## License

This project is dual-licensed under Apache 2.0 and MIT terms:
- Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)