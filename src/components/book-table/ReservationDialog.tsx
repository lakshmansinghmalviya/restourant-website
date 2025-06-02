import { useEffect } from "react";
import ReservationForm from "./ReservationForm";

export default function ReservationDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [setOpen]);

  console.log("AAA rha hai");
  if (!open) return null;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Book Your Table</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-red-500 text-2xl"
          >
            &times;
          </button>
        </div>
        <ReservationForm
          onCancel={() => setOpen(false)}
          onSubmitSuccess={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
