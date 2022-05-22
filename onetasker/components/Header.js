export default function Header() {
  return (
    <div className="flex flex-row gap-10">
      <button
        onClick={() => {
          console.log("helo");
          window.location.reload();
        }}
        className="text-3xl mr-auto"
      >
        OneTasker
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
