const http = require('http');
const assert = require('assert');
const { spawn } = require('child_process');

describe('Server', function() {
  let serverProcess;
  const PORT = 3001;
  const URL = `http://localhost:${PORT}`;

  before(function(done) {
    serverProcess = spawn('node', ['index.js'], {
      cwd: __dirname,
      env: { ...process.env, PORT }
    });
    // Wait for server to start
    setTimeout(done, 500);
  });

  after(function() {
    serverProcess.kill();
  });

  it('should respond with expected message', async function() {
    const res = await fetch(URL);
    const text = await res.text();
    assert.strictEqual(text, 'Build test server is running!\n');
    assert.strictEqual(res.status, 200);
  });
});
