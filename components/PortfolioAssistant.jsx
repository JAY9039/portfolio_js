import React, { useRef, useState } from "react";
import {
  experience,
  greetings,
  projects,
  skillsSection,
} from "../portfolio";

const suggestedQuestions = ["Skills", "Experience", "Projects", "Contact"];

const getReply = (question) => {
  const query = question.toLowerCase();

  if (/resume|cv/.test(query)) {
    return {
      text: "You can view Jay’s resume here.",
      link: greetings.resumeLink,
      linkLabel: "Open resume",
    };
  }

  if (/contact|email|hire|reach/.test(query)) {
    return {
      text: "For opportunities or project discussions, email Jay directly.",
      link: "mailto:sharma03jay.dev@gmail.com",
      linkLabel: "Email Jay",
    };
  }

  if (/project|portfolio|work samples/.test(query)) {
    const project = projects.find((item) =>
      query.includes(item.name.toLowerCase())
    );

    if (project) {
      return {
        text: `${project.name}: ${project.desc}`,
        link: project.github,
        linkLabel: "View project on GitHub",
      };
    }

    return {
      text: `Jay’s projects include ${projects.map((item) => item.name).join(", ")}.`,
      link: "https://github.com/JAY9039",
      linkLabel: "Explore Jay’s GitHub",
    };
  }

  if (/experience|career|job|company/.test(query)) {
    return {
      text: experience
        .map((item) => `${item.role} at ${item.company} (${item.date})`)
        .join(" · "),
    };
  }

  if (/skill|technology|tech stack|tools/.test(query)) {
    const skills = skillsSection.data
      .flatMap((section) => section.softwareSkills.map((skill) => skill.skillName))
      .join(", ");
    return {
      text: `Jay’s frontend toolkit includes ${skills}. He also works with React Query, Zustand, Context API, Jest, React Testing Library, and Cypress.`,
    };
  }

  if (/about|mission|who/.test(query)) {
    return { text: greetings.description };
  }

  return {
    text: "I can help with Jay’s skills, experience, projects, resume, or contact details. Try one of the suggested questions.",
  };
};

const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 0,
      from: "assistant",
      text: "Hi! I can help you explore Jay’s portfolio. What would you like to know?",
    },
  ]);
  const nextId = useRef(1);
  const messagesEnd = useRef(null);

  const ask = (value) => {
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    const reply = getReply(trimmedValue);
    setMessages((currentMessages) => [
      ...currentMessages,
      { id: nextId.current++, from: "visitor", text: trimmedValue },
      { id: nextId.current++, from: "assistant", ...reply },
    ]);
    setQuestion("");
    requestAnimationFrame(() => {
      messagesEnd.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  };

  return (
    <aside className="portfolio-assistant" aria-label="Portfolio assistant">
      {isOpen && (
        <section className="assistant-panel" aria-label="Ask about Jay’s portfolio">
          <header className="assistant-header">
            <div>
              <strong>Portfolio assistant</strong>
              <span>Quick answers about Jay’s work</span>
            </div>
            <button
              className="assistant-close"
              type="button"
              aria-label="Close portfolio assistant"
              onClick={() => setIsOpen(false)}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </button>
          </header>
          <div className="assistant-messages" role="log" aria-live="polite">
            {messages.map((message) => (
              <div
                className={`assistant-message assistant-message-${message.from}`}
                key={message.id}
              >
                <p>{message.text}</p>
                {message.link && (
                  <a
                    href={message.link}
                    target={message.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      message.link.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >
                    {message.linkLabel}
                  </a>
                )}
              </div>
            ))}
            <div ref={messagesEnd} />
          </div>
          <div className="assistant-suggestions" aria-label="Suggested questions">
            {suggestedQuestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => ask(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
          <form
            className="assistant-form"
            onSubmit={(event) => {
              event.preventDefault();
              ask(question);
            }}
          >
            <input
              aria-label="Ask about Jay’s portfolio"
              placeholder="Ask about skills, projects…"
              maxLength={240}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
            />
            <button
              type="submit"
              aria-label="Send question"
              disabled={!question.trim()}
            >
              <i className="fa fa-paper-plane" aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
      <button
        className="assistant-launcher"
        type="button"
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        <i
          className={`fa ${isOpen ? "fa-times" : "fa-comments"}`}
          aria-hidden="true"
        />
        <span>{isOpen ? "Close" : "Ask me"}</span>
      </button>
    </aside>
  );
};

export default PortfolioAssistant;
