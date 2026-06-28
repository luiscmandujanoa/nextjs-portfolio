import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const links = [
    {
        label: "GitHub",
        href: "https://github.com/luiscmandujanoa",
        icon: <FaGithub size={20} />,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/luiscmandujanoa",
        icon: <FaLinkedin size={20} />,
    },
];

const EMAIL = "myemail@email.com";

export function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="text-foreground mb-4 font-serif text-3xl font-bold">
                / Contact
            </h2>

            <p className="text-foreground-secondary mb-8 max-w-md leading-relaxed">
                I'm currently open to new opportunities. Whether you have a
                question or just want to say hi, feel free to reach out.
            </p>
            <a
                href={`mailto:${EMAIL}`}
                className="border-accent text-accent hover:bg-accent hover:text-background mb-10 inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 font-sans transition-colors"
            >
                <FiMail size={16} />
                Say hello
            </a>

            <div className="flex items-center gap-5">
                {links.map(({ label, href, icon }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="text-foreground-secondary hover:text-accent transition-colors"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </section>
    );
}
