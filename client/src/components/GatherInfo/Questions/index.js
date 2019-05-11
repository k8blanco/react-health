import React, {Component} from "react";
// import "./style.css";

class Questions extends Component {

    state = {
        questions: [
            {
                "id": 1,
                "name": "I want to Die",
                "score": 100,
                "type": "thoughts"
            }, {
                "id": 2,
                "name": "Everyone would be better off without me",
                "score": 100,
                "type": "thoughts"
            }, {
                "id": 3,
                "name": "I want to disappear",
                "score": 95,
                "type": "thoughts"
            }, {
                "id": 4,
                "name": "I want to go to bed and never wake up",
                "score": 95,
                "type": "thoughts"
            }, {
                "id": 5,
                "name": "I know how I would kill myself.",
                "score": 100,
                "type": "thoughts"
            }, {
                "id": 6,
                "name": "I am really angry, hurt or afraid.",
                "score": 50,
                "type": "thoughts"
            }, {
                "id": 7,
                "name": "Nothing matters anymore.",
                "score": 100,
                "type": "thoughts"
            }, {
                "id": 8,
                "name": "Things are never going to get better.",
                "score": 75,
                "type": "thoughts"
            }, {
                "id": 9,
                "name": "I am in pain most of the time.",
                "score": 75,
                "type": "thoughts"
            }, {
                "id": 10,
                "name": "I'm never going to get better.",
                "score": 75,
                "type": "thoughts"
            }, {
                "id": 11,
                "name": "I don't want anybody's help.",
                "score": 50,
                "type": "thoughts"
            }, {
                "id": 12,
                "name": "Nobody can help me.",
                "score": 50
            }, {
                "id": 13,
                "name": "I am useless, a failure, or worthless.",
                "score": 50
            }, {
                "id": 14,
                "name": "No body cares about me.",
                "score": 50
            }, {
                "id": 15,
                "name": "I feel lonely all the time.",
                "score": 50
            }, {
                "id": 16,
                "name": "Miss activities or classes you used ot enjoy.",
                "score": 50,
                "type": "child"
            }, {
                "id": 17,
                "name": "Disregard responsibilites in school and at home.",
                "score": 50,
                "type": "child"
            }, {
                "id": 18,
                "name": "Disregard responsibilites in school and at home.",
                "score": 50,
                "type": "child"
            }, {
                "id": 18,
                "name": "Dissmiss people or refuse to talk to them",
                "score": 50
            }, {
                "id": 19,
                "name": "Ignore phone calls or text from friends",
                "score": 50,
                "type": "child"
            }, {
                "id": 20,
                "name": "Sense that you don't belong",
                "score": 50,
                "type": "child"
            }, {
                "id": 21,
                "name": "Having trouble concentrating",
                "score": 50
            }, {
                "id": 22,
                "name": "Having trouble concentrating",
                "score": 50
            }, {
                "id": 23,
                "name": "Taking a lot of risks",
                "score": 50
            }, {
                "id": 24,
                "name": "Drinking or using drugs as a way to cope",
                "score": 50
            }, {
                "id": 25,
                "name": "Sleeping poorly, or sleeping all the time",
                "score": 50
            }, {
                "id": 27,
                "name": "Not taking care of yourself, like washing regularly and eating well",
                "score": 50
            }, {
                "id": 28,
                "name": "Behaving differently then you usually do",
                "score": 50
            }, {
                "id": 29,
                "name": "Acting reckless, like driving too fast or walking in front of traffic",
                "score": 50
            }, {
                "id": 30,
                "name": "Acting reckless, like driving too fast or walking in front of traffic",
                "score": 50
            }, {
                "id": 31,
                "name": "Feeling hopeless or trapped ",
                "score": 50
            }, {
                "id": 32,
                "name": "Lacking energy most of the time ",
                "score": 50
            }, {
                "id": 33,
                "name": "Having troubles making your mind stop",
                "score": 50
            }, {
                "id": 34,
                "name": "None of the above",
                "score": 0
            }

        ],
        answered: 0
    }

    // this.state.questions.map(question => (   <ul>   <input type="checkbox"
    // className="remove"/>      {question.name}   </ul> ))

    componentDidMount () {
      this.renderQuestions()
    }

    handleIncrement = () => {
      this.setState({ answered: this.state.answered + 1 })
      this.renderQuestions()
      console.log(this.state.answered)

    }


    renderQuestions = () => {

        if (this.state.answered === 0) {
            const questions = this.state.questions.filter(question => question.id < 9)
            this.setState({questions})
            // this.setState({ answered: this.state.answered + 1 })
            console.log(this.state.answered)
        } else if (this.state.answered === 1){
                const questions = this.state.questions.filter(question => question.type === "child" )
          this.setState({questions})
          console.log(questions)
          console.log(this.state.answered)
          return questions
        } else {
          console.log("I am")
        }
    }



    render() {
        return (
            <div>
                    {this.renderQuestions}
                {this.state.questions.map(question => (
                        <ul>
                            <input type="checkbox" id={question.id} className="remove"/> {question.name}
                        </ul>
                    ))}
                    {this.state.questions.name}
                                 <button onClick={ this.handleIncrement }>Next</button>
            </div>
        )
    }
}

export default Questions;