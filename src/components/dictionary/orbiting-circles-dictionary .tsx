import OrbitingCircles from "@/components/ui/orbiting-circles";
export const OrbitingCirclesDictionary = () => {
    return (
        <div
            className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <div className="w-70 h-70 rounded-full flex items-center justify-center">
                <svg className="w-full h-full " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="clip-avatar">
                            <circle cx="12" cy="12" r="12"/>
                        </clipPath>
                    </defs>
                    <image href="https://media-app.zim.vn/Avatar/1_3baceee7-c7d3-41ec-b6d0-5de6aba08ce1.png"
                           x="0" y="0" width="24" height="24"/>
                </svg>
            </div>


            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={180}
                reverse
            >
                <Icons.dot1/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[80px] border-4 border-green-200 bg-transparent"
                radius={240}
                duration={20}

            >
                <Icons.avatar2/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-rose-400  bg-transparent"
                radius={240}
                duration={20}
                delay={15}
            >
                <Icons.dot4/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none  bg-transparent"
                radius={240}
                duration={20}
                delay={20}
            >
                <Icons.dot/>
            </OrbitingCircles>


            <OrbitingCircles
                className="size-[100px] border-4 border-blue-300 bg-transparent"
                radius={320}
                duration={20}
                delay={20}
                reverse
            >
                <Icons.avatar3/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[80px] border-4 border-amber-200 bg-transparent"
                radius={320}
                duration={20}
                delay={15}
                reverse
            >
                <Icons.avatar1/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[80px] border-4 border-amber-200 bg-transparent"
                radius={320}
                duration={20}
                delay={15}
                reverse
            >
                <Icons.avatar1/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[80px] border-none bg-transparent"
                radius={320}
                duration={20}
                delay={10}
                reverse
            >
                <Icons.dot3/>
            </OrbitingCircles>


            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={400}
                duration={20}
                delay={15}

            >
                <Icons.dot5/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[70px] border-none bg-transparent"
                radius={400}
                duration={20}
                delay={5}
            >
                <Icons.dot2/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[80px] border-4 border-cyan-300 bg-transparent"
                radius={400}
                duration={20}
                delay={20}
            >
                <Icons.avatar/>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[80px] border-4 border-pink-300 bg-transparent"
                radius={400}
                duration={20}
            >
                <Icons.avatar4/>
            </OrbitingCircles>


        </div>
    );
}

const Icons = {
    avatar: () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="lightgray"/>
            <foreignObject x="10" y="10" width="80" height="80">
                <div style={{
                    transform: 'rotate(360deg)',
                    transition: 'transform 1s',
                    overflow: 'hidden',
                    borderRadius: '50%'
                }}>
                    <img src="https://cdn2.fptshop.com.vn/unsafe/800x0/avatar_anime_nam_cute_4_966f0d5477.jpg" alt="Avatar"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </foreignObject>
        </svg>
    ),
    avatar1: () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="lightgray"/>
            <foreignObject x="10" y="10" width="80" height="80">
                <div style={{
                    transform: 'rotate(360deg)',
                    transition: 'transform 1s',
                    overflow: 'hidden',
                    borderRadius: '50%'
                }}>
                    <img src="https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/Image%20FP_2024/hinh-anh-avatar-ca-tinh-nu-2.jpg" alt="Avatar"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </foreignObject>
        </svg>
    ),
    avatar2: () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="lightgray"/>
            <foreignObject x="10" y="10" width="80" height="80">
                <div style={{
                    transform: 'rotate(360deg)',
                    transition: 'transform 1s',
                    overflow: 'hidden',
                    borderRadius: '50%'
                }}>
                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-100.jpg" alt="Avatar"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </foreignObject>
        </svg>
    ),
    avatar3: () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="lightgray"/>
            <foreignObject x="10" y="10" width="80" height="80">
                <div style={{
                    transform: 'rotate(360deg)',
                    transition: 'transform 1s',
                    overflow: 'hidden',
                    borderRadius: '50%'
                }}>
                    <img src="https://chungcuhatecolaroma.net.vn/wp-content/uploads/2022/10/anh-avatar-dep-cho-con-gai-2.jpg" alt="Avatar"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </foreignObject>
        </svg>
    ),

    avatar4: () => (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" fill="lightgray"/>
            <foreignObject x="10" y="10" width="80" height="80">
                <div style={{
                    transform: 'rotate(360deg)',
                    transition: 'transform 1s',
                    overflow: 'hidden',
                    borderRadius: '50%'
                }}>
                    <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-avatar-cute-95.jpg" alt="Avatar"
                         style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
                </div>
            </foreignObject>
        </svg>
    ),



    dot: () => (
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="red"/>
        </svg>
    ),
    dot1: () => (
        <svg width="100" height="100" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="blue"/>
        </svg>
    ),
    dot2: () => (
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#e6b3fe"/>
        </svg>
    ),
    dot3: () => (
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#feb9f1"/>
        </svg>
    ),
    dot4: () => (
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#fd8ba4"/>
        </svg>
    ),
    dot5: () => (
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#5eed8c"/>
        </svg>
    ),




}