import GhostContentAPI from "@tryghost/content-api";

const GHOST_CONTENT_API_KEY = "42a5f29c2e403f35dcab1c4613";

export default (context, inject) => {
    // create ghost content api instance
    const ghost = new GhostContentAPI({
        url: "http://localhost:2368",
        key: GHOST_CONTENT_API_KEY,
        version: "v3",
    });

    // inject into vue components
    inject("ghost", ghost);
};
