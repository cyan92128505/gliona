const fs = require('fs-extra');
const path = require('path');

function parseMap(list, argId, argValue) {
  const _list = {};

  if (!list || list.length === 0) {
    return _list;
  }

  for (const term of list) {
    _list[term[argId]] = term[argValue];
  }

  return _list;
}

function processData(data) {
  const lists = parseMap(data['lists'], 'id', 'name');
  //   const users = parseMap(data['members'], 'id', 'fullName');
  const labels = parseMap(data['labels'], 'id', 'name');

  const parsedCards = [];

  for (const c of data['cards']) {
    parsedCards.push({
      name: c['name'],
      list: lists[c['idList']],
      description: `${c['desc']}`.replace(/\n/g, '|'),
      labels: []
        .concat(c['idLabels'])
        .filter((u) => !!labels[u])
        .map((u) => labels[u]),
    });
  }

  const labelMaxLength = parsedCards.sort((a, b) => b.labels.length - a.labels.length)[0].labels.length;

  let csv = 'name,list,desc';

  for (let index = 0; index < labelMaxLength; index++) {
    csv = `${csv},label${index + 1}`;
  }

  return [csv].concat(parsedCards).reduce((a, b) => {
    let result = `${a}\n${b.name},${b.list},${b.description}`;
    for (let index = 0; index < labelMaxLength; index++) {
      result = `${result},${b.labels[index] || ''}`;
    }

    return result;
  });
}

async function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3];

  const checkInputArg = !!inputPath && /.*\.json/.test(inputPath);
  const checkOutputArg = !!outputPath && /.*\.csv/.test(outputPath);

  if (checkInputArg && checkOutputArg) {
    console.log(`Input File: ${inputPath}`);
    console.log(`Output File: ${outputPath}`);

    const _inputPath = path.join(inputPath);
    const _outputPath = path.join(outputPath);

    const data = await fs.readJSON(_inputPath);

    const csv = processData(data);

    fs.writeFile(_outputPath, `${csv}`);
  } else {
    if (!checkInputArg) {
      console.error(`Input File Path Error`);
    }
    if (!checkOutputArg) {
      console.error(`Output File Path Error`);
    }
  }
}

main();
