import React, { useState } from 'react';
const FAQ = () => {
  const faqData = [
    {
      question: 'How quickly can I hire talent through your platform?',
      answer: 'Super fast! You can start interviewing candidates within 3-5 days of sharing your requirements. We make sure things move quickly so you can focus on what matters.'
    },
    {
      question: 'How do you ensure the quality of the talent?',
      answer: 'We have a rigorous screening process to ensure the quality of our talent. This includes background checks, skills assessments, and interviews.'
    },
    {
      question: 'What makes hiring through your service cost-effective?',
      answer: 'Our service is cost-effective because we offer a flat fee for our services, with no hidden costs.'
    },
    {
      question: 'Can I scale my team up or down easily?',
      answer: 'Yes, you can easily scale your team up or down as needed. We have a flexible pricing model that allows you to adjust your plan as your needs change.'
    },
    {
      question: 'Do you offer ongoing support after the hire?',
      answer: 'Yes, we offer ongoing support after the hire. We are always available to answer your questions and provide assistance.'
    },
    {
      question: 'What kind of roles can you help fill?',
      answer: 'We can help you fill a wide range of roles, from entry-level to executive-level positions.'
    }
  ];

  return (
    <div className="container mx-auto p-6 w-[80%] max-md:w-full">
      <div className="bg-gradient-to-tl from-custombg  to-[#0D0D0D] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl  text-customWhite mb-4">How quickly can I hire talent through your platform?</h2>
        <p className='text-customgray mb-4'>Super fast! You can start interviewing candidates within 3-5 days of sharing your requirements. 
       We make sure things    <br/> move quickly so you can focus on what matters.</p>
        <div className="faq-container">
          {faqData.map((item, index) => (
            <FaqItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item bg-custombox rounded-lg mb-4">
      <div
        className="faq-question flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium text-customgray">{question}</p>
        <span
          className={`material-symbols-outlined text-xl text-customButton transition-transform duration-300 transform ${isOpen ? 'rotate-90' : ''}`}
        >
          +
        </span>
      </div>
      {isOpen && (
        <div className="faq-answer p-4 text-customgray">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ