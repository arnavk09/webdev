#!/usr/bin/env node
"use strict";
const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
clear();
const prompt = inquirer.createPromptModule();
const questions = [
  {
    type: "list",
    name: "action",
    message: "What do you want to do?",
    choices: [
      {
        // Use chalk to style headers
        name: `Shoot an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:akatgeri45@gmail.com");
          console.log(
            "\nLooking forward to hearing your message and replying to you!\n"
          );
        },
      },
      {
        name: "Exit",
        value: () => {
          console.log("Bye, have a nice day!\n");
        },
      },
    ],
  },
];
const data = {
  name: chalk.bold.green("                     Arnav Katgeri"),
  handle: chalk.white("@arnavk09"),
  fact: chalk.hex("#B10000")("WebDev in the making"),
  twitter: chalk.hex("#00A1D9")("Private"),
  github: chalk.hex("#787878")("https://github.com/arnavk09"),
  website: chalk.hex("#00AB9E")("https://arnavk09.github.io/personalSite/"),
  npx: chalk.hex("#A1AB00")("npx arnavk09"),

  labelFact: chalk.hex("#FF6262").bold("          Fun Fact:"),
  labelTwitter: chalk.hex("#629DFF").bold("        Twitter:"),
  labelGitHub: chalk.hex("#9E9E9E").bold("         GitHub:"),
  labelWebsite: chalk.hex("#59FFC8").bold("        Website:"),
  labelCard: chalk.hex("#FFF976").bold("                  Card:"),
};
const x = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelFact}  ${data.fact}`,
    ``,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelWebsite}  ${data.website}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold(
      "Hey, I'm Arnav Katgeri, an Indian Web Developer in the making! "
    )}`,
    `${chalk.bold(
      "I develop stuff when I'm not busy reversing a linked list or doing math."
    )}`,
    `${chalk.bold("I like pizza and videogames, sometimes at the same time")}`,
    `${chalk.bold("Shoot me an email if you want to know more")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "blue",
  }
);

console.log(x);
const tip = [
  `Tip: ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above to open them in your broswer.`,
  "",
].join("\n");
console.log(tip);
prompt(questions).then((answer) => answer.action());