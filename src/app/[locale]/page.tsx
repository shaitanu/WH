import Button from './components/Button'

export default function DashboardPage() {
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          <span className='bg-span-bg bg-clip-text text-transparent'>
            W&H
          </span>
          <br />
          Eudaimonia
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          Mental Health Made Easy ...
        </div>
        <div className='mt-4 flex flex-row gap-4'>
          <a
            href="/pitch.pdf"
            target="_blank"
            rel="noopener noreferrer">
            <Button rounded size='large' variant='secondary'>
              Learn More!
            </Button>
          </a>
        </div>
      </section >
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>Approachable</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Add compo Lorem Ipsum
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Versatile</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Approachable Lorem Ipsum
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>Performat</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              Rich Incredible Lorem Ipsum
            </p>
          </div>
        </div>
      </section>
    </div >
  )
}
