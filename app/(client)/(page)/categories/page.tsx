import { Suspense } from "react";
import Section_1 from "./Section_1";
import Loading from "../../components/loading/loading";

export default function CategoriesPage() {
  return(
    <>
      <Suspense fallback={<div><Loading/></div>}>
        <Section_1/>
      </Suspense>
    </>
  )
}