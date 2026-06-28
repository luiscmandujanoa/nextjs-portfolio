export function Footer() {
    return (
        <footer className="border-border border-t py-6">
            <div className="text-muted mx-auto flex max-w-5xl items-center justify-between px-6 text-sm">
                <p>© {new Date().getFullYear()} Luis Mandujano</p>
                <p className="text-muted">
                    Built with{" "}
                    <span className="text-foreground-secondary">Next.js</span>
                </p>
            </div>
        </footer>
    );
}
