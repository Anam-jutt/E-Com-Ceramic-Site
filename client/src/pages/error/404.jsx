
function PageNotFound() {
    return (
        <div className="flex  justify-center min-h-screen bg-gray-300 pt-10">
            <div className="text-center">
                <h1 className="text-8xl font-bold">
                    <span className="text-rose-500">404</span>
                </h1>
                <h2 className="mt-4 text-4xl font-bold text-gray-700">
                    Page Not Found ◑﹏◐
                </h2>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}

export default PageNotFound;
