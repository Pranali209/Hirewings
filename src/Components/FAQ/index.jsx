import React, { useState } from 'react';
const FAQ = () => {
  const faqData = [
    {
      question: 'How quickly can I hire talent through your platform?',
      answer: 'Super fast! You can start interviewing candidates within 3-5 days of sharing your requirements. We make sure things move quickly so you can focus on what matters.'
    },
    {
      question: 'How do you ensure the quality of the talent?',
      answer: 'We only bring the best to the table. Every candidate goes through skill tests and interviews so that you get top-tier professionals ready to make an impact'
    },
    {
      question: 'What kind of roles can you help fill?',
      answer: "From tech experts to customer support heroes, we've got you covered! Software developers, marketing specialists, admin support—you name it, we can find it."
    },
    {
      question: 'What does your onboarding process include?',
      answer: 'Think of it as a "stress-free start"! We handle contracts, compliance, tools setup, and everything in between, so your new hire can hit the ground running.'
    },
    {
      question: 'Do you offer ongoing support after the hire?',
      answer: 'You bet! We’re here for the long haul—HR management, payroll, and cultural integration are all part of our continuous support. Your success is our mission.'
    },
    {
      question: 'Can I scale my team up or down easily?',
      answer: 'Absolutely! Need to grow your team fast or downsize after a project? We make scaling easy so you can adapt without the headaches.'
    },
    {
      question:'How do you handle compliance and legal requirements?',
      answer: "We've got you covered. All compliance, local regulations, and legal paperwork are managed by us. You get peace of mind without the red tape."
    },
    {
      question:'What makes hiring through your service cost-effective?',
      answer: 'Big savings! By hiring skilled talent through us, you can cut labor costs by up to 50% while maintaining high quality. More talent, less spend—it’s a win-win'
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
        <p className={`text-lg font-medium text-customgray 
          ${isOpen ? 'text-white' : 'text-customgray'}`}>{question}</p>
        <span
          className={`material-symbols-outlined text-xl
             text-customButton transition-transform duration-300 transform ${isOpen ? 'rotate-90' : ''}`}
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