import Footer from "../Footer/footer";
import HomePage from "./homepage/Homepage";
function MainContent() {
    return (
        <section className="w-[100%] h-full grow text-white bg-[#080f16] border-l-4  border-gray-700 overflow-y-scroll section">
        <HomePage />
        <Footer />
        </section>
    )
}

export default MainContent;