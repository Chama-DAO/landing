"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholder-and-vanish-input";

export function Ask() {
  const placeholders = [
    "What is blockchain technology?",
    "How's crypto related to blockchain?",
    "How does lending and borrowing work in crypto?",
    "What is a DAO?",
    "What is a chama?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="my-10 flex flex-col justify-center  items-center px-4">
      <h1 className="text-3xl text-text font-bold text-center my-5 font-heading">
        Ask us anything about blockchain
      </h1>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
