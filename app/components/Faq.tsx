import { Collapse } from "./Collapse";

const items = [
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

export function Faq() {
  return (
    <div className="flex flex-col py-12 gap-y-6   lg:flex-row lg:pt-[120px] lg:pb-[60px] lg:gap-x-6">
      <div className="flex flex-col gap-y-[16px]  lg:w-2/5 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] text-[14px] leading-[22px] font-medium lg:text-[16px] lg:leading-[24px] ">
          Frequently Asked Questions
        </h3>
        <h1 className="pt-3 font-medium text-[24px] leading-[36px] text-[#172026]  lg:text-[42px] lg:leading-[58px]">
          Let’s clarify some of your questions
        </h1>
        <p className="text-[#36485C] lg:text-[18px] lg:leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <div className="flex flex-col gap-y-4 lg:w-3/5">
        {items.map((item, index) => (
          <Collapse key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
