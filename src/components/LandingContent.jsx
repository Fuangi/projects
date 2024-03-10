function LandingContent({ content, children }) {
  return (
    <div className="landing-content">
      <div className="landing-text">
        <h1 className="heading">{content}</h1>
      </div>
      {children}
    </div>
  );
}

export default LandingContent;
