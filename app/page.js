import Arrivals from './components/Arrivals/Arrivals';
import Categories from './components/Categories/Categories';
import Collection from './components/Collection/Collection';
import Hero from './components/Hero/Hero';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Hero />
			<Categories className='z-0'/>
      <Arrivals className='z-0'/>
			<Collection />
		</main>
	);
}
