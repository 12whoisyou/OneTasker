export default function Header() {
  return (
    <div className="flex flex-row mb-4 md:mb-0">
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="responsive-header 
         bg-black text-white relative px-3 py-2 pt-3 mr-auto"
      >
        <span
          className="bottom-1 relative border-b-2 
          hover:border-b-4 border-white"
        >
          OneTasker
        </span>
      </button>

      <button
        onClick={() => {
          window.location.href = "/settings";
        }}
        className="responsive-text"
      >
        <img src="settings.jpg" className="w-10 hover:animate-spin" />
      </button>
    </div>
  );
}
