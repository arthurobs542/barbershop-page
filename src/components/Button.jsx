export default function Button({ text, cor }) {
  return (
    <div>
      <button
        className={`text-black text-xl font-bold border-2 border-[#DEC7A6] hover:bg-[#f8f5ef] p-3 w-[250px] ${cor}`}
      >
        {text}
      </button>
    </div>
  );
}
