const { prompt } = require('inquirer')
const { writeFile } = require('fs')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')

const tips = [
  {
    type: 'input',
    name: 'confirm',
    message: 'Are you sure download project on current directory (Y/n):'
  }
]

module.exports = prompt(tips).then(({confirm}) => {
  if(confirm === 'n' || confirm === 'N') {
    return true;
  }
  const gitPlace = "baixuexiyang/node-atpl-express"
  const gitBranch = "master"
  const spinner = ora('init project...')
  const place = "node-atpl-express"
  spinner.start()
  download(`${gitPlace}#${gitBranch}`, `./${place}`, (err) => {
    if (err) {
      console.log(chalk.red(err))
      process.exit()
    }
    spinner.stop()
    console.log(chalk.green('New project has been initialized successfully!'))
  });
});


