import ReactDOM from "react-dom"
import { Overlay } from "./styles"
import PropTypes from "prop-types"

export default function Loader({ isLoading = false }) {
    if (!isLoading) {
        return null
    }

    return ReactDOM.createPortal(
        <Overlay>
            <div className="loader"></div>
        </Overlay>,
        document.getElementById('loader-root')
    )
}

Loader.PropTypes = {
    isLoading: PropTypes.bool.isRequired
}