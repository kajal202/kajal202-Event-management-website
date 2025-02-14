import React, { useState } from 'react'

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    // send-Message
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { name, email, message } = formData; 
            const res = await fetch('/send-message', {  
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });
            const json = await res.json();
            if (res.status === 201) {  
                setSubmitMessage('Your message has been sent successfully!');
            } else {
                setSubmitMessage(json.message || 'There was an error sending your message.');
            }
        } catch (error) {
            setSubmitMessage('There was an error sending your message. Please try again later.');
        } finally {
            setIsSubmitting(false); // Make sure to stop the "sending" state
        }
    };

    return (
        <>
            <div className="contact-us bg-white pt-[80px] pb-[10px]">
                <h1 className="pt-5 text-center text-2xl uppercase font-semibold">Contact Us</h1>
                <p className="text-center font-semibold text-gray-500">Have any questions or feedback? We'd love to hear from you!</p>

                <div className="flex flex-row justify-center gap-28 py-6">
                    <div className="form-container px-20 w-1/2">
                        {submitMessage && <p className="submit-message text-center text-red-600">{submitMessage}</p>}
                        <form onSubmit={handleSubmit} className="contact-form border-gray-600 border-2 rounded-md px-10 py-5 w-full">
                            <h1 className="font-semibold text-center text-2xl pb-3">Send Message</h1>
                            <div className="form-group mb-2 flex flex-col">
                                <label htmlFor="name mb-1">Your Name</label>
                                <input
                                    className="border-2 rounded border-gray-500"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group mb-2 flex flex-col">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    className="border-2 rounded border-gray-500"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label htmlFor="message"> Message</label>
                                <textarea
                                    className="w-full border-2 rounded border-gray-500"
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type your message here..."
                                    required
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className=" bg-green-600 border-1 shadow-sm font-semibold text-white rounded px-8 py-1.5"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="contact-info flex flex-col">
                        <h4 className="pt-10 text-2xl">Contact Information</h4>
                        <div className="contact-details mt-3">
                            <p className="my-6">Email: support@eventmaster.com</p>
                            <p>Phone: 1-800-123-4567</p>
                            <p className="my-4"> Address: 123 Event Avenue, Suite 101, New Delhi-110078</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
