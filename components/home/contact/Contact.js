'use client';
import {useState} from 'react';
import {FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope} from 'react-icons/fa';
import {MdLocationOn, MdEmail, MdPhone} from 'react-icons/md';
import {contactInfo} from '@/utilityFunctions/contactInfo';
import toast from 'react-hot-toast';

export default function Contact () {
  const {facebook, email, mobile, github, linkedin, address} = contactInfo;
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    location: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState (false);

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData (prev => ({...prev, [name]: value}));
  };

  const handleSubmit = async e => {
    try {
      setIsLoading (true);
      e.preventDefault ();

      const res = await fetch ('/api/sendMail', {
        // Store response
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify (formData),
      });

      const result = await res.json (); // Parse response

      console.log (result);

      if (result.success) {
        toast.success ('Email Sent Successfully!');
        setFormData ({
          name: '',
          email: '',
          location: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error ('Sorry! Something went wrong!!');
      }
      setIsLoading (false);
    } catch (err) {
      setIsLoading (false);
      toast.error ('Sorry! Something went wrong!');
    }
  };

  const contactDetails = [
    {
      icon: <MdLocationOn size={24} />,
      label: 'Address:',
      value: address,
    },
    {
      icon: <MdEmail size={24} />,
      label: 'My Email:',
      value: email,
    },
    {
      icon: <MdPhone size={24} />,
      label: 'Call Me Now:',
      value: mobile,
    },
  ];

  const socialLinks = [
    {icon: <FaFacebookF size={20} />, href: facebook},
    {icon: <FaGithub size={20} />, href: github},
    {icon: <FaEnvelope size={20} />, href: `mailto:${email}`},
    {icon: <FaLinkedinIn size={20} />, href: linkedin},
  ];

  const formInputs = [
    {
      label: 'Name*',
      name: 'name',
      type: 'text',
      placeholder: 'Your Name',
      required: true,
    },
    {
      label: 'Email*',
      name: 'email',
      type: 'email',
      placeholder: 'Your Email',
      required: true,
    },
    {
      label: 'Location',
      name: 'location',
      type: 'text',
      placeholder: 'Your Location',
      required: false,
    },

    {
      label: 'Subject*',
      name: 'subject',
      type: 'text',
      placeholder: 'Subject',
      required: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Let's discuss your Project
          </h2>
          <p className="text-gray-600">
            Have a project in mind? Let's talk about how we can make it a reality!
          </p>

          {/* Contact Details */}
          {contactDetails.map ((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg flex items-center gap-4 shadow-md"
            >
              <div className="bg-[#9810FA] p-3 rounded-full text-white">
                {item.icon}
              </div>
              <div>
                <p className="text-gray-500">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {socialLinks.map ((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:text-[#9810FA] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {formInputs.map (input => (
              <div key={input.name}>
                <label className="block text-gray-700 font-medium">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  name={input.name}
                  value={formData[input.name]}
                  onChange={handleChange}
                  className="w-full p-3 border-b-2 border-gray-300 focus:outline-none"
                  placeholder={input.placeholder}
                  required={input.required}
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-700 font-medium">
                Message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none"
                placeholder="Your Message"
                required
              />
            </div>

            {isLoading
              ? <button
                  disabled
                  type="submit"
                  className="w-full bg-[#9810FA] text-white font-bold py-3 rounded-lg hover:bg-[#7d0ecf] transition-colors"
                >
                  Submit →
                </button>
              : <button
                  type="submit"
                  className="w-full bg-[#9810FA] text-white font-bold py-3 rounded-lg hover:bg-[#7d0ecf] transition-colors"
                >
                  Submit →
                </button>}
          </form>
        </div>
      </div>
    </section>
  );
}
