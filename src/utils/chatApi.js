// Set this to `true` to use mock mode
const USE_SIMULATION = true;

// Simulate OpenAI Chat API
function getSimulatedResponse(messages, callback) {
  setTimeout(function () {
    const response = {
      role: "assistant",
      content:
        "Это симулированный ответ. Подключите OpenAI API для получения реальных данных.",
    };
    callback(null, response);
  }, 1000);
}

// Real OpenAI API call using .then()
function getRealResponse(messages, callback) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  import("axios").then(({ default: axios }) => {
    axios
      .post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: messages,
        },
        {
          headers: {
            Authorization: "Bearer " + apiKey,
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        const reply = response.data.choices[0].message;
        callback(null, reply);
      })
      .catch(function (err) {
        callback(err);
      });
  });
}

// Main export function
export function getChatResponse(messages, callback) {
  if (USE_SIMULATION) {
    getSimulatedResponse(messages, callback);
  } else {
    getRealResponse(messages, callback);
  }
}
