import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE/klEQVRoQ+1ZTXLTShD+RsJh+fJOQHICSEW8Lc4JSE4QZxHBjnACzAlwdqAscE6Ac4Jntg+lYp8A5wTYSxSsoWY80pNGPZqR7BRFFbNzaX76m/66++sxw28+2G9uP/4A+NUe3JgH/jvFEw94BoYugB0ATzRwEwAzcIxT4PM/FxC/1x5rAbjpYXvZwTEYzpTRTQwSYAb+HS73hpg3WVic2wqAMDzdwisOafh228PVujkDBvsR3rbZpzGALy/RZSk+trhxm30z7uHk6XuMbRNbe+A6xBsO9E0HMOAzgFHqYcKXmGc8F/HBfGx7qYyLQy5ixTAY0G/iDWcPxC/wERw94twFBwYPEgxcuSwo+GMLZ2xFwb8qezIMgw84cfGEEwCj8Qzn/nf0XQ3XDZJJ4CH64HjVFoQVwJcQfQa80Q5YAOgFEUYut2SbE4c4BDDUvcGBt08jM2XFvrUAVMD+qxufcnRNeVyu4TgGl3zPasEEDBPOcGkKUllHmAzgEqW4h4O6wDYCkO7dwo2WbRYm49V8kZ3EbdaNkZ/ghKKdAcQsiLBbE/T0JwN1jijaKOOFp/Tqazp34ic4oEAoOn0qLqyjEukBZdDXUpFiOA8+yKxRGfEpRmB4buO69n0URDgi93uBgRbYcz/BLgWYBHAd4owD7wqbL/wEO9QGhjiZAuj7yaooLbekPhL143HpZg38Vhc4K8YDA17vRxjogEkAcQhx+0KQyVHnwjiU2eO4sPE0iGgqxSGEUY/yuTVeJShMxkIFgAokEbz58BP8bcr1cShVZfFmyTgRmxH8ngQR9igaKS98K35LOfb07FcBoNNHyIP9SFKAHHEoHOQGljIqiMypXL8cikYVAHpAmriXmXyfACqxyHEVXJTTdBVAKHN/ng5thWRNChnjRVyQniAoNlAASpSgeFekDBHERl5Xghi4DCJSIMojqHjUKWcFUMdR6pYUOCEb+g++S3mNHw/xjHGZAvPMJrObRSaowC9d6MYByEPaFDKCz1SW0GOsMQAbhcShKruIolUqVKbMBWDqJ+jaZHgrCl2HGBc7Jhc35yA6GFolBceVf4eezfh1grhUWW1pVL9llTlE5yYyWeYRIS0m3MOwSc9LSJpK0K9dyGposvanWEvpToXs5iV2lqnUQvmokxLZJMFXn+E55+aqLeYyhvGS48r2sEVVbd/D7t57qafyYRJzJdFVJ+bUi9w79SLnfuurF7rXxs6u2sreBlE5DcsLoU4kuEfq8etT9DiTb0StB+M42b+QijYfVD/SSE5Tehya9N2E8ZnFOoi42tAY+xFjT1zXUhqaGOHO/GGLckndw1ZWbzbSUmaHE9plnnIceAyiZy3JAgDGPkAHQxkpXq5TjiOPQfTWxfdWkvu59+rIS1VCaj7FY1tQuFLQpgSsD1tEQJdtc9Q0FCCbhnK5GCsAcTAhmYv2OFPHkUrZtFqp7USh4oE1IOT7vpfg3EXfiD0d/l9wMt5YB0z8deDtSP2FNOncYZoBEgbfdfDYE/po9ReU8fXOhTZF+5woVFygAlsUHlfpbIvn7Ps05ejZJIa+WWMA2QaqTtDv+64mr+Yt1J8alUcrl21aA8i53MGhaB9LD1YuJwO3jKOvywi3pf/PWgtA8TChYtMlupyhy4Advip02SvcLQNmHJgxjrHnY6yryqaGN85CbQ+473Ub88B9G2ra/w+AX3Xz2bk/AePvTE+0CbJaAAAAAElFTkSuQmCC"
                className={s.icon} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;   