import { BackgroundImage, DivLogoHeader, ImageShop, Logotype, ParagraphLogo, StrongLogo } from "./styled"

const Logo = () => {
  return (
    <>
      <Logotype src="./logo.png"/>
      <DivLogoHeader>
        <BackgroundImage>
          <ImageShop src='./iconsh.png'/>
        </BackgroundImage>
        <ParagraphLogo>A vida é como um sanduíche, é preciso recheá-la com os <StrongLogo>melhores</StrongLogo> ingredientes.</ParagraphLogo>
      </DivLogoHeader>
    </>
  )
}

export default Logo