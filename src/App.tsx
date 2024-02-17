import { Header } from "./components/header";
import { Buy } from "./components/infos";
import { Images } from "./components/images";

export function App() {
  return (
    <div>
      <Header />

      <div className="flex gap-10 h-[87vh] justify-around mx-10">
        <Images />
        <Buy />
      </div>
    </div>
  )
}