# <span><img src="./public/medbell.png" alt="drawing" style="height: 1em"/> Divine Toll <img src="./public/medbell.png" alt="drawing" style="height: 1em"/></span>

A Path of Exile Price Index

## Features

- **Real-time Price Index:** Divine Toll utilizes the Path of Exile Exchange API to provide current item price information.

- **Dual Currency Display:** Users can view prices in both Chaos orbs and Divine orbs. Both prices are built from real, separate, recent data, and neither is extrapolated from or linked (in any way!) to the other. If you don't know why this matters, read the **Explanation** at the bottom.

## Technologies Used

- **NEXT.js:** The application is built on Next 13 (App Router) and utilizes SSR.

- **Prisma:** Prisma is used for database interactions and management.

- **Planetscale:** The application's database is hosted on Planetscale... for now. Divine Toll tracks approximately 500 items with countless(*) price history rows.

## Contributing

Contributions are welcome, though potentially challenging due to our (currently) closed-source pricing algorithm. If you are interested, please contact me at `TeaTreyDev@gmail.com`.
If you are interested in making a front-end feature, follow these steps:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/new-feature`

3. Make changes and test.

4. Commit changes: `git commit -m "Add new feature"`

5. Push to your forked repository: `git push origin feature/new-feature`

6. Create a Pull Request.

## Support and Feedback

For issues or suggestions, open an issue on GitHub.

## Explanation

In Path of Exile, there exists a notable pricing disparity between the Chaos and Divine orb "markets". Items tend to be more affordable in the Chaos orb market, where players trade small quantities of items for Chaos Orbs. In contrast, the Divine Orb market allows players to purchase items in bulk but at a premium cost. This toll compensates for the convenience of buying in bulk.

Some players exploit this discrepancy by purchasing mutiple items in small batches from other players. Although these trades look like bulk trades, the buyers are actually paying Chaos market prices, usually even less. Once they accumulate enough of one item, they sell them on the Divine market for profit.

With Divine Toll, you can get an idea of the difference between the two markets so you can make a more informed decision before bulk selling your stash to a reseller. 

## License

This project is licensed under the MIT License.
