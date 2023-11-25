import React from 'react';

// Sample data for document entries
const documents = [
  {
    title: 'Citizenship Requirements and Citizen Rights',
    description: 'This document outlines the necessary requirements for applying for citizenship in the Grand Duchy of Rederth, along with the rights bestowed upon individuals granted citizenship in the Grand Duchy. It is crucial to comprehend this information thoroughly before initiating the citizenship application process.',
    link: 'https://docs.google.com/document/d/1WXpmyDwinJfjSUb6vBaLcOmYuxWYfiBIStFtJ3mIKAk/edit?usp=sharing',
  },
  // {
  //   title: 'Document 2',
  //   description: 'This is the second document with a different description.',
  //   link: 'https://docs.google.com/document/d/your-document-id-2/edit',
  // },
  // Add more document entries as needed
];

const DocumentEntry = ({ title, description, link }) => (
  <div className="card mb-3 text-white shadow-lg mx-auto" style={{backgroundColor: '#808080', width: '70%'}}>
    <div className="card-body">
      <h3 className="card-title" style={{fontFamily: 'lobster'}}>{title}</h3>
      <p className="card-text" style={{fontFamily: 'roboto'}}>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-danger" style={{fontFamily: 'lobster'}}>
        Open Document
      </a>
    </div>
  </div>
);

const Docs = () => (
  <div className="container text-white" style={{height: '100vh'}}>
    <h1 className="mt-4 mb-4" style={{fontFamily: 'lobster'}}>Document List</h1>
    {documents.map((doc, index) => (
      <DocumentEntry key={index} {...doc} />
    ))}
    <p style={{fontStyle: 'italic', fontFamily: 'roboto'}}>More will be added as they are radicated.</p>
  </div>
);

export default Docs;
