import { Box } from '../Box'
import { Converter } from '../Converter'
import { Header } from '../Header'
import { Title } from '../Title'

export const Main = () => {
    return (
        <main>
            <div className="container">
                <Header />
                <Title />
                <Box>
                    <Converter />
                </Box>
            </div>
        </main>
    )
}
