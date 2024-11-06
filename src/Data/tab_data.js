import popular_image from "../images/tab-images/Popular.png";
import promotion_image from "../images/tab-images/promotions.png";
import sport_image from "../images/tab-images/Sports.png";
import fishing_image from  "../images/tab-images/Fishing.png";
import slot_image from  "../images/tab-images/Slot.png";
import game_image from  "../images/tab-images/Games.png";
import live_image from  "../images/tab-images/Casino.png";
import cock_image from  "../images/tab-images/Cock Fight.png";
import tables_image from  "../images/tab-images/tables.png";

import game_four from "../images/ui-images/game_1_image.webp";
import mobile_banner_sample from "../images/banners/banner2-mobile.png";
import game_one from "../images/ui-images/game_1_image.webp";
import game_two from "../images/ui-images/game_2_image.webp";
import game_three from "../images/ui-images/game_3_image.webp";

import cap_popular from "../images/category_names/popular1.png";
import cap_promotion from "../images/category_names/PROMOTIONS.png";
import cap_sports from "../images/category_names/SPORTS1.png";
import cap_live from "../images/category_names/LIVE1.png";
import cap_slots from "../images/category_names/SLOTS1.png";
import cap_games from "../images/category_names/GAMES1.png";
import cap_cockfight from "../images/category_names/COCKFIGHT1.png";
import cap_table from "../images/category_names/TABLES1.png";
import cap_fishing from "../images/category_names/FISHING1.png";

export const tabmenus = {
    'Popular': {
        name: 'Popular',
        image: cap_popular,
        ColumnImage: popular_image,
        text: 'Explore a world of popular games that bring nonstop entertainment, from fan-favorite classics to the latest hits. Dive into thrilling gameplay, challenge your skills, and enjoy endless fun with the top games everyone’s talking about.',
        items: [
            {
                name: 'Game 1',
                text: 'asdadsadsa',
                image: popular_image,
                tag: null,
            },
            {
                name: 'Game 2',
                text: 'asdadsadsa',
                image: popular_image,
                tag: null,
            },
            {
                name: 'Game 3',
                text: 'asdadsadsa',
                image: popular_image,
                tag: null,
            },
            {
                name: 'Game 4',
                text: 'asdadsadsa',
                image: popular_image,
                tag: null,
            }
        ],
    },
    'Promotions': {
        name: 'Popular',
        image: cap_promotion,
        ColumnImage: promotion_image,
        text: 'Take advantage of exciting promotions designed to boost your gaming experience! Enjoy special bonuses, exclusive rewards, and limited-time offers that give you more ways to play, win, and enjoy all the action.',
        items: [
            {
                name: 'Game 4',
                text: '2024-10-25',
                image: promotion_image,
                image_mobile: mobile_banner_sample,

            },
            {
                name: 'Sport 2',
                text: '2024-10-25',
                image: game_one,
                image_two: mobile_banner_sample,
            },
            {
                name: 'Sport 3',
                text: '2024-10-25',
                image: game_one,
                image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Sports': {
        name: 'Popular',
        image: cap_sports,
        ColumnImage: sport_image,
        text: 'Experience the world’s most comprehensive coverage of sports events from every corner of the globe. Enjoy a wide range of dynamic gameplay,  bringing you thrilling sports betting options that make it easy to place bets and enjoy the excitement.',
        items: [{
                name: 'Game 4',
                text: '2024-10-25',
                image: sport_image ,
                image_mobile: mobile_banner_sample,
            },
            {
                name: 'Real Man Game 2',
                text: '2024-10-25',
                image: game_one,
                image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Live': {
        name: 'Live',
        image: cap_live,
        ColumnImage: live_image,
        text: ' Immerse yourself in the excitement of live casino gaming with real dealers, interactive play, and classic games like blackjack and roulette—all  streamed directly to you. Experience the thrill of real-time betting from anywhere.',
        items:[{
                name: 'Game 4',
                text: '2024-10-25',
                image: live_image,
                image_mobile: mobile_banner_sample,
            },
            {
                name: 'Electronic Game 2',
                text: '2024-10-25',
                image: game_two,
                image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Slots': {
        name: 'Slots',
        image: cap_slots,
        ColumnImage: slot_image,
        text: 'Discover the thrill of online slots with vibrant graphics, exciting themes, and endless chances to win big. Spin the reels on a variety of games   and experience fast-paced, rewarding action anytime, anywhere.',
        items: [{
            name: 'Game 4',
            text: '2024-10-25',
            image: slot_image,
            image_mobile: mobile_banner_sample,
        },
            {
                name: 'Lottery 2',
                text: '2024-10-25',
                image: game_one,
                image_mobile: mobile_banner_sample,
            },
            {
                name: 'Lottery 3',
                text: '2024-10-25',
                image: game_four,
                image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Games': {
        name: 'Games',
        image: cap_games,
        ColumnImage: game_image,
        text: 'Dive into a world of endless gaming excitement with a vast selection of interactive games designed for every kind of player. Enjoy thrilling gameplay, stunning graphics, and the chance to win big—all from the comfort of your own space.',
        items: [{
            name: 'Game 4',
            text: '2024-10-25',
            image: game_image,
            image_mobile: mobile_banner_sample,

        },
            {
                name: 'Chess 2',
                text: '2024-10-25',
                image: game_three,
                image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Cockfight': {
        name: 'Popular',
        image: cap_cockfight,
        ColumnImage: cock_image,
        text: 'Experience the thrill of traditional cockfight gaming, where strategy and excitement come together in a dynamic arena. Watch live matches, place your bets, and feel the rush of real-time action as you cheer for your champion.',
        items: [{
            name: 'Game 4',
            text: '2024-10-25',
            image: cock_image,
            image_mobile: mobile_banner_sample,

            },
            {
            name: 'Fishing 2',
            text: '2024-10-25',
            image: game_two,
            image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Tables': {
        name: 'Tables',
        image: cap_table,
        ColumnImage: tables_image,
        text: 'Step up to the table and enjoy classic casino games like poker, blackjack, and roulette, all designed to bring you the authentic experience of a  live casino. Test your skills, place your bets, and savor the excitement of each hand dealt and every spin of the wheel.',
        items: [{
                    name: 'Game 4',
                    text: '2024-10-25',
                    image: tables_image,
                    image_mobile: mobile_banner_sample,
                },
                {
                    name: 'Fishing 2',
                    text: '2024-10-25',
                    image: game_two,
                    image_mobile: mobile_banner_sample,
            }
        ]
    },
    'Fishing': {
        name: 'Fishing',
        image: cap_fishing,
        ColumnImage: fishing_image,
        text: 'Cast your line into the exciting world of fishing games, where vibrant underwater adventures await. Enjoy action-packed gameplay, reel in big  catches, and aim for rewarding prizes in this immersive fishing experience',
        items: [{
                name: 'Game 4',
                text: '2024-10-25',
                image: fishing_image,
                image_mobile: mobile_banner_sample,
            },
            {
                name: 'Fishing 2',
                text: '2024-10-25',
                image: game_two,
                image_mobile: mobile_banner_sample,
            }
        ]
    },
};