import { render, screen} from '@testing-library/react'
import Heading from './Heading'

describe('test Heading Component', ()=> {
    it('check element text correctly reander', () => {
        render(<Heading />);
        const textVerify = screen.getByText('test the paragraph');
        expect(textVerify).toBeInTheDocument();
    })
})