function Section({ id, className, children, ...props }) {
  return (
    <section id={id} {...props} className={className}>
      {children}
    </section>
  );
}

export default Section;
