import { FormEvent, useRef } from "react"
import { toast } from "react-toastify"
import emailjs from "@emailjs/browser"


export default function ContactForm() {

    const refForm = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const serviceId = "service_ey2yzlb"
        const templateId = "template_jxxmrdz"
        const apiKey = "7F5AHNDuFOB18FUEB"

        if (refForm.current) {
            emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
                .then(result => {
                    console.log(result.text)
                    refForm.current?.reset()
                })
                .catch(error => console.log(error))
            toast.success('Mensaje enviado Correctamente', {
                position: "top-right"
            })
        }
    }

    return (
        <form
            ref={refForm}
            onSubmit={handleSubmit}
            className="bg-dark-brown w-2/3 md:w-5/12 2xl:w-3/12 my-20 md:my-32 p-10 rounded-lg space-y-6 shadow bg-gradient-to-b from-dark-brown via-brown to-dark-brown">
            <div>
                <label
                    htmlFor="username"
                    className="block text-white uppercase font-bold text-lg"
                >Name</label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Your Name"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-white uppercase font-bold text-lg"
                >Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="ejemplo@gmail.com"
                    required
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-white uppercase font-bold text-lg"
                >Message</label>
                <textarea
                    id="message"
                    name="message"
                    className="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Message"
                    required
                ></textarea>
            </div>
            <input
                type="submit"
                className="border-2 border-light-brown bg-dark-brown hover:bg-brown transition-colors hover:text-black cursor-pointer rounded-lg w-full p-2 text-white font-medium"
                value="Send"
            />
        </form>
    )
}
