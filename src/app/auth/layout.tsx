const AuthLayout = ({ children }: any) => {
    return (
        <section>
            <div className="min-h-screen flex flex-col md:flex-row font-sans">
                <div className="flex flex-1 flex-col items-center justify-center p-6 text-white">
                    {children}
                </div>
                <div className="flex flex-1 items-center justify-center p-12 hidden md:flex bg-gray-900 text-white bg-auth">
                    <div className="text-center">
                        <img src="/images/banner-site.png" alt="Login illustration" className="mb-6 center justify-center m-auto" />
                        <h1 className="mb-2 text-center">Lorem ipsum dolor sit amet adipiscing</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AuthLayout;