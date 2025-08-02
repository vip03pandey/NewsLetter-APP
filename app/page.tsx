export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Newsletter
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your newsletter application is running successfully!
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                This is your homepage. You can now build your newsletter features here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
