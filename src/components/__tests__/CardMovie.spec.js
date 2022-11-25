import { describe, it, expect } from "vitest";
import CardMovie from "../../components/containerMovie/CardMovie.vue";
import { mount } from "@vue/test-utils";

describe("CardMovie", () => {
    it("Should be create snapshot", () => {
        const wrapper = mount(CardMovie);
        expect(wrapper).toMatchSnapshot()
      });
    it("Should be show info correct", () => {
        const props = {
            title:"Spider Man", 
            img:"pal.png",
            programType:"movie",
            releaseYear: 2012
        }
        const wrapper = mount(CardMovie, {
            props
        });
        expect(wrapper.find("p").text()).toBe(props.title)
        expect(wrapper.findAll("el-tag")[0].text()).toBe(props.programType)
        expect(wrapper.findAll("el-tag")[1].text()).equal(props.releaseYear.toString())
     
      });
})
