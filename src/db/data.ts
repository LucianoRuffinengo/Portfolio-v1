import { Work } from "../types";


export const db: Work[] = [
    {
        id: 1,
        image: "pagina-1.png",
        name: "Guitar LA",
        description1: "This project is an e-commerce platform for guitars, where users can add products to their cart, adjust the quantity of each item, remove individual products, or clear the entire cart.",
        description2: "This project utilizes a custom hook, state management, and the useEffect hook to handle cart operations. The cart data is persisted using localStorage, and the styling is implemented with pure CSS.",
        url: "https://guitarla-react-ts-arg.netlify.app",
    },
    {
        id: 2,
        image: "pagina-2.png",
        name: "Tip Calculator",
        description1: "This project is a tip calculator that allows you to select multiple items from a list, add more of the same item, or remove items as needed. You can then choose from three different tip percentages. The calculator will display the subtotal, the selected tip amount, and the total amount to pay. Finally, you have the option to save the order for future reference.",
        description2: "This is the first project where I implemented TailwindCSS. I created a custom hook to manage all order-related functionality, including adding and deleting items. Additionally, I developed a helper function to format item prices for better readability.",
        url: "https://calculadora-propina-react-ts-arg.netlify.app",
    },
    {
        id: 3,
        image: "pagina-3.png",
        name: "Calorie Tracker",
        description1: "This project is a calorie tracker that lets you log exercises or foods you've consumed, along with the calories burned or consumed based on your selection. After completing the form, you can save the entry, and the app will automatically calculate the difference between calories consumed and burned. Your logged food or exercise will then appear at the bottom of the page. Additionally, the app includes a reset option, allowing you to clear all data and start fresh whenever needed.",
        description2: "This project is styled using TailwindCSS and utilizes a reducer to efficiently manage activity-related functionality. User activities, such as logged exercises or foods, are stored in localStorage, ensuring data persistence across sessions. This allows users to retain their activity logs even after refreshing the page or returning later. ",
        url: "https://calorie-tracker-react-ts-arg.netlify.app",
    },
    {
        id: 4,
        image: "pagina-4.png",
        name: "Expense Control",
        description1: "This project is an expense management app where you start by setting a budget. After that, you can easily add expenses by clicking the icon in the bottom-right corner. When adding an expense, you’ll need to fill out a form with the expense name, amount, category (selected from a list), and the date of the expense. Your expenses will then appear in a list below the budget chart, giving you a clear overview of your spending. You can filter expenses, as well as update or delete individual entries. Finally, the app includes an option to reset everything and start fresh.",
        description2: "This project is styled with TailwindCSS and leverages a reducer to manage the expense functionality efficiently. It also uses Context API to maintain a global state, ensuring seamless data sharing across components. Additionally, a custom hook is implemented to access and interact with the global state from the Context API, making the state management more modular and intuitive.",
        url: "https://control-gastos-react-ts-arg.netlify.app",
    },
    {
        id: 5,
        image: "pagina-5.png",
        name: "Patient Follow-Up",
        description1: "This project is a patient follow-up app that allows users to enter patient information through a comprehensive form. Once the data is submitted, users can easily edit or delete patient records as needed, ensuring that the information remains up-to-date and accurate. The app provides a user-friendly interface for effective patient management and streamlined follow-up processes.",
        description2: "This project is styled using TailwindCSS and employs Zustand for state management, ensuring smooth functionality throughout the app. It utilizes react-hook-form to efficiently handle patient form submissions, providing a streamlined user experience. Additionally, react-toastify is integrated to display user-friendly notifications and messages, enhancing overall interactivity and feedback.",
        url: "https://seguimiento-pacientes-react-ts-arg.netlify.app",
    },
    {
        id: 6,
        image: "pagina-6.png",
        name: "Climate Consultant",
        description1: "This project is a weather consultation app that allows users to enter the name of a city along with its corresponding country. Once the information is submitted, the app displays the current temperature for that city, providing users with a quick and easy way to check the weather.",
        description2: "This project utilizes CSS Modules for styling and integrates a weather API with Axios to fetch data. It employs Zod for data validation, ensuring robust input handling. Additionally, a helper function is implemented to convert temperatures from Kelvin to Celsius, providing users with easily understandable temperature readings.",
        url: "https://consultor-clima-react-ts-arg.netlify.app",
    },
    {
        id: 7,
        image: "pagina-7.png",
        name: "Cryptocurrency Quoter",
        description1: "This project is a cryptocurrency price consultation app that allows users to select a preferred currency and then choose a specific cryptocurrency to view its current value in the selected currency. The app provides a straightforward interface, enabling users to easily track cryptocurrency prices and make informed decisions based on real-time data.",
        description2: "This project is styled with TailwindCSS and integrates a cryptocurrency API to retrieve real-time data. It employs Axios for efficient data fetching and handling, ensuring seamless communication with the API. Additionally, a well-defined schema is used to structure the cryptocurrency data, promoting consistency and reliability throughout the application.",
        url: "https://cotizador-cripto-react-ts-arg.netlify.app",
    },
    {
        id: 8,
        image: "pagina-8.png",
        name: "Cokctail",
        description1: "This project is an app designed for discovering drink recipes. Users can fill out a brief form by entering the name of a spirit (such as tequila or vodka) and selecting a category. Afterward, they can browse through a list of drinks, each of which opens a modal window for adding the drink to their favorites. In the Favorites page, users can view all their selected drinks and have the option to remove any they no longer wish to keep. This user-friendly app makes it easy to explore, save, and manage drink recipes.",
        description2: "This project is styled with TailwindCSS and utilizes Zustand with slices for efficient state management, ensuring smooth app functionality. It connects to a drinks API, employing Axios within a service layer to seamlessly fetch data. A well-defined schema is used to structure the drink information, promoting consistency and reliability. Additionally, Headless UI is implemented for the modal window, providing an accessible and customizable interface for users to interact with their favorite drinks.",
        url: "https://buscador-bebidas-react-ts-arg.netlify.app",
    },
    {
        id: 9,
        image: "pagina-9.png",
        name: "Product Manager",
        description1: "This project is a product management app that allows users to easily add new products by entering their names and corresponding values. Users can also edit or delete products as needed, providing a straightforward and efficient way to manage their inventory. The app features an intuitive interface, making it easy for users to keep track of their products and maintain accurate records. (NOTE:it can take time for the page to load)",
        description2: "This project is built using the PERN stack, with Node.js and Express powering the backend, while PostgreSQL serves as the database. It employs Sequelize with TypeScript for data modeling, ensuring strong typing and efficient database interactions. Middleware is utilized for data validation, alongside a dedicated handler for seamless database communication. The project includes various tests to guarantee functionality and reliability, and it features Swagger for comprehensive database documentation. On the frontend, the app is styled with TailwindCSS and utilizes a service layer with Axios to interact with the backend, while Valibot is implemented for effective data validation, enhancing the overall user experience.",
        url: "https://rest-apis-typescript-frontend-blue.vercel.app",
    }
]