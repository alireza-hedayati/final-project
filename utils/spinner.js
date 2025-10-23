import { BeatLoader} from "react-spinners";

export default function Spinner() {
  return (
   <div className="flex items-center justify-center my-15 w-full mx-auto ">
     <BeatLoader
      color="green"
      size={20}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
   </div>
  );
}
