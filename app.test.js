const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const server = require("./app");

test("Application returns the expected message", async () => {
    const response = await new Promise((resolve, reject) => {
        http.get("http://127.0.0.1:3000", (res) => {
            let body = "";

            res.on("data", (chunk) => {
                body += chunk;
            });

            res.on("end", () => {
                resolve({ statusCode: res.statusCode, body });
            });
        }).on("error", reject);
    });

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(
        response.body,
        "Hello from my Jenkins CI/CD project!\n"
    );
});

test.after(() => {
    server.close();
});
