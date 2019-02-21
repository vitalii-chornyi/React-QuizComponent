import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';


class QuizQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            incorrectAnswer: false
        };
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null }
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return <QuizQuestionButton key={index} button_text={answer_option} clickHandler={this.handleClick.bind(this)} />
                        })}
                    </ul>
                </section>
            </main>
        );
    }

    handleClick(buttonText) {
        const isCorrect = buttonText === this.props.quiz_question.answer;
        
        if (isCorrect) {
            this.props.showNextQuestionHandler();
        }

        this.setState({
            incorrectAnswer: !isCorrect
        });
    }
}

export default QuizQuestion;