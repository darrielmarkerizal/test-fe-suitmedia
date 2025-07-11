export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Suitmed
          </h1>
          <p className="text-lg text-gray-600">Your content goes here</p>
        </div>

        {/* Demo content untuk testing scroll */}
        <div className="space-y-8">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Section {i + 1}
              </h2>
              <p className="text-gray-600">
                This is demo content to test the navbar scroll behavior. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
