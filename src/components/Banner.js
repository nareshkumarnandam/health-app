import React from 'react'

const Banner = () => {
  return (
    <div>
        <section>
          <div className='container1'>
            <h1>
              Where Fitness Meets Fun and Results Are Achieved
            </h1>
            <p>
              Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.
            </p>
          </div>
          <div className='container2'>
                <div className='cont2_1'>
                  <div>
                      <div className='smallImage'>
                        <img src='https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg' />
                      </div>
                      <div className='smallImage'>
                        <img src='https://t4.ftcdn.net/jpg/02/70/27/57/360_F_270275705_Ja0uASDTp5tCasU2amYLOMvUBT0Qv7m5.jpg' />
                      </div>
                  </div>
                  <div className='largeImage'>
                      <img src='https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg' />
                  </div>
                </div>
                <div className='cont2_2'>
                  <div className='largeImage'>
                  <img  src="https://wallpaperaccess.com/full/1087621.jpg"/>
                  </div>
                  <div className='cont2lowerbox'>
                      <div className='smallImage'>
                        <img src="https://wallpapercave.com/wp/wp6331008.jpg"/>
                      </div>
                      <div className='smallImage'>
                        <img src="https://img.freepik.com/free-photo/woman-holding-weights-near-barbells_651396-1617.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1701648000&semt=ais"/>
                      </div>
                  </div>
                </div>
          </div>
        </section>
    </div>
  )
}

export default Banner