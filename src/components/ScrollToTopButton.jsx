export default function ScrollToTopButton() {
  const ScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button className="top-button" onClick={ScrollToTop}>
      Top
    </button>
  );
}
