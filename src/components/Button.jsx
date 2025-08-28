export default function Button({ text, cor, targetId }) {
  function HandleScroll() {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div>
      <button
        onClick={HandleScroll}
        className={`text-black text-xl font-bold border-2 border-[#DEC7A6] hover:bg-[#f8f5ef] p-3 w-[250px] ${cor}`}
      >
        {text}
      </button>
    </div>
  );
}
