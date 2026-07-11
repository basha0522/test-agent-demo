const fs = require('fs');
const path = require('path');

async function generateTests() {
  const files = fs.readdirSync('src').filter(f => f.endsWith('.ts') && !f.endsWith('.test.ts'));

  for (const file of files) {
    const sourceCode = fs.readFileSync(path.join('src', file), 'utf-8');

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
            content: `Write a Jest unit test file for this TypeScript code. Return ONLY the test code, no explanation, no markdown fences:\n\n${sourceCode}`
          }
        ]
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`API call failed: ${response.status} ${errText}`);
    }

    const data = await response.json();
    const testCode = data.choices[0].message.content;

    const testFileName = file.replace('.ts', '.test.ts');
    fs.writeFileSync(path.join('src', testFileName), testCode);
    console.log(`Generated ${testFileName}`);
  }
}

generateTests().catch(err => {
  console.error(err);
  process.exit(1);
});
