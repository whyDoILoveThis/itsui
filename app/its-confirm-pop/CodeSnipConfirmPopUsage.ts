export const CodeSnipConfirmPopUsage = `
    //First wrap your app in the provider.

     <html lang="en">
      <body
        className={\`\${inter.className} relative pt-10 py-36 flex flex-col items-center w-full h-full min-h-screen\`}
      >
        <main className="max-w-[800px] w-full h-full">
          <ItsConfirmProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </ItsConfirmProvider>
          <Footer />
        </main>
      </body>
    </html>


    // Then you can use it in your code

  import { useConfirm } from "@/ItsConfirmPop/ItsConfirmPop";

  const { ItsConfirm } = useConfirm();

  const handleConfirm = async () => {
    const confirmed = await ItsConfirm(
      \`Are you sure you want to do this thing?\`
    );

    if (confirmed) {
      //await functionDoingStuff()
      //setSomeStateVar(state);
      //Maybe do something else;
      setDoIt(true);
      return;
  }


    <button onClick={handleConfirm} className="btn btn-purple">
        do thing ✨
    </button>
`