import {describe, it, expect, vi} from "vitest";

import {mount, shallowMount} from "@vue/test-utils";
import KalenderComponent from "@/components/KalenderComponent.vue";

const wrapper = mount(KalenderComponent)

describe("KalenderComponent", () => {
    it("check if able to get correct number of days for a february", () => {
        const localThis = {
            monthIndex: 1,
            year: 2023,
        }
        expect(KalenderComponent.computed.getNumberOfDays.call(localThis)).toBe(28)
    })

    it("check if able to get correct number of days for a april", () => {
        const localThis = {
            monthIndex: 3,
            year: 2023,
        }
        expect(KalenderComponent.computed.getNumberOfDays.call(localThis)).toBe(30)
    })

    it("check if able to get correct number of days for a may", () => {
        const localThis = {
            monthIndex: 4,
            year: 2023,
        }
        expect(KalenderComponent.computed.getNumberOfDays.call(localThis)).toBe(31)
    })

    it("check if able to set correct current date", async () => {
        const testDate = new Date(2020, 1, 1)
        vi.setSystemTime(testDate)

        wrapper.vm.setCurrentValues()
        expect(wrapper.vm.monthIndex).toBe(1)
        expect(wrapper.vm.year).toBe(2020)
    })
})