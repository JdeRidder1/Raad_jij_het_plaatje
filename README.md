# Installing TypeScript

This is a skeleton app for people who want to use TypeScript. A Vagrantfile is included for those who want to run it in a virtual machine.

You don't have to use the Vagrantfile if you're fine with installing NodeJS and NPM locally. Feel free to delete it if that's the case.

## Instructions

1. Clone this repository to your pc
2. Make sure you have [NodeJS](https://nodejs.org/en/download/) installed (preferably the LTS version). This will also install `npm`.
3. Open a terminal window (command prompt, git bash, powershell)
4. Check if NodeJS is installed by typing `node --version` into the terminal. It should print a line with something like `v8.12.0`.
5. Check if NPM is installed by typing  `npm --version` into the terminal. It should print a line with something like `6.4.1`.
6. As an alternative to NPM, you could use the [Yarn](yarnpkg.com) npm client from Google and Facebook (it works slightly better and faster than NPM). Install by running `npm install -g yarn`
7. Install de dependencies by running `npm install` or `yarn install` from the project directory.
8. Compile the project by running `npm run build` or `yarn run build`. If you want to run the build script everytime you make changes automatically, you can use `npm run watch` or `yarn run watch`. To check out how this works, you can open the `package.json`.
9. Open the `tsconfig.json` file in this project.
10. Search the [TypeScript documentation](https://www.typescriptlang.org/docs/home.html) and try to explain every line in the json file. Don't understand something? That's fine! Just don't copy stuff for the sake of filling up your answers.


## Using a VM

If you're like me and you dislike NodeJS and NPM piling up heaps of folders on your pc, run TypeScript in a virtual machine!

1. Install a virtual machine host, Virtualbox is fine: https://www.virtualbox.org/wiki/Downloads
2. Probably restart
3. Install Vagrant: https://www.vagrantup.com/downloads.html
4. Probably restart (sorry!)
5. Open a terminal window (Administrator Powershell on Windows)
6. Clone this repository
7. Move to this folder inside the terminal
8. If on Virtualbox: install [Vagrant VB-Guest](https://github.com/dotless-de/vagrant-vbguest) (Only if you're using Virtualbox. If you're using a different host, it's up to you to set up shared folders)
9. Open the Vagrantfile and set up your directory paths. Defaults are fine if you don't know what you're doing.
10. Install the VM by typing `vagrant up`
11. Wait until done. This can take up to 15 minutes, depending on internet and HDD speed. Sometimes the provision will fail because of firewalls. This should mostly be fine, as long as you can see that NodeJS and NPM are installed.
12. Enter the VM by typing `vagrant ssh`
13. In the VM, enter the correct folder for your project (default: `cd /code`)
14. Proceed from step 7 in the non-VM installation instructions
15. **IMPORTANT**: When you're done in the VM, exit it by typing `exit` and then `vagrant halt` into the terminal. This makes sure the VM shuts down cleanly. If you don't need the VM anymore, type `exit` and then `vagrant destroy`. **Never** close the terminal without shutting down the VM, unless you know what you're doing.
