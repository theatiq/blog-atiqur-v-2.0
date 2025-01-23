export default function DetailsLayout({ children }) {
    return (
      <div>
        <header>
          <h1>Details Page Layout</h1>
        </header>
        <main>{children}</main>  {/* This will render the content of the individual pages */}
        <footer>Footer Content</footer>
      </div>
    );
  }
  