const Container = ({ children }) => (
  <div className="bg-dark-cream">
    <div className="max-w-[95%] sm:max-w-lg m-auto relative h-screen sm:h-[90vh]">
      {children}
    </div>
  </div>
);
export default Container;
