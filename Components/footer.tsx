
import Image from 'next/image'
export default function Footer(){
    return(
    <footer className='border-t-8 border-color-1'>
        <div className="bg-[#010020] min-h-[200px] w-full text-white flex justify-center items-center flex-col">
        <div className="max-w-[1200px] items-center px-4 md:px-12 lg:px-6 flex flex-col w-full h-full">
            <div className="flex-1 w-full justify-center md:mt-12 md:flex-row items-center md:justify-between flex flex-col">
                <div className="justify-center md:justify-start my-8 md:my-0 flex">
                    <a className="hover:text-primary " href="/">
                        <div className=" flex justify-center items-center">
                            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3612_981)">
                                    <path d="M37.865 17.865L22.135 2.13496C20.9559 0.955852 19.0441 0.955856 17.865 2.13496L2.13496 17.865C0.95585 19.0441 0.955847 20.9559 2.13496 22.135L17.865 37.865C19.0441 39.0441 20.9558 39.0441 22.135 37.865L37.865 22.135C39.0441 20.9559 39.0441 19.0441 37.865 17.865Z" fill="#FF46AA"></path>
                                    <path d="M25.4811 12.8116C23.9079 14.0154 21.982 14.6676 20.0011 14.6676C18.0202 14.6676 16.0944 14.0154 14.5212 12.8116C13.0155 13.9583 11.9075 15.5484 11.3532 17.358C10.7989 19.1677 10.8262 21.1056 11.4313 22.8988C12.0364 24.6921 13.1888 26.2504 14.7262 27.3542C16.2636 28.4579 18.1085 29.0517 20.0011 29.0517C21.8937 29.0517 23.7387 28.4579 25.2761 27.3542C26.8134 26.2504 27.9659 24.6921 28.571 22.8988C29.1761 21.1056 29.2034 19.1677 28.6491 17.358C28.0948 15.5484 26.9867 13.9583 25.4811 12.8116Z" fill="white"></path>
                                    <path d="M22.1287 19.9808C21.6534 19.99 21.1887 19.8398 20.8087 19.5541C20.4287 19.2685 20.1554 18.8638 20.0321 18.4046C19.9089 17.9455 19.943 17.4583 20.1289 17.0208C20.3149 16.5832 20.642 16.2206 21.058 15.9906C20.7137 15.8947 20.358 15.8455 20.0006 15.8443C19.1877 15.8443 18.3931 16.0853 17.7172 16.5369C17.0413 16.9885 16.5146 17.6304 16.2035 18.3814C15.8924 19.1324 15.811 19.9588 15.9696 20.7561C16.1282 21.5533 16.5196 22.2856 17.0944 22.8604C17.6692 23.4352 18.4015 23.8266 19.1988 23.9852C19.996 24.1438 20.8224 24.0624 21.5734 23.7514C22.3244 23.4403 22.9663 22.9135 23.4179 22.2376C23.8695 21.5617 24.1106 20.7671 24.1106 19.9542C24.1094 19.5968 24.0602 19.2411 23.9643 18.8968C23.7812 19.2234 23.5149 19.4957 23.1925 19.6861C22.8702 19.8765 22.5031 19.9782 22.1287 19.9808Z" fill="#413245"></path>
                                    <path d="M4.63065 2.28354L2.36401 4.55017L6.1919 8.37806L8.45854 6.11142L4.63065 2.28354Z" fill="white"></path>
                                    <path d="M31.5356 6.11255L33.8022 8.37918L37.6301 4.5513L35.3635 2.28467L31.5356 6.11255Z" fill="white"></path>
                                    <path d="M8.46146 33.9076L6.19482 31.641L2.36694 35.4688L4.63358 37.7355L8.46146 33.9076Z" fill="white"></path>
                                    <path d="M35.3664 37.7259L37.6331 35.4593L33.8052 31.6314L31.5385 33.898L35.3664 37.7259Z" fill="white"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_3612_981">
                                        <rect width="40" height="40" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-white uppercase font-bold ml-2">ZONBITA</p>
                        </div>
                    </a>
                </div>
                <div className="justify-between md:justify-normal w-full md:w-auto max-w-[360px] md:max-w-none mt-2 gap-2 md:gap-6 md:mt-0 flex-col md:flex-row items-center flex">
                    <a target="_blank" className="hover:text-primary text-sm hover:text-white" href="/">Home</a>
                    <a target="_self" className="hover:text-primary text-sm hover:text-white" href="/About">About</a>
                    <a target="_self" className="hover:text-primary text-sm hover:text-white" href="/Services">Services</a>
                    <a target="_self" className="hover:text-primary text-sm hover:text-white" href="/Projects">Projects</a>
                    <a target="_self" className="hover:text-primary text-sm hover:text-white" href="/contact">Contact us</a>
                </div>
            </div>
            <div className="flex-1 mt-10 mb-8 md:flex-row md:mt-3 md:w-full md:justify-between flex justify-center items-center flex-col">
                <div className="text-center mx-5 md:text-left md:mx-0">
                    <p className="text-white opacity-80 text-sm">ZONBITA © 2022, All rights reserved</p>
                </div>
                <div className="mt-9 grid grid-rows-2 grid-cols-4 gap-6 md:flex md:flex-row md:gap-2 md:mt-0">
                    <a target="_blank" className="hover:text-primary " href="">
                        <button className="button_button__cnvYP button_secondary button_no_overlay__QtjiT h-[42px] w-[42px] text-[14px] rounded">
                            <div className="button_volume__lfL9R"></div>
                            <div className="z-10  flex justify-center items-center w-full h-full">
                                <svg version="1.1" width="28" height="28" x="0px" y="0px" viewBox="0 0 30 30">
                                    <g>
                                        <path fill="white" d="M15 0C7.26801 0 1 6.26801 1 14C1 21.732 7.26801 28 15 28C22.732 28 29 21.732 29 14C29 6.26801 22.732 0 15 0ZM9.69467 6.06667H20.772C21.7061 6.06667 22.4667 6.818 22.4667 7.749V22.4L20.6893 20.8483L19.6891 19.9337L18.6309 18.9618L19.0691 20.4727H9.69467C8.76053 20.4727 8 19.7213 8 18.7903V7.749C8 6.818 8.76053 6.06667 9.69467 6.06667Z"></path>
                                        <path fill="white" d="M17.5811 16.7324C17.5811 16.7324 17.2835 16.3812 17.0355 16.0709C18.1184 15.7687 18.5317 15.099 18.5317 15.099C18.1928 15.3195 17.8704 15.4747 17.5811 15.5809C17.1677 15.7524 16.7709 15.8667 16.3824 15.932C15.5888 16.079 14.8613 16.0382 14.2413 15.9239C13.7701 15.834 13.3651 15.7034 13.0261 15.5727C12.836 15.4992 12.6293 15.4094 12.4227 15.295C12.4103 15.2869 12.3979 15.2808 12.3855 15.2746C12.3731 15.2685 12.3607 15.2624 12.3483 15.2542C12.3317 15.246 12.3235 15.2379 12.3152 15.2297C12.1664 15.148 12.0837 15.0909 12.0837 15.0909C12.0837 15.0909 12.4805 15.7442 13.5304 16.0545C13.2824 16.3649 12.9765 16.7324 12.9765 16.7324C11.1496 16.6752 10.4552 15.491 10.4552 15.491C10.4552 12.8614 11.6456 10.7299 11.6456 10.7299C12.836 9.84788 13.9685 9.87238 13.9685 9.87238L14.0512 9.97038C12.5632 10.395 11.8771 11.0402 11.8771 11.0402C11.8771 11.0402 12.0589 10.9422 12.3648 10.8034C13.2493 10.4195 13.952 10.3134 14.2413 10.2889L14.2599 10.2858C14.3016 10.2788 14.3386 10.2725 14.3819 10.2725C14.8861 10.2072 15.4565 10.1909 16.0517 10.2562C16.8371 10.346 17.6803 10.5747 18.54 11.0402C18.54 11.0402 17.8869 10.4277 16.4816 10.003L16.5973 9.87238C16.5973 9.87238 17.7299 9.84788 18.9203 10.7299C18.9203 10.7299 20.1107 12.8614 20.1107 15.491C20.1107 15.491 19.408 16.6752 17.5811 16.7324ZM13.9699 13.0667C13.5024 13.0667 13.1333 13.4871 13.1333 14C13.1333 14.513 13.5106 14.9334 13.9699 14.9334C14.4374 14.9334 14.8064 14.513 14.8064 14C14.8146 13.4871 14.4374 13.0667 13.9699 13.0667ZM16.1269 14C16.1269 13.4871 16.496 13.0667 16.9634 13.0667C17.4309 13.0667 17.8 13.4871 17.8 14C17.8 14.513 17.4309 14.9334 16.9634 14.9334C16.5042 14.9334 16.1269 14.513 16.1269 14Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                    <a target="_blank" className="hover:text-primary " href="https://">
                        <button className="button_button__cnvYP button_secondary button_no_overlay__QtjiT h-[42px] w-[42px] text-[14px] rounded">
                            <div className="button_volume__lfL9R"></div>
                            <div className="z-10  flex justify-center items-center w-full h-full">
                                <svg version="1.1" width="28" height="28" x="0px" y="0px" viewBox="0 0 30 30">
                                    <g>
                                        <path fill="white" d="M15 0C7.26801 0 1 6.26801 1 14C1 21.732 7.26801 28 15 28C22.732 28 29 21.732 29 14C29 6.26801 22.732 0 15 0ZM14.6101 11.8638L14.5807 11.3794C14.4926 10.1238 15.2662 8.97699 16.4903 8.5321C16.9407 8.37392 17.7046 8.35415 18.204 8.49256C18.3999 8.55188 18.772 8.7496 19.0364 8.92756L19.5162 9.25381L20.045 9.08574C20.3388 8.99676 20.7305 8.84847 20.9068 8.7496C21.0733 8.66063 21.2202 8.61119 21.2202 8.64085C21.2202 8.80892 20.8578 9.38233 20.5543 9.69869C20.143 10.1436 20.2605 10.1831 21.0929 9.88653C21.5923 9.71847 21.6021 9.71847 21.5041 9.90631C21.4454 10.0052 21.1418 10.3512 20.8187 10.6676C20.2703 11.2113 20.2409 11.2706 20.2409 11.7254C20.2409 12.4273 19.9079 13.8905 19.575 14.6913C18.958 16.194 17.636 17.7462 16.314 18.5272C14.4534 19.6246 11.9758 19.9014 9.88999 19.2588C9.19471 19.0413 8 18.4877 8 18.3888C8 18.3591 8.36233 18.3196 8.803 18.3097C9.72352 18.2899 10.644 18.0329 11.4274 17.5781L11.9563 17.2618L11.3491 17.0541C10.4873 16.7576 9.71372 16.0754 9.51787 15.4328C9.45911 15.2252 9.4787 15.2153 10.0271 15.2153L10.5951 15.2054L10.1152 14.978C9.54725 14.6913 9.02823 14.2069 8.77362 13.7126C8.58756 13.3566 8.35254 12.457 8.42109 12.3878C8.44067 12.3581 8.64632 12.4174 8.88134 12.4965C9.55704 12.7437 9.64517 12.6844 9.25347 12.2691C8.51901 11.5178 8.29378 10.4006 8.64632 9.34278L8.81279 8.86824L9.45911 9.51085C10.7811 10.806 12.3382 11.5771 14.1204 11.8045L14.6101 11.8638Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                    <a target="_blank" className="hover:text-primary " href="https://t.me/">
                        <button className="button_button__cnvYP button_secondary button_no_overlay__QtjiT h-[42px] w-[42px] text-[14px] rounded">
                            <div className="button_volume"></div>
                            <div className="z-10  flex justify-center items-center w-full h-full">
                                <svg version="1.1" width="28" height="28" x="0px" y="0px" viewBox="0 0 30 30">
                                    <g>
                                        <path fill="white" d="M1 14C1 21.732 7.26801 28 15 28C22.732 28 29 21.732 29 14C29 6.26801 22.732 0 15 0C7.26801 0 1 6.26801 1 14ZM12.4333 20.4167L12.6715 16.848L12.6713 16.8478L19.1632 10.9894C19.4481 10.7366 19.101 10.6132 18.7228 10.8426L10.7109 15.8972L7.25023 14.8171C6.50288 14.5882 6.49751 14.0747 7.41802 13.7055L20.9035 8.5055C21.5194 8.22588 22.1139 8.65344 21.8788 9.59613L19.5822 20.4185C19.4218 21.1875 18.9572 21.3715 18.3133 21.0162L14.8149 18.4315L13.1333 20.0667C13.128 20.0718 13.1228 20.077 13.1175 20.0821C12.9294 20.2652 12.7738 20.4167 12.4333 20.4167Z"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                    <a target="_blank" className="hover:text-primary " href="https://">
                        <button className="button_button__cnvYP button_secondary button_no_overlay__QtjiT h-[42px] w-[42px] text-[14px] rounded">
                            <div className="button_volume"></div>
                            <div className="z-10  flex justify-center items-center w-full h-full">
                                <svg version="1.1" width="28" height="28" x="0px" y="0px" viewBox="0 0 28 28">
                                    <g>
                                        <path d="M14.5 0C7.04416 0 1 6.04416 1 13.5C1 20.9558 7.04416 27 14.5 27C21.9558 27 28 20.9558 28 13.5C28 6.04416 21.9558 0 14.5 0ZM11.5318 6.3435C12.2999 6.30855 12.5453 6.3 14.5007 6.3H14.4984C16.4544 6.3 16.6989 6.30855 17.467 6.3435C18.2335 6.3786 18.757 6.49995 19.216 6.678C19.69 6.86176 20.0905 7.10776 20.491 7.50826C20.8915 7.90847 21.1375 8.31017 21.322 8.78373C21.499 9.24153 21.6205 9.76474 21.6565 10.5312C21.691 11.2993 21.7 11.5447 21.7 13.5001C21.7 15.4555 21.691 15.7003 21.6565 16.4683C21.6205 17.2345 21.499 17.7579 21.322 18.2158C21.1375 18.6892 20.8915 19.0909 20.491 19.4911C20.0909 19.8916 19.6898 20.1382 19.2164 20.3221C18.7583 20.5002 18.2345 20.6215 17.468 20.6566C16.7 20.6916 16.4553 20.7001 14.4998 20.7001C12.5445 20.7001 12.2993 20.6916 11.5312 20.6566C10.7649 20.6215 10.2415 20.5002 9.78343 20.3221C9.31017 20.1382 8.90847 19.8916 8.50841 19.4911C8.10806 19.0909 7.86206 18.6892 7.678 18.2157C7.5001 17.7579 7.37875 17.2347 7.3435 16.4682C7.3087 15.7001 7.3 15.4555 7.3 13.5001C7.3 11.5447 7.309 11.2991 7.34335 10.5311C7.37785 9.76489 7.49935 9.24153 7.67785 8.78358C7.86236 8.31017 8.10836 7.90847 8.50886 7.50826C8.90907 7.10791 9.31077 6.86191 9.78433 6.678C10.2421 6.49995 10.7653 6.3786 11.5318 6.3435Z" fill="white"></path>
                                        <path d="M13.8548 7.5975C13.9802 7.59731 14.1151 7.59737 14.2607 7.59743L14.5007 7.5975C16.4231 7.5975 16.651 7.6044 17.4101 7.6389C18.1121 7.671 18.4931 7.78831 18.7469 7.88686C19.083 8.01736 19.3225 8.17336 19.5744 8.42536C19.8264 8.67736 19.9824 8.91737 20.1132 9.25337C20.2117 9.50687 20.3292 9.88788 20.3611 10.5899C20.3956 11.3489 20.4031 11.5769 20.4031 13.4984C20.4031 15.4199 20.3956 15.6479 20.3611 16.4069C20.329 17.109 20.2117 17.49 20.1132 17.7435C19.9827 18.0795 19.8264 18.3187 19.5744 18.5706C19.3224 18.8226 19.0831 18.9786 18.7469 19.1091C18.4934 19.2081 18.1121 19.3251 17.4101 19.3572C16.6511 19.3917 16.4231 19.3992 14.5007 19.3992C12.5781 19.3992 12.3503 19.3917 11.5913 19.3572C10.8893 19.3248 10.5083 19.2075 10.2543 19.1089C9.91831 18.9784 9.67831 18.8224 9.4263 18.5704C9.1743 18.3184 9.0183 18.079 8.8875 17.7429C8.78895 17.4894 8.6715 17.1084 8.63954 16.4063C8.60504 15.6473 8.59814 15.4193 8.59814 13.4966C8.59814 11.5739 8.60504 11.3471 8.63954 10.5881C8.67165 9.88608 8.78895 9.50507 8.8875 9.25127C9.018 8.91527 9.1743 8.67526 9.4263 8.42326C9.67831 8.17126 9.91831 8.01526 10.2543 7.88446C10.5081 7.78546 10.8893 7.66845 11.5913 7.6362C12.2555 7.6062 12.5129 7.5972 13.8548 7.5957V7.5975ZM18.344 8.79302C17.867 8.79302 17.48 9.17957 17.48 9.65672C17.48 10.1337 17.867 10.5207 18.344 10.5207C18.821 10.5207 19.2081 10.1337 19.2081 9.65672C19.2081 9.17972 18.821 8.79272 18.344 8.79272V8.79302ZM10.8032 13.5001C10.8032 11.4581 12.4587 9.80261 14.5006 9.80253C16.5425 9.80253 18.1976 11.4581 18.1976 13.5001C18.1976 15.542 16.5427 17.1969 14.5007 17.1969C12.4587 17.1969 10.8032 15.542 10.8032 13.5001Z" fill="white"></path>
                                        <path d="M14.5007 11.1001C15.8261 11.1001 16.9008 12.1746 16.9008 13.5001C16.9008 14.8255 15.8261 15.9001 14.5007 15.9001C13.1752 15.9001 12.1007 14.8255 12.1007 13.5001C12.1007 12.1746 13.1752 11.1001 14.5007 11.1001Z" fill="white"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                    <a target="_blank" className="hover:text-primary " href="https://www.facebook.com/">
                        <button className="button_button__cnvYP button_secondary button_no_overlay__QtjiT h-[42px] w-[42px] text-[14px] rounded">
                            <div className="button_volume"></div>
                            <div className="z-10  flex justify-center items-center w-full h-full">
                                <svg version="1.1" width="28" height="28" x="0px" y="0px" viewBox="0 0 22 22">
                                    <g>
                                        <path d="M11.231 0.230469C5.70811 0.230469 1.23096 4.70762 1.23096 10.2305C1.23096 15.7533 5.70811 20.2305 11.231 20.2305C16.7538 20.2305 21.231 15.7533 21.231 10.2305C21.231 4.70762 16.7538 0.230469 11.231 0.230469ZM12.2733 10.6697V16.1103H10.0222V10.6699H8.89762V8.7951H10.0222V7.66945C10.0222 6.13997 10.6573 5.23047 12.4615 5.23047H13.9635V7.10552H13.0246C12.3223 7.10552 12.2758 7.36753 12.2758 7.85651L12.2733 8.79489H13.9741L13.7751 10.6697H12.2733Z" fill="white"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                    <a target="_blank" className="hover:text-primary " href="https://www.linkedin.com/">
                        <button className="button_button__cnvYP button_secondary button_no_overlay__QtjiT h-[42px] w-[42px] text-[14px] rounded">
                            <div className="button_volume"></div>
                            <div className="z-10  flex justify-center items-center w-full h-full">
                                <svg version="1.1" width="28" height="28" x="0px" y="0px" viewBox="0 0 22 22">
                                    <g>
                                        <path d="M11.231 0.230469C5.70811 0.230469 1.23096 4.70762 1.23096 10.2305C1.23096 15.7533 5.70811 20.2305 11.231 20.2305C16.7538 20.2305 21.231 15.7533 21.231 10.2305C21.231 4.70762 16.7538 0.230469 11.231 0.230469ZM6.03163 8.51291H8.29785V15.322H6.03163V8.51291ZM8.44711 6.40659C8.4324 5.73897 7.95498 5.23047 7.17972 5.23047C6.40446 5.23047 5.89762 5.73897 5.89762 6.40659C5.89762 7.06039 6.38948 7.58353 7.1503 7.58353H7.16478C7.95498 7.58353 8.44711 7.06039 8.44711 6.40659ZM13.8614 8.35302C15.3527 8.35302 16.4707 9.32641 16.4707 11.4179L16.4706 15.322H14.2045V11.6791C14.2045 10.7641 13.8765 10.1397 13.0562 10.1397C12.4301 10.1397 12.0572 10.5606 11.8934 10.9672C11.8334 11.1129 11.8187 11.3159 11.8187 11.5194V15.3221H9.55225C9.55225 15.3221 9.58212 9.15201 9.55225 8.51309H11.8187V9.47753C12.1195 9.0139 12.6582 8.35302 13.8614 8.35302Z" fill="white"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </footer>
    )
}