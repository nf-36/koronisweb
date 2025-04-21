
const Script = () => {
  const scriptCode = `loadstring(game:HttpGet("https://raw.githubusercontent.com/nf-36/Koronis/refs/heads/main/Scripts/Loader.lua"))()`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(scriptCode);
  };

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">Available Scripts</h1>
      <div className="grid gap-6">
        <div className="p-6 rounded-lg bg-[#1A1F2C] border border-white/10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Koronis Script Hub</h2>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
            >
              Copy Code
            </button>
          </div>
          <div className="bg-black/50 p-4 rounded-md overflow-x-auto">
            <code className="text-white font-mono">{scriptCode}</code>
          </div>
          <p className="mt-4 text-gray-400">Supports multiple Roblox games with regular updates and optimized performance.</p>
        </div>
      </div>
    </div>
  );
};

export default Script;
