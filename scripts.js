document.addEventListener("DOMContentLoaded", function() {
    const chatbotContainer = document.getElementById("chatbot-container");

    const chatWindow = document.createElement("div");
    chatWindow.classList.add("chat-window");
    chatbotContainer.appendChild(chatWindow);

    const inputArea = document.createElement("div");
    inputArea.id = "input-area";
    chatbotContainer.appendChild(inputArea);

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Type your message...";
    inputArea.appendChild(inputField);

    const sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    inputArea.appendChild(sendButton);

    sendButton.addEventListener("click", function() {
        const userInput = inputField.value.trim();
        if (userInput) {
            appendMessage("user", userInput);
            inputField.value = "";

            // Simulate a bot response
            setTimeout(function() {
                appendMessage("bot", getBotResponse(userInput));
            }, 1000);
        }
    });

    function appendMessage(sender, text) {
        const message = document.createElement("div");
        message.classList.add("message", sender);

        const messageText = document.createElement("div");
        messageText.classList.add("text");
        messageText.textContent = text;

        message.appendChild(messageText);
        chatWindow.appendChild(message);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function getBotResponse(input) {
        // Placeholder response logic (this is where you'd integrate your LLM)
        if (input.toLowerCase().includes("hello")) {
            return "Hi there! How can I help you today?";
        } else if (input.toLowerCase().includes("experience")) {
            return "I have experience working at NASA, Fidelity Investments, and New England Biolabs.";
        } else {
            return "I'm not sure how to respond to that. Please ask me about my experience or skills!";
        }
    }
});
