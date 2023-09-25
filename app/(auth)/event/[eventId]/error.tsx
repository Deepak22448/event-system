"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-orange-500 space-y-4 text-lg md:text-2xl">
      <h2>Something went wrong!</h2>
      <button
        className="text-white bg-orange-500 hover:bg-orange-400 px-8 py-4 rounded"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
