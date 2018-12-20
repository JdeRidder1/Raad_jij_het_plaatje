# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "generic/ubuntu1804"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  config.vm.synced_folder ".", "/code"

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  config.vm.provision "shell", inline: <<-SHELL
    echo ">>>>> Installing NodeJS LTS PPA <<<<<"
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    echo ""
    echo ">>>>> Installing NodeJS <<<<<"
    sudo apt-get install -y nodejs
    echo ">>>>> NodeJS + NPM installed <<<<<"
    echo "Node version:" $(node --version)
    echo "NPM version:" $(npm --version)
    echo ""
    echo ">>>>> Installing Typescript <<<<<"
    sudo npm install -g typescript
    echo ""
    echo ">>>>> Typescript installed <<<<<"
    echo "Typescript version:" $(tsc --version)
    echo ""
    echo ">>>>> Installing Yarn <<<<<"
    sudo npm install -g yarn
    echo ""
    echo ">>>>> Yarn installed <<<<<"
    echo "Yarn version: " $(yarn --version)
  SHELL
end
