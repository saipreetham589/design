import Navbar from './NavBar';

export default function Layout({ children }) {
  return (        
        <div className="w-screen h-screen overflow-hidden bg-softBG dark:bg-darkBG text-black dark:text-white transition-colors font-body">
            <Navbar />
            <main className="h-[calc(100%-4rem)]">{children}</main>
        </div>
  );
}
