import type { CollectionEntry } from "astro:content";
import classNames from "classnames";

export const ProjectButtons = (props: {
    entry: CollectionEntry<"projects">;
    className?: string;
}) => {
    return (
        <div className={classNames(props.className)}>
            {/* <!-- hosted webiste --> */}
            {props.entry.data.link != null && props.entry.data.link != undefined ? (
                <>
                    <a
                        className="inline-flex gap-1 items-center p-2 text-sm border"
                        target="_blank"
                        href={props.entry.data.link}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                            />
                        </svg>
                    </a>
                </>
            ) : null}
            {/*<!-- github link -->*/}
            <a
                className="inline-flex gap-1 items-center p-2 text-sm border"
                target="_blank"
                href={props.entry.data.github}
            >
                <svg
                    viewBox="0 0 548 534"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M273.999 0.333374C123.015 0.333374 0.581177 122.739 0.581177 273.751C0.581177 394.551 78.9236 497.039 187.562 533.193C201.225 535.724 206.242 527.261 206.242 520.039C206.242 513.524 205.988 491.982 205.871 469.135C129.807 485.675 113.756 436.875 113.756 436.875C101.318 405.277 83.3977 396.869 83.3977 396.869C58.5901 379.899 85.2677 380.248 85.2677 380.248C112.723 382.176 127.18 408.427 127.18 408.427C151.566 450.223 191.142 438.139 206.745 431.152C209.204 413.485 216.285 401.419 224.105 394.591C163.374 387.682 99.5344 364.233 99.5344 259.466C99.5344 229.62 110.215 205.229 127.706 186.082C124.867 179.19 115.508 151.381 130.359 113.721C130.359 113.721 153.319 106.376 205.563 141.752C227.374 135.694 250.763 132.655 274 132.547C297.235 132.65 320.644 135.693 342.495 141.752C394.681 106.376 417.609 113.721 417.609 113.721C432.492 151.381 423.133 179.19 420.294 186.082C437.826 205.229 448.428 229.62 448.428 259.466C448.428 364.486 384.466 387.605 323.582 394.374C333.39 402.859 342.128 419.498 342.128 445.007C342.128 481.591 341.816 511.035 341.816 520.039C341.816 527.32 346.733 535.846 360.592 533.161C469.175 496.967 547.418 394.514 547.418 273.752C547.418 122.738 425.002 0.333374 273.999 0.333374Z"
                        fill="white"
                    ></path>
                    <path
                        d="M104.141 392.899C103.537 394.261 101.4 394.669 99.4548 393.732C97.4655 392.84 96.3579 390.988 96.9996 389.625C97.59 388.23 99.7256 387.841 101.71 388.774C103.693 389.666 104.823 391.536 104.141 392.899ZM115.217 405.252C113.913 406.461 111.359 405.899 109.634 403.989C107.841 402.083 107.51 399.529 108.833 398.308C110.178 397.099 112.65 397.665 114.438 399.57C116.231 401.499 116.58 404.03 115.217 405.252ZM125.996 420.997C124.321 422.165 121.577 421.074 119.883 418.644C118.208 416.208 118.208 413.292 119.922 412.124C121.616 410.956 124.319 412.008 126.035 414.419C127.706 416.89 127.706 419.806 125.996 420.997ZM140.764 436.213C139.266 437.864 136.074 437.422 133.737 435.167C131.347 432.962 130.682 429.833 132.18 428.18C133.701 426.524 136.911 426.989 139.265 429.226C141.639 431.427 142.358 434.578 140.764 436.213ZM161.139 445.045C160.472 447.189 157.405 448.156 154.306 447.246C151.213 446.309 149.191 443.807 149.814 441.642C150.459 439.482 153.547 438.471 156.665 439.446C159.753 440.379 161.782 442.867 161.139 445.045ZM183.516 446.683C183.593 448.938 180.967 450.808 177.716 450.848C174.447 450.925 171.8 449.096 171.762 446.877C171.762 444.6 174.335 442.753 177.598 442.693C180.849 442.629 183.516 444.446 183.516 446.683ZM204.337 443.141C204.726 445.335 202.468 447.595 199.24 448.197C196.066 448.781 193.127 447.418 192.724 445.242C192.33 442.987 194.626 440.728 197.8 440.144C201.033 439.583 203.926 440.905 204.337 443.141Z"
                        fill="white"
                    ></path>
                </svg>
            </a>
            {/*<!-- devpost link -->*/}
            {props.entry.data.devpost != null &&
                props.entry.data.devpost != undefined ? (
                <>
                    <a
                        className="inline-flex gap-1 items-center p-2 text-sm border"
                        target="_blank"
                        href={props.entry.data.devpost}
                    >
                        <svg
                            viewBox="0 0 64 55"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                        >
                            <path
                                d="M48.7 0H15.3L0 27.2L15.7 54.4H48.8L64 27.2L48.7 0Z"
                                fill="#fff"
                            />
                            <path
                                d="M32.2 12.1H21.4V42.4H32.2C40.4 42.4 47.1 35.6 47.1 27.3C47.1 19 40.5 12.1 32.2 12.1ZM32 36.3H27.5V18.1H32C37 18.1 41.1 22.2 41.1 27.2C41.1 32.2 37 36.3 32 36.3Z"
                                fill="#000"
                            />
                        </svg>
                    </a>
                </>
            ) : null}
        </div>
    );
};
