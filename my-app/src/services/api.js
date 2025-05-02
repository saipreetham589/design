export async function initChat() {
    return {
      welcome: '*Welcome!* Ask me anything about Henry George’s world.',
      follow_up_questions: [
        'What was Henry George’s main idea?',
        'How did Georgism influence policy?',
        'What were living conditions like in the 1880s?'
      ]
    };
  }
  
  export async function sendMessageToLLM(message) {
    return {
      response: `Here is a placeholder response to: *${message}*`,
      follow_up_questions: [
        'What does land value tax mean?',
        'How did this affect workers?',
        'Can we compare it to today’s economy?'
      ],
      citations: [
        'Progress and Poverty, Book II: Population and Subsistence (Ch. 3–5)',
        'Social Problems, Ch. 7: The Crime of Poverty'
      ]
    };
  }
  