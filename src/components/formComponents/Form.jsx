import { useState } from "react"

import { InputForm } from "./InputForm"

export const Form = () => {
  const [inputValue, setInputValue] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const inputErrors = {
    emailError: "Please provide a valid email address",
    emptyValue: "This input is empty"
  }

  const handleInputErrors = () => {
    let error = ""

    if (inputValue === "") {
      error = inputErrors.emptyValue
    } else if (!emailRegex.test(inputValue)) {
      error = inputErrors.emailError
    }

    setErrorMsg(error)

    error === "" && setInputValue("")
  }

  return (
    <form className="w-10/12 flex flex-col gap-4 xs:w-full xs:flex-row xs:items-baseline" onSubmit={(e) => e.preventDefault()}>

      <InputForm
        type="email"
        placeholder="Your email address..."
        isRequired={true}
        value={inputValue}
        setValue={setInputValue}
        notifyError={errorMsg}
      />

      <button className="w-full btn-primary xs:flex-initial xs:w-1/4 xs:self-end" onClick={handleInputErrors}>
        Notify Me
      </button>

    </form>
  )
}