function Footer() {
    return (
    <footer className="text-[#ced4da] p-10 w-[95%] m-auto rounded"
    style={{
        background: "radial-gradient(circle, #1b9aaa 0%, #080f16 100%)"
    }}>
        <div>
            <div className="w-full space-y-4 text-base">
            <h1 className="uppercase text-3xl text-white font-bold">ExStream.com</h1>
            <p>Get news, updates and discounts by sighing up for our weekly newsletter!</p>
            <form action="#!">
                <input type="email" name="email" id="email" 
                placeholder="Enter your email"
                className="p-2 w-80 h-12  rounded outline-none" />
                <button className="h-12 px-4 rounded bg-[#080f16]">Subscribe</button>
            </form>
            </div>
            <div className="w-full grid_ w-[100%] grid gap-2 mt-2">
            <FooterLinks
             heading="product"
            links={['overview', 'features', 'solutions', 'tutorial', 'pricing', 'releases']} />
            <FooterLinks 
            heading="company"
            links={['about us', 'careers', 'press', 'news', 'media kit', 'contact']} />
            <FooterLinks 
            heading="resources"
            links={['blog', 'newsletter', 'events', 'help centre', 'tutorial', 'support']} />
            <FooterLinks 
            heading="legal"
            links={['terms', 'privacy', 'cookies', 'icenses', 'settings', 'contact']} />
            </div>
        </div>
            <span className="text-gray-400 mt-6">&copy; Ifeoluwa Isaiah 2023. All rights reserved. </span>
    </footer>
    )
}

const FooterLinks = (props) => {
    return (
        <ul className="m-2 ">
            <h1 className="font-semibold text-lg text-white capitalize my-4">{props.heading}</h1>
            {props.links.map((element, index) => (
                <li key={index} className="capitalize font-medium">
                    <a href="#!">{element}</a>
                </li>
            ))}
        </ul>
    );
}


export default Footer;