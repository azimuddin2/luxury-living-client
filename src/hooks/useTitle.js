const { useEffect } = require("react")

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Luxury Living`;
    }, [title])
}

export default useTitle;