import React from 'react';
import { FaGlobe, FaWhatsapp, FaCommentDots, FaEnvelope } from 'react-icons/fa';
import { FaInstagram, FaTiktok, FaFacebook, FaTelegram } from 'react-icons/fa';

const Home = () => {
  return (
    <div style={{
      fontFamily: "'Arial', sans-serif",
      background: '#f0f4ff',
      margin: 0,
      padding: '2rem',
      textAlign: 'center',
      color: '#111',
    }}>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>NolanDex - Link in Bio</h1>

      {/* Button 1 */}
      <a className="button" href="https://nolandex.my.id" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        backgroundColor: '#2563eb',
        color: '#fff',
        textDecoration: 'none',
        padding: '0.9rem 1.5rem',
        borderRadius: '999px',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '0.6rem auto',
        width: '90%',
        maxWidth: '320px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        transition: 'background 0.3s',
      }}>
        <FaGlobe /> Kunjungi Website
      </a>

      {/* Button 2 */}
      <a className="button" href="https://wa.me/6285156779923?text=Hi%2C%20I'm%20interested%20in%20your%20business%20setup%20services" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        backgroundColor: '#2563eb',
        color: '#fff',
        textDecoration: 'none',
        padding: '0.9rem 1.5rem',
        borderRadius: '999px',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '0.6rem auto',
        width: '90%',
        maxWidth: '320px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        transition: 'background 0.3s',
      }}>
        <FaWhatsapp /> Hubungi di WhatsApp
      </a>

      {/* Button 3 */}
      <a className="button" href="https://t.me/nolandex" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        backgroundColor: '#2563eb',
        color: '#fff',
        textDecoration: 'none',
        padding: '0.9rem 1.5rem',
        borderRadius: '999px',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '0.6rem auto',
        width: '90%',
        maxWidth: '320px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        transition: 'background 0.3s',
      }}>
        <FaCommentDots /> Hubungi di Telegram
      </a>

      {/* Button 4 */}
      <a className="button" href="mailto:nolandexco@gmail.com" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        backgroundColor: '#2563eb',
        color: '#fff',
        textDecoration: 'none',
        padding: '0.9rem 1.5rem',
        borderRadius: '999px',
        fontSize: '1rem',
        fontWeight: 600,
        margin: '0.6rem auto',
        width: '90%',
        maxWidth: '320px',
        boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
        transition: 'background 0.3s',
      }}>
        <FaEnvelope /> Email Kami
      </a>

      {/* Social Media Icons */}
      <div style={{
        marginTop: '2rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
      }}>
        <a href="https://www.instagram.com/nolandexco?igsh=MWV3cXRuejBqcGwyZg==" style={{
          color: '#2563eb',
          fontSize: '1.4rem',
          transition: 'color 0.3s',
        }}><FaInstagram /></a>
        <a href="https://www.tiktok.com/@nolandexco?_t=ZS-8vwewu0P3sm&_r=1" style={{
          color: '#2563eb',
          fontSize: '1.4rem',
          transition: 'color 0.3s',
        }}><FaTiktok /></a>
        <a href="https://www.facebook.com/nolandexco" style={{
          color: '#2563eb',
          fontSize: '1.4rem',
          transition: 'color 0.3s',
        }}><FaFacebook /></a>
        <a href="https://t.me/nolandex" style={{
          color: '#2563eb',
          fontSize: '1.4rem',
          transition: 'color 0.3s',
        }}><FaTelegram /></a>
        <a href="mailto:nolandexco@gmail.com" style={{
          color: '#2563eb',
          fontSize: '1.4rem',
          transition: 'color 0.3s',
        }}><FaEnvelope /></a>
      </div>
    </div>
  );
};

export default Home;
