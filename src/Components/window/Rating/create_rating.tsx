import React, { useState } from "react";
import { CrossIcon } from "../../svg";
import {
  CenteralSpinner,
  CrateRatingStars,
  Modal,
  Alert,
  TextArea,
  Input,
} from "../../atoms";

interface Props {
  onClose: () => void;
}

const AddRatingForm = ({ onClose }: Props) => {
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    // Validate if all fields are filled
    if (!name || !review || !rating) {
      setAlertMessage(`Please provide all  fields.`);
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    // Show spinner
    setSaving(true);

    // Simulate saving for 2 seconds
    setTimeout(() => {
      setSaving(false);
      setAlertMessage("Thank you for your feedback.");
      setAlertType("success");
      setShowAlert(true);
      setName("");
      setReview("");
      setRating(0);
    }, 2000);
  };

  return (
    <>
      <Modal>
        <div className="bg-black bg-opacity-50 fixed inset-0 rounded-lg max-h-full overflow-y-auto overflow-x-hidden z-50 flex justify-center items-center md:inset-0">
          <div className="relative px-1 sm:px-10 py-5 md:pb-10 md:pt-5 w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button
                className="justify-end cursor-pointer rounded-full bg-gray-100 sm:p-2 p-1 hover:bg-yellow-50"
                onClick={onClose}
              >
                <CrossIcon className="w-4 h-4 sm:w-6 sm:h-6" color="red" />
              </button>
            </div>
            <div className="px-5 py-3">
              <h2 className="text-xl font-medium text-center mb-6 text-gray-800">
                Add Your Rating
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-lg mx-auto"
              >
                <div className="mb-6">
                  <Input
                    value={name}
                    label="Full Name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-6">
                  <TextArea
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    label="Review"
                    type="message"
                    placeholder="Write your review here"
                  />
                </div>

                <div className="mb-6  md:gap-5">
                  <label className="text-justify block mb-2 text-xs font-medium text-gray-900 dark:text-white ">
                    Your Rating
                  </label>
                  <div className="">
                    <CrateRatingStars rating={rating} setRating={setRating} />
                  </div>
                </div>
                {showAlert && (
                  <div className="mb-6">
                    <Alert
                      type={alertType}
                      message={alertMessage || ""}
                      onClose={() => setShowAlert(false)}
                    />
                  </div>
                )}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 rounded-md font-semibold shadow-md hover:from-blue-600 hover:to-pink-600 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
      {saving && (
        <Modal>
          <CenteralSpinner />
        </Modal>
      )}
    </>
  );
};

export default AddRatingForm;
