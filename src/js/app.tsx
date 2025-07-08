import {
    ErrorBoundary,
    lazy,
    LocationProvider,
    Route,
    Router,
    useRoute,
    useLocation,
} from "preact-iso";
import { Index } from "./Index";
import { SPCustomActions } from "../actions/spCustomActions";

function NotFound() {
    const rt = useRoute();
    const loc = useLocation();
    return (
        <div
            onClick={() => {
                loc.route("/");
            }}
        >
            Path not found: {rt.path}
        </div>
    );
}

export function App() {
    return (
        <LocationProvider>
            <ErrorBoundary>
                <Router>
                    {[
                        <Route path="/index.html" component={Index} />,
                        <Route
                            path="/userCustomActions/*"
                            component={SPCustomActions}
                        />,
                        <Route default component={NotFound} />,
                    ]}
                </Router>
            </ErrorBoundary>
        </LocationProvider>
    );
}
