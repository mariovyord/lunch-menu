import { render, screen, fireEvent, waitFor } from './test.utils';
import App from '../App';
import ContactsPage from '../features/contactsPage/ContactsPage';

afterEach(() => {
    jest.resetAllMocks();
});
afterAll(() => {
    jest.clearAllMocks();
});

test('renders all days of the week on home page', () => {
    window.HTMLElement.prototype.scrollIntoView = function () { };
    render(<App />);

    // headings in sidebar and main
    expect(screen.getAllByRole('link', { name: /monday/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /tuesday/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /wednesday/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /thursday/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /friday/i })).toHaveLength(2);
    expect(screen.getAllByRole('link', { name: /saturday/i })).toHaveLength(1);
    expect(screen.getAllByRole('link', { name: /sunday/i })).toHaveLength(1);
});

test('renders contacts and all headings after coming from home page', () => {
    window.HTMLElement.prototype.scrollIntoView = function () { };
    render(<App />);

    const contactsLink = screen.getByRole('link', { name: 'Contacts' });
    fireEvent.click(contactsLink);

    const whereToFindUs = screen.getByText('Where to find us');
    const workingTime = screen.getByText('Working time');
    const socialMedia = screen.getByText('Social media');
    const contactUs = screen.getByText('Contact us');

    expect(whereToFindUs).toBeInTheDocument();
    expect(workingTime).toBeInTheDocument();
    expect(socialMedia).toBeInTheDocument();
    expect(contactUs).toBeInTheDocument();
});

test('scrollIntoView is fired upon load', () => {
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    window.HTMLElement.prototype.scrollTo = function () { };
    render(<App />);

    expect(scrollIntoViewMock).toHaveBeenCalled()

});

test('contacts page is scrolled to top', async () => {
    const scrollTo = global.scrollTo = jest.fn()
    window.HTMLElement.prototype.scrollTo = scrollTo;

    render(<ContactsPage />);

    await waitFor(() => expect(scrollTo).toHaveBeenCalled());
});


