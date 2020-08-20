<template>
    <div>
         <Input search enter-button="Search" placeholder="Enter something..." />
        <Button type="primary">buton</Button>
        <Select v-model="model1" style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Page :total="100" />
        {{createTime}}
        <DatePicker 
            v-model="createTime" 
            @on-change="createTime=$event"
            type="datetime" 
            placeholder="请选择评价时间" 
        >
        </DatePicker>
        <div class="changeType">
            <Button type="primary" @click="handleChangeType">changeType</Button>
        </div>
        <div class="aaa">
            {{type}}
            <br />
            {{com_type}}
        </div>
        <Button @click.once="test" v-red>btn</Button>
        <div class="myForm">
            <Form :model="formItem" :label-width="80">
        <FormItem label="Input">
            <Input v-model="formItem.input" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        <FormItem label="DatePicker">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
        </div>
        <div class="toPage2" @click="handlerGoPage2">toPage2</div>
    </div>
</template>
<script>
export default {
    watch: {
        type: {
            handler(n,o) {
                console.log(n,o)
            },
            deep: true
        }
    },
    computed: {
        com_type() {
            console.log(this.a1, this.a2)
            return this.a1 + this.a2;
        }
    },
    data() {
        return {
            createTime: "",
            type: 5,
            a1: 1,
            a2: 2,
            isZhixing: true,
            model1: "",
            cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },],
            formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
        }
    },
    methods: {
        test() {
            // if(this.isZhixing) {
            //     this.isZhixing = false;
                // 要执行的代码......
                console.log("9119")
            // } else {

            // }
        },
        handleChangeType() {
            this.type++;
            this.a1 = 11;
            // this.a2 = 12
        },
        handlerGoPage2() {
            let query = {
                campId: 23,
                userId: 4
            };
            const { href } = this.$router.resolve({
                path: "page2",
                query: query
            });
            window.open(href, "_blank");
        }
    },
    beforeDestroy() {
        console.log("page1 beforeDestroy")
    },
    destroyed() {
        console.log("page1 destroyed")
    }
}
</script>
<style scoped>

</style>