export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-6">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        
        <p>
          Built and designed by Luis Mandujano.
        </p>

        <p>
          All rights reserved. © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  )
}