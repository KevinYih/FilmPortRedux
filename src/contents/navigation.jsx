import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

export const navigation = [
  {
    label: "TV Shows",
    href: "/tv",
    icon: <MdLiveTv />,
  },
  {
    label: "Movies",
    href: "/movie",
    icon: <MdOutlineLocalMovies />,
  },

  {
    label: "test",
    href: "/test",
    icon: <MdOutlineLocalMovies />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <AiOutlineHome />,
  },

  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: <IoSearch />,
  },
];
