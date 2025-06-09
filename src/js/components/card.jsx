import React from "react";

const Card = ({ title, text, imageUrl }) => {
  return (
    <div className="col-md-3">
      <div className="card mb-4">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Find Out More!</a> {/*  Este es el puñetero botón que me faltaba */}
        </div>
      </div>
    </div>
  );
};

export default Card;
  