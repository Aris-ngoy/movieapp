import HomeView from "../Screens/Home/Views/HomeView"
import MovieView from "../Screens/Home/Views/MovieView"
import TvShowView from "../Screens/Home/Views/TvShowView"

export const viewList = [
    {
        iconName : 'home-outline',
        title : 'Home',
        view : HomeView
    },
    {
        iconName : 'film-outline',
        title : 'Movie',
        view : MovieView
    },
    {
        iconName : 'tv-outline',
        title : 'Tv Show',
        view : TvShowView
    },
]

