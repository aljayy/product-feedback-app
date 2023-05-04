import gradient from "../../assets/suggestions/tablet/background-header.png";

function ProductCard() {
  return (
    <div
      className="bg-no-repeat bg-cover w-full rounded-[1rem] text-white flex flex-col justify-end p-6 l:pt-[6.2rem]"
      style={{ backgroundImage: `url(${gradient})` }}
    >
      <h2 className="text-l-header">Frontend Mentor</h2>
      <p className="text-m-body opacity-[.75]">Feedback Board</p>
    </div>
  );
}

export default ProductCard;
