# ShopCompare

Welcome to **ShopCompare**, the first personal learning project designed to explore and experiment with various technologies in the React ecosystem.
This project leverages TypeScript, React, Vite, Tailwind CSS, TanStack Router, TanStack Query, Jotai, and Zustand to create a shopping comparison application.

## Project Overview

**ShopCompare** is part of my personal learning repository where I delve into state management and other tools to enhance my understanding of modern web development practices.
The goal is to integrate these technologies seamlessly with React to build an interactive and responsive user interface.

> [!NOTE]
> This is also my first React project and I am excited to continue learning TypeScript and React.

### Idea

This project is based of an exercise I was given, so I re-created it as best as I could remember it.

## Technologies Used

-   **TypeScript**: For type safety and better code quality.
-   **React**: The core library for building user interfaces.
-   **Vite**: A fast build tool that enhances development experience.
-   **Tailwind CSS**: For utility-first styling.
-   **TanStack Router**: For managing application routes.
-   **TanStack Query**: For data fetching and caching.
-   **Jotai & Zustand**: For state management solutions.

## Thoughts Behind the Component Directory Structure

When organizing components, there are two approaches I've considered:

1. **Single File Approach**: A component and its sub-components reside within the same file.
   This can be beneficial for smaller components or when sub-components are not reused elsewhere.
2. **Multi-File Approach**: Components with sub-components are placed in separate files, with the main component exported in an `index` file.
   This approach promotes better organization and scalability.

While I'm still exploring which method might be "preferred" or "more optimal," I currently lean towards the second option for its clarity and maintainability.
Exporting components individually does not detract from organization thanks to a well-structured folder system.

## Learning Objectives

Through this project, I aim to:

-   Gain hands-on experience with TypeScript and React.
-   Understand the nuances of modern state management libraries like Jotai and Zustand.
-   Explore advanced routing and data fetching techniques with TanStack Router and Query.
-   Enhance styling skills using Tailwind CSS in a React environment.

Feel free to explore the codebase and provide feedback or suggestions as I continue on this learning journey!

## Thought process behind state management solutions

There are three state management options I have in this project and this is how I've separated their use case for me:

-   **useState**: For keeping track within a component. That also includes it's direct sub-components.
-   **Jotai**: Same as useState, but as soon as you need something beyond a single component.
-   **Zustand**: Everything else. (Makes most sense if functionality is needed alongside state)

### Popup

> [!NOTE]
> Folloing my own rules: Instead of the shop details popup info being stored in the boundStore, I could've used an atom of an object instead, because I don't need special functionality for the popup.

## [Live Demo](https://stackblitz.com/edit/shop-compare?embed=1&file=README.md&hideExplorer=1&hideNavigation=1&view=editor&terminal=build,serve&terminal=stackdb)

> [!WARNING]
> In order to be able to use this demo, you need to follow the steps in the README.md file, which you'll see once you've clicked on the demo link.

### Image

#### HomePage

![Home](https://github.com/user-attachments/assets/3792c67f-e579-4b52-ae7a-9061122a1686)

#### AppPage

![App](https://github.com/user-attachments/assets/096639ec-7c1f-454a-adf1-7b60d8b9e0b8)

#### Shop Details Popup

You can close it by clicking on the icon, on the backdrop, or by pressing ESC.
![Popup](https://github.com/user-attachments/assets/15485dbc-6e0f-42c7-935d-684a75b80daf)

#### Compare Mode Active

![Compare Mode](https://github.com/user-attachments/assets/fa98ad35-aa79-4d0f-96d8-9ad0eb44fc65)

#### Shops Selected for comparison

![Selected Shops](https://github.com/user-attachments/assets/cbbf510c-7462-42d7-bb6c-5592e15fcc30)

#### Result of comparison

The result ist being sorted by reviews.
![Result](https://github.com/user-attachments/assets/559a9d4c-8f07-4c8b-8a14-41d2edc6fbc5)

### Video

https://github.com/user-attachments/assets/76655589-93ad-44cd-887e-a26b021ac0cd
