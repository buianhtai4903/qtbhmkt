import HomeSuggest from "./suggest"
import HomeSupport from "./support"


const LayoutHome = () => {
    return (
        <div>
            <div className="">
                {/* Layout bên trái */}
                <HomeSupport />
                <HomeSuggest />
            </div>
            <div>
                {/* Layout bên phải */}
                compoenmt bên phải
            </div>
        </div>
    )
}
export default LayoutHome