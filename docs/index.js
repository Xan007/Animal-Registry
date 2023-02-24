import info from "./info.js"
import components from "./components.js"
import servers from "./servers.js"
import tags from "./tags.js"

export default {
    ...info,
    ...servers,
    ...components,
    ...tags,
}