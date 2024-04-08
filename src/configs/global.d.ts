type NavItem = {
    title: string;
    url: string;
}
type Props = {
    isMobile: boolean;
  };
  type FaqDataType = {
    id: number | string;
    question: string;
    answer: string;
  };
  type FooterItems = {
    title: string;
    href: string;
  };
  type Communication = {
    title: string;
    footerItems: FooterItems[];
  };

  type styles = {
    title: string;
    label: string;
    input: string;
    button: string;
}

type feedBack = {
 img: string;
 name: string;
 description:string;
 comment: string;
 
}