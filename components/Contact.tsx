import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">/ Contact</h2>

      <p className="text-muted max-w-xl">
        Feel free to get in touch through my professional profiles.
      </p>

      <div className="flex gap-5 mt-8 text-sm">
        <a
          href="https://github.com/luiscmandujanoa"
          target="_blank"
          className="hover:text-accent"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/luiscmandujanoa"
          target="_blank"
          className="hover:text-accent"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </section>
  );
}
