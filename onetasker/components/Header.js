export default function Header() {
  return (
    <div className="flex flex-row gap-10 mb-4 md:mb-0">
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="responsive-header 
        mr-auto bg-black text-white relative px-3 py-2 pt-3"
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
          window.location.href = "/profile";
        }}
        className="text-2xl md:text-4xl"
      >
        Profile
      </button>
      <button
        onClick={() => {
          window.location.href = "/settings";
        }}
        className="text-2xl md:text-4xl"
      >
        Settings
      </button>
    </div>
  );
}
