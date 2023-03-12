import { Box } from '../Box'
import { Header } from '../Header'
import { Title } from '../Title'

export const Main = () => {
    return (
        <main>
            <div className="container">
                <Header />
                <Title />
                <Box>
                    text
                </Box>
            </div>
        </main>
    )
}
