import { SNavbar } from "../lib/SNavbar";
import { Body, Link,  } from "../lib/styles";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
      <Body>
        <SNavbar>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Sign in</Link>
          <Link href="#">Sign up</Link>
        </SNavbar>
        {children}
      </Body>
      </StyledComponentsRegistry>
    </html>
  )
}
