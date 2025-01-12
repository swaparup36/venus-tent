import { OctagonX } from "lucide-react";

function FailModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
        <div className="bg-white rounded-lg p-8 max-w-sm w-full m-4 relative">
          <div className="flex flex-col items-center">
            <div className="bg-red-100 p-3 rounded-full mb-4">
              <OctagonX className="text-red-500 w-6 h-6" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Failed!</h2>
            <p className="text-gray-600 text-center mb-6">
              Appointment booking failed
            </p>
            <button
              onClick={onClose}
              className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
}

export default FailModal;