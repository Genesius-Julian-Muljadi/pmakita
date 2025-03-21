import Popular from "@/components/landingPage/popular";
import Hero from "../components/landingPage/hero";
import axios from "axios";

export default async function Home() {
  let products = undefined;
  try {
    const API: string = String(process.env.NEXT_PUBLIC_BASE_API_URL);
    const productData = await axios.get(
      API
      // + API routes
    );

    if (!productData) throw new Error();

    products = productData.data.data;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <Hero />
      <Popular products={products} />
    </>
  );
}
