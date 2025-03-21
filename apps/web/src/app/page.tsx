import Hero from "./hero";
import axios from "axios";

export default async function Home() {
  let testimonials = undefined;
  try {
    const testimonialsRaw = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/data/testimonials"
    );
    testimonials = testimonialsRaw.data.data;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <Hero />
    </>
  );
}
