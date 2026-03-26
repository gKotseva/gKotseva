export const Technologies = () => {
  return (
    <div className="section flex flex-col items-center gap-15">
      <div>
        <h1 className="heading-text">Technologies</h1>
      </div>
      <div className="flex gap-20">
        <img src="./js.png" className="w-30 h-30 object-contain" />
        <img src="./react.png" className="w-30 h-30 object-contain" />
        <img src="./node.svg" className="w-30 h-30 object-contain" />
        <img src="./mysql.png" className="w-30 h-30 object-contain" />
      </div>
    </div>
  );
};
