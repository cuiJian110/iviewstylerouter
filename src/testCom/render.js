export default {
    // name: 'RenderCell',
    functional: true,
    props: {
        render: Function,
        data: Object,
        node: Array
    },
    render: (h, ctx) => {
        console.log(ctx)
        const params = {
            data: ctx.props.data
        };
        if(ctx.props.render) {
            return ctx.props.render(h, params);
        } else {
            return h("div","默认的")
        }
        
    }
}