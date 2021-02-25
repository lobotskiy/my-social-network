import React from 'react'
import s from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEE0lEQVRoQ+2YQW4bNxSGP844aTdtfYOmJ6gMT7qNfIK2BygiLyQH7cLxDdwTVF60iKVFZPQAsU8QeduOYeUEjW8gJ5tGToYFKY46poacGWnUWkAIGBCMN4//z/e/x8cnWPMl1hw/Hwn83xGsJQKXLTbff8IjJE0haWhSggeg/9R6jeS1+iEFIwTDjXecbw0YL3sACxNQoD/c4zGCFhjQ1dGMgG444WxRMpUJXD7hwfuEfYEGvlkdc+4XYwmDjYCjrWfTSJVdlQjEbfYRHNYI3MY5RnIY9TmqlYCRywsETZdjAeda35KhDBhv/M0olYXOkU9piIRN5UPliYRHTpCSYXjD92VkVRgBDf4+Lx06vxLQDSYMymyWBaz8JvdpSXgKfJlDZhRO2Cny6yXwR5tGIHiRqSbpPtcCDrd7dMuG2md30eGpREvzC8tulEh2v+mjkj13OQmYk7+cAy85C29oFZ1MVWJGpgME39okfJFwEoj36CLZt5ydRD1dfVa24g4D4PGtDQRH0bGW2tzKJfDnE5oi0brPrpWDTzfLIyEDdh4+Y2gzyCUQtzm1QvkqnNCsWzauMBr5KrBfz2wkZ1Gf7woJqIvqQ8JfWUMX+5XpCMhTQRjwlX3RzUXAVIRfUnCqvm/33PVf2cV7/IrkB/2N4PfomJ/yyJW1S7+96DDM3hcCDuzKl0fg9keS3e2+TqzcZUD9aCXdbzaJsnZZPxdtWlLw3HeYhQSK5BN3eAN8ZrF7G/X4PPu/snbZb2wZ5alhjkDcQWadRD3/o6cssLJ2dpiL8CxPYKr/lUhI51fBgS4toVUmsWllVDeQrquoN3skmZphxWwu8wuSeJWldNEkVo3VrIyq9jjqs7NKoM4K1+ZltoWX8PPDnm76ZmtOQnf5IkskW3ZnWraVKNWb1xmluIPS/nRAoO/H/Au1fDMnGETH7NYJ0imdPZ4jb3e9lZo5U1nm2+n/gEScAx5HI2cik38OuR3h1PQ0nLBbd2dq9lNtg91xXoUTGq79vE9KD4nK0wOf9OKOfsCo56k9prlOJM2FnpTphh4SykRN3LrhDSdVI2L8quejKovpBC/LsxC8V0JZT2aCcFo0CknHhjJhfO+GVz5Sdotg1fbzIKBVZshVOFbJOvZMD3wKGQvJgd2SOwhcS+jal5XPeSUCypEZLbbEdJ5jj0HcewkG4TsO0qjkEDgJAw7LnLr3Ji5b5zODKTWl+Pft6ncwm/MUdZllcVSOQJ5jk5BNCY2A6fNT/XZESEsq+9JS9kXvDhehWgi4nJt2WD1HCyN0JwnonJnOVlWNvz2ssljfWQIpTtPbKyK5iX/nCSgiPkmtBQGfpNaGgEtSa0fAltRaEshKatGx/UrvgbK36TJ2Hwksc3p1fLv2EfgHlYLUQOH3RPwAAAAASUVORK5CYII="
                className={s.icon} />
            {props.message}
        </div>
    )
}

export default Message;
