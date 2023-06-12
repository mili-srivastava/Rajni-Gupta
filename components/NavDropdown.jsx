import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-secondary text-white px-3 py-2  font-semibold shadow-sm ring-1 ring-inset ring-secondary hover:opacity-80">
          Rajni Gupta
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
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
          <div className="py-1 bg-secondary">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about"
                  className= " text-white block px-4 py-2 font-medium hover:bg-gray-200 hover:text-secondary"
                >
                  About
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/educationalQualifications"
                  className= " text-white block px-4 py-2 font-medium hover:bg-gray-200 hover:text-secondary"
                >
                  Qualifications
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/experience"
                  className= " text-white block px-4 py-2 font-medium hover:bg-gray-200 hover:text-secondary"
                >
                  Experience
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/timelines"
                  className= " text-white block px-4 py-2 font-medium hover:bg-gray-200 hover:text-secondary"
                >
                  Timelines
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}