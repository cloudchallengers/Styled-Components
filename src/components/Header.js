import { StyledHeader } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled'; 
import { Flex } from './styles/Flex.styled'; 


export const Header = () => {
  return (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src="./images/logo.svg"></Logo>
                <Button>Try It</Button>
            </Nav>  
            <Flex>
                <div>
                    <h1>
                        Building expertise in styling web pages.
                    </h1>
                    <p>
                        I am experienced front end developer working on React and Angular since long.
                    </p>
                    <p>
                        But I always had the feeling that I am good at JS but not up to the mark when it comes to CSS and styling the web pages.
                    </p>
                    <p>
                        So I am not making these demos of most prominsing styling systems within React now the days.
                    </p>
                    <Button bg="#ff0099" color='#fff'>
                        Get Started
                    </Button>
                </div>
                <Image src='./images/illustration-mockups.svg' />
            </Flex>
        </Container>
    </StyledHeader>
  )
}
