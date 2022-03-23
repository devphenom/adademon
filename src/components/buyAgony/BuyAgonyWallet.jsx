import React from "react";
import "./BuyAgonyWallet.css";
import { FaRegClipboard } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

function BuyAgonyWallet() {
  return (
    <section className="buyAgonyWallet">
      <Zoom>
        <div className="buyAgonyWallet__box">
          <h3>Wallet Address</h3>

          <h5>
            addr1qystw73xy5t904zsr7nyyvyc9xrvav7vrexs9cwuxry7zaeqjy57qnwf7y5ngzec9mryr4m3xxy56xzuz3pdqyusatkspz7ryw
          </h5>

          <button>
            <FaRegClipboard /> Copy Address
          </button>
        </div>
      </Zoom>
    </section>
  );
}

export default BuyAgonyWallet;