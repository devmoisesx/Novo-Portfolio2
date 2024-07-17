import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
} from "react-icons/ai";

function Button({ type, children, className, ...props }) {
  return (
    <>
      {type === "curriculum" ? (
        <button
          className={`text-sm text-nowrap flex items-center gap-2 bg-bgBtnCurrriculum rounded-full px-3 py-2 transition duration-500 ease select-none hover:bg-bgBtnCurrriculumHover active:bg-bgBtnCurrriculumActive active:duration-150 focus:outline-none focus:shadow-outline ${className}`}
          {...props}
        >
          Baixar currículo
          <span className="text-xl">
            <AiOutlineDownload />
          </span>
        </button>
      ) : type === "github" ? (
        <a
          href="https://github.com/devmoisesx"
          target="_blank"
          className={`text-md flex items-center gap-2 bg-bgBtnGithub rounded-full px-3 py-2 transition duration-500 ease select-none hover:bg-bgBtnGithubHover active:bg-bgBtnGithubActive active:duration-150 focus:outline-none focus:shadow-outline ${className}`}
          {...props}
        >
          <span className="text-xl">
            <AiFillGithub />
          </span>
          Github
        </a>
      ) : type === "linkedin" ? (
        <a
          href="https://www.linkedin.com/in/moises-xavier"
          target="_blank"
          className={`text-txtBlack text-md flex items-center gap-2 bg-bgBtnLinkedin rounded-full px-3 py-2 transition duration-500 ease select-none hover:bg-bgBtnLinkedinHover active:bg-bgBtnLinkedinActive active:duration-150 focus:outline-none focus:shadow-outline cursor-pointer ${className}`}
          {...props}
        >
          <span className="text-blue-600 text-xl">
            <AiFillLinkedin />
          </span>
          Linkedin
        </a>
      ) : (
        <button
          className={`text-[14px] bg-bgButton rounded-full px-3 py-2 transition duration-500 ease select-none hover:bg-bgButtonHover active:bg-bgButtonActive active:duration-150 focus:outline-none focus:shadow-outline ${className}`}
          {...props}
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
