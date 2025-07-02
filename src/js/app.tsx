import {
    ErrorBoundary,
    lazy,
    LocationProvider,
    Route,
    Router,
    useRoute,
    useLocation,
} from "preact-iso";
function Dd() {
    const rt = useRoute();
    const loc = useLocation();
    return (
        <div
            onClick={() => {
                loc.route("/test");
            }}
        >
            Loading...
        </div>
    );
}

function Dd2() {
    const rt = useRoute();
    const loc = useLocation();
    return (
        <div
            onClick={() => {
                loc.route("/");
            }}
        >
            Test2...
        </div>
    );
}
export function App() {
    return (
        <LocationProvider>
            <ErrorBoundary>
                <Router
                    onRouteChange={(url) =>
                        console.log("Route changed to", url)
                    }
                    onLoadStart={(url) => console.log("Starting to load", url)}
                    onLoadEnd={(url) => console.log("Finished loading", url)}
                >
                    {[
                        <Route default component={Dd} />,
                        <Route path="/test" component={Dd2} />,
                    ]}
                </Router>
            </ErrorBoundary>
        </LocationProvider>
    );
}
