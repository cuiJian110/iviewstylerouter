export default {
    data() {
        return {
            aaa: "myaaa"
        }
    },
    props: {
        data: {

        }
    },
    render(h,cl) {
        console.log(cl)
        return h("div",{},this.aaa)
    }
}