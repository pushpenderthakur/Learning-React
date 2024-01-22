// Spend a minute memorizing the line below
// Re-write the line of code as best you can from memory
ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root"))
ReactDOM.render(<ul><li>List 1</li><li>List 2</li></ul>, document.getElementById("list"))

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("imperative").append(h1)
const div = document.createElement("div")
div.className = "container"
div.textContent = "this is container div text using React js"
document.getElementById("container").append(div)

const Navbar = (
    <nav>
        <div className="container">
            <h2>Logo here</h2>
            <ul><li>Home</li>
            <li>About</li>
            <li>Contact</li></ul>

        </div>
    </nav>

)
ReactDOM.render(Navbar, document.getElementById("menu"))
function MainBanner(){
    return(
        <div className="banner"><h1>Main Content Area</h1></div>
    )
}