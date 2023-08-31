import { Form } from "./components/formComponents/Form"
import { ButtonMedia } from "./components/buttons/ButtonMedia"

import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi"

import logo from "./assets/images/logo.svg"
import dashboard from "./assets/images/illustration-dashboard.png"

export const App = () => {
  return (
    <main className="container flex flex-col items-center justify-center gap-20 py-8">
      
      <header className="flex flex-col gap-3 text-center items-center">

        <img src={logo} alt="Ping logo" className="w-14 mb-6" />

        <h1 className="text-2xl text-gray">
          We are launching <span className="font-bold text-very-dark-blue">soon!</span>
        </h1>

        <p className="text-sm">Subscribe and get notified</p>

      </header>

      <Form />

      <picture>
        <img src={dashboard} alt="Dashboard illustration" />
      </picture>

      <footer className="flex flex-col gap-6 items-center">

        <section className="flex justify-center gap-4">

          <ButtonMedia icon={<BiLogoFacebook />} />

          <ButtonMedia icon={<BiLogoTwitter />} />

          <ButtonMedia icon={<BiLogoInstagram />} />

        </section>

        <p className="text-gray text-xs">&copy; Copyright Ping. All rights reserved.</p>

      </footer>

    </main>
  )
}

