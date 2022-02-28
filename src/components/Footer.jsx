
function Footer() {
    const footerYear = new Date().getFullYear()

  return (
    <footer className="p-4 text-white text-center fs-5 bg-dark bg-gradient">
      <p className="">Copyright &copy; {footerYear} Habeeb Kareem All rights reserved.</p>
    </footer>
  )
}

export default Footer