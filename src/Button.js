import PropTypes, { checkPropTypes } from "prop-types";

function Button({ children,
    Primary,
    Secondary,
    Third,
    rounded,
    outline
}) {
    return (
        <div >
            <button className="bg-green-500 text-white px-5 py-1.5 mb-5 ml-5 mt-5 hover:bg-yellow-300 ... border-solid border-2 border-green-800 ... ">{children}</button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: ({ Primary, Secondary, Third }) => {
        const count = Number(!!Primary) + Number(!!Secondary) + Number(!!Third)


        if (count > 1) {
            return new Error("Buttons Are Duplicated")
        }
    }
}
export default Button;