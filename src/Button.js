import PropTypes, { checkPropTypes } from "prop-types";
import classnames from "classnames";



function Button({ children,
    Primary,
    Secondary,
    Third,
    rounded,
    outline

}) {
    const classes = classnames('px-5 py-2 mb-5 ml-5 mt-5 border-solid border-2 rounded-md flex items-center', {

        'bg-blue-500 border-blue-800 ... text-white font-bold hover:bg-purple-500 ... ': Primary,
        'bg-yellow-500 border-yellow-800 ... text-white font-bold hover:bg-red-500 ... ': Secondary,
        'bg-green-500 border-green-800 ... text-white font-bold hover:bg-pink-500 ... ': Third,

    })

    return (
        <div >
            <button className={classes} >{children}</button>
        </div>
    )
}
//className="bg-green-500     "
Button.propTypes = {
    checkVariationValue: ({ Primary, Secondary, Third }) => {
        const count = Number(!!Primary) + Number(!!Secondary) + Number(!!Third)


        if (count > 1) {
            return new Error("Buttons Are Duplicated")
        }
    }
}
export default Button;