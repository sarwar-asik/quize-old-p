import "./Quize.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SingleQuize = ({ quize }) => {
  const { question, options, correctAnswer } = quize;

  const notify2 = (optionpara) => {
    if (correctAnswer === optionpara) {
      const notify = toast("Correct Answer ");
      return notify;
    } else {
      const notify = toast("Wrong");
      return notify;
    }
  };

  const notify = () => toast("Correct Answer == " + correctAnswer);

  return (
    <div className="bg-light shadow-lg  px-2 py-5 my-3 ">
      <div className="questions">
        <h4 className="text-primary bg-info py-3 rounded my-2 ">
          Questions: {question.replace(/(<([^>]+)>)/gi, "")}?
        </h4>
        <FontAwesomeIcon icon={faEye} onClick={notify}></FontAwesomeIcon>
      </div>
      <div className="quize text-center">
        {options.map((option) => {
          return [
            <p className="answer" onClick={() => notify2(option)}>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
              />
              {option}
            </p>,
          ];
        })}
      </div>
      <ToastContainer
        autoClose={2000}
        toastStyle={{ backgroundColor: "darkorange", color: "white" }}
      />
    </div>
  );
};

export default SingleQuize;
