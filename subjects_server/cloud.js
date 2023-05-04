const express = require("express");
const cors = require("cors");
const app = express();
const port = 2000;

const cloudQuestions = [
  {
    question: "What is the main benefit of cloud computing?",
    options: [
      "(A) Reduced cost of infrastructure",
      "(B) Faster processing speeds",
      "(C) Higher security measures",
      "More physical control over hardware",
    ],
    answer: "(A) Reduced cost of infrastructure",
  },
  {
    question:
      "Which type of cloud deployment involves a single organization using a private cloud infrastructure?",
    options: [
      "(A) Public cloud",
      "(B) Community cloud",
      "(C) Hybrid cloud",
      "(D) Private cloud",
    ],
    answer: "(D) Private cloud",
  },
  {
    question:
      "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "(A) The provider manages the operating system and applications",
      "(B) Customers have complete control over the underlying infrastructure",
      "(C) The provider manages the physical hardware",
      "(D) Customers only pay for the services they use",
    ],
    answer:
      "(B) Customers have complete control over the underlying infrastructure",
  },
  {
    question:
      "Which cloud computing model provides the most flexibility to customers?",
    options: [
      "(A) Infrastructure as a Service (IaaS)",
      "(B) Platform as a Service (PaaS)",
      "(C) Software as a Service (SaaS)",
      "(D) All three models provide the same level of flexibility",
    ],
    answer: "(A) Infrastructure as a Service (IaaS)",
  },
  {
    question:
      "Which cloud service model is most appropriate for an organization that wants to develop and deploy its own applications?",
    options: [
      "(A) Infrastructure as a Service (IaaS)",
      "(B) Platform as a Service (PaaS)",
      "(C) Software as a Service (SaaS)",
      "(D) Hybrid cloud",
    ],
    answer: "(B) Platform as a Service (PaaS)",
  },
  {
    question: "What is the main benefit of cloud computing?",
    options: [
      "(A) Reduced cost of infrastructure",
      "(B) Faster processing speeds",
      "(C) Higher security measures",
      "(D) More physical control over hardware",
    ],
    answer: "(A) Reduced cost of infrastructure",
  },
  {
    question:
      "Which type of cloud deployment involves a single organization using a private cloud infrastructure?",
    options: [
      "(A) Public cloud",
      "(B) Community cloud",
      "(C) Hybrid cloud",
      "(D) Private cloud",
    ],
    answer: "(D) Private cloud",
  },
  {
    question:
      "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "(A) The provider manages the operating system and applications",
      "(B) Customers have complete control over the underlying infrastructure",
      "(C) The provider manages the physical hardware",
      "(D) Customers only pay for the services they use",
    ],
    answer:
      "(B) Customers have complete control over the underlying infrastructure",
  },
  {
    question:
      "Which cloud computing model provides the most flexibility to customers?",
    options: [
      "(A) Infrastructure as a Service (IaaS)",
      "(B) Platform as a Service (PaaS)",
      "(C) Software as a Service (SaaS)",
      "(D) All three models provide the same level of flexibility",
    ],
    answer: "(A) Infrastructure as a Service (IaaS)",
  },
  {
    question:
      "Which cloud service model is most appropriate for an organization that wants to develop and deploy its own applications?",
    options: [
      "(A) Infrastructure as a Service (IaaS)",
      "(B) Platform as a Service (PaaS)",
      "(C) Software as a Service (SaaS)",
      "(D) Hybrid cloud",
    ],
    answer: "(B) Platform as a Service (PaaS)",
  },
  {
    question: "What is the main benefit of cloud computing?",
    options: [
      "(A) Reduced cost of infrastructure",
      "(B) Faster processing speeds",
      "(C) Higher security measures",
      "(D) More physical control over hardware",
    ],
    answer: "(A) Reduced cost of infrastructure",
  },
  {
    question:
      "Which type of cloud deployment involves a single organization using a private cloud infrastructure?",
    options: [
      "(A) Public cloud",
      "(B) Community cloud",
      "(C) Hybrid cloud",
      "(D) Private cloud",
    ],
    answer: "(D) Private cloud",
  },
  {
    question:
      "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "(A) The provider manages the operating system and applications",
      "(B) Customers have complete control over the underlying infrastructure",
      "(C) The provider manages the physical hardware",
      "(D) Customers only pay for the services they use",
    ],
    answer:
      "(B) Customers have complete control over the underlying infrastructure",
  },
  {
    question:
      "Which cloud computing model provides the most flexibility to customers?",
    options: [
      "(A) Infrastructure as a Service (IaaS)",
      "(B) Platform as a Service (PaaS)",
      "(C) Software as a Service (SaaS)",
      "(D) All three models provide the same level of flexibility",
    ],
    answer: "(A) Infrastructure as a Service (IaaS)",
  },
  {
    question:
      "Which cloud service model is most appropriate for an organization that wants to develop and deploy its own applications?",
    options: [
      "(A) Infrastructure as a Service (IaaS)",
      "(B) Platform as a Service (PaaS)",
      "(C) Software as a Service (SaaS)",
      "(D) Hybrid cloud",
    ],
    answer: "(B) Platform as a Service (PaaS)",
  },
];

// Add the CORS headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/cloudQuestions", (req, res) => {
  res.send(cloudQuestions);
});

app.listen(port, () => {
  console.log(`You server is listened on ${port} `);
});
