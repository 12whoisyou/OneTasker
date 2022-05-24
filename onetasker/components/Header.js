export default function Header() {
  return (
    <div className="flex flex-row gap-10">
      <button
        onClick={() => {
          window.location.reload();
        }}
        className="text-3xl mr-auto bg-black text-white relative px-3 py-3 bottom-2"
      >
        <span className="bottom-1 relative border-b-4 border-white">
          {" "}
          OneTasker{" "}
        </span>
      </button>

      <button
        onClick={() => {
          window.location.href = "/Profile";
        }}
        className="text-3xl"
      >
        Profile
      </button>
      <button
        onClick={() => {
          window.location.href = "/Settings";
        }}
        className="text-3xl"
      >
        Settings
      </button>
    </div>
  );
}
