export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Enter your name" required />
        <label>Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Enter your message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
