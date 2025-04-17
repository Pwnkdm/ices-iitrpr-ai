import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // navigate(-1)
    navigate("/dashboard");
  };

  return (
    <div
      onClick={handleBack}
      className="text-neutral-500 flex items-center hover:text-black cursor-pointer font-bold"
    >
      <span className="text-xl">
        <IoArrowBack />
      </span>
      <span className="">Back</span>
    </div>
  );
};

export default BackButton;
