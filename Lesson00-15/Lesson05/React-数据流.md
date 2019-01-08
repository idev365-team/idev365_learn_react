const count = 1
App
    ---> <Clock couter={count}>
            +--->props.count
            +--->state{
                count:props.count
                second:15
            }
            ----->render()
                    +-----<Second second={second} />
                                 +--->props.second
                                 +--->state{
                                    second:props.second
                                 }
                                 +--->render()
