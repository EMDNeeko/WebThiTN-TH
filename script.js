    const answers = document.querySelectorAll('input[type="radio"]:checked');
    
    let correctAnswers = 0;

    // Duyệt qua từng câu trả lời đã chọn
    answers.forEach(function(answer) {
        // Lấy giá trị của câu trả lời
        const selectedAnswer = answer.value;
        
        // Lấy tên của câu hỏi mà câu trả lời thuộc về
        const questionName = answer.name;
        
        // Lấy giá trị của câu trả lời đúng
        const correctAnswer = getCorrectAnswer(questionName);
        
        // So sánh câu trả lời với câu trả lời đúng
        if (selectedAnswer === correctAnswer) {
            correctAnswers++;
        }
    });

    // Hiển thị số câu trả lời đúng

    function getCorrectAnswer(questionName) {
        switch (questionName) {
            case 'q1':
                return 'b';
            case 'q2':
                return 'a';
            
            default:
                return ''; 
        }
    }