'use client'
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/react/24/outline'
import {ArrowRightEndOnRectangleIcon} from "@heroicons/react/16/solid";
import { getSession } from '../../data/data';
import {useEffect, useState} from "react";

const navigation = [
    {name: 'Inicio', href: '/', current: true},
    {name: 'Cursos', href: '/courses', current: false}
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const NavBar = () => {

    const [session, setSession] = useState('')

    const [path, setPath] = useState()

    const logout = () => {
        setSession('')
        logOut().then(() => { window.location.href = '/Auth/Login' })
    }

    useEffect(() => {
        setPath(window.location?.pathname)
        getSession().then((session) => {
            setSession(session?.username)
        })
    }, []);


    return (
        <>
            <Disclosure as="nav" className="bg-[#545E75] fixed top-0 z-50 left-0 w-full text-white border-b-4 border-[#304D6D]">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton
                                className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"/>
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block"/>
                            </DisclosureButton>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-20">
                            <a href="/" className="px-4 box-border">
                                <div className="flex shrink-0 items-center">
                                    <span className="text-white text-2xl font-extrabold">
                                    CyberCap
                                </span>
                                </div>
                            </a>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4 text-white">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-[#717D98]' : ' hover:bg-[#304D6D]',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* Profile dropdown */}
                            {
                                !session ? (
                                        (path === "/register" || path === '/login' ? "": (
                                            <a href="/login">
                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <MenuButton className="relative flex rounded-xl items-center gap-1 px-2 py-2.5 text-sm border-2 border-transparent hover:border-white">
                                                            <span className="absolute -inset-1.5"/>
                                                            <span className="font-bold text-md">Iniciar Sesión</span>
                                                            <span className="sr-only">Open user menu</span>
                                                            <ArrowRightEndOnRectangleIcon className="size-6"/>
                                                        </MenuButton>
                                                    </div>
                                                </Menu>
                                            </a>
                                        ))
                                ) : (
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <MenuButton className="relative flex rounded-xl items-center gap-1 px-2 py-2.5 text-sm border-2 border-transparent hover:border-white">
                                                <span className="absolute -inset-1.5"/>
                                                <span className="font-bold text-md">My Profile</span>
                                                <span className="sr-only">Open user menu</span>
                                                <ArrowRightEndOnRectangleIcon className="size-6"/>
                                            </MenuButton>
                                        </div>
                                    </Menu>
                                )
                            }

                        </div>
                    </div>
                </div>

                <DisclosurePanel className="text-white">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900' : ' hover:bg-gray-700',
                                    'block rounded-md px-3 py-2  font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}