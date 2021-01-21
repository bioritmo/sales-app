// external
import React from 'react';
import Question from 'features/questions/components/question/Question';
//style
import './ResponseCardWrapper.scss';

const ResponseCardWrapper = ({ question, children }) => {
  return (
    <div className="container-questions-consultant">
      <Question question={question} />
      <div className="container-responses-consultant" >
        { children }
      </div>
    </div>
  )
}

export default ResponseCardWrapper;