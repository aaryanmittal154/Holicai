import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-grid-system";

const AudienceItem = ({ title, description, index }) => {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-lg shadow-md mb-8 hover:shadow-xl transition duration-300"
      style={{ minHeight: "200px" }}
      whileHover={{ scale: 1.1 }}
    >
      <h3 className="text-3xl text-purple-400 text-center font-bold mb-2">
        {title}
      </h3>
      <p className="text-lg text-white text-center font-bold">{description}</p>
    </motion.div>
  );
};

const TargetAudience = () => {
  const audienceItems = [
    {
      title: "College Students",
      description:
        "Stay ahead of the curve and gain a competitive edge with your new web development skills.",
    },
    {
      title: "Working Professionals",
      description:
        "Add a new skill in the rapidly changing world of technology by leveraging AI in web development.",
    },
    {
      title: "Side Hustlers",
      description:
        "Create new income streams by building cutting-edge websites using AI-powered tools and techniques.",
    },
    {
      title: "People looking for work",
      description:
        "Learn in-demand skills and increase your employability by mastering AI-driven web development.",
    },
    {
      title: "Developers",
      description:
        "Stay up-to-date with the latest advancements in AI and web development to enhance your career.",
    },
    {
      title: "Lifelong Learners",
      description:
        "Join the AI revolution and transform your life by learning how to harness its power in web development.",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-32 bg-black">
      <Container fluid>
        <div className="text-center mb-12">
          <motion.h2 className="text-5xl font-bold text-purple-500 mb-4">
            Who Can Benefit from Holic AI?
          </motion.h2>
          <motion.p className="text-2xl font-bold text-white">
            Our platform is designed for everyone who wants to improve their
            life with AI and web development skills.
          </motion.p>
        </div>
        <Row gutterWidth={32}>
          {audienceItems.map((item, index) => (
            <Col key={index} md={6} lg={4}>
              <AudienceItem
                title={item.title}
                description={item.description}
                index={index}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TargetAudience;
