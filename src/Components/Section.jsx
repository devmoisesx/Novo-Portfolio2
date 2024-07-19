function Section({ id, className, children, ...props }) {
  return (
    <section id={id} {...props} className={`w-full ${className}`}>
      {children}
    </section>
  );
}

export default Section;
