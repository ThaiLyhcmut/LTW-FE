import { Suspense } from "react";
import Section_1 from "./section_1";
import Loading from "../../components/loading/loading";

export default function SingerPage() {
  return(
    <>
      <Suspense fallback={<div><Loading/></div>}>
        <Section_1/>
      </Suspense>
    </>
  )
}