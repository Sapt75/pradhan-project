import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const navigation = [
    { name: 'Image Section', href: '/', current: false },
    { name: 'Cine-Videos Section', href: '/', current: false },
    { name: 'Designed Photobook', href: '/', current: false }
]

const navigation1 = [
    { name: 'Pre Wedding or Post Wedding', href: '/', current: false },
    { name: 'Wedding', href: '/', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [show, setshow] = useState(false);
    const [serv, setserv] = useState(false)
    return (
        <Disclosure as="nav" className="background">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden logo"
                                        src="/logo_1.png"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block logo"
                                        src="/logo_1.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden absolute top-3 right-0 sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <a
                                            key="Dashboard"
                                            href="/"
                                            className={classNames(
                                                'txt hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                        >
                                            Dashboard
                                        </a>
                                        <a
                                            key="About Us"
                                            href="/"
                                            className={classNames(
                                                'txt hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                        >
                                            About Us
                                        </a>
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex">
                                                    <a
                                                        key="Our Showcase"
                                                        href="/"
                                                        className={classNames(
                                                            'txt hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                    >
                                                        Our Showcase
                                                    </a>
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 absolute left-24 top-2 text-white" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Images Section
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Cine-Videos Section
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Designed Photobook
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                        <Menu as="div" className="relative inline-block text-left">
                                            <div>
                                                <Menu.Button className="inline-flex">
                                                    <a
                                                        key="Our Service"
                                                        href="/"
                                                        className={classNames(
                                                            'txt hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                    >
                                                        Our Service
                                                    </a>
                                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 absolute left-20 top-2 text-white" aria-hidden="true" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Pre Wedding or Post Wedding
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                        'block px-4 py-2 text-sm'
                                                                    )}
                                                                >
                                                                    Wedding
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                        <a
                                            key="Contact Us"
                                            href="/"
                                            className={classNames(
                                                'txt hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                        >
                                            Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            <Disclosure.Button
                                key="Dashbord"
                                as="a"
                                href="/"
                                className={classNames(
                                    'text-gray-300 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                            >
                                Dashbord
                            </Disclosure.Button>
                            <Disclosure.Button
                                key="About Us"
                                as="a"
                                href="/"
                                className={classNames(
                                    'text-gray-300 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                            >
                                About Us
                            </Disclosure.Button>
                            <Disclosure.Button
                                onClick={
                                    (event) => {
                                        show ? setshow(false) : setshow(true)
                                        event.preventDefault()
                                    }
                                }
                                key="Our Showcase"
                                as="a"
                                href="/"
                                className={classNames(
                                    'text-gray-300 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                            >
                                Our Showcase
                                {
                                    navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(show ? 'visible' : 'hidden',
                                                'text-gray-300 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))
                                }
                            </Disclosure.Button>
                            <Disclosure.Button
                                onClick={
                                    (event) => {
                                        serv ? setserv(false) : setserv(true)
                                        event.preventDefault()
                                    }
                                }
                                key="Our Service"
                                as="a"

                                className={classNames(
                                    'text-gray-300 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                            >
                                Our Service
                                {
                                    navigation1.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(serv ? 'visible' : 'hidden',
                                                'text-gray-300 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))
                                }
                            </Disclosure.Button>
                            <Disclosure.Button
                                key="Contact Us"
                                as="a"
                                href="/"
                                className={classNames(
                                    'text-gray-300 hover:text-white',
                                    'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                            >
                                Contact Us
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

