import CV from "../../assets/Zygan Arkadiusz CV - PL.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a download href={CV} className="btn">
        Pobierz CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Porozmawiajmy
      </a>
    </div>
  );
};

export default CTA;
