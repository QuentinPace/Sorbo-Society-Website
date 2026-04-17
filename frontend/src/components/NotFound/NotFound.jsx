const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#212121] flex items-center justify-center text-white">
      <div className="text-center">
        <p className="text-9xl font-black text-[#74dff6] mb-4">404</p>
        <p className="text-white/60 mb-6">Page not found.</p>
        <a href="/" className="text-[#74dff6] underline">
          Go home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
