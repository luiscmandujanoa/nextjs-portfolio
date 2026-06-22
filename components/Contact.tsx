export function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold mb-4">/ Let’s work together</h2>

      <p className="text-gray-600 max-w-xl leading-relaxed">
        I’m currently open to freelance opportunities and collaborations. Feel
        free to reach out if you want to build something together.
      </p>

      {/* Email CTA */}
      <div className="mt-6">
        <a
          href="mailto:tuemail@gmail.com"
          className="inline-block px-5 py-2 bg-black text-white rounded-lg hover:opacity-80 transition"
        >
          Send Email
        </a>
      </div>

      {/* Social links */}
      <div className="flex gap-6 mt-8 text-sm">
        <a
          href="https://github.com/luiscmandujanoa"
          target="_blank"
          className="hover:underline"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/luiscmandujanoa"
          target="_blank"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
