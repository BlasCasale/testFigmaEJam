import React from 'react'
import './Review.css'

const Review = () => {

  const width = window.innerWidth

  const boolean = width >= 1500

  return (
    <>
      {
        boolean &&
          <div className='boxReview'>
            <div className='superiorBoxReview'>

              <img src="https://s3-alpha-sig.figma.com/img/ab94/948c/bfe5570b6db010c23b8479919f8ba436?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o-RbDXErHGhRPfUEr8~kMJmQKzckwAUeMkBKY3jEe~ehy3CZARfAIPbMsKkNwG63lk6mtcRd-bP9vHOBUonpPn4BxNPrNqkTNJVd1YOsHjzZZPVO3WQ4DG1Z3-X-hEsVfmi9DnILlfACNNR~Ui9ITLzclseUJ75eSMvd6qjUmiL~QDXFTNh0Bz56NsjJ-JYB5lsIgRNgFjZ-IRzosDYbo6-MYcwH8NDl4YIHA6tl~ZJS6ZRO8OSFG789LrqGP5KKCY9zd0AKmF~6p2hjQY129xwGMFZVZ1KSxlOsbLwlNAJcex0n6PzJavJ1jqKXJIf-I1ZU-ERfdKiczr~fEwTnPQ__" alt="Avatar" className={`imgReview ${!boolean ? 'hiddenImg' : ''}`} />

              <div className='rigthBoxReview'>
                <svg width="79" height="13" viewBox="0 0 79 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.28466 12.2974L3.67338 7.75793L0 5.12982H4.53946L5.97297 0.35144L7.40649 5.12982H11.9459L8.27257 7.75793L9.66128 12.2974L5.97297 9.49009L2.28466 12.2974Z" fill="#FBBC04" />
                  <path d="M18.8257 12.2975L20.2144 7.75805L16.5411 5.12994H21.0805L22.514 0.351562L23.9475 5.12994H28.487L24.8136 7.75805L26.2023 12.2975L22.514 9.49021L18.8257 12.2975Z" fill="#FBBC04" />
                  <path d="M35.3669 12.2975L36.7556 7.75805L33.0823 5.12994H37.6217L39.0552 0.351562L40.4887 5.12994H45.0282L41.3548 7.75805L42.7435 12.2975L39.0552 9.49021L35.3669 12.2975Z" fill="#FBBC04" />
                  <path d="M51.9061 12.2975L53.2948 7.75805L49.6214 5.12994H54.1609L55.5944 0.351562L57.0279 5.12994H61.5674L57.894 7.75805L59.2827 12.2975L55.5944 9.49021L51.9061 12.2975Z" fill="#FBBC04" />
                  <path d="M68.4473 12.2975L69.836 7.75805L66.1626 5.12994H70.7021L72.1356 0.351562L73.5691 5.12994H78.1086L74.4352 7.75805L75.8239 12.2975L72.1356 9.49021L68.4473 12.2975Z" fill="#FBBC04" />
                </svg>

                <div className='minorBoxReview'>
                  <p className='pNameUser'>Ken T.</p>
                  <div className='verifiedUserBox'>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_205)">
                        <path d="M15.64 7.64093L14.5523 6.37725C14.3443 6.13731 14.1764 5.68942 14.1764 5.3695V4.00984C14.1764 3.16205 13.4805 2.46623 12.6327 2.46623H11.2731C10.9612 2.46623 10.5053 2.29827 10.2653 2.09032L9.00164 1.00259C8.44978 0.530711 7.54601 0.530711 6.98615 1.00259L5.73046 2.09832C5.49052 2.29827 5.03463 2.46623 4.72271 2.46623H3.33906C2.49127 2.46623 1.79544 3.16205 1.79544 4.00984V5.3775C1.79544 5.68942 1.62749 6.13731 1.42754 6.37725L0.347806 7.64893C-0.116078 8.20079 -0.116078 9.09657 0.347806 9.64843L1.42754 10.9201C1.62749 11.1601 1.79544 11.6079 1.79544 11.9199V13.2875C1.79544 14.1353 2.49127 14.8311 3.33906 14.8311H4.72271C5.03463 14.8311 5.49052 14.9991 5.73046 15.207L6.99414 16.2948C7.54601 16.7667 8.44978 16.7667 9.00964 16.2948L10.2733 15.207C10.5133 14.9991 10.9612 14.8311 11.2811 14.8311H12.6407C13.4885 14.8311 14.1843 14.1353 14.1843 13.2875V11.9279C14.1843 11.6159 14.3523 11.1601 14.5603 10.9201L15.648 9.65643C16.1119 9.10457 16.1119 8.1928 15.64 7.64093ZM11.3211 7.13706L7.45803 11.0001C7.34606 11.1121 7.1941 11.1761 7.03414 11.1761C6.87418 11.1761 6.72221 11.1121 6.61024 11.0001L4.67472 9.06458C4.44278 8.83264 4.44278 8.44873 4.67472 8.21679C4.90667 7.98485 5.29057 7.98485 5.52251 8.21679L7.03414 9.72841L10.4733 6.28927C10.7052 6.05733 11.0891 6.05733 11.3211 6.28927C11.553 6.52121 11.553 6.90512 11.3211 7.13706Z" fill="#5BB59A" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_205">
                          <rect width="16" height="16" fill="white" transform="translate(-0.000137329 0.648621)" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className='pGreen'>Verified Customer</p>
                  </div>
                </div>
              </div>
            </div>

            <p className='pReview'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
          </div>
      }
    </>
  )
}

export default Review