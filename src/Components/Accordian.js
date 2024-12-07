import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

function Accordian({ items }) {

    const [indexContent, setIndexContent] = useState(null)



    const renderItems = items.map((item, index) => {

        const isIndex = index === indexContent;

        const content = isIndex && <div>{item.content}</div>

        const expandText = () => {

            setIndexContent(isIndex ? null : index);
        }

        return <div className="mt-5 ml-5" key={item.id}>
            <div className="flex items-center ">
                <div >{item.label}</div>
                <button className="titleButton" onClick={expandText}><MdExpandMore /></button>
            </div>
            <div >{content}</div>
        </div>
    })



    return (
        <div>
            {renderItems}
        </div>
    )
}

export default Accordian;