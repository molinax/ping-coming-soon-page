export const InputForm = ({ type, placeholder, isRequired, value, setValue, notifyError }) => {
  return (
    <div role="group-input" className="xs:flex-initial xs:w-3/4">

      <p className={`text-xs pl-3 text-light-red transition-opacity duration-300 ${notifyError === "" ? "opacity-0 h-4" : "opacity-100"}`}>
        {notifyError}
      </p>

      <input
        className={`input-primary w-full mt-1 ${notifyError !== "" && "input-error"} xs:py-3`}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      
    </div>
  )
}
