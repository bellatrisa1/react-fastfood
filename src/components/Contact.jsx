function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h2>Контакты</h2>
        <p>Email: bellatrisabaggins@gmail.com</p>
        <p>Phone: +7 999 208 63 37</p>
      </div>

      <p>Свяжитесь с нами через социальные сети:</p>
      <div className="social-links">
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          className="social-icon instagram"
          aria-label="Instagram"
        />
        <a
          href="https://vk.com/your-profile"
          target="_blank"
          className="social-icon vk"
          aria-label="VK"
        ></a>
        <a
          href="https://t.me/your-profile"
          target="_blank"
          className="social-icon telegram"
          aria-label="Telegram"
        ></a>
      </div>
    </div>
  );
}
export default Contact;
