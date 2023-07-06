import {describe, it, expect, vi} from "vitest";

import {mount, shallowMount} from "@vue/test-utils";
import EventNewModal from "@/components/EventNewModal.vue";

const wrapper = mount(EventNewModal)

describe("EventEditModal", () => {
    it("everything empty at start", () => {
        expect(wrapper.vm.title).toBe('')
        expect(wrapper.vm.description).toBe('')
        expect(wrapper.vm.eventDate).toBe('')
    })

    it("can reset input", async () => {
        const localWrapper = mount(EventNewModal)

        localWrapper.setData({
            title: "title",
            description: "desc",
            eventDate: "2020-01-01",
        })
        expect(localWrapper.vm.title).toBe('title')
        expect(localWrapper.vm.description).toBe('desc')
        expect(localWrapper.vm.eventDate).toBe('2020-01-01')

        localWrapper.vm.resetInput()

        expect(wrapper.vm.title).toBe('')
        expect(wrapper.vm.description).toBe('')
        expect(wrapper.vm.eventDate).toBe('')
    })

    it("can validate title", async () => {
        const localWrapper = mount(EventNewModal)

        localWrapper.setData({
            title: "title",
        })
        expect(localWrapper.vm.validateTitle).toBe(false)

        localWrapper.vm.resetInput()
        expect(localWrapper.vm.validateTitle).toBe(true)
        expect(localWrapper.html()).toContain('Der Titel eines Termins kann nicht leer sein!')
    })

    it("can validate date", async () => {
        const localWrapper = mount(EventNewModal)

        localWrapper.setData({
            eventDate: "2020-01-01",
        })
        expect(localWrapper.vm.validateDate).toBe(false)

        localWrapper.vm.resetInput()
        expect(localWrapper.vm.validateDate).toBe(true)
        expect(localWrapper.html()).toContain('Ein Termin muss ein Datum haben!')
    })

    it("can validate form", async () => {
        const localWrapper = mount(EventNewModal)

        localWrapper.setData({
            title: "title",
            eventDate: "2020-01-01",
        })
        expect(localWrapper.vm.validateForm).toBe(true)

        localWrapper.vm.resetInput()
        expect(localWrapper.vm.validateForm).toBe(false)
    })
})