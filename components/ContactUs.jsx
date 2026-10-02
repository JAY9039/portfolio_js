import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import classnames from "classnames";
import Alert from "./Alerts";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export const ContactUs = () => {
  const form = useRef(null);
  const sending = useRef(false);
  const [alert, setAlert] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (sending.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setAlert({
        color: "warning",
        icon: "ni ni-fat-remove",
        message:
          "The contact service is not configured. Please email sharma03jay.dev@gmail.com directly.",
      });
      return;
    }

    if (!form.current) {
      setAlert({
        color: "danger",
        icon: "ni ni-bell-55",
        message:
          "The contact form could not be submitted. Please email sharma03jay.dev@gmail.com directly.",
      });
      return;
    }

    sending.current = true;
    setIsSending(true);
    setAlert(null);

    try {
      await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      form.current.reset();
      setAlert({
        color: "success",
        icon: "ni ni-like-2",
        message: "Your message has been sent successfully. Thank you!",
      });
    } catch {
      setAlert({
        color: "danger",
        icon: "ni ni-bell-55",
        message:
          "Your message could not be sent. Please check your connection and try again, or email sharma03jay.dev@gmail.com directly.",
      });
    } finally {
      sending.current = false;
      setIsSending(false);
    }
  };

  return (
    <>
      <section className="section section-lg section-shaped">
        <form ref={form} onSubmit={sendEmail}>
          {alert && (
            <Alert
              color={alert.color}
              icon={alert.icon}
              message={alert.message}
            />
          )}
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to work with me? </h4>
                    <p className="mt-0">
                      Reach out to me using the form below.
                    </p>
                    <FormGroup className={classnames("mt-5", {})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-user-run" aria-hidden="true" />
                        </InputGroupText>
                        <Input
                          placeholder="Your name"
                          type="text"
                          name="user_name"
                          aria-label="Your name"
                          autoComplete="name"
                          maxLength={100}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className={classnames({})}>
                      <InputGroup className="input-group-alternative">
                        <InputGroupText>
                          <i className="ni ni-email-83" aria-hidden="true" />
                        </InputGroupText>
                        <Input
                          placeholder="Email address"
                          name="user_email"
                          type="email"
                          aria-label="Email address"
                          autoComplete="email"
                          maxLength={254}
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                        className="form-control-alternative"
                        cols="80"
                        name="user_message"
                        placeholder="Type a message..."
                        rows="4"
                        type="textarea"
                        aria-label="Your message"
                        maxLength={5000}
                        required
                      />
                      <small className="contact-form-hint">
                        Your message is sent through EmailJS.
                      </small>
                    </FormGroup>
                    <div>
                      <Button
                        block
                        className="btn-round"
                        color="default"
                        size="lg"
                        type="submit"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <>
                            <i className="fa fa-spinner fa-spin mr-2" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                      <p className="contact-direct-email">
                        Prefer email?{" "}
                        <a href="mailto:sharma03jay.dev@gmail.com">
                          sharma03jay.dev@gmail.com
                        </a>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
