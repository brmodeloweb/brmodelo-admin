import { HiBeaker } from "react-icons/hi";

export default function EmptyPage() {
  return (
    <main className="w-full flex flex-col items-center justify-center py-10">
      <HiBeaker className="text-9xl" />
      <p className="text-lg font-bold">We are still working on this page</p>
    </main>
  );
}
