import './Header.css';

export default function Header() {

    return (
        <>
            <header>

                <div class="left">
                    <h1 class="Title">Boston University Real Estate Fund</h1>
                    <p class="SubText">The BU Real Estate Club offers undergraduate students the opportunity to manage a real estate investment fund</p>
                </div>


                <div class="right">

                    <div class="Rect">
                        <form class="lead-form">
                            <h2>SUBMIT A LEAD</h2>

                            <p class="form-description">
                                We are actively seeking existing value-add or development projects that may be a potential fit for an investment by our Fund. Please keep the Fund in mind and contact us for any current or future projects that allow us to consider a co-investment.
                            </p>

                            <div class="form-group">
                                <input type="text" id="firstName" required />
                                    <label for="firstName">First Name</label>
                            </div>

                            <div class="form-group">
                                <input type="text" id="lastName" required />
                                    <label for="lastName">Last Name</label>
                            </div>

                            <div class="form-group">
                                <input type="email" id="email" required />
                                    <label for="email">Email</label>
                            </div>

                            <div class="form-group">
                                <textarea id="message" rows="4" required></textarea>
                                <label for="message">Message</label>
                            </div>

                            <button type="submit">Contact Our Students Now!</button>

                            <div class="social-links">
                                <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                                <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            </div>
                        </form>

                    </div>

                </div>

            </header>
        </>
    )
}