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
        name: `Shoot an ${chalk.bold("email")}?`,
        value: () => {
          open("mailto:akatgeri45@gmail.com");
          console.log("\nLooking forward to getting a message from you\n");
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
  fact: chalk.hex("#B10000")("I am a wannabe full stack dev"),
  github: chalk.hex("#787878")("https://github.com/arnavk09"),
  npx: chalk.hex("#A1AB00")("npx arnavk09"),

  labelFact: chalk.hex("#FF6262").bold("          Fun Fact:"),
  labelGitHub: chalk.hex("#9E9E9E").bold("         GitHub:"),
  labelCard: chalk.hex("#FFF976").bold("                  Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelFact}  ${data.fact}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelSteam}  ${data.steam}`,
    `${data.labelDiscord}  ${data.discord}`,
    `${data.labelWebsite}  ${data.website}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.bold(
      "Hey there, I'm Arnav, a WebDev in the making. I'm also a Computer Science student :) "
    )}`,
    `${chalk.bold("I develop stuff when I'm not busy lazing around.")}`,
    `${chalk.bold("I like dogs. ")}`,
    `${chalk.bold("Toss me an email if you'd like to know about me")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "blue",
  }
);

console.log(me);
const tip = [
  `Tip: ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
  )} on the links above to open them in your broswer.`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
