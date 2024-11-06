import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { HandleWhatsClick } from "../utils/whatssap";
import ImageCreators from "./ImageCreators/imageCreate";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const formRef = useRef(); // Usando useRef para capturar o formulário

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    emailjs
      .sendForm(
        "service_rttos6k", // Seu Service ID
        "template_vmc9jzm", // Seu Template ID
        formRef.current, // Captura os dados do formulário usando a referência
        "h_BMIWtJYJS3kBt-p" // Seu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState(); // Limpa os campos após o envio
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Entre em contato</h2>
                <p>
                  Preencha o formulário abaixo para nos enviar um e-mail, e
                  retornaremos o contato o mais rápido possível.
                </p>
              </div>
              <form ref={formRef} name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                        required
                        onChange={handleChange}
                        value={name} // Adiciona o valor ao input
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email} // Adiciona o valor ao input
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                    required
                    onChange={handleChange}
                    value={message} // Adiciona o valor ao textarea
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          {/* Informações de contato */}
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações para contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          {/* Redes sociais */}
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i
                        onClick={() =>
                          HandleWhatsClick({
                            phoneNumber: "+551190000000",
                            message: "Olá, gostaria de mais informações.",
                          })
                        }
                        className="fa fa-whatsapp"
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <a
            href="https://br.freepik.com/fotos-gratis/mao-de-mecanico-verificando-e-consertando-um-carro-quebrado-na-garagem-de-servico_10521910.htm#query=banner%20mecanica&position=1&from_view=keyword&track=ais_hybrid&uuid=685afeea-787b-43c0-bfe9-80fedb3d6849"
          >
          </a>
        </div>
      </div>
    </div>
  );
};
