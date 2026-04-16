function Footer() {

  return (

    <footer
      className="
      border-borderColor
      bg-bgCard

      px-6
      py-3

      text-sm
      text-textMain

      flex
      items-center
      justify-between
      "
    >

      <span>
        © {new Date().getFullYear()} Iperitus HRMS
      </span>

      <span className="opacity-70">
        Version 1.0
      </span>

    </footer>

  );
}

export default Footer;