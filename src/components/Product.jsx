import React from 'react';
import styles from "../constants/style";
import { logo } from '../assets';
import { footerLinks, socialMedia } from "../constants";

const ProductPage = () => {
  const productStyle = {
    borderCollapse: 'collapse',
    width: '50%',
    margin: '50px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const cellStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
    color: '#111', // Set the text color to a darker shade
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '6px',
  };

  return (
    <div style={{ fontFamily: 'poppins', color: '#fff', textAlign: 'center' }}>
      <div style={{ background: 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)', padding: '20px' }}>
        <img src={logo} alt="hoobank" style={{ width: '266px', height: '72px', objectFit: 'contain' }} />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
        Otkrijte naš neverovatan proizvod i njegove karakteristike.
        </p>
      </div>

      <div style={productStyle}>
        <h1 style={{ fontFamily: 'poppins', backgroundColor: '#1b3358', color: '#fff', fontSize: '18px', lineHeight: '27px', padding: '20px', textAlign: 'center' }}>Product Information</h1>
        <table style={productStyle}>
          <tbody>
            <tr>
              <td style={cellStyle}>
                <div style={labelStyle}>Ime:</div>
                Kartice
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <div style={labelStyle}>Opis:</div>
                Nase nove platne kartice debitne ili kreditne mozete kupiti po jedinstvenoj ceni za nove korisnike!
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <div style={labelStyle}>Cena:</div>
                $99.99
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <div style={labelStyle}>Dostupnost:</div>
                Platna, Debitna
              </td>
            </tr>
            <tr>
              <td style={cellStyle}>
                <div style={labelStyle}>Slanje:</div>
                Besplatno slanje sirom sveta!
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <footer style={{ backgroundColor: '#2f3651', color: '#fff', padding: '70px', textAlign: 'center' }}>
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">2024 HooBank. All Rights Reserved.</p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
