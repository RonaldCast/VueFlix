import { describe, it, expect } from "vitest";
import Logo from "../../components/common/Logo.vue";
import { mount } from "@vue/test-utils";


describe("Logo", () => {
  it("Should be create snapshot", () => {
    const wrapper = mount(Logo);
    expect(wrapper).toMatchSnapshot()
  });
  
  it("Should be render correct text", () => {
    const wrapper = mount(Logo,);
    const text = "VueFlix";
    expect(wrapper.find("span").text()).toBe(text)

  });
});
