const style = `

body {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner-bar {
    background-color: rgb(124 53 96 / 84%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
}
h1 {
    font-family: sans-serif;
    font-size: 3.5em;
    text-transform:uppercase;
}
p {
    font-family: sans-serif;
    position: relative;
    left: 12px;
}
h2 {
    font-family: sans-serif;
    position: relative;
    font-size: 17px;
    left: 12px;
}
.member-card {
    width: 250px;
    margin-bottom: 5vh;
    background-color: rgb(232 225 232);
    box-shadow: 2px 5px 5px black;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.card-container {
    position: absolute;
    top: 26vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
}
.card-top {
    background-color: rgb(193 163 181);
    border: 2px solid rgb(97 13 107);
    width: 246px;
    border-top-left-radius: 10px;
}
.card-bottom {
    display: flex;
    flex-direction: column;
    align-content: center;
}
`;

module.exports = style;
