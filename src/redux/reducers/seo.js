const initState = {
	seo: {}
}

const seo = (state = initState, action) => {
	switch (action.type) {
		case "SEO_ADD":
			return { seo: action.value }
		default:
			return state
	}
}
export default seo
