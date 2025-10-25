import { type Metadata } from "next";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects We’ve Built to Leave Our Mark on the World",
};

export default function Projects() {
  return (
    <section id="contactus">
      <div className="isolate px-6 py-24 sm:py-32 lg:px-8 bg-white text-gray-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact Us
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>

        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-500"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md border-0 bg-gray-100 outline outline-1 outline-gray-200 focus-within:outline-2 focus-within:outline-teal-500">
                  <div className="grid shrink-0 grid-cols-1 relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-600 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-600 sm:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="block min-w-0 grow rounded-md border-0 bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:outline-teal-500"
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-100 p-px ring-1 ring-gray-200 transition-colors duration-200 ease-in-out has-checked:bg-teal-400">
                  <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm text-gray-600"
              >
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold text-teal-500 hover:text-teal-400"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
