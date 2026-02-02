

const TitleHeader = ({ title, sub, img }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p className="flex items-center gap-2"> 
        <img src={img} alt="icon-fragment"
        className="w-4 h-4"
        
        />
        {sub}
        </p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader; 