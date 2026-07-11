const fs = require('fs');
const path = require('path');

async function generateTests() {
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts'));

  for (const file of files) {
    const sourceCode = fs.readFileSync(path.join('src', file), 'utf-8');
    const moduleName = file.replace('.ts', '');   // e.g. "math"

    const response = await fetch('https://models.github.ai/inference/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          {
            role: 'user',
            content: `Write a Jest unit test file for the TypeScript code below.

STRICT REQUIREMENTS:
- The code below is in a file named "${file}".
- Your test file must import from './${moduleName}' exactly — do not invent or guess a different import path.
- Return ONLY valid TypeScript test code. No markdown fences, no explanation, no placeholder text.
- Cover normal cases and at least one edge case per exported function.

Source code:
${sourceCode}`
          }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API call failed: ${response.status} ${errText}`);
    }

    const data = await response.json();
    let testCode = data.choices[0].message.content;

    // Safety net: strip markdown fences if the model adds them anyway
    testCode = testCode.replace(/^```(?:typescript|ts)?\n?/, '').replace(/```$/, '').trim();

    const testFileName = file.replace('.ts', '.test.ts');
    fs.writeFileSync(path.join('src', testFileName), testCode);
    console.log(`Generated ${testFileName}`);
  }
}

generateTests().catch(err => {
  console.error(err);
  process.exit(1);
});