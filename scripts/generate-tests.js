const fs = require('fs');
const path = require('path');

async function generateTests() {
  const changedFiles = (process.env.CHANGED_FILES || '')
    .split('\n')
    .map(f => f.trim())
    .filter(f => f && (f.endsWith('.ts') || f.endsWith('.js')));

  if (changedFiles.length === 0) {
    console.log('No new/changed source files to generate tests for.');
    return;
  }

  for (const filePath of changedFiles) {
    const sourceCode = fs.readFileSync(filePath, 'utf-8');
    const ext = path.extname(filePath);          // .ts or .js
    const moduleName = path.basename(filePath, ext);

    const response = await fetch('https://models.github.ai/inference/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [{
          role: 'user',
          content: `Write a Jest unit test file for the code below (language: ${ext === '.ts' ? 'TypeScript' : 'JavaScript'}).

STRICT REQUIREMENTS:
- The file is named "${path.basename(filePath)}".
- Import from './${moduleName}' exactly.
- Return ONLY valid ${ext === '.ts' ? 'TypeScript' : 'JavaScript'} test code. No markdown fences, no explanation.
- Cover normal cases and at least one edge case per exported function.

Source code:
${sourceCode}`
        }]
      })
    });

    if (!response.ok) throw new Error(`API call failed: ${response.status} ${await response.text()}`);

    const data = await response.json();
    let testCode = data.choices[0].message.content;
    testCode = testCode.replace(/^```(?:typescript|javascript|ts|js)?\n?/, '').replace(/```$/, '').trim();

    const testFilePath = path.join(path.dirname(filePath), `${moduleName}.test${ext}`);
    fs.writeFileSync(testFilePath, testCode);
    console.log(`Generated ${testFilePath}`);
  }
}

generateTests().catch(err => { console.error(err); process.exit(1); });
