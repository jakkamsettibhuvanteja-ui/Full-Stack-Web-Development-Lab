const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, answer => resolve(answer));
    });
}

async function fileManagement() {
    try {
        const filename = await ask("Enter filename: ");
        const initialContent = await ask("Enter initial content: ");
        const additionalContent = await ask("Enter content to append: ");

        if (!filename.trim()) {
            console.log("Filename cannot be empty.");
            rl.close();
            return;
        }

        if (!initialContent.trim()) {
            console.log("Initial content cannot be empty.");
            rl.close();
            return;
        }

        fs.writeFileSync(filename, initialContent);

        const firstRead = fs.readFileSync(filename, "utf8");

        console.log("\nInitial File Contents:");
        console.log(firstRead);

        fs.appendFileSync(filename, `\n${additionalContent}`);

        const finalContent = fs.readFileSync(filename, "utf8");

        console.log("\nFinal File Contents:");
        console.log(finalContent);

        console.log("\nFile operations completed successfully.");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        rl.close();
    }
}

fileManagement();