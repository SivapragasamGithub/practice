import Card from "./Card"

function Anothermethod(params) {
    const cards = [
        {
            plan: "free",
            price: 0,
            features: [
                {
                    name: "10 users included"
                },
                {
                    name: "2 GB of Storage"
                },
                {
                    name: "Email Support"
                },
                {
                    name: "help center access"
                }
            ]
        },
        {
            plan: "plus",
            price: 10,
            features: [
                {
                    name: "20 users included"
                },
                {
                    name: "8 GB of Storage"
                },
                {
                    name: "Email Support"
                },
                {
                    name: "help center access"
                }
            ]
        },
        {
            plan: "enterprice",
            price: 20,
            features: [
                {
                    name: "30 users included"
                },
                {
                    name: "15 GB of Storage"
                },
                {
                    name: "Email Support"
                },
                {
                    name: "help center access"
                }
            ]
        }
    ]

    return <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center"></div>
        {
            cards.map(() => {
                return <Card key={index} Card={Card} />
            })
        }
    </main>
}
export default Anothermethod    //not working for me. need to change code as session code 29/7/24