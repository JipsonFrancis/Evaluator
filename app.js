const generateBtn = document.getElementById('generate')
const chatWindow = document.getElementById('chatWindow')
const message = document.getElementById('message')

generateBtn.addEventListener(`click`, async(e) => {
    console.log('Generating question from provided text...')
    chatWindow.textContent = ''
    const lessonNote = message.value

    const generateQuestion = await postData(lessonNote)

    console.log(generateQuestion)

    if (generateQuestion)
    {
        chatWindow.textContent = `${generateQuestion.content}`
    }
})

async function postData(passge) {
  const url = 'https://getcody.ai/api/v1/messages';
  const payload = {
    conversation_id: `WJxboYkQYegw`,
    content: (passge)? `${passge} using blooms taxonomy generate question in a five levels of blooms taxonomy from paragraph provided`: 'repeat this message, cannot generate questions',
    };
    const token = `mk4r7j6h1AHlJV1GYaaPh6Q7WvDrEuII8Sm4YggV`;

  try {
    const response = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const Question =  response.data.data

    return Question;
  } catch (error) {
    console.error('Error:', error);
  }
}


