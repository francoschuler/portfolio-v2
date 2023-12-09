
import { motion } from "framer-motion"
function App() {

  return (
    <>
        <header className="flex justify-center p-5">
            <ul className="flex gap-12">
                <li className="hover:text-2xl cursor-pointer">About me</li>
                <li className="hover:text-2xl cursor-pointer">Projects</li>
                <li className="hover:text-2xl cursor-pointer">Contact</li>
                <li className="hover:text-2xl cursor-pointer">Skills</li>
            </ul>
        </header>
        <main>
            <section className="bg-white dark:bg-gray-900">

                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-6xl font-bold">Hi 🙌! I am Franco Schüler</h1>
                    </motion.div>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I build things for the web</p>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"></img>
                    </div>                
                </div>
                </section>
        </main>
    </>
    
    
  )
}

export default App
