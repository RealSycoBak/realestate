import ContactForm from "../components/ContactForm.jsx"
export default function Header() {

    return (
        <>
            <header>

                <div class="left">
                    <h1 class="Title"><span id="BU">B</span>oston <span id="BU">U</span>niversity Real Estate Fund</h1>
                    <p class="SubText">The BU Real Estate Fund offers undergraduate students the opportunity to manage a real estate investment fund</p>
                </div>


                <div class="right">

                    <div class="Rect">
                        <ContactForm />
                    </div>

                </div>

            </header>
        </>
    )
}