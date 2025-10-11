export async function enableMocking() {
    if (import.meta.env.PROD) {
        return;
    }

    const {worker} = await import("@/shared/api/mocks/browser");

    // Start MSW with logging
    return worker.start({
        onUnhandledRequest: "warn",
    });
}