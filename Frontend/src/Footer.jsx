import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./css/footer.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  afterOpenModal() {
    this.subtitle.style.color = "#f00";
  }

  render = () => {
    return (
      <footer id="footer" className="flex">
        <div className="para">
          <p>
            <Link className="link" onClick={this.openModal}>
              Contact
            </Link>
            <Modal isOpen={this.state.modalIsOpen}>
              <div>
                <h2>Hello</h2>
                <button onClick={this.closeModal}>close</button>
                <div>I am a modal</div>
              </div>
            </Modal>
          </p>
        </div>
        <div className="image">
          <img className="imageOne" src="/logo.png" height="50px" />
        </div>
        <div className="flex">
          <div>
            <a
              href={"http://www.facebook.com/pages/Rishi-Tea/39035256828"}
              target={"_blank"}
            >
              <img className="imageOne" src={"/facebook.png"} height="20px" />
            </a>
          </div>
          <div>
            <a href={"http://twitter.com/RishiTea"} target={"_blank"}>
              <img className="imageOne" src={"/twitter.png"} height="20px" />
            </a>
          </div>
        </div>
      </footer>
    );
  };
}

export default Footer;
