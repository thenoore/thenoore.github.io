import image from "../assets/soap.png";
import soapbar from "../assets/soaps.png";

import turmeric from "../assets/turmeric.jpg";
import kojic from "../assets/kojic.jpeg";
import goatmilk from "../assets/milkbase.jpeg";
import honey from "../assets/honey.jpeg";
import shea from "../assets/shea.jpg";
import vitE from "../assets/vitE.jpg";
import olive from "../assets/olive.jpg";
import lemon from "../assets/lemon.jpg";
import fragrance from "../assets/fragrance.jpg";

export const soaps = [
    {
        slug: "golden-glow",
        name: "Gloden Glow",
        price: "9.99",
        weight: "100gm",
        description: "Relaxing gloden glow soap",
        image: soapbar,
        coverImage: soapbar,
        imageAlt: "Soap Bar",
        ingredients: [
            {
                ingre: "Turmeric",
                image: turmeric
            },
            {
                ingre: "Kojic Acid",
                image: kojic
            },
            {
                ingre: "Glycerin",
                image: kojic
            },
            {
                ingre: "Goat Milk Base",
                image: goatmilk
            },
            {
                ingre: "Honey",
                image: honey
            },
            {
                ingre: "Shea Butter",
                image: shea
            },
            {
                ingre: "Vitamin E",
                image: vitE
            },
            {
                ingre: "Olive Oil",
                image: olive
            },
            {
                ingre: "Lemon Extract",
                image: lemon
            },
            {
                ingre: "Fragrance",
                image: fragrance
            },
        ]
    },
    {
        slug: "charcoal",
        name: "Charcoal Detox",
        price: "9.99",
        weight: "100gm",
        description: "Deep cleansing charcoal soap",
        image: soapbar,
        coverImage: soapbar,
        imageAlt: "Soap Bar",
        ingredients: [
            {
                ingre: "Kojic Acid",
                image: kojic
            },
        ]
    },
    {
        slug: "rose",
        name: "Rose Petal",
        price: "9.99",
        weight: "100gm",
        description: "Soft floral rose soap",
        image: soapbar,
        coverImage: soapbar,
        imageAlt: "Soap Bar",
        ingredients: [
            {
                ingre: "Kojic Acid",
                image: kojic
            },
        ]
    },
    
];