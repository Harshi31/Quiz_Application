const express = require("express");
const cors = require("cors");
const app = express();
const port = 2000;

const cloudQuestions = [
  {
    question: "What is the main benefit of cloud computing?",
    options: [
      "Reduced cost of infrastructure",
      "Faster processing speeds",
      "Higher security measures",
      "More physical control over hardware",
    ],
    answer: "Reduced cost of infrastructure",
  },
  {
    question:
      "Which type of cloud deployment involves a single organization using a private cloud infrastructure?",
    options: [
      "Public cloud",
      "Community cloud",
      "Hybrid cloud",
      "Private cloud",
    ],
    answer: "Private cloud",
  },
  {
    question:
      "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "The provider manages the operating system and applications",
      "Customers have complete control over the underlying infrastructure",
      "The provider manages the physical hardware",
      "Customers only pay for the services they use",
    ],
    answer:
      "Customers have complete control over the underlying infrastructure",
  },
  {
    question:
      "Which cloud computing model provides the most flexibility to customers?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "All three models provide the same level of flexibility",
    ],
    answer: "Infrastructure as a Service (IaaS)",
  },
  {
    question:
      "Which cloud service model is most appropriate for an organization that wants to develop and deploy its own applications?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Hybrid cloud",
    ],
    answer: "Platform as a Service (PaaS)",
  },
  {
    question: "What is the main benefit of cloud computing?",
    options: [
      "Reduced cost of infrastructure",
      "Faster processing speeds",
      "Higher security measures",
      "More physical control over hardware",
    ],
    answer: "Reduced cost of infrastructure",
  },
  {
    question:
      "Which type of cloud deployment involves a single organization using a private cloud infrastructure?",
    options: [
      "Public cloud",
      "Community cloud",
      "Hybrid cloud",
      "Private cloud",
    ],
    answer: "Private cloud",
  },
  {
    question:
      "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "The provider manages the operating system and applications",
      "Customers have complete control over the underlying infrastructure",
      "The provider manages the physical hardware",
      "Customers only pay for the services they use",
    ],
    answer:
      "Customers have complete control over the underlying infrastructure",
  },
  {
    question:
      "Which cloud computing model provides the most flexibility to customers?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "All three models provide the same level of flexibility",
    ],
    answer: "Infrastructure as a Service (IaaS)",
  },
  {
    question:
      "Which cloud service model is most appropriate for an organization that wants to develop and deploy its own applications?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Hybrid cloud",
    ],
    answer: "Platform as a Service (PaaS)",
  },
  {
    question: "What is the main benefit of cloud computing?",
    options: [
      "Reduced cost of infrastructure",
      "Faster processing speeds",
      "Higher security measures",
      "More physical control over hardware",
    ],
    answer: "Reduced cost of infrastructure",
  },
  {
    question:
      "Which type of cloud deployment involves a single organization using a private cloud infrastructure?",
    options: [
      "Public cloud",
      "Community cloud",
      "Hybrid cloud",
      "Private cloud",
    ],
    answer: "Private cloud",
  },
  {
    question:
      "Which of the following is a characteristic of Infrastructure as a Service (IaaS)?",
    options: [
      "The provider manages the operating system and applications",
      "Customers have complete control over the underlying infrastructure",
      "The provider manages the physical hardware",
      "Customers only pay for the services they use",
    ],
    answer:
      "Customers have complete control over the underlying infrastructure",
  },
  {
    question:
      "Which cloud computing model provides the most flexibility to customers?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "All three models provide the same level of flexibility",
    ],
    answer: "Infrastructure as a Service (IaaS)",
  },
  {
    question:
      "Which cloud service model is most appropriate for an organization that wants to develop and deploy its own applications?",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Hybrid cloud",
    ],
    answer: "Platform as a Service (PaaS)",
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
