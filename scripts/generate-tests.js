const fs = require('fs');
const path = require('path');

async function generateTests() {
  const changedFiles = fs.readdirSync('src'); // simplistic — you'd normally diff changed files

  for (const file of changedFiles) {
    if (!file.endsWith('.ts')) continue;

    const sourceCode = fs.readFileSync(path.join('src', file), 'utf-8');

    const response = await fetch('https://your-agent-api.example.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AGENT_API_KEY}`
      },
      body: JSON.stringify({ code: sourceCode })
    });

    const { testCode } = await response.json();
    const testFileName = file.replace('.ts', '.test.ts');
    fs.writeFileSync(path.join('src', testFileName), testCode);
  }
}

generateTests();