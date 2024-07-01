import React from 'react';
import styles from "../constants/style";
import { logo } from '../assets';
import { footerLinks, socialMedia } from "../constants";

const Features = () => {
  
  const tableStyle = {
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
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '6px',
  };

  return (
    <div style={{ fontFamily: 'poppins', color: '#fff', textAlign: 'center' }}>
      <div style={{ background: 'linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)', padding: '20px' }}>
        <img src={logo} alt="hoobank" style={{ width: '266px', height: '72px', objectFit: 'contain' }} />
        <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}>
              <div style={labelStyle}>Naziv firme:</div>
              HOOBANK .d.o.o
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <div style={labelStyle}>Ulica i broj:</div>
              Nepoznata 16
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <div style={labelStyle}>Mesto:</div>
              Kragujevac
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <div style={labelStyle}>Email:</div>
              hoobank65@gmail.com
            </td>
          </tr>
          <tr>
            <td style={cellStyle}>
              <div style={labelStyle}>Telefon:</div>
              034/300-140
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <footer style={{ backgroundColor: '#2f3651', color: '#fff', padding: '40px', textAlign: 'center' }}>
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

export default Features;
