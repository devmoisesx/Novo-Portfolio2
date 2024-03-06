function Section({ id, className, children, ...props }) {
  return (
    <section id={id} {...props} className={`w-full h-screen ${className}`}>
      {children}
    </section>
  );
}

export default Section;
