import React, { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};

    if (!name) validationErrors.name = "Name is required.";
    if (!email) validationErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) validationErrors.email = "Invalid email format.";
    if (!password) validationErrors.password = "Password is required.";
    if (password !== confirmPassword) validationErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log({ name, email, password });
      // Perform further actions such as API call or redirect
    }
  };

function product() {
  return (
    <body>
  <div id="fb-root"></div>
  <div id="rendered-content">
    <div class="rc-MetatagsWrapper">
      <span class="rc-PageHeaderWrapper" data-testid="page-header-wrapper">
        <div>
          <header class="rc-DesktopHeaderControls rc-DesktopHeaderControls--MetaNav rc-DesktopHeaderControls--PageNavigation" data-catchpoint="page-header-controls">
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
          </header>
        </div>
        <div>
          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="mobile_header_lite" class="rc-MobileHeader rc-MobileHeaderLite" role="presentation">
            <div class="undefined show-smart-scroll-container mui-fixed css-1p7n6e0" style="z-index:3000;min-width:200px;max-width:100vw;box-shadow:none">
              <div class="cds-1 css-9rioy3 cds-2 cds-7">
                <div class="cds-9 css-1kspkkz cds-10">
                  <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                    <div class="css-v8pk32">
                      <div class="css-guxf6x">
                        <span>
                          <nav aria-label="Main Menu" class="css-1p459qo">
                            <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="mobile_header_nav_button" data-e2e="mobile-nav-icon" class="c-mobile-toggle-button css-t3v7te" aria-label="Open Navigation Menu" aria-expanded="false" type="button">
                              <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-2" class="css-0">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 11H2V9h16v2zM18 5H2V3h16v2zM18 17H2v-2h16v2z" fill="currentColor"></path>
                              </svg>
                            </button>
                            <span class="nostyle">
                              <ul class="mobile-header-menu"></ul>
                            </span>
                          </nav>
                        </span>
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.mobile_header_logo" data-click-value="{&quot;href&quot;:&quot;/&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;mobile_header_logo&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="mobile_header_logo" data-track-href="/" href="/" to="/" class="c-mobile-logo horizontal-box align-items-vertical-center isLohpRebrand ">
                          <div style="display:flex">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZpZXdCb3g9IjAgMCAxMTU1IDE2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiPjxwYXRoIGQ9Ik0xNTkuNzUgODEuNTRjMC00NC40OSAzNi42My04MC40NyA4Mi40My04MC40NyA0Ni4xMiAwIDgyLjc2IDM2IDgyLjc2IDgwLjQ3IDAgNDQuMTYtMzYuNjQgODAuOC04Mi43NiA4MC44LTQ1LjggMC04Mi40My0zNi42OC04Mi40My04MC44em0xMjUuNjEgMGMwLTIyLjI0LTE5LjMtNDEuODctNDMuMTgtNDEuODctMjMuNTUgMC00Mi44NSAxOS42My00Mi44NSA0MS44NyAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yIDIzLjkyIDAgNDMuMTgtMTkuNjMgNDMuMTgtNDIuMnptNzA1LjYzIDEuMzFjMC00OC43NCAzOS41OC04MS43OCA3NS41Ny04MS43OCAyNC41MyAwIDM4LjYgNy41MiA0OC4wOCAyMS45MmwzLjc3LTE5aDM2Ljc5djE1NS40aC0zNi43OWwtNC43NS0xNmMtMTAuNzkgMTEuNzgtMjQuMjEgMTktNDcuMSAxOS0zNS4zMy0uMDUtNzUuNTctMzEuMTMtNzUuNTctNzkuNTR6bTEyNS42MS0uMzNjLS4wOS0yMy41MjctMTkuNDctNDIuODM1LTQzLTQyLjgzNS0yMy41OSAwLTQzIDE5LjQxMS00MyA0M3YuMTY1YzAgMjEuNTkgMTkuMyA0MC44OSA0Mi44NiA0MC44OSAyMy44NSAwIDQzLjE0LTE5LjMgNDMuMTQtNDEuMjJ6TTk0NS43OCAyMlY0aC00MC4yM3YxNTUuMzloNDAuMjNWNzUuNjZjMC0yNS4xOSAxMi40NC0zOC4yNyAzNC0zOC4yNyAxLjQzIDAgMi43OS4xIDQuMTIuMjNMOTkxLjM2LjExYy0yMC45Ny4xMS0zNi4xNyA3LjMtNDUuNTggMjEuODl6bS00MDQuMjcuMDF2LTE4bC00MC4yMy4wOS4zNCAxNTUuMzcgNDAuMjMtLjA5LS4yMi04My43MmMtLjA2LTI1LjE4IDEyLjM1LTM4LjI5IDMzLjkzLTM4LjM0IDEuMzc2LjAwNCAyLjc1Mi4wODEgNC4xMi4yM0w1ODcuMSAwYy0yMSAuMTctMzYuMjIgNy4zOS00NS41OSAyMi4wMXpNMzM4Ljg4IDk5LjJWNC4wMWg0MC4yMlY5NC4zYzAgMTkuOTUgMTEuMTIgMzEuNzMgMzAuNDIgMzEuNzMgMjEuNTkgMCAzNC0xMy4wOSAzNC0zOC4yOFY0LjAxaDQwLjI0djE1NS4zOGgtNDAuMjF2LTE4Yy05LjQ4IDE0LjcyLTI0Ljg2IDIxLjkyLTQ2LjEyIDIxLjkyLTM1Ljk4LjAxLTU4LjU1LTI2LjE2LTU4LjU1LTY0LjExem0zOTEuNzQtMTcuNDhjLjA5LTQzLjUxIDMxLjIzLTgwLjc0IDgwLjYyLTgwLjY1IDQ1LjguMDkgNzguMTEgMzYuNzggNzggODAgLjAxIDQuMjczLS4zMyA4LjU0LTEgMTIuNzZsLTExOC40MS0uMjJjNC41NCAxOC42NSAxOS44OSAzMi4wOSA0My4xMiAzMi4xNCAxNC4wNiAwIDI5LjEyLTUuMTggMzguMy0xNi45NGwyNy40NCAyMmMtMTQuMTEgMTkuOTMtMzkgMzEuNjYtNjUuNDggMzEuNjEtNDYuNzUtLjE2LTgyLjY3LTM1LjIzLTgyLjU5LTgwLjd6bTExOC4xMi0xNi4xNGMtMi4yNi0xNS43LTE4LjU5LTI3Ljg0LTM3Ljg5LTI3Ljg3LTE4LjY1IDAtMzMuNzEgMTEuMDYtMzkuNjMgMjcuNzNsNzcuNTIuMTR6bS0yNjEuNCA1OS45NGwzNS43Ni0xOC43MmM1LjkxIDEyLjgxIDE3LjczIDIwLjM2IDM0LjQ4IDIwLjM2IDE1LjQzIDAgMjEuMzQtNC45MiAyMS4zNC0xMS44MiAwLTI1LTg0LjcxLTkuODUtODQuNzEtNjcgMC0zMS41MiAyNy41OC00OC4yNiA2MS43Mi00OC4yNiAyNS45NCAwIDQ4LjkyIDExLjQ5IDYxLjQgMzIuODNsLTM1LjQ0IDE4Ljc1Yy01LjI1LTEwLjUxLTE1LjEtMTYuNDItMjcuNTgtMTYuNDItMTIuMTQgMC0xOC4wNiA0LjI3LTE4LjA2IDExLjQ5IDAgMjQuMyA4NC43MSA4Ljg3IDg0LjcxIDY3IDAgMzAuMjEtMjQuNjIgNDguNTktNjQuMzUgNDguNTktMzMuODItLjAzLTU3LjQ2LTExLjE5LTY5LjI3LTM2Ljh6TTAgODEuNTRDMCAzNi43MyAzNi42My43NCA4Mi40My43NGMyNy45NDctLjE5NiA1NC4xODIgMTMuNzM3IDY5LjY3IDM3bC0zNC4zNCAxOS45MmE0Mi45NzIgNDIuOTcyIDAgMDAtMzUuMzMtMTguMzJjLTIzLjU1IDAtNDIuODUgMTkuNjMtNDIuODUgNDIuMiAwIDIyLjU3IDE5LjMgNDIuMiA0Mi44NSA0Mi4yYTQyLjUwMiA0Mi41MDIgMCAwMDM2LjMxLTIwbDM0IDIwLjI4Yy0xNS4zMDcgMjMuOTU1LTQxLjkwMiAzOC40MzEtNzAuMzMgMzguMjhDMzYuNjMgMTYyLjM0IDAgMTI1LjY2IDAgODEuNTR6IiBmaWxsPSIjMDA1NkQyIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=" class="rc-CourseraLogo" alt="Coursera" aria-hidden="false"/>
                          </div>
                        </a>
                      </div>
                      <div style="display:flex;align-items:center">
                        <span class="iconContainer">
                          <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="mobile_search_icon" class="mobile-search-icon css-7229lx" style="border:none;background-color:transparent" aria-label="Search Coursera" type="button">
                            <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-nerfr" id="cds-react-aria-4">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43 2.5a5 5 0 100 10 5 5 0 000-10zm-6 5a6 6 0 1112 0 6 6 0 01-12 0z" fill="currentColor"></path>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.594 10.946l6.76 6.76-.707.708-6.76-6.76.707-.708z" fill="currentColor"></path>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="rc-MobileSearchPage" style="z-index:3001">
              <div class="mobile-search-body-wrapper"></div>
            </div>
          </div>
        </div>
      </span>
      <main>
        <div data-e2e="fixed-page-navigation" class="css-14gwb0y">
          <div class="cds-1 css-1cxrrkn cds-2 cds-7">
            <div class="cds-9 css-1kspkkz cds-10">
              <div class="cds-9 css-0 cds-10 cds-11 cds-grid-item cds-56">
                <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                  <div class="css-g4imwr">
                    <div class="css-1qiyodj">
                      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28 3x" style="max-width:28px;max-height:28px" alt="Politecnico di Milano">
                      <div class="css-1q5srzp">Artificial Intelligence: an Overview Specialization</div>
                    </div>
                    <div class="css-1vn1j8">
                      <div class="with-enroll-modal">
                        <div class="css-e8gb4c">
                          <form action="/specializations/artificial-intelligence-overview" method="GET" class="css-1y2xaj9">
                            <input type="hidden" name="action" value="enroll">
                            <button class="cds-149 cds-button-disableElevation cds-button-primary css-1ma56ty" tabindex="0" type="submit" data-e2e="enroll-button" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="enroll_button" aria-disabled="false">
                              <span class="cds-button-label">
                                <div>
                                  <span data-test="enroll-button-label">Enroll for Free</span>
                                  <div class="startdate rc-StartDateString font-xs" data-test="start-date-string">
                                    <span>Starts Sep 1</span>
                                  </div>
                                </div>
                              </span>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav>
                    <ul class="css-10v4d2r">
                      <li>
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_about" data-click-value="{&quot;href&quot;:&quot;#about&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_about&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_about" data-track-href="#about" href="#about" to="#about" class="css-1gc9wyn" aria-current="true">About</a>
                      </li>
                      <li>
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_outcomes" data-click-value="{&quot;href&quot;:&quot;#outcomes&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_outcomes&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_outcomes" data-track-href="#outcomes" href="#outcomes" to="#outcomes" class="css-sitz2l">Outcomes</a>
                      </li>
                      <li>
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_courses" data-click-value="{&quot;href&quot;:&quot;#courses&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_courses&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_courses" data-track-href="#courses" href="#courses" to="#courses" class="css-sitz2l">Courses</a>
                      </li>
                      <li>
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_testimonials" data-click-value="{&quot;href&quot;:&quot;#testimonials&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_testimonials&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_testimonials" data-track-href="#testimonials" href="#testimonials" to="#testimonials" class="css-sitz2l">Testimonials</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="css-1mn2x2r">
          <div class="cds-1 css-1sjzr6n cds-2 cds-7">
            <div class="cds-9 css-1kspkkz cds-10">
              <div class="cds-9 css-0 cds-10 cds-11 cds-grid-item cds-18 cds-29 cds-56" style="padding-bottom:0;padding-top:0">
                <div class="cds-9 css-1dvj7m cds-11 cds-grid-item cds-52">
                  <nav aria-label="Breadcrumbs" class="css-1je15ps">
                    <ol class="cds-breadcrumbs-list">
                      <li class="cds-breadcrumbs-listItem">
                        <a class="cds-149 cds-breadcrumbs-homeIcon cds-iconButton-small cds-iconButton-ghost css-1bk6dxh" tabindex="0" aria-label="Home" href="/" data-testid="home-link">
                          <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-5" class="css-0">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.35l6.5 5.416V14.5h-13V6.766L8 1.349zM2.5 7.233V13.5h11V7.234L8 2.651 2.5 7.234z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 8.5h5v6h-5v-6zm1 1v4h3v-4h-3z" fill="currentColor"></path>
                          </svg>
                        </a>
                      </li>
                      <li class="cds-breadcrumbs-listItem">
                        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-6" class="css-1e2gpwi">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 8L4.646 1.354l.708-.708L12.707 8l-7.353 7.354-.708-.707L11.293 8z" fill="currentColor"></path>
                        </svg>
                        <a class="cds-119 cds-113 cds-115 cds-breadcrumbs-link css-1lcpylw cds-142" href="/browse">Browse</a>
                      </li>
                      <li class="cds-breadcrumbs-listItem">
                        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-7" class="css-1e2gpwi">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 8L4.646 1.354l.708-.708L12.707 8l-7.353 7.354-.708-.707L11.293 8z" fill="currentColor"></path>
                        </svg>
                        <a class="cds-119 cds-113 cds-115 cds-breadcrumbs-link css-1lcpylw cds-142" href="/browse/computer-science">Computer Science</a>
                      </li>
                      <li class="cds-breadcrumbs-listItem">
                        <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-8" class="css-1e2gpwi">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 8L4.646 1.354l.708-.708L12.707 8l-7.353 7.354-.708-.707L11.293 8z" fill="currentColor"></path>
                        </svg>
                        <a class="cds-119 cds-113 cds-115 cds-breadcrumbs-link css-1lcpylw cds-142" href="/browse/computer-science/algorithms" aria-current="page">Algorithms</a>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div class="cds-9 css-0 cds-10 cds-11 cds-grid-item cds-28 cds-48"></div>
              </div>
            </div>
          </div>
        </section>
        <section class="css-oe48t8">
          <div class="cds-1 css-1cxrrkn cds-2 cds-7">
            <div class="cds-9 css-1kspkkz cds-10">
              <div class="cds-9 css-za0201 cds-10 cds-11 cds-grid-item">
                <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                  <div class="css-1ubbafr">
                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/69d8d47404e3da1d706b895876d3b49e.png?auto=format%2Ccompress&amp;dpr=1&amp;q=80" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/69d8d47404e3da1d706b895876d3b49e.png?auto=format%2Ccompress&amp;dpr=2&amp;q=80 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/69d8d47404e3da1d706b895876d3b49e.png?auto=format%2Ccompress&amp;dpr=3&amp;q=80 3x" class="css-p9vind" width="566" alt="">
                    <div class="cds-9 css-1gouapd cds-10" data-e2e="hero-module">
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                        <div class="css-1ujzbfc">
                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/45/fda090b19211e69ec6139bfb638ae2/Polimi_logo_wide.png?auto=format%2Ccompress&amp;dpr=1&amp;h=45" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/45/fda090b19211e69ec6139bfb638ae2/Polimi_logo_wide.png?auto=format%2Ccompress&amp;dpr=2&amp;h=45 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/45/fda090b19211e69ec6139bfb638ae2/Polimi_logo_wide.png?auto=format%2Ccompress&amp;dpr=3&amp;h=45 3x" class="css-1f9gt0j" style="max-height:45px" alt="Politecnico di Milano">
                        </div>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-79">
                        <h1 class="cds-119 cds-Typography-base css-1xy8ceb cds-121" data-e2e="hero-title">Artificial Intelligence: an Overview Specialization</h1>
                        <div class="css-12wvpfc">
                          <p class=" css-4s48ix">Enter the artificial intelligence world</p>
                        </div>
                        <div class="css-12wvpfc">
                          <div class="css-guxf6x">
                            <div class="css-guxf6x">
                              <div class="css-1tv877x">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Marcello Restelli">
                              </div>
                              <div class="css-1tv877x">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Nicola Gatti">
                              </div>
                              <div class="css-1tv877x">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Viola Schiaffonati">
                              </div>
                            </div>
                            <div class="css-c28lyw">
                              <div class="css-guxf6x">
                                <p class=" css-4s48ix">
                                  <span>Instructors: <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/restellimarcello&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/restellimarcello" href="/instructor/restellimarcello" to="/instructor/restellimarcello" class="cds-119 cds-113 cds-115 css-9gmd4r cds-142">
                                      <span class=" css-4s48ix">Marcello Restelli</span>
                                    </a>
                                    <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructors_modal_link" class="cds-149 cds-button-disableElevation cds-button-ghost css-fuzqlj" tabindex="0" role="button" type="button">
                                      <span class="cds-button-label">
                                        <span class=" css-6ecy9b">+4 more</span>
                                      </span>
                                    </button>
                                  </span>
                                </p>
                                <div role="presentation" dir="ltr" id="cds-react-aria-9" class="css-bhx7nn" style="position:fixed;z-index:10000;right:0;bottom:0;top:0;left:0;visibility:hidden" aria-hidden="true">
                                  <div class="cds-163 cds-Modal-backdrop" aria-hidden="true" style="opacity:0;visibility:hidden"></div>
                                  <div tabindex="0" data-test="sentinelStart"></div>
                                  <div class="cds-Modal-container" style="opacity:0;visibility:hidden">
                                    <div data-focus-lock-disabled="disabled">
                                      <div aria-modal="true" aria-describedby="dialog-content-14897651-a408-497d-e8fe-2ca64808dbe0" aria-labelledby="cds-react-aria-9-headingGroup" class="cds-Dialog-dialog" role="dialog">
                                        <div class="css-1lqbpgq">
                                          <button class="cds-149 cds-button-disableElevation cds-button-ghost css-1s96oj" tabindex="0" type="button">
                                            <span class="cds-button-label">Close <span class="cds-button-endIcon">
                                                <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-10" class="css-0">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.585 14.353l-11.94-12 .71-.706 11.94 12-.71.706z" fill="currentColor"></path>
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.344 2.353l-11.99 12-.708-.706 11.99-12 .708.706z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                            </span>
                                          </button>
                                        </div>
                                        <div data-testid="scroll-container" class="css-k0ld8m">
                                          <div id="cds-react-aria-9-headingGroup" class="css-1s8ia2i">
                                            <h2 class=" css-tlf8h5">Instructors</h2>
                                          </div>
                                          <div id="dialog-content-14897651-a408-497d-e8fe-2ca64808dbe0" class="css-11krhap">
                                            <div class="cds-9 css-0 cds-10">
                                              <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                                <div class="css-1oiads2">
                                                  <div class="css-1f95hav">
                                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Marcello Restelli">
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/restellimarcello&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/restellimarcello" href="/instructor/restellimarcello" to="/instructor/restellimarcello" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                                        <span class=" css-6ecy9b">Marcello Restelli</span>
                                                      </a>
                                                    </div>
                                                    <div class=" css-kimdhf">Politecnico di Milano</div>
                                                    <div class="css-1dd751w">
                                                      <span class=" css-kimdhf">
                                                        <span>1 Course</span>
                                                      </span>
                                                      <span aria-hidden="true" class="css-18yxyo6">•</span>
                                                      <span class=" css-kimdhf">
                                                        <span>3,440 learners</span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                                <div class="css-1oiads2">
                                                  <div class="css-1f95hav">
                                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Nicola Gatti">
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/gattinicola&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/gattinicola" href="/instructor/gattinicola" to="/instructor/gattinicola" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                                        <span class=" css-6ecy9b">Nicola Gatti</span>
                                                      </a>
                                                    </div>
                                                    <div class=" css-kimdhf">Politecnico di Milano</div>
                                                    <div class="css-1dd751w">
                                                      <span class=" css-kimdhf">
                                                        <span>1 Course</span>
                                                      </span>
                                                      <span aria-hidden="true" class="css-18yxyo6">•</span>
                                                      <span class=" css-kimdhf">
                                                        <span>7,153 learners</span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                                <div class="css-1oiads2">
                                                  <div class="css-1f95hav">
                                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Viola Schiaffonati">
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/schiaffonativiola&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/schiaffonativiola" href="/instructor/schiaffonativiola" to="/instructor/schiaffonativiola" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                                        <span class=" css-6ecy9b">Viola Schiaffonati</span>
                                                      </a>
                                                    </div>
                                                    <div class=" css-kimdhf">Politecnico di Milano</div>
                                                    <div class="css-1dd751w">
                                                      <span class=" css-kimdhf">
                                                        <span>1 Course</span>
                                                      </span>
                                                      <span aria-hidden="true" class="css-18yxyo6">•</span>
                                                      <span class=" css-kimdhf">
                                                        <span>9,529 learners</span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                                <div class="css-1oiads2">
                                                  <div class="css-1f95hav">
                                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/8f/a55d43158440fd932aa82d1584a68b/Roveri-Manuel.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/8f/a55d43158440fd932aa82d1584a68b/Roveri-Manuel.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/8f/a55d43158440fd932aa82d1584a68b/Roveri-Manuel.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Manuel Roveri">
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/roverimanuel&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/roverimanuel" href="/instructor/roverimanuel" to="/instructor/roverimanuel" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                                        <span class=" css-6ecy9b">Manuel Roveri</span>
                                                      </a>
                                                    </div>
                                                    <div class=" css-kimdhf">Politecnico di Milano</div>
                                                    <div class="css-1dd751w">
                                                      <span class=" css-kimdhf">
                                                        <span>1 Course</span>
                                                      </span>
                                                      <span aria-hidden="true" class="css-18yxyo6">•</span>
                                                      <span class=" css-kimdhf">
                                                        <span>2,586 learners</span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                                <div class="css-1oiads2">
                                                  <div class="css-1f95hav">
                                                    <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/d4/a860e94e9e49d590439872256d9f3b/italiano_HQ.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/d4/a860e94e9e49d590439872256d9f3b/italiano_HQ.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/d4/a860e94e9e49d590439872256d9f3b/italiano_HQ.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Annamaria Italiano">
                                                  </div>
                                                  <div>
                                                    <div>
                                                      <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/italianoannamaria&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/italianoannamaria" href="/instructor/italianoannamaria" to="/instructor/italianoannamaria" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                                        <span class=" css-6ecy9b">Annamaria Italiano</span>
                                                      </a>
                                                    </div>
                                                    <div class=" css-kimdhf">Politecnico di Milano</div>
                                                    <div class="css-1dd751w">
                                                      <span class=" css-kimdhf">
                                                        <span>1 Course</span>
                                                      </span>
                                                      <span aria-hidden="true" class="css-18yxyo6">•</span>
                                                      <span class=" css-kimdhf">
                                                        <span>4,192 learners</span>
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="css-1hllf5q">
                                            <button class="cds-149 cds-button-disableElevation cds-button-primary css-1aoqo4t" tabindex="0" type="button">
                                              <span class="cds-button-label">OK</span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div tabindex="0" data-test="sentinelEnd"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="css-y6ppwi">
                          <div class="css-uexgjw">
                            <div class="with-enroll-modal">
                              <div class="css-e8gb4c">
                                <form action="/specializations/artificial-intelligence-overview" method="GET" class="css-1y2xaj9">
                                  <input type="hidden" name="action" value="enroll">
                                  <button class="cds-149 cds-button-disableElevation cds-button-primary css-rovixp" tabindex="0" type="submit" data-e2e="enroll-button" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="enroll_button" aria-disabled="false">
                                    <span class="cds-button-label">
                                      <div>
                                        <span data-test="enroll-button-label">Enroll for Free</span>
                                        <div class="startdate rc-StartDateString font-xs" data-test="start-date-string">
                                          <span>Starts Sep 1</span>
                                        </div>
                                      </div>
                                    </span>
                                  </button>
                                </form>
                                <div class="css-1emtwm9">
                                  <div class="css-jqcnj3">
                                    <div class="subtitle-container" style="font-size:0.75rem;font-weight:bold;margin:4px 0;max-width:400px">
                                      <span>
                                        <div class="rc-FinaidLink reset" data-e2e="finaid-link">
                                          <p class="caption-text">
                                            <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="finaid" class="button-link finaid-link" type="button">Financial aid available</button>
                                          </p>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="css-1qi3xup">
                          <p class=" css-4s48ix">
                            <span>
                              <strong>
                                <span>4,991</span>
                              </strong> already enrolled </span>
                          </p>
                        </div>
                        <div class="css-i3hxxx">
                          <div data-e2e="hero-coursera-plus-cta" class="css-guxf6x">
                            <p class="cds-119 cds-Typography-base css-51cxur cds-121">
                              <span>Included with <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/coursera-plus-blue.png?auto=format%2Ccompress&amp;dpr=1&amp;h=10" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/coursera-plus-blue.png?auto=format%2Ccompress&amp;dpr=2&amp;h=10 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/coursera-plus-blue.png?auto=format%2Ccompress&amp;dpr=3&amp;h=10 3x" class="css-lu0pzj" alt="Coursera Plus" style="max-height: 10px;">
                              </span>
                            </p>
                            <div class="css-guxf6x">
                              <span aria-hidden="true" class="css-18yxyo6">•</span>
                              <a data-click-key="unified_description_page.consumer_specialization_page.click.coursera_plus_banner" data-click-value="{&quot;href&quot;:&quot;/courseraplus&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;coursera_plus_banner&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="coursera_plus_banner" data-track-href="/courseraplus" href="/courseraplus" to="/courseraplus" class="cds-119 cds-113 cds-115 css-1rzu94i cds-142" aria-label="Learn more about Coursera Plus">
                                <span class="cds-119 cds-Typography-base css-51cxur cds-121" data-e2e="hero-coursera-plus-learn-more">Learn more</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="css-bhg900"></div>
              </div>
              <div class="cds-9 css-xtzux6 cds-11 cds-grid-item" data-e2e="key-information">
                <div class="css-7bag3v">
                  <div class="cds-172">
                    <div class="css-dwgey1">
                      <div>
                        <div class=" css-fk6qfz">
                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="kim_view_syllabus" class="css-0" role="presentation">
                            <a class="cds-119 cds-113 cds-115 css-y0doir cds-142" href="#courses">5 course series</a>
                          </div>
                        </div>
                        <div class="css-fw9ih3">Get in-depth knowledge of a subject</div>
                      </div>
                    </div>
                    <div class="css-dwgey1">
                      <div class="css-139h6xi">
                        <div class="cds-119 cds-Typography-base css-h1jogs cds-121">4.6</div>
                        <div class="css-1xbrjyc">
                          <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-11" class="css-19e2cig">
                            <path d="M14.35 6.17a.81.81 0 00-.75-.35H10L8.78 2.06a.88.88 0 00-.43-.48.84.84 0 00-.64 0 .85.85 0 00-.51.52L6 5.82H2.36a.89.89 0 00-.6.23.82.82 0 00.06 1.25l3.09 2.37-1.19 3.76a.83.83 0 00.57 1 .819.819 0 00.71-.11L8 12l3 2.29a.78.78 0 00.52.19h.09a.88.88 0 00.56-.31.85.85 0 00.14-.78l-1.2-3.74 3.08-2.36a.83.83 0 00.16-1.12z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                      <p class=" css-vac8rf">(150 reviews)</p>
                    </div>
                    <div class="css-dwgey1">
                      <div>
                        <div class=" css-fk6qfz">Beginner level</div>
                        <div class="css-75g58">
                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="recommended_experience_help" role="presentation">
                            <div class="css-l2ksv2" id="cds-react-aria-12">
                              <div class="cds-ContextualHelp-container">
                                <div class="cds-ContextualHelp-label">
                                  <p class=" css-vac8rf">Recommended experience</p>
                                </div>
                                <button class="cds-149 cds-ContextualHelp-helpToggleButton css-1wk81cj" tabindex="0" type="button" aria-controls="cds-react-aria-12-helpContent" aria-label="Information about difficulty level pre-requisites." id="cds-react-aria-12-helpToggleButton">
                                  <svg aria-hidden="true" class="cds-ContextualHelpIcon-customHelpIcon css-1wdokyz" id="cds-react-aria-12-contextual-help-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g class="info-icon">
                                      <path class="i-background" d="M18.78,3.23A11,11,0,1,0,23,11,11,11,0,0,0,18.78,3.23Z"></path>
                                      <rect class="i-top-serif" height="1.99" width="3.62" x="9.38" y="8.71"></rect>
                                      <rect class="i-bottom-serif" height="1.99" width="5.25" x="9.38" y="16.59"></rect>
                                      <rect class="i-neck" height="9.8" width="1.99" x="11.2" y="8.8"></rect>
                                      <circle class="i-dot" cx="12" cy="5.46" r="1.33"></circle>
                                      <rect class="x-crosspath" height="1.99" width="1.43" x="11.29" y="10.99"></rect>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                              <div class="cds-ContextualHelp-helpContent" id="cds-react-aria-12-helpContent">
                                <div role="presentation" dir="ltr" id="cds-react-aria-13" class="css-1gq8bzo" style="position:fixed;z-index:10000;right:0;bottom:0;top:0;left:0;visibility:hidden" aria-hidden="true">
                                  <div class="cds-163 cds-Modal-backdrop" aria-hidden="true" style="opacity:0;visibility:hidden"></div>
                                  <div tabindex="0" data-test="sentinelStart"></div>
                                  <div class="cds-Modal-container" style="opacity:0;visibility:hidden">
                                    <div data-focus-lock-disabled="disabled">
                                      <div aria-modal="true" aria-describedby="dialog-content-28ca627f-22e2-49d8-a4c3-9a42944146bf" aria-labelledby="cds-react-aria-13-headingGroup" class="cds-Dialog-dialog" role="dialog">
                                        <div class="css-1lqbpgq">
                                          <button class="cds-149 cds-button-disableElevation cds-button-ghost css-1s96oj" tabindex="0" type="button">
                                            <span class="cds-button-label">Close <span class="cds-button-endIcon">
                                                <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-14" class="css-0">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.585 14.353l-11.94-12 .71-.706 11.94 12-.71.706z" fill="currentColor"></path>
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.344 2.353l-11.99 12-.708-.706 11.99-12 .708.706z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                            </span>
                                          </button>
                                        </div>
                                        <div data-testid="scroll-container" class="css-k0ld8m">
                                          <div id="cds-react-aria-13-headingGroup" class="css-1s8ia2i">
                                            <h2 class=" css-tlf8h5">Recommended experience</h2>
                                            <p class=" css-6ecy9b">Beginner level</p>
                                          </div>
                                          <div id="dialog-content-28ca627f-22e2-49d8-a4c3-9a42944146bf" class="css-11krhap">
                                            <div class="rc-CML unified-CML" dir="auto">
                                              <div data-testid="cml-viewer" class="css-140m8il">
                                                <p>
                                                  <span>
                                                    <span>No recommended background/knowledge is required. </span>
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="css-1hllf5q">
                                            <button class="cds-149 cds-button-disableElevation cds-button-primary css-1aoqo4t" tabindex="0" type="button">
                                              <span class="cds-button-label">OK</span>
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div tabindex="0" data-test="sentinelEnd"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="css-dwgey1">
                      <div>
                        <div class=" css-fk6qfz">1 month</div>
                        <div class="css-fw9ih3">at 10 hours a week</div>
                      </div>
                    </div>
                    <div class="css-dwgey1">
                      <div>
                        <div class=" css-fk6qfz">Flexible schedule</div>
                        <div class="css-fw9ih3">Learn at your own pace</div>
                      </div>
                      <hr class="cds-180 css-147p8xl" aria-hidden="true">
                    </div>
                  </div>
                  <div class="css-2qp4i2 cds-170">
                    <div class="css-68mio5">
                      <div class="css-86zyin">
                        <div>
                          <div class=" css-fk6qfz">
                            <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="kim_view_syllabus" class="css-0" role="presentation">
                              <a class="cds-119 cds-113 cds-115 css-y0doir cds-142" href="#courses">5 course series</a>
                            </div>
                          </div>
                          <div class="css-fw9ih3">Get in-depth knowledge of a subject</div>
                        </div>
                      </div>
                    </div>
                    <div class="css-68mio5">
                      <div class="css-86zyin">
                        <div class="css-139h6xi">
                          <div class="cds-119 cds-Typography-base css-h1jogs cds-121">4.6</div>
                          <div class="css-1xbrjyc">
                            <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-15" class="css-19e2cig">
                              <path d="M14.35 6.17a.81.81 0 00-.75-.35H10L8.78 2.06a.88.88 0 00-.43-.48.84.84 0 00-.64 0 .85.85 0 00-.51.52L6 5.82H2.36a.89.89 0 00-.6.23.82.82 0 00.06 1.25l3.09 2.37-1.19 3.76a.83.83 0 00.57 1 .819.819 0 00.71-.11L8 12l3 2.29a.78.78 0 00.52.19h.09a.88.88 0 00.56-.31.85.85 0 00.14-.78l-1.2-3.74 3.08-2.36a.83.83 0 00.16-1.12z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <p class=" css-vac8rf">(150 reviews)</p>
                      </div>
                    </div>
                    <div class="css-68mio5">
                      <div class="css-86zyin">
                        <div>
                          <div class=" css-fk6qfz">Beginner level</div>
                          <div class="css-75g58">
                            <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="recommended_experience_help" role="presentation">
                              <div class="css-l2ksv2" id="cds-react-aria-16">
                                <div class="cds-ContextualHelp-container">
                                  <div class="cds-ContextualHelp-label">
                                    <p class=" css-vac8rf">Recommended experience</p>
                                  </div>
                                  <button class="cds-149 cds-ContextualHelp-helpToggleButton css-1wk81cj" tabindex="0" type="button" aria-controls="cds-react-aria-16-helpContent" aria-label="Information about difficulty level pre-requisites." id="cds-react-aria-16-helpToggleButton">
                                    <svg aria-hidden="true" class="cds-ContextualHelpIcon-customHelpIcon css-1wdokyz" id="cds-react-aria-16-contextual-help-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <g class="info-icon">
                                        <path class="i-background" d="M18.78,3.23A11,11,0,1,0,23,11,11,11,0,0,0,18.78,3.23Z"></path>
                                        <rect class="i-top-serif" height="1.99" width="3.62" x="9.38" y="8.71"></rect>
                                        <rect class="i-bottom-serif" height="1.99" width="5.25" x="9.38" y="16.59"></rect>
                                        <rect class="i-neck" height="9.8" width="1.99" x="11.2" y="8.8"></rect>
                                        <circle class="i-dot" cx="12" cy="5.46" r="1.33"></circle>
                                        <rect class="x-crosspath" height="1.99" width="1.43" x="11.29" y="10.99"></rect>
                                      </g>
                                    </svg>
                                  </button>
                                </div>
                                <div class="cds-ContextualHelp-helpContent" id="cds-react-aria-16-helpContent">
                                  <div role="presentation" dir="ltr" id="cds-react-aria-17" class="css-1gq8bzo" style="position:fixed;z-index:10000;right:0;bottom:0;top:0;left:0;visibility:hidden" aria-hidden="true">
                                    <div class="cds-163 cds-Modal-backdrop" aria-hidden="true" style="opacity:0;visibility:hidden"></div>
                                    <div tabindex="0" data-test="sentinelStart"></div>
                                    <div class="cds-Modal-container" style="opacity:0;visibility:hidden">
                                      <div data-focus-lock-disabled="disabled">
                                        <div aria-modal="true" aria-describedby="dialog-content-0c8e4825-e627-495b-de63-528f35d30a03" aria-labelledby="cds-react-aria-17-headingGroup" class="cds-Dialog-dialog" role="dialog">
                                          <div class="css-1lqbpgq">
                                            <button class="cds-149 cds-button-disableElevation cds-button-ghost css-1s96oj" tabindex="0" type="button">
                                              <span class="cds-button-label">Close <span class="cds-button-endIcon">
                                                  <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-18" class="css-0">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.585 14.353l-11.94-12 .71-.706 11.94 12-.71.706z" fill="currentColor"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.344 2.353l-11.99 12-.708-.706 11.99-12 .708.706z" fill="currentColor"></path>
                                                  </svg>
                                                </span>
                                              </span>
                                            </button>
                                          </div>
                                          <div data-testid="scroll-container" class="css-k0ld8m">
                                            <div id="cds-react-aria-17-headingGroup" class="css-1s8ia2i">
                                              <h2 class=" css-tlf8h5">Recommended experience</h2>
                                              <p class=" css-6ecy9b">Beginner level</p>
                                            </div>
                                            <div id="dialog-content-0c8e4825-e627-495b-de63-528f35d30a03" class="css-11krhap">
                                              <div class="rc-CML unified-CML" dir="auto">
                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                  <p>
                                                    <span>
                                                      <span>No recommended background/knowledge is required. </span>
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="css-1hllf5q">
                                              <button class="cds-149 cds-button-disableElevation cds-button-primary css-1aoqo4t" tabindex="0" type="button">
                                                <span class="cds-button-label">OK</span>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div tabindex="0" data-test="sentinelEnd"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="css-68mio5">
                      <div class="css-86zyin">
                        <div>
                          <div class=" css-fk6qfz">1 month</div>
                          <div class="css-fw9ih3">at 10 hours a week</div>
                        </div>
                      </div>
                    </div>
                    <div class="css-68mio5">
                      <div class="css-86zyin">
                        <div>
                          <div class=" css-fk6qfz">Flexible schedule</div>
                          <div class="css-fw9ih3">Learn at your own pace</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="cds-9 css-1ochsbp cds-11 cds-grid-item cds-56 cds-80">
                <div class="css-1q7xc2j">
                  <div class="cds-170">
                    <nav>
                      <ul class="css-10v4d2r">
                        <li>
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_about" data-click-value="{&quot;href&quot;:&quot;#about&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_about&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_about" data-track-href="#about" href="#about" to="#about" class="css-1gc9wyn" aria-current="true">About</a>
                        </li>
                        <li>
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_outcomes" data-click-value="{&quot;href&quot;:&quot;#outcomes&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_outcomes&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_outcomes" data-track-href="#outcomes" href="#outcomes" to="#outcomes" class="css-sitz2l">Outcomes</a>
                        </li>
                        <li>
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_courses" data-click-value="{&quot;href&quot;:&quot;#courses&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_courses&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_courses" data-track-href="#courses" href="#courses" to="#courses" class="css-sitz2l">Courses</a>
                        </li>
                        <li>
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.nav_item_testimonials" data-click-value="{&quot;href&quot;:&quot;#testimonials&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;nav_item_testimonials&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="nav_item_testimonials" data-track-href="#testimonials" href="#testimonials" to="#testimonials" class="css-sitz2l">Testimonials</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="cds-9 css-xalpg1 cds-11 cds-grid-item cds-56 cds-80">
                <div id="about" class="css-r5d7l5">
                  <div>
                    <div class="css-1m3kxpf">
                      <div class="css-1otrsh1">
                        <h2 class="cds-119 cds-Typography-base css-h1jogs cds-121">Skills you'll gain</h2>
                      </div>
                      <ul class="css-yk0mzy">
                        <li class="css-0">
                          <span class="css-1l1jvyr">
                            <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_skills_link_tag" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=artificial%20intelligence%20(ai)&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_skills_link_tag&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;skill&quot;:&quot;Artificial Intelligence (AI)&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_skills_link_tag" data-track-href="https://www.coursera.org/courses?query=artificial%20intelligence%20(ai)" href="https://www.coursera.org/courses?query=artificial%20intelligence%20(ai)" to="https://www.coursera.org/courses?query=artificial%20intelligence%20(ai)" class="cds-119 cds-113 cds-115 css-1yjbkii cds-142">Artificial Intelligence (AI)</a>
                          </span>
                        </li>
                        <li class="css-0">
                          <span class="css-1l1jvyr">
                            <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_skills_link_tag" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=ethical%20issues%20of%20artificial%20intelligence&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_skills_link_tag&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;skill&quot;:&quot;Ethical issues of artificial intelligence&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_skills_link_tag" data-track-href="https://www.coursera.org/courses?query=ethical%20issues%20of%20artificial%20intelligence" href="https://www.coursera.org/courses?query=ethical%20issues%20of%20artificial%20intelligence" to="https://www.coursera.org/courses?query=ethical%20issues%20of%20artificial%20intelligence" class="cds-119 cds-113 cds-115 css-1yjbkii cds-142">Ethical issues of artificial intelligence</a>
                          </span>
                        </li>
                        <li class="css-0">
                          <span class="css-1l1jvyr">
                            <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_skills_link_tag" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=machine%20learning&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_skills_link_tag&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;skill&quot;:&quot;Machine Learning&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_skills_link_tag" data-track-href="https://www.coursera.org/courses?query=machine%20learning" href="https://www.coursera.org/courses?query=machine%20learning" to="https://www.coursera.org/courses?query=machine%20learning" class="cds-119 cds-113 cds-115 css-1yjbkii cds-142">Machine Learning</a>
                          </span>
                        </li>
                        <li class="css-0">
                          <span class="css-1l1jvyr">
                            <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_skills_link_tag" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=legal%20issues%20of%20artificial%20intelligence&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_skills_link_tag&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;skill&quot;:&quot;Legal issues of artificial intelligence&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_skills_link_tag" data-track-href="https://www.coursera.org/courses?query=legal%20issues%20of%20artificial%20intelligence" href="https://www.coursera.org/courses?query=legal%20issues%20of%20artificial%20intelligence" to="https://www.coursera.org/courses?query=legal%20issues%20of%20artificial%20intelligence" class="cds-119 cds-113 cds-115 css-1yjbkii cds-142">Legal issues of artificial intelligence</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="css-1m3kxpf">
                      <div class="css-1otrsh1">
                        <h2 class=" css-fk6qfz">Details to know</h2>
                      </div>
                      <div class="cds-9 css-k4zccu cds-10">
                        <div class="cds-9 css-9271ok cds-11 cds-grid-item cds-56 cds-64 cds-76">
                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/31ebcba3851b87d1d8609abf15d0ff7e.png?auto=format%2Ccompress&amp;dpr=1&amp;w=24&amp;h=24" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/31ebcba3851b87d1d8609abf15d0ff7e.png?auto=format%2Ccompress&amp;dpr=2&amp;w=24&amp;h=24 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/31ebcba3851b87d1d8609abf15d0ff7e.png?auto=format%2Ccompress&amp;dpr=3&amp;w=24&amp;h=24 3x" class="css-y821ir" style="max-width:24px;max-height:24px" alt="">
                          <div class="css-1uf3nca">Shareable certificate</div>
                          <p class=" css-vac8rf">Add to your LinkedIn profile</p>
                        </div>
                        <div class="cds-9 css-9271ok cds-11 cds-grid-item cds-56 cds-64 cds-76">
                          <svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 24 24" width="24" class="css-ggns0z" id="cds-react-aria-19">
                            <path d="M16.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM7.5 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM12 11a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.818 2.499a3.13 3.13 0 00-3.32 3.346l.002.017V20.53l-.003.029a.84.84 0 001.447.671l3.987-4.309H18.18a3.14 3.14 0 003.32-3.32V5.862l.001-.017a3.13 3.13 0 00-3.32-3.346l-.015.001H5.834l-.016-.001zm.047-.999A4.13 4.13 0 001.5 5.897v14.576a1.84 1.84 0 003.175 1.438l.002-.001 3.692-3.99h9.767a4.14 4.14 0 004.364-4.364V5.897A4.13 4.13 0 0018.135 1.5H5.865z" fill="currentColor"></path>
                          </svg>
                          <div class="css-drc7pp">
                            <span>Taught in English</span>
                          </div>
                          <div class=" css-vac8rf">
                            <button class="cds-149 cds-button-disableElevation cds-button-ghost css-amruj3" tabindex="0" type="button">
                              <span class="cds-button-label">
                                <span>21 languages available</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="thin_banner_module" role="presentation">
            <div class="css-1m1jbp0">
              <div>
                <div class="cds-1 css-1cxrrkn cds-2 cds-7">
                  <div class="cds-9 css-1kspkkz cds-10">
                    <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                      <div class="css-1f3xod8">
                        <div class="cds-9 css-0 cds-10">
                          <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-80">
                            <h1 class="cds-119 css-17b5z07 cds-121">See how employees at top companies are mastering in-demand skills</h1>
                            <div class="css-1yvlauk">
                              <a data-click-key="unified_description_page.consumer_specialization_page.click.upsell_coursera_business" data-click-value="{&quot;href&quot;:&quot;/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-thin-card&amp;utm_term=out&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;upsell_coursera_business&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="upsell_coursera_business" data-track-href="/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-thin-card&amp;utm_term=out" href="/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-thin-card&amp;utm_term=out" to="/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-thin-card&amp;utm_term=out" class="cds-119 cds-113 cds-115 css-1ibxsrf cds-142">Learn more about Coursera for Business</a>
                            </div>
                          </div>
                          <div class="cds-9 css-1majtw4 cds-11 cds-grid-item cds-56 cds-76">
                            <div class="css-1aokm8x">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/74c8747e8210831049cf88dd4eefe26c.png?auto=format%2Ccompress&amp;dpr=1&amp;w=320&amp;h=70&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/74c8747e8210831049cf88dd4eefe26c.png?auto=format%2Ccompress&amp;dpr=2&amp;w=320&amp;h=70&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/74c8747e8210831049cf88dd4eefe26c.png?auto=format%2Ccompress&amp;dpr=3&amp;w=320&amp;h=70&amp;q=40 3x" class="css-1qn88qo" alt="Coursera enterprise logos" style="max-width: 320px; max-height: 70px;">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="career_outcomes" role="presentation">
            <div id="outcomes" class="css-1m1jbp0">
              <div>
                <div class="cds-1 css-1cxrrkn cds-2 cds-7">
                  <div class="cds-9 css-1kspkkz cds-10">
                    <div class="cds-9 css-0 cds-10 cds-11 cds-grid-item">
                      <div class="cds-9 css-1uff99i cds-10 cds-11 cds-grid-item cds-29 cds-56">
                        <div class="cds-9 css-2l7onx cds-11 cds-grid-item cds-56 cds-78">
                          <h2 class="cds-119 cds-Typography-base css-bbd009 cds-121">Advance your subject-matter expertise</h2>
                          <ul class="css-q8or2b">
                            <li>Learn in-demand skills from university and industry experts</li>
                            <li>Master a subject or tool with hands-on projects</li>
                            <li>Develop a deep understanding of key concepts</li>
                            <li>Earn a career certificate from Politecnico di Milano</li>
                          </ul>
                        </div>
                        <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-78 cds-91">
                          <div>
                            <div class="css-1ayzl37">
                              <div class="css-1fupugt">
                                <div class="lazyload-wrapper">
                                  <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/f9981360ed304b477666954b42d5586f.png?auto=format%2Ccompress&amp;dpr=1&amp;w=562&amp;h=221&amp;q=40&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/f9981360ed304b477666954b42d5586f.png?auto=format%2Ccompress&amp;dpr=2&amp;w=562&amp;h=221&amp;q=40&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/f9981360ed304b477666954b42d5586f.png?auto=format%2Ccompress&amp;dpr=3&amp;w=562&amp;h=221&amp;q=40&amp;fit=crop 3x" alt="" style="max-width: 562px; max-height: 221px;">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="career_cert_module" role="presentation">
            <div class="css-1m1jbp0">
              <div>
                <div class="cds-1 css-1cxrrkn cds-2 cds-7">
                  <div class="cds-9 css-1kspkkz cds-10">
                    <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                      <div class="css-qwswsz">
                        <div class="css-mc1uvo">
                          <div class="css-h4rs9z">
                            <div class="lazyload-wrapper">
                              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&amp;dpr=1&amp;w=259&amp;h=165&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&amp;dpr=2&amp;w=259&amp;h=165&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&amp;dpr=3&amp;w=259&amp;h=165&amp;q=40 3x" class="css-10p2x4h" alt="Coursera Career Certificate" style="max-width: 259px; max-height: 165px;">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="css-1sdlybt">
                        <div class="cds-9 css-0 cds-10">
                          <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-79">
                            <div class="css-1o5q1ld">
                              <h2 class="cds-119 css-3i3jpd cds-121">Earn a career certificate</h2>
                              <p class=" css-4s48ix">Add this credential to your LinkedIn profile, resume, or CV</p>
                              <p class=" css-4s48ix">Share it on social media and in your performance review</p>
                            </div>
                          </div>
                          <div class="cds-9 css-1k3d0x1 cds-11 cds-grid-item cds-56 cds-77">
                            <div class="css-17emgr3">
                              <div class="css-16jkw5e"></div>
                            </div>
                            <div class="css-19pqny">
                              <div class="css-m7vdx0">
                                <div class="lazyload-wrapper">
                                  <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&amp;dpr=1&amp;w=333&amp;h=215&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&amp;dpr=2&amp;w=333&amp;h=215&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/de1a6556fbe605411e8c1c2ca4ba45f1.png?auto=format%2Ccompress&amp;dpr=3&amp;w=333&amp;h=215&amp;q=40 3x" alt="Coursera Career Certificate" style="max-width: 333px; max-height: 215px;">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="courses" class="css-1m1jbp0">
          <div>
            <div class="cds-1 css-1cxrrkn cds-2 cds-7">
              <div class="cds-9 css-1kspkkz cds-10">
                <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-79 cds-94">
                  <h2 class="cds-119 cds-Typography-base css-bbd009 cds-121">
                    <span>Specialization - 5 course series</span>
                  </h2>
                  <div class="css-68xxf3">
                    <div class="css-10jtpc0">
                      <div class="rc-TogglableContent about-section collapsed">
                        <div class="content" style="height:65px" aria-hidden="true">
                          <div class="content-inner">
                            <div>
                              <div class="rc-CML unified-CML" dir="auto">
                                <div data-testid="cml-viewer" class="css-140m8il">
                                  <p>
                                    <span>
                                      <span>This Specialization is intended for beginners seeking to enter the artificial intelligence world. Through five courses, you will cover artificial intelligence technical groundings (including machine learning and technologies), ethical and legal issues, which will give you a clear picture of what artificial intelligence is and what opportunities artificial intelligence will provide in the next future.</span>
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <span>Applied Learning Project</span>
                                    </span>
                                  </p>
                                  <p>
                                    <span>
                                      <span>No specific hands-on project is required but through this specialization, composed by 5 introductory courses. Learners will have all the necessary concept and tools to start building their own projects, combining the tools and concepts seen in the courses.</span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="toggle-button-wrapper">
                          <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="expand_syllabus_description" class="bold body-2-text" aria-hidden="false" tabindex="0" type="button">
                            <span>Read more</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-79 cds-94">
                  <div>
                    <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus" role="presentation">
                      <div class="css-m9zcdt">
                        <div class="css-fndret">
                          <div class="" data-testid="accordion-item">
                            <div class="css-1pi3g2x">
                              <div class="cds-AccordionRoot-focusContainer">
                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-21">
                                  <div class="css-3glzp7">
                                    <div class="css-13tws8d">
                                      <div class="css-aeoyfz">
                                        <div>
                                          <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.sdp_course_list_link" data-click-value="{&quot;courseName&quot;:&quot;Artificial Intelligence: An Overview&quot;,&quot;href&quot;:&quot;/learn/artificial-intelligence-an-overview?specialization=artificial-intelligence-overview&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;sdp_course_list_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;s12nSlug&quot;:&quot;artificial-intelligence-overview&quot;,&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="sdp_course_list_link" data-track-href="/learn/artificial-intelligence-an-overview?specialization=artificial-intelligence-overview" href="/learn/artificial-intelligence-an-overview?specialization=artificial-intelligence-overview" class="cds-119 cds-113 cds-115 css-1flg8ns cds-142" aria-label="Course 1: Artificial Intelligence: An Overview" data-e2e="sdp-course-list-link">Artificial Intelligence: An Overview</a>
                                          </h3>
                                          <div class="css-chglhw">
                                            <span>Course 1</span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span>7 hours</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span class="css-15ld0c5">4.5
                                                <!-- -->
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-1c6n8z3" id="cds-react-aria-22">
                                                  <path d="M18.33 7.65a1 1 0 00-.85-.39h-4.93l-1.67-5.12a1 1 0 00-.49-.55.94.94 0 00-.72 0 1 1 0 00-.58.59L7.4 7.26H2.47a1 1 0 00-1 .91 1 1 0 00.35.77l4.23 3.22-1.59 5.12a1 1 0 00.64 1.18 1 1 0 00.84-.16L10 15.16l4.06 3.13a.93.93 0 00.59.21h.1a.942.942 0 00.63-.35.91.91 0 00.16-.88l-1.63-5.11L18.11 9a.93.93 0 00.22-1.35z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                              <span class=" css-vac8rf">( <span>119 ratings</span>) </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_course_expand" class="cds-149 cds-button-disableElevation cds-button-ghost css-12xv2iu" tabindex="0" role="button" aria-expanded="false" aria-label="Course details for Artificial Intelligence: An Overview" type="button">
                                      <span class="cds-button-label">
                                        <span class="css-k26awr">Course details</span>
                                        <span class="cds-button-endIcon">
                                          <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-23" class="css-19e2cig">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14.293L1.354 5.646l-.708.708L10 15.707l9.354-9.353-.707-.708L10 14.293z" fill="currentColor"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                  <div class="cds-187 cds-189" style="min-height:0px">
                                    <div class="cds-190">
                                      <div class="cds-191">
                                        <div aria-labelledby="cds-react-aria-21-accordion-header" id="cds-react-aria-21-accordion-panel" role="region">
                                          <div class="css-yam6t">
                                            <div>
                                              <div class="css-15ko5n9">
                                                <div class="css-1otrsh1">
                                                  <h4 class=" css-6ecy9b">What you'll learn</h4>
                                                </div>
                                                <ul>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-24">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Explain the seminal ideas leading to the birth of AI, the major difficulties and how the international community overtook them.</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-25">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Describe what AI is today in terms of goals, scientific community, companies’ interests</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-26">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Describe the taxonomy of the know-how on AI in terms of techniques, software and hardware methodologies. </span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-27">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Explain the need for national strategies on AI and identify the major Italian and European players on AI</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="cds-AccordionGroup-itemSpacing" data-testid="accordion-item">
                            <div class="css-1pe5kh6">
                              <div class="cds-AccordionRoot-focusContainer">
                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-28">
                                  <div class="css-3glzp7">
                                    <div class="css-13tws8d">
                                      <div class="css-aeoyfz">
                                        <div>
                                          <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.sdp_course_list_link" data-click-value="{&quot;courseName&quot;:&quot;Ethics of Artificial Intelligence&quot;,&quot;href&quot;:&quot;/learn/ethics-of-artificial-intelligence?specialization=artificial-intelligence-overview&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;sdp_course_list_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;s12nSlug&quot;:&quot;artificial-intelligence-overview&quot;,&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="sdp_course_list_link" data-track-href="/learn/ethics-of-artificial-intelligence?specialization=artificial-intelligence-overview" href="/learn/ethics-of-artificial-intelligence?specialization=artificial-intelligence-overview" class="cds-119 cds-113 cds-115 css-1flg8ns cds-142" aria-label="Course 2: Ethics of Artificial Intelligence" data-e2e="sdp-course-list-link">Ethics of Artificial Intelligence</a>
                                          </h3>
                                          <div class="css-chglhw">
                                            <span>Course 2</span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span>10 hours</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span class="css-15ld0c5">4.7
                                                <!-- -->
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-1c6n8z3" id="cds-react-aria-29">
                                                  <path d="M18.33 7.65a1 1 0 00-.85-.39h-4.93l-1.67-5.12a1 1 0 00-.49-.55.94.94 0 00-.72 0 1 1 0 00-.58.59L7.4 7.26H2.47a1 1 0 00-1 .91 1 1 0 00.35.77l4.23 3.22-1.59 5.12a1 1 0 00.64 1.18 1 1 0 00.84-.16L10 15.16l4.06 3.13a.93.93 0 00.59.21h.1a.942.942 0 00.63-.35.91.91 0 00.16-.88l-1.63-5.11L18.11 9a.93.93 0 00.22-1.35z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                              <span class=" css-vac8rf">( <span>103 ratings</span>) </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_course_expand" class="cds-149 cds-button-disableElevation cds-button-ghost css-12xv2iu" tabindex="0" role="button" aria-expanded="false" aria-label="Course details for Ethics of Artificial Intelligence" type="button">
                                      <span class="cds-button-label">
                                        <span class="css-k26awr">Course details</span>
                                        <span class="cds-button-endIcon">
                                          <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-30" class="css-19e2cig">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14.293L1.354 5.646l-.708.708L10 15.707l9.354-9.353-.707-.708L10 14.293z" fill="currentColor"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                  <div class="cds-187 cds-189" style="min-height:0px">
                                    <div class="cds-190">
                                      <div class="cds-191">
                                        <div aria-labelledby="cds-react-aria-28-accordion-header" id="cds-react-aria-28-accordion-panel" role="region">
                                          <div class="css-yam6t">
                                            <div>
                                              <div class="css-15ko5n9">
                                                <div class="css-1otrsh1">
                                                  <h4 class=" css-6ecy9b">What you'll learn</h4>
                                                </div>
                                                <ul>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-31">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Describe the reasons for an ethical analysis applied to AI.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-32">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Identify the ethical and social impacts and implications of AI.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-33">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Use critical skills in clarifying and ethically analyzing AI in different domains of life.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-34">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Critically analyze the current policies for AI and use ethical and socially responsible principles in your professional life.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="cds-AccordionGroup-itemSpacing" data-testid="accordion-item">
                            <div class="css-1pe5kh6">
                              <div class="cds-AccordionRoot-focusContainer">
                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-35">
                                  <div class="css-3glzp7">
                                    <div class="css-13tws8d">
                                      <div class="css-aeoyfz">
                                        <div>
                                          <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.sdp_course_list_link" data-click-value="{&quot;courseName&quot;:&quot;Artificial Intelligence and legal issues&quot;,&quot;href&quot;:&quot;/learn/artificial-intelligence-and-legal-issues?specialization=artificial-intelligence-overview&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;sdp_course_list_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;s12nSlug&quot;:&quot;artificial-intelligence-overview&quot;,&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="sdp_course_list_link" data-track-href="/learn/artificial-intelligence-and-legal-issues?specialization=artificial-intelligence-overview" href="/learn/artificial-intelligence-and-legal-issues?specialization=artificial-intelligence-overview" class="cds-119 cds-113 cds-115 css-1flg8ns cds-142" aria-label="Course 3: Artificial Intelligence and legal issues" data-e2e="sdp-course-list-link">Artificial Intelligence and legal issues</a>
                                          </h3>
                                          <div class="css-chglhw">
                                            <span>Course 3</span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span>3 hours</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span class="css-15ld0c5">4.4
                                                <!-- -->
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-1c6n8z3" id="cds-react-aria-36">
                                                  <path d="M18.33 7.65a1 1 0 00-.85-.39h-4.93l-1.67-5.12a1 1 0 00-.49-.55.94.94 0 00-.72 0 1 1 0 00-.58.59L7.4 7.26H2.47a1 1 0 00-1 .91 1 1 0 00.35.77l4.23 3.22-1.59 5.12a1 1 0 00.64 1.18 1 1 0 00.84-.16L10 15.16l4.06 3.13a.93.93 0 00.59.21h.1a.942.942 0 00.63-.35.91.91 0 00.16-.88l-1.63-5.11L18.11 9a.93.93 0 00.22-1.35z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                              <span class=" css-vac8rf">( <span>53 ratings</span>) </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_course_expand" class="cds-149 cds-button-disableElevation cds-button-ghost css-12xv2iu" tabindex="0" role="button" aria-expanded="false" aria-label="Course details for Artificial Intelligence and legal issues" type="button">
                                      <span class="cds-button-label">
                                        <span class="css-k26awr">Course details</span>
                                        <span class="cds-button-endIcon">
                                          <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-37" class="css-19e2cig">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14.293L1.354 5.646l-.708.708L10 15.707l9.354-9.353-.707-.708L10 14.293z" fill="currentColor"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                  <div class="cds-187 cds-189" style="min-height:0px">
                                    <div class="cds-190">
                                      <div class="cds-191">
                                        <div aria-labelledby="cds-react-aria-35-accordion-header" id="cds-react-aria-35-accordion-panel" role="region">
                                          <div class="css-yam6t">
                                            <div>
                                              <div class="css-15ko5n9">
                                                <div class="css-1otrsh1">
                                                  <h4 class=" css-6ecy9b">What you'll learn</h4>
                                                </div>
                                                <ul>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-38">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Recognize that the use of AI requires to be analysed, evaluated and addressed also from a legal point of view.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-39">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Indicate the main legal concepts of liability for choices made by or through intelligent systems and compensation for any consequential damage.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-40">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Verify whether and which criminal law principles apply when an offence is committed by an AI system.</span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-41">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Recognize the difference between copyright and patent and recognize the risks to fundamental rights and freedoms deriving from AI. </span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="cds-AccordionGroup-itemSpacing" data-testid="accordion-item">
                            <div class="css-1pe5kh6">
                              <div class="cds-AccordionRoot-focusContainer">
                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-42">
                                  <div class="css-3glzp7">
                                    <div class="css-13tws8d">
                                      <div class="css-aeoyfz">
                                        <div>
                                          <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.sdp_course_list_link" data-click-value="{&quot;courseName&quot;:&quot;Technologies and platforms for Artificial Intelligence&quot;,&quot;href&quot;:&quot;/learn/technologies-and-platforms-for-artificial-intelligence?specialization=artificial-intelligence-overview&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;sdp_course_list_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;s12nSlug&quot;:&quot;artificial-intelligence-overview&quot;,&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="sdp_course_list_link" data-track-href="/learn/technologies-and-platforms-for-artificial-intelligence?specialization=artificial-intelligence-overview" href="/learn/technologies-and-platforms-for-artificial-intelligence?specialization=artificial-intelligence-overview" class="cds-119 cds-113 cds-115 css-1flg8ns cds-142" aria-label="Course 4: Technologies and platforms for Artificial Intelligence" data-e2e="sdp-course-list-link">Technologies and platforms for Artificial Intelligence</a>
                                          </h3>
                                          <div class="css-chglhw">
                                            <span>Course 4</span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span>2 hours</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span class="css-15ld0c5">4.7
                                                <!-- -->
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-1c6n8z3" id="cds-react-aria-43">
                                                  <path d="M18.33 7.65a1 1 0 00-.85-.39h-4.93l-1.67-5.12a1 1 0 00-.49-.55.94.94 0 00-.72 0 1 1 0 00-.58.59L7.4 7.26H2.47a1 1 0 00-1 .91 1 1 0 00.35.77l4.23 3.22-1.59 5.12a1 1 0 00.64 1.18 1 1 0 00.84-.16L10 15.16l4.06 3.13a.93.93 0 00.59.21h.1a.942.942 0 00.63-.35.91.91 0 00.16-.88l-1.63-5.11L18.11 9a.93.93 0 00.22-1.35z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                              <span class=" css-vac8rf">( <span>33 ratings</span>) </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_course_expand" class="cds-149 cds-button-disableElevation cds-button-ghost css-12xv2iu" tabindex="0" role="button" aria-expanded="false" aria-label="Course details for Technologies and platforms for Artificial Intelligence" type="button">
                                      <span class="cds-button-label">
                                        <span class="css-k26awr">Course details</span>
                                        <span class="cds-button-endIcon">
                                          <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-44" class="css-19e2cig">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14.293L1.354 5.646l-.708.708L10 15.707l9.354-9.353-.707-.708L10 14.293z" fill="currentColor"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                  <div class="cds-187 cds-189" style="min-height:0px">
                                    <div class="cds-190">
                                      <div class="cds-191">
                                        <div aria-labelledby="cds-react-aria-42-accordion-header" id="cds-react-aria-42-accordion-panel" role="region">
                                          <div class="css-yam6t">
                                            <div>
                                              <div class="css-15ko5n9">
                                                <div class="css-1otrsh1">
                                                  <h4 class=" css-6ecy9b">What you'll learn</h4>
                                                </div>
                                                <ul>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-45">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Describe the technological scenario of AI (Cloud, Edge, IoT) from an IT perspective.</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-46">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Identify the Machine and Deep Learning techniques and solutions developed for IoT and Edge Computing systems.</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-47">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Explain the main challenges and opportunities of technologies and platforms for AI.</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="cds-AccordionGroup-itemSpacing" data-testid="accordion-item">
                            <div class="css-1pe5kh6">
                              <div class="cds-AccordionRoot-focusContainer">
                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-48">
                                  <div class="css-3glzp7">
                                    <div class="css-13tws8d">
                                      <div class="css-aeoyfz">
                                        <div>
                                          <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.sdp_course_list_link" data-click-value="{&quot;courseName&quot;:&quot;Machine Learning: an overview&quot;,&quot;href&quot;:&quot;/learn/machine-learning-overview?specialization=artificial-intelligence-overview&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;sdp_course_list_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;s12nSlug&quot;:&quot;artificial-intelligence-overview&quot;,&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="sdp_course_list_link" data-track-href="/learn/machine-learning-overview?specialization=artificial-intelligence-overview" href="/learn/machine-learning-overview?specialization=artificial-intelligence-overview" class="cds-119 cds-113 cds-115 css-1flg8ns cds-142" aria-label="Course 5: Machine Learning: an overview" data-e2e="sdp-course-list-link">Machine Learning: an overview</a>
                                          </h3>
                                          <div class="css-chglhw">
                                            <span>Course 5</span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span>2 hours</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span>
                                              <span class="css-15ld0c5">4.5
                                                <!-- -->
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="css-1c6n8z3" id="cds-react-aria-49">
                                                  <path d="M18.33 7.65a1 1 0 00-.85-.39h-4.93l-1.67-5.12a1 1 0 00-.49-.55.94.94 0 00-.72 0 1 1 0 00-.58.59L7.4 7.26H2.47a1 1 0 00-1 .91 1 1 0 00.35.77l4.23 3.22-1.59 5.12a1 1 0 00.64 1.18 1 1 0 00.84-.16L10 15.16l4.06 3.13a.93.93 0 00.59.21h.1a.942.942 0 00.63-.35.91.91 0 00.16-.88l-1.63-5.11L18.11 9a.93.93 0 00.22-1.35z" fill="currentColor"></path>
                                                </svg>
                                              </span>
                                              <span class=" css-vac8rf">( <span>46 ratings</span>) </span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_course_expand" class="cds-149 cds-button-disableElevation cds-button-ghost css-12xv2iu" tabindex="0" role="button" aria-expanded="false" aria-label="Course details for Machine Learning: an overview" type="button">
                                      <span class="cds-button-label">
                                        <span class="css-k26awr">Course details</span>
                                        <span class="cds-button-endIcon">
                                          <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-50" class="css-19e2cig">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 14.293L1.354 5.646l-.708.708L10 15.707l9.354-9.353-.707-.708L10 14.293z" fill="currentColor"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                  <div class="cds-187 cds-189" style="min-height:0px">
                                    <div class="cds-190">
                                      <div class="cds-191">
                                        <div aria-labelledby="cds-react-aria-48-accordion-header" id="cds-react-aria-48-accordion-panel" role="region">
                                          <div class="css-yam6t">
                                            <div>
                                              <div class="css-15ko5n9">
                                                <div class="css-1otrsh1">
                                                  <h4 class=" css-6ecy9b">What you'll learn</h4>
                                                </div>
                                                <ul>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-51">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Classify machine learning problems, supervised learning problems and describe the limitations of machine learning techniques in supervised learning</span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                          <p>
                                                            <span>
                                                              <span></span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-52">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Classify machine learning problems in unsupervised learning, describe the utility of dimensionality reduction techniques </span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                  <li class="css-z4kl2t">
                                                    <div class="css-88ryvb">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-4v75v4" id="cds-react-aria-53">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.74 3.672L6.225 14.168.323 8.736l1.354-1.472 4.419 4.068 8.163-9.004 1.482 1.344z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="rc-CML unified-CML" dir="auto">
                                                        <div data-testid="cml-viewer" class="css-140m8il">
                                                          <p>
                                                            <span>
                                                              <span>Formulate a sequential decision-making problem, explain what a value function is and describe how to optimize a policy in reinforcement learning </span>
                                                            </span>
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-77 cds-90">
                  <div class="css-pas860">
                    <div class="css-132y21x">
                      <div class="css-xs8kz1">
                        <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">
                          <span>Instructors</span>
                        </h3>
                      </div>
                      <div class="css-1f454bp">
                        <div class="css-1oiads2">
                          <div class="css-1f95hav">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Marcello Restelli">
                          </div>
                          <div>
                            <div>
                              <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/restellimarcello&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/restellimarcello" href="/instructor/restellimarcello" to="/instructor/restellimarcello" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                <span class=" css-6ecy9b">Marcello Restelli</span>
                              </a>
                            </div>
                            <div class=" css-kimdhf">Politecnico di Milano</div>
                            <div class="css-1dd751w">
                              <span class=" css-kimdhf">
                                <span>1 Course</span>
                              </span>
                              <span aria-hidden="true" class="css-18yxyo6">•</span>
                              <span class=" css-kimdhf">
                                <span>3,440 learners</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="css-1f454bp">
                        <div class="css-1oiads2">
                          <div class="css-1f95hav">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Nicola Gatti">
                          </div>
                          <div>
                            <div>
                              <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/gattinicola&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/gattinicola" href="/instructor/gattinicola" to="/instructor/gattinicola" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                <span class=" css-6ecy9b">Nicola Gatti</span>
                              </a>
                            </div>
                            <div class=" css-kimdhf">Politecnico di Milano</div>
                            <div class="css-1dd751w">
                              <span class=" css-kimdhf">
                                <span>1 Course</span>
                              </span>
                              <span aria-hidden="true" class="css-18yxyo6">•</span>
                              <span class=" css-kimdhf">
                                <span>7,153 learners</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_instructors_more" class="cds-149 cds-button-disableElevation cds-button-ghost css-i5kwq2" tabindex="0" role="button" type="button">
                        <span class="cds-button-label">View all 5 instructors</span>
                      </button>
                      <div role="presentation" dir="ltr" id="cds-react-aria-54" class="css-bhx7nn" style="position:fixed;z-index:10000;right:0;bottom:0;top:0;left:0;visibility:hidden" aria-hidden="true">
                        <div class="cds-163 cds-Modal-backdrop" aria-hidden="true" style="opacity:0;visibility:hidden"></div>
                        <div tabindex="0" data-test="sentinelStart"></div>
                        <div class="cds-Modal-container" style="opacity:0;visibility:hidden">
                          <div data-focus-lock-disabled="disabled">
                            <div aria-modal="true" aria-describedby="dialog-content-a5b7f2e7-3368-4e16-872f-fe55ba65da82" aria-labelledby="cds-react-aria-54-headingGroup" class="cds-Dialog-dialog" role="dialog">
                              <div class="css-1lqbpgq">
                                <button class="cds-149 cds-button-disableElevation cds-button-ghost css-1s96oj" tabindex="0" type="button">
                                  <span class="cds-button-label">Close <span class="cds-button-endIcon">
                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-55" class="css-0">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.585 14.353l-11.94-12 .71-.706 11.94 12-.71.706z" fill="currentColor"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.344 2.353l-11.99 12-.708-.706 11.99-12 .708.706z" fill="currentColor"></path>
                                      </svg>
                                    </span>
                                  </span>
                                </button>
                              </div>
                              <div data-testid="scroll-container" class="css-k0ld8m">
                                <div id="cds-react-aria-54-headingGroup" class="css-1s8ia2i">
                                  <h2 class=" css-tlf8h5">Instructors</h2>
                                </div>
                                <div id="dialog-content-a5b7f2e7-3368-4e16-872f-fe55ba65da82" class="css-11krhap">
                                  <div class="cds-9 css-0 cds-10">
                                    <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                      <div class="css-1oiads2">
                                        <div class="css-1f95hav">
                                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/be/52337175104f0dba38f9889bbd5378/Restelli-Marcello.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Marcello Restelli">
                                        </div>
                                        <div>
                                          <div>
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/restellimarcello&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/restellimarcello" href="/instructor/restellimarcello" to="/instructor/restellimarcello" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                              <span class=" css-6ecy9b">Marcello Restelli</span>
                                            </a>
                                          </div>
                                          <div class=" css-kimdhf">Politecnico di Milano</div>
                                          <div class="css-1dd751w">
                                            <span class=" css-kimdhf">
                                              <span>1 Course</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span class=" css-kimdhf">
                                              <span>3,440 learners</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                      <div class="css-1oiads2">
                                        <div class="css-1f95hav">
                                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/4c/e5677f8df24b7389f20a6aa5464cf6/Gatti-Nicola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Nicola Gatti">
                                        </div>
                                        <div>
                                          <div>
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/gattinicola&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/gattinicola" href="/instructor/gattinicola" to="/instructor/gattinicola" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                              <span class=" css-6ecy9b">Nicola Gatti</span>
                                            </a>
                                          </div>
                                          <div class=" css-kimdhf">Politecnico di Milano</div>
                                          <div class="css-1dd751w">
                                            <span class=" css-kimdhf">
                                              <span>1 Course</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span class=" css-kimdhf">
                                              <span>7,153 learners</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                      <div class="css-1oiads2">
                                        <div class="css-1f95hav">
                                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/9e/4e165da06c4a558fdad82ada5cfe0c/Schiaffonati-Viola.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Viola Schiaffonati">
                                        </div>
                                        <div>
                                          <div>
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/schiaffonativiola&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/schiaffonativiola" href="/instructor/schiaffonativiola" to="/instructor/schiaffonativiola" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                              <span class=" css-6ecy9b">Viola Schiaffonati</span>
                                            </a>
                                          </div>
                                          <div class=" css-kimdhf">Politecnico di Milano</div>
                                          <div class="css-1dd751w">
                                            <span class=" css-kimdhf">
                                              <span>1 Course</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span class=" css-kimdhf">
                                              <span>9,529 learners</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                      <div class="css-1oiads2">
                                        <div class="css-1f95hav">
                                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/8f/a55d43158440fd932aa82d1584a68b/Roveri-Manuel.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/8f/a55d43158440fd932aa82d1584a68b/Roveri-Manuel.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/8f/a55d43158440fd932aa82d1584a68b/Roveri-Manuel.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Manuel Roveri">
                                        </div>
                                        <div>
                                          <div>
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/roverimanuel&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/roverimanuel" href="/instructor/roverimanuel" to="/instructor/roverimanuel" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                              <span class=" css-6ecy9b">Manuel Roveri</span>
                                            </a>
                                          </div>
                                          <div class=" css-kimdhf">Politecnico di Milano</div>
                                          <div class="css-1dd751w">
                                            <span class=" css-kimdhf">
                                              <span>1 Course</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span class=" css-kimdhf">
                                              <span>2,586 learners</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="cds-9 css-1gjys39 cds-11 cds-grid-item cds-56 cds-78">
                                      <div class="css-1oiads2">
                                        <div class="css-1f95hav">
                                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/d4/a860e94e9e49d590439872256d9f3b/italiano_HQ.jpg?auto=format%2Ccompress&amp;dpr=1&amp;w=75&amp;h=75&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/d4/a860e94e9e49d590439872256d9f3b/italiano_HQ.jpg?auto=format%2Ccompress&amp;dpr=2&amp;w=75&amp;h=75&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/d4/a860e94e9e49d590439872256d9f3b/italiano_HQ.jpg?auto=format%2Ccompress&amp;dpr=3&amp;w=75&amp;h=75&amp;fit=crop 3x" class="css-1hhx4js" style="max-width:75px;max-height:75px" alt="Annamaria Italiano">
                                        </div>
                                        <div>
                                          <div>
                                            <a data-click-key="unified_description_page.consumer_specialization_page.click.hero_instructor" data-click-value="{&quot;href&quot;:&quot;/instructor/italianoannamaria&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;hero_instructor&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="hero_instructor" data-track-href="/instructor/italianoannamaria" href="/instructor/italianoannamaria" to="/instructor/italianoannamaria" class="cds-119 cds-113 cds-115 css-1yholzq cds-142">
                                              <span class=" css-6ecy9b">Annamaria Italiano</span>
                                            </a>
                                          </div>
                                          <div class=" css-kimdhf">Politecnico di Milano</div>
                                          <div class="css-1dd751w">
                                            <span class=" css-kimdhf">
                                              <span>1 Course</span>
                                            </span>
                                            <span aria-hidden="true" class="css-18yxyo6">•</span>
                                            <span class=" css-kimdhf">
                                              <span>4,192 learners</span>
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="css-1hllf5q">
                                  <button class="cds-149 cds-button-disableElevation cds-button-primary css-1aoqo4t" tabindex="0" type="button">
                                    <span class="cds-button-label">OK</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div tabindex="0" data-test="sentinelEnd"></div>
                      </div>
                    </div>
                    <div class="css-132y21x">
                      <div class="css-xs8kz1">
                        <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">Offered by</h3>
                      </div>
                      <div class="css-1f454bp">
                        <div class="css-1qp74jq">
                          <div class="css-92f171">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=1&amp;w=38&amp;h=38&amp;fit=fill" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=2&amp;w=38&amp;h=38&amp;fit=fill 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=3&amp;w=38&amp;h=38&amp;fit=fill 3x" style="max-width:38px;max-height:38px" alt="">
                          </div>
                          <div class="css-15g7tpu">
                            <a data-click-key="unified_description_page.consumer_specialization_page.click.partner" data-click-value="{&quot;href&quot;:&quot;/partners/polimi&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;partner&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="partner" data-track-href="/partners/polimi" href="/partners/polimi" to="/partners/polimi" class="cds-119 cds-113 cds-115 css-1stvmzy cds-142">
                              <span class=" css-6ecy9b">Politecnico di Milano</span>
                            </a>
                            <button data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="syllabus_partner_more" class="cds-149 cds-button-disableElevation cds-button-ghost css-1917ooj" tabindex="0" role="button" aria-label="Learn more about Politecnico di Milano" type="button">
                              <span class="cds-button-label">Learn more</span>
                            </button>
                          </div>
                          <div role="presentation" dir="ltr" id="cds-react-aria-56" class="css-bhx7nn" style="position:fixed;z-index:10000;right:0;bottom:0;top:0;left:0;visibility:hidden" aria-hidden="true">
                            <div class="cds-163 cds-Modal-backdrop" aria-hidden="true" style="opacity:0;visibility:hidden"></div>
                            <div tabindex="0" data-test="sentinelStart"></div>
                            <div class="cds-Modal-container" style="opacity:0;visibility:hidden">
                              <div data-focus-lock-disabled="disabled">
                                <div aria-modal="true" aria-describedby="dialog-content-b1e78d5d-aabb-4ac9-92fb-7aa33f044764" aria-labelledby="cds-react-aria-56-headingGroup" class="cds-Dialog-dialog" role="dialog">
                                  <div class="css-1lqbpgq">
                                    <button class="cds-149 cds-button-disableElevation cds-button-ghost css-1s96oj" tabindex="0" type="button">
                                      <span class="cds-button-label">Close <span class="cds-button-endIcon">
                                          <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" id="cds-react-aria-57" class="css-0">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.585 14.353l-11.94-12 .71-.706 11.94 12-.71.706z" fill="currentColor"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.344 2.353l-11.99 12-.708-.706 11.99-12 .708.706z" fill="currentColor"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                  <div data-testid="scroll-container" class="css-k0ld8m">
                                    <div id="cds-react-aria-56-headingGroup" class="css-1s8ia2i">
                                      <h2 class=" css-tlf8h5">Offered by</h2>
                                    </div>
                                    <div id="dialog-content-b1e78d5d-aabb-4ac9-92fb-7aa33f044764" class="css-11krhap">
                                      <div class="css-jbr8cm">
                                        <div class="css-10gtjds">
                                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=1&amp;w=88&amp;h=88&amp;fit=fill" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=2&amp;w=88&amp;h=88&amp;fit=fill 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/fda9c0b19111e6882591891fb498a5/Polimi_logo_square.png?auto=format%2Ccompress&amp;dpr=3&amp;w=88&amp;h=88&amp;fit=fill 3x" style="max-width:88px;max-height:88px" alt="">
                                        </div>
                                        <div class="css-14f7f6h">
                                          <a data-click-key="unified_description_page.consumer_specialization_page.click.partner" data-click-value="{&quot;href&quot;:&quot;/partners/polimi&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;partner&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="partner" data-track-href="/partners/polimi" href="/partners/polimi" to="/partners/polimi" class="cds-119 cds-113 cds-115 css-1stvmzy cds-142">
                                            <span class="cds-119 cds-Typography-base css-bbd009 cds-121">Politecnico di Milano</span>
                                          </a>
                                          <p class=" css-4s48ix">Politecnico di Milano is a scientific-technological University, which trains engineers, architects and industrial designers. From 2014 Politecnico di Milano started the release of several MOOCs, developed by the service for digital learning METID (Methods and Innovative Technologies for Learning), giving everybody the chance to enhance personal skills.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="css-1hllf5q">
                                      <button class="cds-149 cds-button-disableElevation cds-button-primary css-1aoqo4t" tabindex="0" type="button">
                                        <span class="cds-button-label">OK</span>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div tabindex="0" data-test="sentinelEnd"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonials" class="css-1m1jbp0">
          <div>
            <div data-testid="" id="" class="css-box8pc"></div>
            <div class="css-1lzurvc">
              <div class="cds-1 css-1l2e5pk cds-2 cds-7" data-testid="block_layout">
                <div class="cds-9 css-1kspkkz cds-10 cds-19 cds-27">
                  <div class="cds-9 css-1qech6y cds-11 cds-grid-item cds-56">
                    <div>
                      <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="user_testimonial" role="presentation">
                        <h2 class="css-n19tcz">Why people choose Coursera for their career</h2>
                        <div class="cds-9 css-osw4ea cds-10">
                          <div class="cds-9 css-0 cds-11 cds-grid-item cds-75">
                            <div class="css-1el78bw">
                              <div class="css-zy587f">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Felipe_Moitta.png?auto=format%2Ccompress&amp;dpr=1&amp;w=64&amp;h=64&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Felipe_Moitta.png?auto=format%2Ccompress&amp;dpr=2&amp;w=64&amp;h=64&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Felipe_Moitta.png?auto=format%2Ccompress&amp;dpr=3&amp;w=64&amp;h=64&amp;fit=crop 3x" class="css-1080lsv" style="max-width:64px;max-height:64px" alt="">
                                <div>
                                  <div class=" css-6ecy9b">Felipe M.</div>
                                  <div class=" css-1ena9as">Learner since 2018</div>
                                </div>
                              </div>
                              <div class=" css-1ena9as">
                                <span>"To be able to take courses at my own pace and rhythm has been an amazing experience. I can learn whenever it fits my schedule and mood."</span>
                              </div>
                            </div>
                          </div>
                          <div class="cds-9 css-0 cds-11 cds-grid-item cds-75">
                            <div class="css-1el78bw">
                              <div class="css-zy587f">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Jennifer_John.png?auto=format%2Ccompress&amp;dpr=1&amp;w=64&amp;h=64&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Jennifer_John.png?auto=format%2Ccompress&amp;dpr=2&amp;w=64&amp;h=64&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Jennifer_John.png?auto=format%2Ccompress&amp;dpr=3&amp;w=64&amp;h=64&amp;fit=crop 3x" class="css-1080lsv" style="max-width:64px;max-height:64px" alt="">
                                <div>
                                  <div class=" css-6ecy9b">Jennifer J.</div>
                                  <div class=" css-1ena9as">Learner since 2020</div>
                                </div>
                              </div>
                              <div class=" css-1ena9as">
                                <span>"I directly applied the concepts and skills I learned from my courses to an exciting new project at work."</span>
                              </div>
                            </div>
                          </div>
                          <div class="cds-9 css-0 cds-11 cds-grid-item cds-75">
                            <div class="css-1el78bw">
                              <div class="css-zy587f">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Larry_Tao_Wang_1.png?auto=format%2Ccompress&amp;dpr=1&amp;w=64&amp;h=64&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Larry_Tao_Wang_1.png?auto=format%2Ccompress&amp;dpr=2&amp;w=64&amp;h=64&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Larry_Tao_Wang_1.png?auto=format%2Ccompress&amp;dpr=3&amp;w=64&amp;h=64&amp;fit=crop 3x" class="css-1080lsv" style="max-width:64px;max-height:64px" alt="">
                                <div>
                                  <div class=" css-6ecy9b">Larry W.</div>
                                  <div class=" css-1ena9as">Learner since 2021</div>
                                </div>
                              </div>
                              <div class=" css-1ena9as">
                                <span>"When I need courses on topics that my university doesn't offer, Coursera is one of the best places to go."</span>
                              </div>
                            </div>
                          </div>
                          <div class="cds-9 css-0 cds-11 cds-grid-item cds-75">
                            <div class="css-1el78bw">
                              <div class="css-zy587f">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Chaitanya_Anand.png?auto=format%2Ccompress&amp;dpr=1&amp;w=64&amp;h=64&amp;fit=crop" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Chaitanya_Anand.png?auto=format%2Ccompress&amp;dpr=2&amp;w=64&amp;h=64&amp;fit=crop 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/growth_testimonials/passionate_learner/Chaitanya_Anand.png?auto=format%2Ccompress&amp;dpr=3&amp;w=64&amp;h=64&amp;fit=crop 3x" class="css-1080lsv" style="max-width:64px;max-height:64px" alt="">
                                <div>
                                  <div class=" css-6ecy9b">Chaitanya A.</div>
                                </div>
                              </div>
                              <div class=" css-1ena9as">
                                <span>"Learning isn't just about being better at your job: it's so much more than that. Coursera allows me to learn without limits."</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="cds-9 css-d7c5ti cds-11 cds-grid-item cds-56"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="articles_unified_description_page_recs" role="presentation">
            <div class="css-1m1jbp0">
              <div>
                <div class="cds-1 css-1cxrrkn cds-2 cds-7">
                  <div class="cds-9 css-1kspkkz cds-10">
                    <div class="cds-9 css-w5mz8a cds-10 cds-11 cds-grid-item cds-56">
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-56">
                        <h2 class="cds-119 css-jqr9gc cds-121">New to Algorithms? Start here.</h2>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-44">
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.articles_unified_description_page_recs_card" data-click-value="{&quot;href&quot;:&quot;/articles/learning-how-to-code?trk_ref=articles_unified_description_page_recs_card&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;articles_unified_description_page_recs_card&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;slug&quot;:&quot;learning-how-to-code&quot;,&quot;title&quot;:&quot;A Beginner’s Guide for Learning How to Code&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="articles_unified_description_page_recs_card" data-track-href="/articles/learning-how-to-code?trk_ref=articles_unified_description_page_recs_card" href="/articles/learning-how-to-code?trk_ref=articles_unified_description_page_recs_card" to="/articles/learning-how-to-code?trk_ref=articles_unified_description_page_recs_card" class="cds-119 cds-113 cds-115 css-9st4wk cds-142" aria-labelledby="recommended-article-learning-how-to-code">
                          <article id="recommended-article-learning-how-to-code" class="css-1klw6x6">
                            <div class="css-uzd580">
                              <h2 class="cds-119 css-1f1yzcm cds-121">A Beginner’s Guide for Learning How to Code</h2>
                            </div>
                            <div class="css-16ov8w7">
                              <p class=" css-vac8rf">April 1, 2024</p>
                              <p class=" css-vac8rf">Article</p>
                            </div>
                          </article>
                        </a>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-44">
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.articles_unified_description_page_recs_card" data-click-value="{&quot;href&quot;:&quot;/articles/will-ai-replace-programmers?trk_ref=articles_unified_description_page_recs_card&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;articles_unified_description_page_recs_card&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;slug&quot;:&quot;will-ai-replace-programmers&quot;,&quot;title&quot;:&quot;Will AI Replace Programmers and Software Engineers?&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="articles_unified_description_page_recs_card" data-track-href="/articles/will-ai-replace-programmers?trk_ref=articles_unified_description_page_recs_card" href="/articles/will-ai-replace-programmers?trk_ref=articles_unified_description_page_recs_card" to="/articles/will-ai-replace-programmers?trk_ref=articles_unified_description_page_recs_card" class="cds-119 cds-113 cds-115 css-9st4wk cds-142" aria-labelledby="recommended-article-will-ai-replace-programmers">
                          <article id="recommended-article-will-ai-replace-programmers" class="css-1klw6x6">
                            <div class="css-uzd580">
                              <h2 class="cds-119 css-1f1yzcm cds-121">Will AI Replace Programmers and Software Engineers?</h2>
                            </div>
                            <div class="css-16ov8w7">
                              <p class=" css-vac8rf">July 25, 2024</p>
                              <p class=" css-vac8rf">Article</p>
                            </div>
                          </article>
                        </a>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-44">
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.articles_unified_description_page_recs_card" data-click-value="{&quot;href&quot;:&quot;/articles/mern-stack?trk_ref=articles_unified_description_page_recs_card&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;articles_unified_description_page_recs_card&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;slug&quot;:&quot;mern-stack&quot;,&quot;title&quot;:&quot;MERN Stack: An Overview&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="articles_unified_description_page_recs_card" data-track-href="/articles/mern-stack?trk_ref=articles_unified_description_page_recs_card" href="/articles/mern-stack?trk_ref=articles_unified_description_page_recs_card" to="/articles/mern-stack?trk_ref=articles_unified_description_page_recs_card" class="cds-119 cds-113 cds-115 css-9st4wk cds-142" aria-labelledby="recommended-article-mern-stack">
                          <article id="recommended-article-mern-stack" class="css-1klw6x6">
                            <div class="css-uzd580">
                              <h2 class="cds-119 css-1f1yzcm cds-121">MERN Stack: An Overview</h2>
                            </div>
                            <div class="css-16ov8w7">
                              <p class=" css-vac8rf">November 29, 2023</p>
                              <p class=" css-vac8rf">Article</p>
                            </div>
                          </article>
                        </a>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-44">
                        <a data-click-key="unified_description_page.consumer_specialization_page.click.articles_unified_description_page_recs_card" data-click-value="{&quot;href&quot;:&quot;/articles/what-is-java-used-for?trk_ref=articles_unified_description_page_recs_card&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;articles_unified_description_page_recs_card&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;,&quot;slug&quot;:&quot;what-is-java-used-for&quot;,&quot;title&quot;:&quot;What Is Java Used For? &quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="articles_unified_description_page_recs_card" data-track-href="/articles/what-is-java-used-for?trk_ref=articles_unified_description_page_recs_card" href="/articles/what-is-java-used-for?trk_ref=articles_unified_description_page_recs_card" to="/articles/what-is-java-used-for?trk_ref=articles_unified_description_page_recs_card" class="cds-119 cds-113 cds-115 css-9st4wk cds-142" aria-labelledby="recommended-article-what-is-java-used-for">
                          <article id="recommended-article-what-is-java-used-for" class="css-1klw6x6">
                            <div class="css-uzd580">
                              <h2 class="cds-119 css-1f1yzcm cds-121">What Is Java Used For? </h2>
                            </div>
                            <div class="css-16ov8w7">
                              <p class=" css-vac8rf">November 21, 2023</p>
                              <p class=" css-vac8rf">Article</p>
                            </div>
                          </article>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="upsell_module" role="presentation">
            <div class="css-1m1jbp0">
              <div>
                <div class="cds-1 css-1h6rn6l cds-2 cds-7">
                  <div class="cds-9 css-1kspkkz cds-10">
                    <div class="cds-9 css-1i551o5 cds-11 cds-grid-item cds-56 cds-76">
                      <div class="css-petysq">
                        <div class="css-1211j4r">
                          <div class="lazyload-wrapper">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/dbbd1f929548aa2b3b38c0e6b2887a0f.png?auto=format%2Ccompress&amp;dpr=1&amp;w=1344&amp;h=548&amp;q=30" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/dbbd1f929548aa2b3b38c0e6b2887a0f.png?auto=format%2Ccompress&amp;dpr=2&amp;w=1344&amp;h=548&amp;q=30 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/dbbd1f929548aa2b3b38c0e6b2887a0f.png?auto=format%2Ccompress&amp;dpr=3&amp;w=1344&amp;h=548&amp;q=30 3x" width="1344" height="548" alt="" style="max-width: 1344px; max-height: 548px;">
                          </div>
                        </div>
                        <div class="css-pqnm3o">
                          <div class="css-zjgjcp">
                            <div class="lazyload-wrapper">
                              <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/7a1c0e2e779c1ff27cae62480adfe003.png?auto=format%2Ccompress&amp;dpr=1&amp;w=120&amp;h=15&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/7a1c0e2e779c1ff27cae62480adfe003.png?auto=format%2Ccompress&amp;dpr=2&amp;w=120&amp;h=15&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/7a1c0e2e779c1ff27cae62480adfe003.png?auto=format%2Ccompress&amp;dpr=3&amp;w=120&amp;h=15&amp;q=40 3x" alt="Coursera Plus" style="max-width: 120px; max-height: 15px;">
                            </div>
                          </div>
                        </div>
                        <div class="css-mn8oa">
                          <h2 class="cds-119 cds-Typography-base css-bbd009 cds-121">Open new doors with Coursera Plus</h2>
                        </div>
                        <div class="css-pejm4f">
                          <p class=" css-kimdhf">Unlimited access to 7,000+ world-class courses, hands-on projects, and job-ready certificate programs - all included in your subscription</p>
                        </div>
                        <div class="css-0">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.upsell_cta_courseraplus" data-click-value="{&quot;href&quot;:&quot;/courseraplus&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;upsell_cta_courseraplus&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="upsell_cta_courseraplus" data-track-href="/courseraplus" href="/courseraplus" to="/courseraplus" class="cds-119 cds-113 cds-115 css-1xlg85r cds-142" aria-label="Learn more about Coursera Plus">Learn more <span class="css-3mda7n">
                              <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-58" class="css-0">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="cds-9 css-1i551o5 cds-11 cds-grid-item cds-56 cds-76">
                      <div class="css-petysq">
                        <div class="css-ywjy7f">
                          <div class="lazyload-wrapper">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/5f44d3cc170f76b9fadb15e8592d4411.png?auto=format%2Ccompress&amp;dpr=1&amp;w=1344&amp;h=548&amp;q=30" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/5f44d3cc170f76b9fadb15e8592d4411.png?auto=format%2Ccompress&amp;dpr=2&amp;w=1344&amp;h=548&amp;q=30 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/5f44d3cc170f76b9fadb15e8592d4411.png?auto=format%2Ccompress&amp;dpr=3&amp;w=1344&amp;h=548&amp;q=30 3x" width="1344" height="548" alt="" style="max-width: 1344px; max-height: 548px;">
                          </div>
                        </div>
                        <div class="css-xvkb5i">
                          <h2 class="cds-119 cds-Typography-base css-1oqze1z cds-121">Advance your career with an online degree</h2>
                        </div>
                        <div class="css-pejm4f">
                          <p class=" css-4iw9bi">Earn a degree from world-class universities - 100% online</p>
                        </div>
                        <div class="css-0">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.upsell_cta_degrees" data-click-value="{&quot;href&quot;:&quot;/degrees&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;upsell_cta_degrees&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="upsell_cta_degrees" data-track-href="/degrees" href="/degrees" to="/degrees" class="cds-119 cds-113 cds-115 css-1wkncfe cds-142">Explore degrees <span class="css-3mda7n">
                              <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-59" class="css-0">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="cds-9 css-1i551o5 cds-11 cds-grid-item cds-56 cds-76">
                      <div class="css-petysq">
                        <div class="css-1211j4r">
                          <div class="lazyload-wrapper">
                            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/653449eb209c5cc24d2935ed5a0f18cd.png?auto=format%2Ccompress&amp;dpr=1&amp;w=1344&amp;h=548&amp;q=30" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/653449eb209c5cc24d2935ed5a0f18cd.png?auto=format%2Ccompress&amp;dpr=2&amp;w=1344&amp;h=548&amp;q=30 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/653449eb209c5cc24d2935ed5a0f18cd.png?auto=format%2Ccompress&amp;dpr=3&amp;w=1344&amp;h=548&amp;q=30 3x" width="1344" height="548" alt="" style="max-width: 1344px; max-height: 548px;">
                          </div>
                        </div>
                        <div class="css-xvkb5i">
                          <h2 class="cds-119 cds-Typography-base css-bbd009 cds-121">Join over 3,400 global companies that choose Coursera for Business</h2>
                        </div>
                        <div class="css-pejm4f">
                          <p class=" css-kimdhf">Upskill your employees to excel in the digital economy</p>
                        </div>
                        <div class="css-0">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.upsell_cta_enterprise" data-click-value="{&quot;href&quot;:&quot;/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-upsell-card&amp;utm_term=out&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;upsell_cta_enterprise&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="upsell_cta_enterprise" data-track-href="/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-upsell-card&amp;utm_term=out" href="/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-upsell-card&amp;utm_term=out" to="/business?utm_medium=coursera&amp;utm_source=xdp&amp;utm_campaign=website&amp;utm_content=c4b-xdp-upsell-card&amp;utm_term=out" class="cds-119 cds-113 cds-115 css-1nwoanv cds-142" aria-label="Learn more about Coursera for Business">Learn more <span class="css-3mda7n">
                              <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-60" class="css-0">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z" fill="currentColor"></path>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="css-1m1jbp0">
          <div>
            <div data-testid="" id="" class="css-box8pc"></div>
            <div class="css-1lzurvc">
              <div class="cds-1 css-1l2e5pk cds-2 cds-7" data-testid="block_layout">
                <div class="cds-9 css-1kspkkz cds-10 cds-19 cds-27">
                  <div class="cds-9 BlockLayout-contentGrid css-1qech6y cds-11 cds-grid-item cds-56">
                    <div class="cds-9 css-osw4ea cds-10">
                      <div class="cds-9 css-y8w9av cds-11 cds-grid-item cds-56">
                        <h2 class="cds-119 cds-Typography-base css-bbd009 cds-121">Frequently asked questions</h2>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-80">
                        <div class="css-1b1r969">
                          <div class="css-al6vf6">
                            <div class="" data-testid="accordion-item">
                              <div id="cds-react-aria-61" class="css-14b3dfn">
                                <div data-testid="visually-hidden" aria-live="polite" id="cds-react-aria-61-expanded-descriptor" tabindex="-1" class="css-1whdyhf"></div>
                                <div aria-label="Collapsed" class="cds-ShowMoreList-listContainer" id="cds-react-aria-61-listContainer" role="list">
                                  <div aria-posinset="1" aria-setsize="9" role="listitem">
                                    <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                      <div class="css-fgk7n6">
                                        <div class="cds-AccordionRoot-focusContainer">
                                          <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-62">
                                            <h3 aria-controls="cds-react-aria-62-accordion-panel" class="css-2i5uql">
                                              <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-62-accordion-header">
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-63">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                </svg>
                                                <div class="cds-AccordionHeader-content">
                                                  <div class="cds-AccordionHeader-labelGroup">
                                                    <span class=" css-6ecy9b">How long does it take to complete the Specialization?</span>
                                                  </div>
                                                </div>
                                              </button>
                                            </h3>
                                            <div class="cds-187 cds-189" style="min-height:0px">
                                              <div class="cds-190">
                                                <div class="cds-191">
                                                  <div aria-labelledby="cds-react-aria-62-accordion-header" id="cds-react-aria-62-accordion-panel" role="region">
                                                    <div class="css-gvhm8">
                                                      <div class="css-i3hxxx">
                                                        <div class="rc-CML" dir="auto">
                                                          <div data-testid="cml-viewer" class="css-140m8il">
                                                            <p>
                                                              <span>
                                                                <span>The specialization is composed by 5 courses with a total estimated workload of around 25 hours</span>
                                                              </span>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div aria-posinset="2" aria-setsize="9" role="listitem">
                                    <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                      <div class="css-fgk7n6">
                                        <div class="cds-AccordionRoot-focusContainer">
                                          <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-64">
                                            <h3 aria-controls="cds-react-aria-64-accordion-panel" class="css-2i5uql">
                                              <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-64-accordion-header">
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-65">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                </svg>
                                                <div class="cds-AccordionHeader-content">
                                                  <div class="cds-AccordionHeader-labelGroup">
                                                    <span class=" css-6ecy9b">What background knowledge is necessary?</span>
                                                  </div>
                                                </div>
                                              </button>
                                            </h3>
                                            <div class="cds-187 cds-189" style="min-height:0px">
                                              <div class="cds-190">
                                                <div class="cds-191">
                                                  <div aria-labelledby="cds-react-aria-64-accordion-header" id="cds-react-aria-64-accordion-panel" role="region">
                                                    <div class="css-gvhm8">
                                                      <div class="css-i3hxxx">
                                                        <div class="rc-CML" dir="auto">
                                                          <div data-testid="cml-viewer" class="css-140m8il">
                                                            <p>
                                                              <span>
                                                                <span>No recommended background/knowledge is required</span>
                                                              </span>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div aria-posinset="3" aria-setsize="9" role="listitem">
                                    <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                      <div class="css-fgk7n6">
                                        <div class="cds-AccordionRoot-focusContainer">
                                          <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-66">
                                            <h3 aria-controls="cds-react-aria-66-accordion-panel" class="css-2i5uql">
                                              <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-66-accordion-header">
                                                <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-67">
                                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                </svg>
                                                <div class="cds-AccordionHeader-content">
                                                  <div class="cds-AccordionHeader-labelGroup">
                                                    <span class=" css-6ecy9b">Do I need to take the courses in a specific order?</span>
                                                  </div>
                                                </div>
                                              </button>
                                            </h3>
                                            <div class="cds-187 cds-189" style="min-height:0px">
                                              <div class="cds-190">
                                                <div class="cds-191">
                                                  <div aria-labelledby="cds-react-aria-66-accordion-header" id="cds-react-aria-66-accordion-panel" role="region">
                                                    <div class="css-gvhm8">
                                                      <div class="css-i3hxxx">
                                                        <div class="rc-CML" dir="auto">
                                                          <div data-testid="cml-viewer" class="css-140m8il">
                                                            <p>
                                                              <span>
                                                                <span>No specific order required</span>
                                                              </span>
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="cds-187 cds-ShowMoreList-collapseContainer cds-189" style="min-height:0px">
                                    <div class="cds-190">
                                      <div class="cds-191">
                                        <div aria-hidden="true" aria-posinset="4" aria-setsize="9" class="cds-ShowMoreList-firstExpandedItem" role="listitem" tabindex="-1">
                                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                            <div class="css-fgk7n6">
                                              <div class="cds-AccordionRoot-focusContainer">
                                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-68">
                                                  <h3 aria-controls="cds-react-aria-68-accordion-panel" class="css-2i5uql">
                                                    <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-68-accordion-header">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-69">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="cds-AccordionHeader-content">
                                                        <div class="cds-AccordionHeader-labelGroup">
                                                          <span class=" css-6ecy9b">Will I earn university credit for completing the Specialization?</span>
                                                        </div>
                                                      </div>
                                                    </button>
                                                  </h3>
                                                  <div class="cds-187 cds-189" style="min-height:0px">
                                                    <div class="cds-190">
                                                      <div class="cds-191">
                                                        <div aria-labelledby="cds-react-aria-68-accordion-header" id="cds-react-aria-68-accordion-panel" role="region">
                                                          <div class="css-gvhm8">
                                                            <div class="css-i3hxxx">
                                                              <div class="rc-CML" dir="auto">
                                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                                  <p>
                                                                    <span>
                                                                      <span>This specialization does not confer any academic credit, grade or degree.</span>
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div aria-hidden="true" aria-posinset="5" aria-setsize="9" class="" role="listitem">
                                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                            <div class="css-fgk7n6">
                                              <div class="cds-AccordionRoot-focusContainer">
                                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-70">
                                                  <h3 aria-controls="cds-react-aria-70-accordion-panel" class="css-2i5uql">
                                                    <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-70-accordion-header">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-71">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="cds-AccordionHeader-content">
                                                        <div class="cds-AccordionHeader-labelGroup">
                                                          <span class=" css-6ecy9b">Is this course really 100% online? Do I need to attend any classes in person?</span>
                                                        </div>
                                                      </div>
                                                    </button>
                                                  </h3>
                                                  <div class="cds-187 cds-189" style="min-height:0px">
                                                    <div class="cds-190">
                                                      <div class="cds-191">
                                                        <div aria-labelledby="cds-react-aria-70-accordion-header" id="cds-react-aria-70-accordion-panel" role="region">
                                                          <div class="css-gvhm8">
                                                            <div class="css-i3hxxx">
                                                              <div class="rc-CML" dir="auto">
                                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                                  <p>
                                                                    <span>
                                                                      <span>This course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.</span>
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div aria-hidden="true" aria-posinset="6" aria-setsize="9" class="" role="listitem">
                                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                            <div class="css-fgk7n6">
                                              <div class="cds-AccordionRoot-focusContainer">
                                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-72">
                                                  <h3 aria-controls="cds-react-aria-72-accordion-panel" class="css-2i5uql">
                                                    <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-72-accordion-header">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-73">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="cds-AccordionHeader-content">
                                                        <div class="cds-AccordionHeader-labelGroup">
                                                          <span class=" css-6ecy9b">What is the refund policy?</span>
                                                        </div>
                                                      </div>
                                                    </button>
                                                  </h3>
                                                  <div class="cds-187 cds-189" style="min-height:0px">
                                                    <div class="cds-190">
                                                      <div class="cds-191">
                                                        <div aria-labelledby="cds-react-aria-72-accordion-header" id="cds-react-aria-72-accordion-panel" role="region">
                                                          <div class="css-gvhm8">
                                                            <div class="css-i3hxxx">
                                                              <div class="rc-CML" dir="auto">
                                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                                  <p>
                                                                    <span>
                                                                      <span>If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time. </span>
                                                                    </span>
                                                                    <span>
                                                                      <a target="_blank" rel="noopener nofollow noreferrer" href="https://learner.coursera.help/hc/en-us/articles/208280266-Refund-policies" class="css-o9h0g5" tabindex="0">
                                                                        <span>
                                                                          <span>See our full refund policy</span>
                                                                        </span>
                                                                        <svg aria-labelledby="cds-react-aria-74-title" fill="none" focusable="false" height="16" role="img" viewBox="0 0 16 16" width="16" class="css-1fxlwhd" id="cds-react-aria-74">
                                                                          <title id="cds-react-aria-74-title">Opens in a new tab</title>
                                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3.5H6v1H2.5v9h9V10h1v4.5h-11v-11zM13.5 2.5H10v-1h4.5V6h-1V2.5z" fill="currentColor"></path>
                                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 8.646l7-7 .708.708-7 7-.708-.708z" fill="currentColor"></path>
                                                                        </svg>
                                                                      </a>
                                                                    </span>
                                                                    <span>
                                                                      <span>.</span>
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div aria-hidden="true" aria-posinset="7" aria-setsize="9" class="" role="listitem">
                                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                            <div class="css-fgk7n6">
                                              <div class="cds-AccordionRoot-focusContainer">
                                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-75">
                                                  <h3 aria-controls="cds-react-aria-75-accordion-panel" class="css-2i5uql">
                                                    <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-75-accordion-header">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-76">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="cds-AccordionHeader-content">
                                                        <div class="cds-AccordionHeader-labelGroup">
                                                          <span class=" css-6ecy9b">Can I just enroll in a single course?</span>
                                                        </div>
                                                      </div>
                                                    </button>
                                                  </h3>
                                                  <div class="cds-187 cds-189" style="min-height:0px">
                                                    <div class="cds-190">
                                                      <div class="cds-191">
                                                        <div aria-labelledby="cds-react-aria-75-accordion-header" id="cds-react-aria-75-accordion-panel" role="region">
                                                          <div class="css-gvhm8">
                                                            <div class="css-i3hxxx">
                                                              <div class="rc-CML" dir="auto">
                                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                                  <p>
                                                                    <span>
                                                                      <span>Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. Visit your learner dashboard to track your progress.</span>
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div aria-hidden="true" aria-posinset="8" aria-setsize="9" class="" role="listitem">
                                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-d101lu" role="presentation">
                                            <div class="css-fgk7n6">
                                              <div class="cds-AccordionRoot-focusContainer">
                                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-77">
                                                  <h3 aria-controls="cds-react-aria-77-accordion-panel" class="css-2i5uql">
                                                    <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-77-accordion-header">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-78">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="cds-AccordionHeader-content">
                                                        <div class="cds-AccordionHeader-labelGroup">
                                                          <span class=" css-6ecy9b">Is financial aid available?</span>
                                                        </div>
                                                      </div>
                                                    </button>
                                                  </h3>
                                                  <div class="cds-187 cds-189" style="min-height:0px">
                                                    <div class="cds-190">
                                                      <div class="cds-191">
                                                        <div aria-labelledby="cds-react-aria-77-accordion-header" id="cds-react-aria-77-accordion-panel" role="region">
                                                          <div class="css-gvhm8">
                                                            <div class="css-i3hxxx">
                                                              <div class="rc-CML" dir="auto">
                                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                                  <p>
                                                                    <span>
                                                                      <span>Yes. In select learning programs, you can apply for financial aid or a scholarship if you can’t afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you’ll find a link to apply on the description page.</span>
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div aria-hidden="true" aria-posinset="9" aria-setsize="9" class="" role="listitem">
                                          <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_accordion" class="css-0" role="presentation">
                                            <div class="css-fgk7n6">
                                              <div class="cds-AccordionRoot-focusContainer">
                                                <div class="cds-AccordionRoot-container cds-AccordionRoot-silent" id="cds-react-aria-79">
                                                  <h3 aria-controls="cds-react-aria-79-accordion-panel" class="css-2i5uql">
                                                    <button class="cds-149 cds-AccordionHeader-button css-1wk81cj" tabindex="0" type="button" aria-expanded="false" id="cds-react-aria-79-accordion-header">
                                                      <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" class="cds-AccordionHeader-chevron css-0" id="cds-react-aria-80">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.293 10L5.646 1.354l.708-.708L15.707 10l-9.353 9.354-.708-.707L14.293 10z" fill="currentColor"></path>
                                                      </svg>
                                                      <div class="cds-AccordionHeader-content">
                                                        <div class="cds-AccordionHeader-labelGroup">
                                                          <span class=" css-6ecy9b">Can I take the course for free?</span>
                                                        </div>
                                                      </div>
                                                    </button>
                                                  </h3>
                                                  <div class="cds-187 cds-189" style="min-height:0px">
                                                    <div class="cds-190">
                                                      <div class="cds-191">
                                                        <div aria-labelledby="cds-react-aria-79-accordion-header" id="cds-react-aria-79-accordion-panel" role="region">
                                                          <div class="css-gvhm8">
                                                            <div class="css-i3hxxx">
                                                              <div class="rc-CML" dir="auto">
                                                                <div data-testid="cml-viewer" class="css-140m8il">
                                                                  <p>
                                                                    <span>
                                                                      <span>When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free. If you cannot afford the fee, </span>
                                                                    </span>
                                                                    <span>
                                                                      <a target="_blank" rel="noopener nofollow noreferrer" href="https://learner.coursera.help/hc/en-us/articles/209819033-Apply-for-Financial-Aid" class="css-o9h0g5" tabindex="0">
                                                                        <span>
                                                                          <span>you can apply for financial aid</span>
                                                                        </span>
                                                                        <svg aria-labelledby="cds-react-aria-81-title" fill="none" focusable="false" height="16" role="img" viewBox="0 0 16 16" width="16" class="css-1fxlwhd" id="cds-react-aria-81">
                                                                          <title id="cds-react-aria-81-title">Opens in a new tab</title>
                                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 3.5H6v1H2.5v9h9V10h1v4.5h-11v-11zM13.5 2.5H10v-1h4.5V6h-1V2.5z" fill="currentColor"></path>
                                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 8.646l7-7 .708.708-7 7-.708-.708z" fill="currentColor"></path>
                                                                        </svg>
                                                                      </a>
                                                                    </span>
                                                                    <span>
                                                                      <span>.</span>
                                                                    </span>
                                                                  </p>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button class="cds-149 cds-ShowMoreList-ctaButton cds-button-disableElevation cds-button-ghost css-1s96oj" tabindex="0" type="button" aria-controls="cds-react-aria-61-listContainer" aria-expanded="false" aria-label="9 frequently asked questions">
                                  <span class="cds-button-label">
                                    <span class="cds-button-startIcon">
                                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="cds-ShowMoreList-ctaIcon css-0" id="cds-react-aria-82">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.293 8L4.646 1.354l.708-.708L12.707 8l-7.353 7.354-.708-.707L11.293 8z" fill="currentColor"></path>
                                      </svg>
                                    </span>Show all 9 frequently asked questions </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="cds-9 css-0 cds-11 cds-grid-item cds-56 cds-76">
                        <div class="css-f8uo3r">
                          <div class="css-juy9sj">
                            <svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-83" class="css-0">
                              <g clip-path="url(#cds-react-aria-83_0)" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM.5 10a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path>
                                <path d="M10 15.78a.87.87 0 100-1.74.87.87 0 000 1.74zM10 4.38a3.26 3.26 0 00-3.32 3.19v.22h1v-.22a2.32 2.32 0 014.64 0 2.162 2.162 0 01-.68 1.58l-1.08 1a3.08 3.08 0 00-1 2.26v.22h1v-.22a2.16 2.16 0 01.68-1.57l1.08-1a3.1 3.1 0 001-2.26A3.26 3.26 0 0010 4.38z"></path>
                              </g>
                              <defs>
                                <clipPath id="cds-react-aria-83_0">
                                  <path fill="#fff" d="M0 0h20v20H0z"></path>
                                </clipPath>
                              </defs>
                            </svg>
                            <div class="css-1dkarxs">
                              <div class="css-w1uga4">
                                <h3 class="cds-119 cds-Typography-base css-h1jogs cds-121">More questions</h3>
                              </div>
                              <div data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="faq_help_center_link" class="css-b0z14z" role="presentation">
                                <a class="cds-119 cds-113 cds-115 css-1ibxsrf cds-142" href="https://learner.coursera.help/hc/" target="_blank">Visit the learner help center</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-e2e="mobile-cta-module" class="css-10wbtda">
          <div class="with-enroll-modal">
            <div class="css-e8gb4c">
              <form action="/specializations/artificial-intelligence-overview" method="GET" class="css-1y2xaj9">
                <input type="hidden" name="action" value="enroll">
                <button class="cds-149 cds-button-disableElevation cds-button-primary css-1ma56ty" tabindex="0" type="submit" data-e2e="enroll-button" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="enroll_button" aria-disabled="false">
                  <span class="cds-button-label">
                    <div>
                      <span data-test="enroll-button-label">Enroll for Free</span>
                      <div class="startdate rc-StartDateString font-xs" data-test="start-date-string">
                        <span>Starts Sep 1</span>
                      </div>
                    </div>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="rc-S12nXDPSchemaMarkup">
          <div>
            <script type="application/ld+json">
              {
                "@context": "http://schema.org",
                "@graph": [{
                  "@type": "BreadcrumbList",
                  "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                      "name": "Browse",
                      "@id": "https://www.coursera.org/browse"
                    }
                  }, {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                      "name": "Computer Science",
                      "@id": "https://www.coursera.org/browse/computer-science"
                    }
                  }, {
                    "@type": "ListItem",
                    "position": 3,
                    "item": {
                      "name": "Algorithms",
                      "@id": "https://www.coursera.org/browse/computer-science/algorithms#specialization"
                    }
                  }]
                }, {
                  "@id": "https://www.coursera.org/specializations/artificial-intelligence-overview#specialization",
                  "@type": "Course",
                  "name": "Artificial Intelligence: an Overview",
                  "url": "https://www.coursera.org/specializations/artificial-intelligence-overview",
                  "About": {
                    "@type": "Thing",
                    "name": ["Artificial Intelligence (AI)", "Ethical issues of artificial intelligence", "Machine Learning", "Legal issues of artificial intelligence"],
                    "subjectOf": "Artificial Intelligence: an Overview"
                  },
                  "description": "Offered by Politecnico di Milano. Enter the artificial intelligence world Enroll for free.",
                  "provider": {
                    "@id": "https://www.coursera.org/polimi#institution",
                    "@type": "CollegeOrUniversity",
                    "name": "Politecnico di Milano",
                    "url": "https://www.coursera.org/polimi",
                    "sameAs": "http://www.polimi.it/en/"
                  },
                  "image": "https://d15cw65ipctsrr.cloudfront.net/04/1e468b2a7846abad7984b0022dca1a/AI_Specialization-Logo.png",
                  "offers": {
                    "@type": "Offer",
                    "category": "Subscription"
                  },
                  "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "Online",
                    "courseWorkload": "P1M"
                  },
                  "educationalCredentialAwarded": "Coursera Certificate",
                  "isAccessibleForFree": "http://schema.org/True",
                  "inLanguage": "en",
                  "timeRequired": "P1M",
                  "hasPart": [{
                    "@id": "https://www.coursera.org/learn/artificial-intelligence-an-overview#mooc",
                    "@type": "Course",
                    "name": "Artificial Intelligence: An Overview",
                    "description": "Offered by Politecnico di Milano. The course will provide a non-technical overview of the artificial intelligence field. Initially, a ... Enroll for free.",
                    "provider": {
                      "@id": "https://www.coursera.org/polimi#institution",
                      "@type": "CollegeOrUniversity",
                      "name": "Politecnico di Milano",
                      "url": "https://www.coursera.org/polimi",
                      "sameAs": "http://www.polimi.it/en/"
                    }
                  }, {
                    "@id": "https://www.coursera.org/learn/ethics-of-artificial-intelligence#mooc",
                    "@type": "Course",
                    "name": "Ethics of Artificial Intelligence",
                    "description": "Offered by Politecnico di Milano. This course deals with the problems created, aggravated or transformed by AI. It is intended to give ... Enroll for free.",
                    "provider": {
                      "@id": "https://www.coursera.org/polimi#institution",
                      "@type": "CollegeOrUniversity",
                      "name": "Politecnico di Milano",
                      "url": "https://www.coursera.org/polimi",
                      "sameAs": "http://www.polimi.it/en/"
                    }
                  }, {
                    "@id": "https://www.coursera.org/learn/artificial-intelligence-and-legal-issues#mooc",
                    "@type": "Course",
                    "name": "Artificial Intelligence and legal issues",
                    "description": "Offered by Politecnico di Milano. The purpose of the course is to help students understand the legal implications related to the design and ... Enroll for free.",
                    "provider": {
                      "@id": "https://www.coursera.org/polimi#institution",
                      "@type": "CollegeOrUniversity",
                      "name": "Politecnico di Milano",
                      "url": "https://www.coursera.org/polimi",
                      "sameAs": "http://www.polimi.it/en/"
                    }
                  }, {
                    "@id": "https://www.coursera.org/learn/technologies-and-platforms-for-artificial-intelligence#mooc",
                    "@type": "Course",
                    "name": "Technologies and platforms for Artificial Intelligence",
                    "description": "Offered by Politecnico di Milano. This course will address the hardware technologies for machine and deep learning (from the units of an ... Enroll for free.",
                    "provider": {
                      "@id": "https://www.coursera.org/polimi#institution",
                      "@type": "CollegeOrUniversity",
                      "name": "Politecnico di Milano",
                      "url": "https://www.coursera.org/polimi",
                      "sameAs": "http://www.polimi.it/en/"
                    }
                  }, {
                    "@id": "https://www.coursera.org/learn/machine-learning-overview#mooc",
                    "@type": "Course",
                    "name": "Machine Learning: an overview",
                    "description": "Offered by Politecnico di Milano. The course provides a general overview of the main methods in the machine learning field. Starting from a ... Enroll for free.",
                    "provider": {
                      "@id": "https://www.coursera.org/polimi#institution",
                      "@type": "CollegeOrUniversity",
                      "name": "Politecnico di Milano",
                      "url": "https://www.coursera.org/polimi",
                      "sameAs": "http://www.polimi.it/en/"
                    }
                  }],
                  "educationalLevel": "Beginner",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": 4.587628865979381,
                    "bestRating": 5,
                    "ratingCount": 150
                  }
                }]
              }
            </script>
          </div>
        </div>
      </main>
      <div class="page-footer-container" role="contentinfo">
        <footer class="rc-SeoGlobalFooter lohp-rebrand stickyBar" data-e2e="page-footer" data-catchpoint="page-footer">
          <p class="cds-119 sr-only css-1825nsb cds-121">Coursera Footer</p>
          <div class="cds-1 css-1cxrrkn cds-2 cds-7">
            <div class="cds-9 css-1kspkkz cds-10">
              <div class="cds-9 rc-SeoGlobalFooter__content lohp-rebrand css-0 cds-10">
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">Get Started with AI</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/learn/generative-ai-with-llms&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/learn/generative-ai-with-llms" href="https://www.coursera.org/learn/generative-ai-with-llms" to="https://www.coursera.org/learn/generative-ai-with-llms" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~d2e34cc6cfa2677f22b0573779173e7c">AWS &amp; DLAI GenAI with LLMs Course</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/learn/ai-for-everyone&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/learn/ai-for-everyone" href="https://www.coursera.org/learn/ai-for-everyone" to="https://www.coursera.org/learn/ai-for-everyone" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~9a1e180d0aa10a751980286b7b892b41">DLAI AI For Everyone Course</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/specializations/deep-learning&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/specializations/deep-learning" href="https://www.coursera.org/specializations/deep-learning" to="https://www.coursera.org/specializations/deep-learning" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~1f7e142abc758bc8eab4e5f3da01356e">DLAI Deep Learning Specialization</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/specializations/natural-language-processing&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/specializations/natural-language-processing" href="https://www.coursera.org/specializations/natural-language-processing" to="https://www.coursera.org/specializations/natural-language-processing" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~6cda0be5ab57f3ada556698d2e9b1571">DLAI NLP Specialization</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/learn/google-ai-essentials&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/learn/google-ai-essentials" href="https://www.coursera.org/learn/google-ai-essentials" to="https://www.coursera.org/learn/google-ai-essentials" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~9a23e990820d17e1f4b29f39e66435e7">Google AI Essentials Course</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/learn/introduction-to-generative-ai&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/learn/introduction-to-generative-ai" href="https://www.coursera.org/learn/introduction-to-generative-ai" to="https://www.coursera.org/learn/introduction-to-generative-ai" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~9503213c50925107dafff097c7802ac0">Google Cloud Introduction to Generative AI Course</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/specializations/generative-ai-for-everyone&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/specializations/generative-ai-for-everyone" href="https://www.coursera.org/specializations/generative-ai-for-everyone" to="https://www.coursera.org/specializations/generative-ai-for-everyone" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~2ac77861fab595da234b92533e73bff8">IBM Generative AI Fundamentals Specialization</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/specializations/ai-healthcare&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/specializations/ai-healthcare" href="https://www.coursera.org/specializations/ai-healthcare" to="https://www.coursera.org/specializations/ai-healthcare" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~cd5466e8e4ab2a2c98bba91d47e5826f">Stanford AI in Healthcare Specialization</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/specializations/machine-learning-introduction&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/specializations/machine-learning-introduction" href="https://www.coursera.org/specializations/machine-learning-introduction" to="https://www.coursera.org/specializations/machine-learning-introduction" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~0208be2b7b6b206aa56503ac4ea14282">Stanford Machine Learning Specialization</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/learn/prompt-engineering&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/learn/prompt-engineering" href="https://www.coursera.org/learn/prompt-engineering" to="https://www.coursera.org/learn/prompt-engineering" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~2dbcc40bb697c70308ffa06620ca40dc">Vanderbilt Prompt Engineering for ChatGPT Course</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">Popular Career Certificates</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/google-cybersecurity&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/google-cybersecurity" href="https://www.coursera.org/professional-certificates/google-cybersecurity" to="https://www.coursera.org/professional-certificates/google-cybersecurity" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~2286d72338df5453d0c18c780dec50b9">Google Cybersecurity Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/google-data-analytics&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/google-data-analytics" href="https://www.coursera.org/professional-certificates/google-data-analytics" to="https://www.coursera.org/professional-certificates/google-data-analytics" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~092a9fd8c047283edc351b6cbd181385">Google Data Analytics Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce" href="https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce" to="https://www.coursera.org/professional-certificates/google-digital-marketing-ecommerce" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~8e8928efd59c8906788f4248b2cb7136">Google Digital Marketing Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/google-project-management&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/google-project-management" href="https://www.coursera.org/professional-certificates/google-project-management" to="https://www.coursera.org/professional-certificates/google-project-management" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~4bddba7141bbb4f82ac4ebe0b329fcc8">Google Project Management Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/google-ux-design&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/google-ux-design" href="https://www.coursera.org/professional-certificates/google-ux-design" to="https://www.coursera.org/professional-certificates/google-ux-design" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~ba4c7395feeb48a8e8b933851baabf12">Google UX Design Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/ibm-data-analyst&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/ibm-data-analyst" href="https://www.coursera.org/professional-certificates/ibm-data-analyst" to="https://www.coursera.org/professional-certificates/ibm-data-analyst" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~80d183279b64712468a3c5e436fe9d3e">IBM Data Analyst Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/ibm-data-science&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/ibm-data-science" href="https://www.coursera.org/professional-certificates/ibm-data-science" to="https://www.coursera.org/professional-certificates/ibm-data-science" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~54174316ca9561a1dcf67923c1d0d1c2">IBM Data Science Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst" href="https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst" to="https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~47f2b396c939ff25c2e822383beca0d1">Meta Front-End Developer Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates/meta-front-end-developer&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates/meta-front-end-developer" href="https://www.coursera.org/professional-certificates/meta-front-end-developer" to="https://www.coursera.org/professional-certificates/meta-front-end-developer" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~9fde9cb3ce146d42890dd988fa57c3d2">Microsoft Power BI Data Analyst Professional Certificate</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/professional-certificates&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/professional-certificates" href="https://www.coursera.org/professional-certificates" to="https://www.coursera.org/professional-certificates" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~c679804add4c0321dae26ace7eee2957">All Career Certificates</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">Popular Subjects</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=artificial%20intelligence&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=artificial%20intelligence" href="https://www.coursera.org/courses?query=artificial%20intelligence" to="https://www.coursera.org/courses?query=artificial%20intelligence" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06">Artificial Intelligence</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=cybersecurity&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=cybersecurity" href="https://www.coursera.org/courses?query=cybersecurity" to="https://www.coursera.org/courses?query=cybersecurity" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~e1fe414cd0a606f7baa91b4cf44d8e9b">Cybersecurity</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=data+analytics&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=data+analytics" href="https://www.coursera.org/courses?query=data+analytics" to="https://www.coursera.org/courses?query=data+analytics" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~b3b38888e9749ad7b54518309250f431">Data Analytics</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=data%20science&amp;topic=Data%20Science&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=data%20science&amp;topic=Data%20Science" href="https://www.coursera.org/courses?query=data%20science&amp;topic=Data%20Science" to="https://www.coursera.org/courses?query=data%20science&amp;topic=Data%20Science" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~fcc3465bf9234e748c0cc5de4f2743f7">Data Science</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=digital+marketing&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=digital+marketing" href="https://www.coursera.org/courses?query=digital+marketing" to="https://www.coursera.org/courses?query=digital+marketing" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~11195e986632c63bafdb5eaf2197736e">Digital Marketing</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=generative%20ai&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=generative%20ai" href="https://www.coursera.org/courses?query=generative%20ai" to="https://www.coursera.org/courses?query=generative%20ai" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~377a99232ffd1f4e8dd6d53441212a43">Generative AI</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=machine%20learning&amp;skills=Machine%20Learning&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=machine%20learning&amp;skills=Machine%20Learning" href="https://www.coursera.org/courses?query=machine%20learning&amp;skills=Machine%20Learning" to="https://www.coursera.org/courses?query=machine%20learning&amp;skills=Machine%20Learning" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~cd88a704ac0e7a4ce1ed592131f16865">Machine Learning</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=microsoft%20excel&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=microsoft%20excel" href="https://www.coursera.org/courses?query=microsoft%20excel" to="https://www.coursera.org/courses?query=microsoft%20excel" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~be613256288cd9a1f1339176312fd4e6">Microsoft Excel</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=project+management&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=project+management" href="https://www.coursera.org/courses?query=project+management" to="https://www.coursera.org/courses?query=project+management" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~a2b5322aad7599a116e14d431c886510">Project Management</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=python&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=python" href="https://www.coursera.org/courses?query=python" to="https://www.coursera.org/courses?query=python" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~560cbcfb36b7ddc9e281150040ee32a4">Python</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses" href="https://www.coursera.org/courses" to="https://www.coursera.org/courses" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~8408097678b192a67ae6d5c71a376b56">All Courses</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">Popular Resources</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/how-to-become-a-data-analyst&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/how-to-become-a-data-analyst" href="https://www.coursera.org/articles/how-to-become-a-data-analyst" to="https://www.coursera.org/articles/how-to-become-a-data-analyst" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~70be2012c18e33b04f12be4750c6dd30">How to Become a Data Analyst</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/the-pmp-certification-a-guide-to-getting-started&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/the-pmp-certification-a-guide-to-getting-started" href="https://www.coursera.org/articles/the-pmp-certification-a-guide-to-getting-started" to="https://www.coursera.org/articles/the-pmp-certification-a-guide-to-getting-started" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~bfc22a6e5def30d561267286d1a08c75">How to Get a PMP Certification</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/popular-cybersecurity-certifications&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/popular-cybersecurity-certifications" href="https://www.coursera.org/articles/popular-cybersecurity-certifications" to="https://www.coursera.org/articles/popular-cybersecurity-certifications" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~7e00c743b1465955ffbade2b7f389efa">Popular Cybersecurity Certifications</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/data-analytics-certification&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/data-analytics-certification" href="https://www.coursera.org/articles/data-analytics-certification" to="https://www.coursera.org/articles/data-analytics-certification" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~4390961cd8c9a24a58ea06e35d547fc1">Popular Data Analytics Certifications</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/essential-it-certifications-entry-level-and-beginner&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/essential-it-certifications-entry-level-and-beginner" href="https://www.coursera.org/articles/essential-it-certifications-entry-level-and-beginner" to="https://www.coursera.org/articles/essential-it-certifications-entry-level-and-beginner" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~9d148c9333f67fa587912dfc416f7eef">Popular IT Certifications</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/machine-learning-certification&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/machine-learning-certification" href="https://www.coursera.org/articles/machine-learning-certification" to="https://www.coursera.org/articles/machine-learning-certification" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~f520f37535ba0241ea47c021b93944cf">Popular Machine Learning Certifications</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles/sql-certifications-for-your-data-career&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles/sql-certifications-for-your-data-career" href="https://www.coursera.org/articles/sql-certifications-for-your-data-career" to="https://www.coursera.org/articles/sql-certifications-for-your-data-career" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~42a00cee499f7039ad9f4c90f366e55b">Popular SQL Certifications</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/explore/genai-for-software-development&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/explore/genai-for-software-development" href="https://www.coursera.org/explore/genai-for-software-development" to="https://www.coursera.org/explore/genai-for-software-development" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~5558e6a344747bf4298b1c0624646db4">GenAI for Software Developers</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/explore/genai-for-data-professionals&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/explore/genai-for-data-professionals" href="https://www.coursera.org/explore/genai-for-data-professionals" to="https://www.coursera.org/explore/genai-for-data-professionals" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~f6ac5ed4930ecceb8f073c30e6b6fe4d">GenAI for Data Professionals</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles" href="https://www.coursera.org/articles" to="https://www.coursera.org/articles" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~d5d4d50d544e1765e445f654e6ca684c">Career Insights &amp; Advice Hub</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">Coursera</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://about.coursera.org/&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://about.coursera.org/" href="https://about.coursera.org/" to="https://about.coursera.org/" class="rc-SubFooterSection__content-column-link-text">About</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://about.coursera.org/how-coursera-works/&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://about.coursera.org/how-coursera-works/" href="https://about.coursera.org/how-coursera-works/" to="https://about.coursera.org/how-coursera-works/" class="rc-SubFooterSection__content-column-link-text">What We Offer</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://about.coursera.org/leadership&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://about.coursera.org/leadership" href="https://about.coursera.org/leadership" to="https://about.coursera.org/leadership" class="rc-SubFooterSection__content-column-link-text">Leadership</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://careers.coursera.com/&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://careers.coursera.com/" href="https://careers.coursera.com/" to="https://careers.coursera.com/" class="rc-SubFooterSection__content-column-link-text">Careers</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/browse&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/browse" href="/browse" to="/browse" class="rc-SubFooterSection__content-column-link-text">Catalog</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/courseraplus&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/courseraplus" href="/courseraplus" to="/courseraplus" class="rc-SubFooterSection__content-column-link-text">Coursera Plus</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/professional-certificate&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/professional-certificate" href="/professional-certificate" to="/professional-certificate" class="rc-SubFooterSection__content-column-link-text">Professional Certificates</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/mastertrack&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/mastertrack" href="/mastertrack" to="/mastertrack" class="rc-SubFooterSection__content-column-link-text">MasterTrack® Certificates</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/degrees&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/degrees" href="/degrees" to="/degrees" class="rc-SubFooterSection__content-column-link-text">Degrees</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/business?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-enterprise&amp;utm_medium=coursera&amp;utm_source=enterprise&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/business?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-enterprise&amp;utm_medium=coursera&amp;utm_source=enterprise" href="/business?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-enterprise&amp;utm_medium=coursera&amp;utm_source=enterprise" to="/business?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-enterprise&amp;utm_medium=coursera&amp;utm_source=enterprise" class="rc-SubFooterSection__content-column-link-text">For Enterprise</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/government?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-government&amp;utm_medium=coursera&amp;utm_source=enterprise&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/government?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-government&amp;utm_medium=coursera&amp;utm_source=enterprise" href="/government?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-government&amp;utm_medium=coursera&amp;utm_source=enterprise" to="/government?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-government&amp;utm_medium=coursera&amp;utm_source=enterprise" class="rc-SubFooterSection__content-column-link-text">For Government</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/campus?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-campus&amp;utm_medium=coursera&amp;utm_source=enterprise&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/campus?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-campus&amp;utm_medium=coursera&amp;utm_source=enterprise" href="/campus?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-campus&amp;utm_medium=coursera&amp;utm_source=enterprise" to="/campus?utm_campaign=website&amp;utm_content=corp-to-home-footer-for-campus&amp;utm_medium=coursera&amp;utm_source=enterprise" class="rc-SubFooterSection__content-column-link-text">For Campus</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://partnerships.coursera.org/?utm_medium=coursera&amp;utm_source=partnerships&amp;utm_campaign=website&amp;utm_content=corp-to-home-footer-become-a-partner&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://partnerships.coursera.org/?utm_medium=coursera&amp;utm_source=partnerships&amp;utm_campaign=website&amp;utm_content=corp-to-home-footer-become-a-partner" href="https://partnerships.coursera.org/?utm_medium=coursera&amp;utm_source=partnerships&amp;utm_campaign=website&amp;utm_content=corp-to-home-footer-become-a-partner" to="https://partnerships.coursera.org/?utm_medium=coursera&amp;utm_source=partnerships&amp;utm_campaign=website&amp;utm_content=corp-to-home-footer-become-a-partner" class="rc-SubFooterSection__content-column-link-text">Become a Partner</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/social-impact&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/social-impact" href="/social-impact" to="/social-impact" class="rc-SubFooterSection__content-column-link-text">Social Impact</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/courses?query=free&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/courses?query=free" href="https://www.coursera.org/courses?query=free" to="https://www.coursera.org/courses?query=free" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~09f2f10c10976ef1bd695faec2a91a4c">Free Courses</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/explore/ects-credit-recommendation&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/explore/ects-credit-recommendation" href="https://www.coursera.org/explore/ects-credit-recommendation" to="https://www.coursera.org/explore/ects-credit-recommendation" class="rc-SubFooterSection__content-column-link-text" __typename="Seo_ComponentLink" id="ComponentLink~ec65139883d0e2169d45f6b64fb6c0dd">ECTS Credit Recommendations</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">Community</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.community&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.community" href="https://www.coursera.community" to="https://www.coursera.community" class="rc-SubFooterSection__content-column-link-text">Learners</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/partners&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/partners" href="https://www.coursera.org/partners" to="https://www.coursera.org/partners" class="rc-SubFooterSection__content-column-link-text">Partners</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.support/s/article/360000152926-Become-a-Coursera-beta-tester&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.support/s/article/360000152926-Become-a-Coursera-beta-tester" href="https://www.coursera.support/s/article/360000152926-Become-a-Coursera-beta-tester" to="https://www.coursera.support/s/article/360000152926-Become-a-Coursera-beta-tester" class="rc-SubFooterSection__content-column-link-text">Beta Testers</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://blog.coursera.org&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://blog.coursera.org" href="https://blog.coursera.org" to="https://blog.coursera.org" class="rc-SubFooterSection__content-column-link-text" target="_blank" rel="noopener noreferrer">Blog</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://open.spotify.com/show/58M36bneU7REOofdPZxe6A&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://open.spotify.com/show/58M36bneU7REOofdPZxe6A" href="https://open.spotify.com/show/58M36bneU7REOofdPZxe6A" to="https://open.spotify.com/show/58M36bneU7REOofdPZxe6A" class="rc-SubFooterSection__content-column-link-text">The Coursera Podcast</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://medium.com/coursera-engineering&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://medium.com/coursera-engineering" href="https://medium.com/coursera-engineering" to="https://medium.com/coursera-engineering" class="rc-SubFooterSection__content-column-link-text" target="_blank" rel="noopener noreferrer">Tech Blog</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/teaching-center&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/teaching-center" href="/teaching-center" to="/teaching-center" class="rc-SubFooterSection__content-column-link-text" target="_blank" rel="noopener noreferrer">Teaching Center</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 rc-SubFooterSection lohp-rebrand css-0 cds-11 cds-grid-item cds-61">
                  <p class="rc-SubFooterSection__header lohp-rebrand css-6ecy9b">More</p>
                  <ul class="rc-SubFooterSection__content-column-links" role="list">
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/about/press&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/about/press" href="/about/press" to="/about/press" class="rc-SubFooterSection__content-column-link-text">Press</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://investor.coursera.com&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://investor.coursera.com" href="https://investor.coursera.com" to="https://investor.coursera.com" class="rc-SubFooterSection__content-column-link-text">Investors</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/about/terms&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/about/terms" href="/about/terms" to="/about/terms" class="rc-SubFooterSection__content-column-link-text">Terms</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/about/privacy&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/about/privacy" href="/about/privacy" to="/about/privacy" class="rc-SubFooterSection__content-column-link-text">Privacy</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://learner.coursera.help/hc&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://learner.coursera.help/hc" href="https://learner.coursera.help/hc" to="https://learner.coursera.help/hc" class="rc-SubFooterSection__content-column-link-text">Help</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://learner.coursera.help/hc/articles/360050668591-Accessibility-Statement&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://learner.coursera.help/hc/articles/360050668591-Accessibility-Statement" href="https://learner.coursera.help/hc/articles/360050668591-Accessibility-Statement" to="https://learner.coursera.help/hc/articles/360050668591-Accessibility-Statement" class="rc-SubFooterSection__content-column-link-text">Accessibility</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/about/contact&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/about/contact" href="/about/contact" to="/about/contact" class="rc-SubFooterSection__content-column-link-text">Contact</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://www.coursera.org/articles&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://www.coursera.org/articles" href="https://www.coursera.org/articles" to="https://www.coursera.org/articles" class="rc-SubFooterSection__content-column-link-text">Articles</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/directory&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/directory" href="/directory" to="/directory" class="rc-SubFooterSection__content-column-link-text">Directory</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://about.coursera.org/affiliates&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://about.coursera.org/affiliates" href="https://about.coursera.org/affiliates" to="https://about.coursera.org/affiliates" class="rc-SubFooterSection__content-column-link-text">Affiliates</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;https://coursera_assets.s3.amazonaws.com/footer/Modern+Slavery+Statement+(April+2024).pdf&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="https://coursera_assets.s3.amazonaws.com/footer/Modern+Slavery+Statement+(April+2024).pdf" href="https://coursera_assets.s3.amazonaws.com/footer/Modern+Slavery+Statement+(April+2024).pdf" to="https://coursera_assets.s3.amazonaws.com/footer/Modern+Slavery+Statement+(April+2024).pdf" class="rc-SubFooterSection__content-column-link-text" target="_blank" rel="noopener noreferrer">Modern Slavery Statement</a>
                    </li>
                    <li class="rc-SubFooterSection__content-column-link-item lohp-rebrand" role="listitem">
                      <a data-click-key="unified_description_page.consumer_specialization_page.click.seo_directory_link" data-click-value="{&quot;href&quot;:&quot;/about/cookies-manage&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;seo_directory_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="seo_directory_link" data-track-href="/about/cookies-manage" href="/about/cookies-manage" to="/about/cookies-manage" class="rc-SubFooterSection__content-column-link-text">Manage Cookie Preferences</a>
                    </li>
                  </ul>
                </div>
                <div class="cds-9 css-0 cds-11 cds-grid-item cds-61">
                  <div class="rc-SeoGlobalFooter__mobile-badges-column-text">Learn Anywhere</div>
                  <div class="cds-9 mobile-app-badges mobile-app-badges--justify-between css-p2g82x cds-11 cds-grid-item">
                    <a data-click-key="unified_description_page.consumer_specialization_page.click.mobile_app_badges_ios" data-click-value="{&quot;href&quot;:&quot;https://itunes.apple.com/app/apple-store/id736535961?pt=2334150&amp;ct=Coursera%20Web%20Promo%20Banner&amp;mt=8&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;mobile_app_badges_ios&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="mobile_app_badges_ios" data-track-href="https://itunes.apple.com/app/apple-store/id736535961?pt=2334150&amp;ct=Coursera%20Web%20Promo%20Banner&amp;mt=8" href="https://itunes.apple.com/app/apple-store/id736535961?pt=2334150&amp;ct=Coursera%20Web%20Promo%20Banner&amp;mt=8" to="https://itunes.apple.com/app/apple-store/id736535961?pt=2334150&amp;ct=Coursera%20Web%20Promo%20Banner&amp;mt=8" class="_wwcfwz mobile-badge _wwcfwz subfooter-mobile-badge" data-platform="ios">
                      <div class="css-12fajai">
                        <div class="lazyload-wrapper">
                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&amp;dpr=1&amp;w=152&amp;h=45&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&amp;dpr=2&amp;w=152&amp;h=45&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg?auto=format%2Ccompress&amp;dpr=3&amp;w=152&amp;h=45&amp;q=40 3x" width="152" height="45" alt="Download on the App Store" style="max-width: 152px; max-height: 45px;">
                        </div>
                      </div>
                    </a>
                    <a data-click-key="unified_description_page.consumer_specialization_page.click.mobile_app_badges_android" data-click-value="{&quot;href&quot;:&quot;http://play.google.com/store/apps/details?id=org.coursera.android&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;mobile_app_badges_android&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="mobile_app_badges_android" data-track-href="http://play.google.com/store/apps/details?id=org.coursera.android" href="http://play.google.com/store/apps/details?id=org.coursera.android" to="http://play.google.com/store/apps/details?id=org.coursera.android" class="mobile-badge _wwcfwz subfooter-mobile-badge" data-platform="android">
                      <div class="css-12fajai">
                        <div class="lazyload-wrapper">
                          <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&amp;dpr=1&amp;w=152&amp;h=45&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&amp;dpr=2&amp;w=152&amp;h=45&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png?auto=format%2Ccompress&amp;dpr=3&amp;w=152&amp;h=45&amp;q=40 3x" width="152" height="45" alt="Get it on Google Play" style="max-width: 152px; max-height: 45px;">
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="b-corp-logo css-15utrac">
                    <div class="css-1oxwx8r">
                      <div class="lazyload-wrapper">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&amp;dpr=1&amp;w=151&amp;h=120&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&amp;dpr=2&amp;w=151&amp;h=120&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://d3njjcbhbojbot.cloudfront.net/web/images/icons/2018-B-Corp-Logo-Black-S.png?auto=format%2Ccompress&amp;dpr=3&amp;w=151&amp;h=120&amp;q=40 3x" width="82" height="120" alt="Logo of Certified B Corporation" style="max-width: 151px; max-height: 120px;">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cds-9 css-f70avt cds-11 cds-grid-item cds-70">
                  <div class="rc-SeoGlobalFooter__social-media-and-copyright lohp-rebrand">
                    <div class="rc-CopyrightV2 lohp-rebrand">
                      <span class="rc-CopyrightV2__text">© 2024 Coursera Inc. All rights reserved.</span>
                    </div>
                    <div class="rc-SocialMediaLinksV2 lohp-rebrand">
                      <ul class="rc-SocialMediaLinksV2__social-media-list">
                        <li class="rc-SocialMediaLinksV2__social-media-list-item">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.facebook_link" data-click-value="{&quot;href&quot;:&quot;https://www.facebook.com/Coursera&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;facebook_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="facebook_link" data-track-href="https://www.facebook.com/Coursera" href="https://www.facebook.com/Coursera" to="https://www.facebook.com/Coursera" target="_blank" rel="noopener noreferrer">
                            <div class="css-1lx0j2k">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/facebook.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28&amp;q=40 3x" width="28" height="28" alt="Coursera Facebook" style="max-width: 28px; max-height: 28px;">
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="rc-SocialMediaLinksV2__social-media-list-item">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.linkedin_link" data-click-value="{&quot;href&quot;:&quot;https://www.linkedin.com/company/coursera&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;linkedin_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="linkedin_link" data-track-href="https://www.linkedin.com/company/coursera" href="https://www.linkedin.com/company/coursera" to="https://www.linkedin.com/company/coursera" target="_blank" rel="noopener noreferrer">
                            <div class="css-1lx0j2k">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/linkedin.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28&amp;q=40 3x" width="28" height="28" alt="Coursera Linkedin" style="max-width: 28px; max-height: 28px;">
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="rc-SocialMediaLinksV2__social-media-list-item">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.twitter_link" data-click-value="{&quot;href&quot;:&quot;https://twitter.com/coursera&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;twitter_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="twitter_link" data-track-href="https://twitter.com/coursera" href="https://twitter.com/coursera" to="https://twitter.com/coursera" target="_blank" rel="noopener noreferrer">
                            <div class="css-1lx0j2k">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/twitter.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28&amp;q=40 3x" width="28" height="28" alt="Coursera Twitter" style="max-width: 28px; max-height: 28px;">
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="rc-SocialMediaLinksV2__social-media-list-item">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.youtube_link" data-click-value="{&quot;href&quot;:&quot;https://www.youtube.com/user/coursera&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;youtube_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="youtube_link" data-track-href="https://www.youtube.com/user/coursera" href="https://www.youtube.com/user/coursera" to="https://www.youtube.com/user/coursera" target="_blank" rel="noopener noreferrer">
                            <div class="css-1lx0j2k">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/youtube.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28&amp;q=40 3x" width="28" height="28" alt="Coursera YouTube" style="max-width: 28px; max-height: 28px;">
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="rc-SocialMediaLinksV2__social-media-list-item">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.instagram_link" data-click-value="{&quot;href&quot;:&quot;https://www.instagram.com/coursera/&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;instagram_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="instagram_link" data-track-href="https://www.instagram.com/coursera/" href="https://www.instagram.com/coursera/" to="https://www.instagram.com/coursera/" target="_blank" rel="noopener noreferrer">
                            <div class="css-1lx0j2k">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/footer/instagram.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28&amp;q=40 3x" width="28" height="28" alt="Coursera Instagram" style="max-width: 28px; max-height: 28px;">
                              </div>
                            </div>
                          </a>
                        </li>
                        <li class="rc-SocialMediaLinksV2__social-media-list-item">
                          <a data-click-key="unified_description_page.consumer_specialization_page.click.tiktok_link" data-click-value="{&quot;href&quot;:&quot;https://www.tiktok.com/@coursera&quot;,&quot;namespace&quot;:{&quot;action&quot;:&quot;click&quot;,&quot;app&quot;:&quot;unified_description_page&quot;,&quot;component&quot;:&quot;tiktok_link&quot;,&quot;page&quot;:&quot;consumer_specialization_page&quot;},&quot;schema_type&quot;:&quot;FRONTEND&quot;}" data-track="true" data-track-app="unified_description_page" data-track-page="consumer_specialization_page" data-track-action="click" data-track-component="tiktok_link" data-track-href="https://www.tiktok.com/@coursera" href="https://www.tiktok.com/@coursera" to="https://www.tiktok.com/@coursera" target="_blank" rel="noopener noreferrer">
                            <div class="css-1lx0j2k">
                              <div class="lazyload-wrapper">
                                <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/9b7e964107839c77644d7e7d15035b73.png?auto=format%2Ccompress&amp;dpr=1&amp;w=28&amp;h=28&amp;q=40" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/9b7e964107839c77644d7e7d15035b73.png?auto=format%2Ccompress&amp;dpr=2&amp;w=28&amp;h=28&amp;q=40 2x, https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/9b7e964107839c77644d7e7d15035b73.png?auto=format%2Ccompress&amp;dpr=3&amp;w=28&amp;h=28&amp;q=40 3x" width="28" height="28" alt="Coursera TikTok" style="max-width: 28px; max-height: 28px;">
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <script>
    window.App = {
      "context": {
        "dispatcher": {
          "stores": {
            "ApplicationStore": {
              "csrfToken": "\u003CMISSING\u003E",
              "requestCountryCode": "IN",
              "userAgent": {
                "source": "Mozilla\u002F5.0 (X11; Linux x86_64) AppleWebKit\u002F537.36 (KHTML, like Gecko) Chrome\u002F128.0.0.0 Safari\u002F537.36",
                "browser": {
                  "name": "Chrome",
                  "version": "128.0.0.0"
                },
                "system": "Linux",
                "platform": "Linux",
                "isMobileBrowser": false,
                "isAndroid": false,
                "isCourseraMobileApp": false,
                "isMobile": false,
                "isIOS": false,
                "isMobilePhoneBrowser": false,
                "isPrerender": false,
                "isRobot": false,
                "isOculusQuest": false
              },
              "userData": {
                "id": null,
                "authenticated": false
              },
              "appName": "consumer-description-page"
            },
            "NaptimeStore": {
              "data": {
                "courses.v1": {
                  "h5dcezicEeyZlQoNyXy15Q": {
                    "certificates": ["VerifiedCert", "Specialization"],
                    "courseStatus": "launched",
                    "partnerIds": ["405"],
                    "premiumExperienceVariant": "PremiumGrading",
                    "s12nIds": ["D5-G_39lEeye0BJDMcVCxw"],
                    "courseType": "v2.ondemand",
                    "id": "h5dcezicEeyZlQoNyXy15Q",
                    "slug": "artificial-intelligence-an-overview",
                    "name": "Artificial Intelligence: An Overview"
                  }
                },
                "onDemandSpecializations.v1": {
                  "D5-G_39lEeye0BJDMcVCxw": {
                    "launchedAt": 1650286594207,
                    "partnerIds": ["405"],
                    "plannedLaunchDate": null,
                    "preEnrollmentEnabledAt": null,
                    "description": "This Specialization is intended for beginners seeking to enter the artificial intelligence world. Through five courses, you will cover artificial intelligence technical groundings (including machine learning and technologies), ethical and legal issues, which will give you a clear picture of what artificial intelligence is and what opportunities artificial intelligence will provide in the next future.",
                    "name": "Artificial Intelligence: an Overview",
                    "tagline": "Enter the artificial intelligence world",
                    "id": "D5-G_39lEeye0BJDMcVCxw",
                    "slug": "artificial-intelligence-overview"
                  }
                }
              },
              "responseCache": {},
              "elementsToUrlMapping": {
                "courses.v1~h5dcezicEeyZlQoNyXy15Q": ["\u002Fapi\u002Fcourses.v1\u002Fh5dcezicEeyZlQoNyXy15Q?showHidden=true&fields=certificates,courseStatus,partnerIds,premiumExperienceVariant,s12nIds"],
                "onDemandSpecializations.v1~D5-G_39lEeye0BJDMcVCxw": ["\u002Fapi\u002FonDemandSpecializations.v1\u002FD5-G_39lEeye0BJDMcVCxw?fields=launchedAt,partnerIds,plannedLaunchDate,preEnrollmentEnabledAt"]
              },
              "emptyQueries": [],
              "errors": {}
            }
          }
        },
        "plugins": {}
      },
      "plugins": {}
    };
    window.appName = "consumer-description-page";
    window.__APOLLO_STATE__ = {
      "Seo_ComponentLink:ComponentLink~09f2f10c10976ef1bd695faec2a91a4c": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=free",
        "id": "ComponentLink~09f2f10c10976ef1bd695faec2a91a4c",
        "label": "Free Courses"
      },
      "Seo_ComponentLink:ComponentLink~ec65139883d0e2169d45f6b64fb6c0dd": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fexplore\u002Fects-credit-recommendation",
        "id": "ComponentLink~ec65139883d0e2169d45f6b64fb6c0dd",
        "label": "ECTS Credit Recommendations"
      },
      "Seo_FooterCategory:PageFooterCategory~e1eed1c62f3af3a2d717468ed7c11e84": {
        "__typename": "Seo_FooterCategory",
        "header": "Coursera",
        "id": "PageFooterCategory~e1eed1c62f3af3a2d717468ed7c11e84",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~09f2f10c10976ef1bd695faec2a91a4c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ec65139883d0e2169d45f6b64fb6c0dd"
        }]
      },
      "Seo_Footer:PageGlobalFooter~4fd4a56c435d5c26b3c3c366f51b074e": {
        "__typename": "Seo_Footer",
        "categories": [{
          "__ref": "Seo_FooterCategory:PageFooterCategory~e1eed1c62f3af3a2d717468ed7c11e84"
        }],
        "id": "PageGlobalFooter~4fd4a56c435d5c26b3c3c366f51b074e"
      },
      "Seo_ComponentLink:ComponentLink~d2e34cc6cfa2677f22b0573779173e7c": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Flearn\u002Fgenerative-ai-with-llms",
        "id": "ComponentLink~d2e34cc6cfa2677f22b0573779173e7c",
        "label": "AWS & DLAI GenAI with LLMs Course"
      },
      "Seo_ComponentLink:ComponentLink~9a1e180d0aa10a751980286b7b892b41": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Flearn\u002Fai-for-everyone",
        "id": "ComponentLink~9a1e180d0aa10a751980286b7b892b41",
        "label": "DLAI AI For Everyone Course"
      },
      "Seo_ComponentLink:ComponentLink~1f7e142abc758bc8eab4e5f3da01356e": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fspecializations\u002Fdeep-learning",
        "id": "ComponentLink~1f7e142abc758bc8eab4e5f3da01356e",
        "label": "DLAI Deep Learning Specialization"
      },
      "Seo_ComponentLink:ComponentLink~6cda0be5ab57f3ada556698d2e9b1571": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fspecializations\u002Fnatural-language-processing",
        "id": "ComponentLink~6cda0be5ab57f3ada556698d2e9b1571",
        "label": "DLAI NLP Specialization"
      },
      "Seo_ComponentLink:ComponentLink~9a23e990820d17e1f4b29f39e66435e7": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Flearn\u002Fgoogle-ai-essentials",
        "id": "ComponentLink~9a23e990820d17e1f4b29f39e66435e7",
        "label": "Google AI Essentials Course"
      },
      "Seo_ComponentLink:ComponentLink~9503213c50925107dafff097c7802ac0": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Flearn\u002Fintroduction-to-generative-ai",
        "id": "ComponentLink~9503213c50925107dafff097c7802ac0",
        "label": "Google Cloud Introduction to Generative AI Course"
      },
      "Seo_ComponentLink:ComponentLink~2ac77861fab595da234b92533e73bff8": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fspecializations\u002Fgenerative-ai-for-everyone",
        "id": "ComponentLink~2ac77861fab595da234b92533e73bff8",
        "label": "IBM Generative AI Fundamentals Specialization"
      },
      "Seo_ComponentLink:ComponentLink~cd5466e8e4ab2a2c98bba91d47e5826f": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fspecializations\u002Fai-healthcare",
        "id": "ComponentLink~cd5466e8e4ab2a2c98bba91d47e5826f",
        "label": "Stanford AI in Healthcare Specialization"
      },
      "Seo_ComponentLink:ComponentLink~0208be2b7b6b206aa56503ac4ea14282": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fspecializations\u002Fmachine-learning-introduction",
        "id": "ComponentLink~0208be2b7b6b206aa56503ac4ea14282",
        "label": "Stanford Machine Learning Specialization"
      },
      "Seo_ComponentLink:ComponentLink~2dbcc40bb697c70308ffa06620ca40dc": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Flearn\u002Fprompt-engineering",
        "id": "ComponentLink~2dbcc40bb697c70308ffa06620ca40dc",
        "label": "Vanderbilt Prompt Engineering for ChatGPT Course"
      },
      "Seo_FooterCategory:PageFooterCategory~d92bee71db26b358a96a7740598ef752": {
        "__typename": "Seo_FooterCategory",
        "header": "Get Started with AI",
        "id": "PageFooterCategory~d92bee71db26b358a96a7740598ef752",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~d2e34cc6cfa2677f22b0573779173e7c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~9a1e180d0aa10a751980286b7b892b41"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~1f7e142abc758bc8eab4e5f3da01356e"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~6cda0be5ab57f3ada556698d2e9b1571"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~9a23e990820d17e1f4b29f39e66435e7"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~9503213c50925107dafff097c7802ac0"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2ac77861fab595da234b92533e73bff8"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cd5466e8e4ab2a2c98bba91d47e5826f"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~0208be2b7b6b206aa56503ac4ea14282"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2dbcc40bb697c70308ffa06620ca40dc"
        }]
      },
      "Seo_ComponentLink:ComponentLink~2286d72338df5453d0c18c780dec50b9": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fgoogle-cybersecurity",
        "id": "ComponentLink~2286d72338df5453d0c18c780dec50b9",
        "label": "Google Cybersecurity Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~092a9fd8c047283edc351b6cbd181385": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fgoogle-data-analytics",
        "id": "ComponentLink~092a9fd8c047283edc351b6cbd181385",
        "label": "Google Data Analytics Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~8e8928efd59c8906788f4248b2cb7136": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fgoogle-digital-marketing-ecommerce",
        "id": "ComponentLink~8e8928efd59c8906788f4248b2cb7136",
        "label": "Google Digital Marketing Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~4bddba7141bbb4f82ac4ebe0b329fcc8": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fgoogle-project-management",
        "id": "ComponentLink~4bddba7141bbb4f82ac4ebe0b329fcc8",
        "label": "Google Project Management Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~ba4c7395feeb48a8e8b933851baabf12": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fgoogle-ux-design",
        "id": "ComponentLink~ba4c7395feeb48a8e8b933851baabf12",
        "label": "Google UX Design Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~80d183279b64712468a3c5e436fe9d3e": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fibm-data-analyst",
        "id": "ComponentLink~80d183279b64712468a3c5e436fe9d3e",
        "label": "IBM Data Analyst Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~54174316ca9561a1dcf67923c1d0d1c2": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fibm-data-science",
        "id": "ComponentLink~54174316ca9561a1dcf67923c1d0d1c2",
        "label": "IBM Data Science Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~47f2b396c939ff25c2e822383beca0d1": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fmicrosoft-power-bi-data-analyst",
        "id": "ComponentLink~47f2b396c939ff25c2e822383beca0d1",
        "label": "Meta Front-End Developer Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~9fde9cb3ce146d42890dd988fa57c3d2": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates\u002Fmeta-front-end-developer",
        "id": "ComponentLink~9fde9cb3ce146d42890dd988fa57c3d2",
        "label": "Microsoft Power BI Data Analyst Professional Certificate"
      },
      "Seo_ComponentLink:ComponentLink~c679804add4c0321dae26ace7eee2957": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fprofessional-certificates",
        "id": "ComponentLink~c679804add4c0321dae26ace7eee2957",
        "label": "All Career Certificates"
      },
      "Seo_FooterCategory:PageFooterCategory~319e4a15518344814ccfddd1f1d8ddb0": {
        "__typename": "Seo_FooterCategory",
        "header": "Popular Career Certificates",
        "id": "PageFooterCategory~319e4a15518344814ccfddd1f1d8ddb0",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~2286d72338df5453d0c18c780dec50b9"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~092a9fd8c047283edc351b6cbd181385"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~8e8928efd59c8906788f4248b2cb7136"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4bddba7141bbb4f82ac4ebe0b329fcc8"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ba4c7395feeb48a8e8b933851baabf12"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~80d183279b64712468a3c5e436fe9d3e"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~54174316ca9561a1dcf67923c1d0d1c2"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~47f2b396c939ff25c2e822383beca0d1"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~9fde9cb3ce146d42890dd988fa57c3d2"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~c679804add4c0321dae26ace7eee2957"
        }]
      },
      "Seo_ComponentLink:ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=artificial%20intelligence",
        "id": "ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06",
        "label": "Artificial Intelligence"
      },
      "Seo_ComponentLink:ComponentLink~e1fe414cd0a606f7baa91b4cf44d8e9b": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=cybersecurity",
        "id": "ComponentLink~e1fe414cd0a606f7baa91b4cf44d8e9b",
        "label": "Cybersecurity"
      },
      "Seo_ComponentLink:ComponentLink~b3b38888e9749ad7b54518309250f431": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=data+analytics",
        "id": "ComponentLink~b3b38888e9749ad7b54518309250f431",
        "label": "Data Analytics"
      },
      "Seo_ComponentLink:ComponentLink~fcc3465bf9234e748c0cc5de4f2743f7": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=data%20science&topic=Data%20Science",
        "id": "ComponentLink~fcc3465bf9234e748c0cc5de4f2743f7",
        "label": "Data Science"
      },
      "Seo_ComponentLink:ComponentLink~11195e986632c63bafdb5eaf2197736e": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=digital+marketing",
        "id": "ComponentLink~11195e986632c63bafdb5eaf2197736e",
        "label": "Digital Marketing"
      },
      "Seo_ComponentLink:ComponentLink~377a99232ffd1f4e8dd6d53441212a43": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=generative%20ai",
        "id": "ComponentLink~377a99232ffd1f4e8dd6d53441212a43",
        "label": "Generative AI"
      },
      "Seo_ComponentLink:ComponentLink~cd88a704ac0e7a4ce1ed592131f16865": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=machine%20learning&skills=Machine%20Learning",
        "id": "ComponentLink~cd88a704ac0e7a4ce1ed592131f16865",
        "label": "Machine Learning"
      },
      "Seo_ComponentLink:ComponentLink~be613256288cd9a1f1339176312fd4e6": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=microsoft%20excel",
        "id": "ComponentLink~be613256288cd9a1f1339176312fd4e6",
        "label": "Microsoft Excel"
      },
      "Seo_ComponentLink:ComponentLink~a2b5322aad7599a116e14d431c886510": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=project+management",
        "id": "ComponentLink~a2b5322aad7599a116e14d431c886510",
        "label": "Project Management"
      },
      "Seo_ComponentLink:ComponentLink~560cbcfb36b7ddc9e281150040ee32a4": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=python",
        "id": "ComponentLink~560cbcfb36b7ddc9e281150040ee32a4",
        "label": "Python"
      },
      "Seo_ComponentLink:ComponentLink~8408097678b192a67ae6d5c71a376b56": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses",
        "id": "ComponentLink~8408097678b192a67ae6d5c71a376b56",
        "label": "All Courses"
      },
      "Seo_FooterCategory:PageFooterCategory~ba57b5567dd15ed9648d9df47def266d": {
        "__typename": "Seo_FooterCategory",
        "header": "Popular Subjects",
        "id": "PageFooterCategory~ba57b5567dd15ed9648d9df47def266d",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e1fe414cd0a606f7baa91b4cf44d8e9b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~b3b38888e9749ad7b54518309250f431"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~fcc3465bf9234e748c0cc5de4f2743f7"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~11195e986632c63bafdb5eaf2197736e"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~377a99232ffd1f4e8dd6d53441212a43"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cd88a704ac0e7a4ce1ed592131f16865"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~be613256288cd9a1f1339176312fd4e6"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~a2b5322aad7599a116e14d431c886510"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~560cbcfb36b7ddc9e281150040ee32a4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~8408097678b192a67ae6d5c71a376b56"
        }]
      },
      "Seo_ComponentLink:ComponentLink~70be2012c18e33b04f12be4750c6dd30": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fhow-to-become-a-data-analyst",
        "id": "ComponentLink~70be2012c18e33b04f12be4750c6dd30",
        "label": "How to Become a Data Analyst"
      },
      "Seo_ComponentLink:ComponentLink~bfc22a6e5def30d561267286d1a08c75": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fthe-pmp-certification-a-guide-to-getting-started",
        "id": "ComponentLink~bfc22a6e5def30d561267286d1a08c75",
        "label": "How to Get a PMP Certification"
      },
      "Seo_ComponentLink:ComponentLink~7e00c743b1465955ffbade2b7f389efa": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fpopular-cybersecurity-certifications",
        "id": "ComponentLink~7e00c743b1465955ffbade2b7f389efa",
        "label": "Popular Cybersecurity Certifications"
      },
      "Seo_ComponentLink:ComponentLink~4390961cd8c9a24a58ea06e35d547fc1": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fdata-analytics-certification",
        "id": "ComponentLink~4390961cd8c9a24a58ea06e35d547fc1",
        "label": "Popular Data Analytics Certifications"
      },
      "Seo_ComponentLink:ComponentLink~9d148c9333f67fa587912dfc416f7eef": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fessential-it-certifications-entry-level-and-beginner",
        "id": "ComponentLink~9d148c9333f67fa587912dfc416f7eef",
        "label": "Popular IT Certifications"
      },
      "Seo_ComponentLink:ComponentLink~f520f37535ba0241ea47c021b93944cf": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fmachine-learning-certification",
        "id": "ComponentLink~f520f37535ba0241ea47c021b93944cf",
        "label": "Popular Machine Learning Certifications"
      },
      "Seo_ComponentLink:ComponentLink~42a00cee499f7039ad9f4c90f366e55b": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles\u002Fsql-certifications-for-your-data-career",
        "id": "ComponentLink~42a00cee499f7039ad9f4c90f366e55b",
        "label": "Popular SQL Certifications"
      },
      "Seo_ComponentLink:ComponentLink~5558e6a344747bf4298b1c0624646db4": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fexplore\u002Fgenai-for-software-development",
        "id": "ComponentLink~5558e6a344747bf4298b1c0624646db4",
        "label": "GenAI for Software Developers"
      },
      "Seo_ComponentLink:ComponentLink~f6ac5ed4930ecceb8f073c30e6b6fe4d": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fexplore\u002Fgenai-for-data-professionals",
        "id": "ComponentLink~f6ac5ed4930ecceb8f073c30e6b6fe4d",
        "label": "GenAI for Data Professionals"
      },
      "Seo_ComponentLink:ComponentLink~d5d4d50d544e1765e445f654e6ca684c": {
        "__typename": "Seo_ComponentLink",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Farticles",
        "id": "ComponentLink~d5d4d50d544e1765e445f654e6ca684c",
        "label": "Career Insights & Advice Hub"
      },
      "Seo_FooterCategory:PageFooterCategory~6d2bfa6190a90ab96ffdf99ee4e73861": {
        "__typename": "Seo_FooterCategory",
        "header": "Popular Resources",
        "id": "PageFooterCategory~6d2bfa6190a90ab96ffdf99ee4e73861",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~70be2012c18e33b04f12be4750c6dd30"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~bfc22a6e5def30d561267286d1a08c75"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~7e00c743b1465955ffbade2b7f389efa"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4390961cd8c9a24a58ea06e35d547fc1"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~9d148c9333f67fa587912dfc416f7eef"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~f520f37535ba0241ea47c021b93944cf"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~42a00cee499f7039ad9f4c90f366e55b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~5558e6a344747bf4298b1c0624646db4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~f6ac5ed4930ecceb8f073c30e6b6fe4d"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~d5d4d50d544e1765e445f654e6ca684c"
        }]
      },
      "Seo_Footer:PageSubfooter~4fd4a56c435d5c26b3c3c366f51b074e": {
        "__typename": "Seo_Footer",
        "categories": [{
          "__ref": "Seo_FooterCategory:PageFooterCategory~d92bee71db26b358a96a7740598ef752"
        }, {
          "__ref": "Seo_FooterCategory:PageFooterCategory~319e4a15518344814ccfddd1f1d8ddb0"
        }, {
          "__ref": "Seo_FooterCategory:PageFooterCategory~ba57b5567dd15ed9648d9df47def266d"
        }, {
          "__ref": "Seo_FooterCategory:PageFooterCategory~6d2bfa6190a90ab96ffdf99ee4e73861"
        }],
        "id": "PageSubfooter~4fd4a56c435d5c26b3c3c366f51b074e"
      },
      "Seo_MetaTags:PageMetaTags~7bd4f3f25b6992772af980fdb2de061d": {
        "__typename": "Seo_MetaTags",
        "canonicalURL": null,
        "descriptionTag": null,
        "disableCrawlerIndexing": false,
        "disableCrawlerFollow": null,
        "disableCrawlerAI": null,
        "hreflangLinks": null,
        "id": "PageMetaTags~7bd4f3f25b6992772af980fdb2de061d",
        "titleTag": "Artificial Intelligence: an Overview Specialization [5 courses] (Politecnico di Milano) | Coursera"
      },
      "Seo_ComponentLink:ComponentLink~d131e5750447b358071a94879fb7db8b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~d131e5750447b358071a94879fb7db8b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcollections\u002Fpopular-new-data-science-courses",
        "label": "New Data Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~6081318b435046a9638433ba9a6a8185": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~6081318b435046a9638433ba9a6a8185",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=data%20science&productDifficultyLevel=Beginner",
        "label": "Beginner Data Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~f621964244e063a8f185ecb77dff1934": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~f621964244e063a8f185ecb77dff1934",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=data%20science&productDifficultyLevel=Advanced",
        "label": "Advanced Data Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~4ca8c8de5da3622124a5c4b32232d1e8": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4ca8c8de5da3622124a5c4b32232d1e8",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=data%20science&productTypeDescription=Guided%20Projects",
        "label": "Data Science Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~97effc3c347abe38608af1a9da07a3d7": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~97effc3c347abe38608af1a9da07a3d7",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~d131e5750447b358071a94879fb7db8b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~6081318b435046a9638433ba9a6a8185"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~f621964244e063a8f185ecb77dff1934"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4ca8c8de5da3622124a5c4b32232d1e8"
        }]
      },
      "Seo_ComponentLink:ComponentLink~ac17a08d50b78c9c127a6d7ab229507e": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ac17a08d50b78c9c127a6d7ab229507e",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=data%20analysis&skills=Data%20Analysis",
        "label": "Data Analysis"
      },
      "Seo_ComponentLink:ComponentLink~6bc78b1f2caf767af164e0476d1f1928": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~6bc78b1f2caf767af164e0476d1f1928",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=power%20bi",
        "label": "Power BI"
      },
      "Seo_ComponentLink:ComponentLink~cc283d5022e7d66b3a3e5b51010d7f63": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~cc283d5022e7d66b3a3e5b51010d7f63",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=r%20programming",
        "label": "R Programming"
      },
      "Seo_ComponentLink:ComponentLink~46be8e49db27ff708319ca96578f76a8": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~46be8e49db27ff708319ca96578f76a8",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=sql",
        "label": "SQL"
      },
      "Seo_ComponentLink:ComponentLink~bf28118abdf3d468e6943654778d6d37": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~bf28118abdf3d468e6943654778d6d37",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=statistics",
        "label": "Statistics"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~f49f91522d47c3aebc0003e7798c2a25": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~f49f91522d47c3aebc0003e7798c2a25",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ac17a08d50b78c9c127a6d7ab229507e"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~fcc3465bf9234e748c0cc5de4f2743f7"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cd88a704ac0e7a4ce1ed592131f16865"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~be613256288cd9a1f1339176312fd4e6"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~6bc78b1f2caf767af164e0476d1f1928"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~560cbcfb36b7ddc9e281150040ee32a4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cc283d5022e7d66b3a3e5b51010d7f63"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~46be8e49db27ff708319ca96578f76a8"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~bf28118abdf3d468e6943654778d6d37"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~ec6128ad815bf6c98d655595dccef55b": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~ec6128ad815bf6c98d655595dccef55b",
        "header": "data-science",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~97effc3c347abe38608af1a9da07a3d7"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~f49f91522d47c3aebc0003e7798c2a25"
        }]
      },
      "Seo_ComponentLink:ComponentLink~669ef085616437a1a937b26d97487724": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~669ef085616437a1a937b26d97487724",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcollections\u002Fpopular-new-business-courses",
        "label": "New Business Courses"
      },
      "Seo_ComponentLink:ComponentLink~93179fceda1d60f6a8a276d76cf1b506": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~93179fceda1d60f6a8a276d76cf1b506",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=business&productDifficultyLevel=Beginner",
        "label": "Beginner Business Courses"
      },
      "Seo_ComponentLink:ComponentLink~cb10f612eb0f4e07eed96537b9459d3d": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~cb10f612eb0f4e07eed96537b9459d3d",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=business&productDifficultyLevel=Advanced",
        "label": "Advanced Business Courses"
      },
      "Seo_ComponentLink:ComponentLink~ea289150964ad1fbcbef8991c51a613b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ea289150964ad1fbcbef8991c51a613b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=business&productTypeDescription=Guided%20Projects",
        "label": "Business Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~1af86b825d55ee92cca7988c3bdfc845": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~1af86b825d55ee92cca7988c3bdfc845",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~669ef085616437a1a937b26d97487724"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~93179fceda1d60f6a8a276d76cf1b506"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cb10f612eb0f4e07eed96537b9459d3d"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ea289150964ad1fbcbef8991c51a613b"
        }]
      },
      "Seo_ComponentLink:ComponentLink~7648b61c91b1a8ecd4f6d792b2f69129": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~7648b61c91b1a8ecd4f6d792b2f69129",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=business%20analysis",
        "label": "Business Analysis"
      },
      "Seo_ComponentLink:ComponentLink~18ab2f3df380b27ab9917cb17f4e6de4": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~18ab2f3df380b27ab9917cb17f4e6de4",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=communication%20skills",
        "label": "Communication Skills"
      },
      "Seo_ComponentLink:ComponentLink~fdb6ac901b5e3a4e315510b3a2274bc0": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~fdb6ac901b5e3a4e315510b3a2274bc0",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=digital%20marketing",
        "label": "Digital Marketing"
      },
      "Seo_ComponentLink:ComponentLink~30f8388055076b96da99848dc18b6f7f": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~30f8388055076b96da99848dc18b6f7f",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=leadership",
        "label": "Leadership"
      },
      "Seo_ComponentLink:ComponentLink~79d41acc728217e41885a00ebfef3a71": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~79d41acc728217e41885a00ebfef3a71",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=microsoft%20excel",
        "label": "Excel"
      },
      "Seo_ComponentLink:ComponentLink~aa84f0e552ea57367216e71c5c2bb512": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~aa84f0e552ea57367216e71c5c2bb512",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=product%20management",
        "label": "Product Management"
      },
      "Seo_ComponentLink:ComponentLink~cb8f6903bdcd111b31090fd6bc1d8b74": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~cb8f6903bdcd111b31090fd6bc1d8b74",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=project%20management",
        "label": "Project Management"
      },
      "Seo_ComponentLink:ComponentLink~ae8fa38abffbeea26081938ba51c3c52": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ae8fa38abffbeea26081938ba51c3c52",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=sales",
        "label": "Sales"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~a05cb157d782119dd1ccaa0d724e2332": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~a05cb157d782119dd1ccaa0d724e2332",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~7648b61c91b1a8ecd4f6d792b2f69129"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~18ab2f3df380b27ab9917cb17f4e6de4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ac17a08d50b78c9c127a6d7ab229507e"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~fdb6ac901b5e3a4e315510b3a2274bc0"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~30f8388055076b96da99848dc18b6f7f"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~79d41acc728217e41885a00ebfef3a71"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~6bc78b1f2caf767af164e0476d1f1928"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~aa84f0e552ea57367216e71c5c2bb512"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cb8f6903bdcd111b31090fd6bc1d8b74"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ae8fa38abffbeea26081938ba51c3c52"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~28bb4164c8caf394bbff9f3bff04d1c2": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~28bb4164c8caf394bbff9f3bff04d1c2",
        "header": "business",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~1af86b825d55ee92cca7988c3bdfc845"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~a05cb157d782119dd1ccaa0d724e2332"
        }]
      },
      "Seo_ComponentLink:ComponentLink~926a929bf68942bb2ddb9455a9667bee": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~926a929bf68942bb2ddb9455a9667bee",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcollections\u002Fpopular-new-computer-science-courses",
        "label": "New Computer Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~1362e6c54e66ce20d756cbceaf963961": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~1362e6c54e66ce20d756cbceaf963961",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=computer%20science&productDifficultyLevel=Beginner",
        "label": "Beginner Computer Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~78b77bffeaa828168baa4ead88bc2a8f": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~78b77bffeaa828168baa4ead88bc2a8f",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=computer%20science&productDifficultyLevel=Advanced",
        "label": "Advanced Computer Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~73da6fb97aec92b78d97d729aaa1a3c1": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~73da6fb97aec92b78d97d729aaa1a3c1",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=computer%20science&productTypeDescription=Guided%20Projects",
        "label": "Data Science Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ec23dbb50b69731b98eef7ec4caee984": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~ec23dbb50b69731b98eef7ec4caee984",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~926a929bf68942bb2ddb9455a9667bee"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~1362e6c54e66ce20d756cbceaf963961"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~78b77bffeaa828168baa4ead88bc2a8f"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~73da6fb97aec92b78d97d729aaa1a3c1"
        }]
      },
      "Seo_ComponentLink:ComponentLink~e185a0fdbe8ce022126c43096cab1522": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~e185a0fdbe8ce022126c43096cab1522",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=aws",
        "label": "AWS"
      },
      "Seo_ComponentLink:ComponentLink~b9f9e2f99af4395746cf8455004a347d": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~b9f9e2f99af4395746cf8455004a347d",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=c%2B%2B",
        "label": "C++"
      },
      "Seo_ComponentLink:ComponentLink~e49c8b0ab7f247852faf89396bc264b7": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~e49c8b0ab7f247852faf89396bc264b7",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=java",
        "label": "Java"
      },
      "Seo_ComponentLink:ComponentLink~1ab8a213b82d716955b27d0cde8d7864": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~1ab8a213b82d716955b27d0cde8d7864",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=web%20development",
        "label": "Web Development"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~3c5b09960d7afa01c1dd8a259420af91": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~3c5b09960d7afa01c1dd8a259420af91",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e185a0fdbe8ce022126c43096cab1522"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~b9f9e2f99af4395746cf8455004a347d"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e1fe414cd0a606f7baa91b4cf44d8e9b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~377a99232ffd1f4e8dd6d53441212a43"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e49c8b0ab7f247852faf89396bc264b7"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~aa84f0e552ea57367216e71c5c2bb512"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~560cbcfb36b7ddc9e281150040ee32a4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~46be8e49db27ff708319ca96578f76a8"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~1ab8a213b82d716955b27d0cde8d7864"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~7ddd623d066ed5229e68f3a8a2edda21": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~7ddd623d066ed5229e68f3a8a2edda21",
        "header": "computer-science",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ec23dbb50b69731b98eef7ec4caee984"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~3c5b09960d7afa01c1dd8a259420af91"
        }]
      },
      "Seo_ComponentLink:ComponentLink~e8d2aa3fa71e64905c389692f06ec700": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~e8d2aa3fa71e64905c389692f06ec700",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcollections\u002Fpopular-new-computer-science-courses",
        "label": "New IT Courses"
      },
      "Seo_ComponentLink:ComponentLink~db4a51e5d5922d877f61e426b30ea64a": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~db4a51e5d5922d877f61e426b30ea64a",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=it&productDifficultyLevel=Beginner",
        "label": "Beginner IT Courses"
      },
      "Seo_ComponentLink:ComponentLink~98733b45a44290bda1f5cdeb5e58bac4": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~98733b45a44290bda1f5cdeb5e58bac4",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=it&productDifficultyLevel=Advanced",
        "label": "Advanced IT Courses"
      },
      "Seo_ComponentLink:ComponentLink~884d4558e39ef91ae8a2c7031dee1127": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~884d4558e39ef91ae8a2c7031dee1127",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=it&productTypeDescription=Guided%20Projects",
        "label": "IT Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~f0a4cabebbaa99a26e852514fd1e82fa": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~f0a4cabebbaa99a26e852514fd1e82fa",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~e8d2aa3fa71e64905c389692f06ec700"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~db4a51e5d5922d877f61e426b30ea64a"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~98733b45a44290bda1f5cdeb5e58bac4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~884d4558e39ef91ae8a2c7031dee1127"
        }]
      },
      "Seo_ComponentLink:ComponentLink~d4df27b75d3b4d5cd682273c5731b22c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~d4df27b75d3b4d5cd682273c5731b22c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=devops",
        "label": "DevOps"
      },
      "Seo_ComponentLink:ComponentLink~ce521144e63ccf4d13e3a39ca772e967": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ce521144e63ccf4d13e3a39ca772e967",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=ethical%20hacking",
        "label": "Ethical Hacking"
      },
      "Seo_ComponentLink:ComponentLink~4a3744ae6c3d98c24534f8b56737f45b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4a3744ae6c3d98c24534f8b56737f45b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=google",
        "label": "Google"
      },
      "Seo_ComponentLink:ComponentLink~5b6c723f745c60f8c7f00d70f2427f2d": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~5b6c723f745c60f8c7f00d70f2427f2d",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=kubernetes",
        "label": "Kubernetes"
      },
      "Seo_ComponentLink:ComponentLink~ba7c631514c6779923c7f9ce0bb53075": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ba7c631514c6779923c7f9ce0bb53075",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=linux",
        "label": "Linux"
      },
      "Seo_ComponentLink:ComponentLink~ad6a1da7cca9d46e42c9db2028c8daf5": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ad6a1da7cca9d46e42c9db2028c8daf5",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=software%20engineering",
        "label": "Software Engineering"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~700bc666ae333bdae8083b1807a00e6a": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~700bc666ae333bdae8083b1807a00e6a",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~ee4d12adac04da3aa0d88dd7944b7f06"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e185a0fdbe8ce022126c43096cab1522"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e1fe414cd0a606f7baa91b4cf44d8e9b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~d4df27b75d3b4d5cd682273c5731b22c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ce521144e63ccf4d13e3a39ca772e967"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4a3744ae6c3d98c24534f8b56737f45b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~5b6c723f745c60f8c7f00d70f2427f2d"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ba7c631514c6779923c7f9ce0bb53075"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~560cbcfb36b7ddc9e281150040ee32a4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ad6a1da7cca9d46e42c9db2028c8daf5"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~6b0180ebcc5d56e0c5b2a19303bf0d1a": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~6b0180ebcc5d56e0c5b2a19303bf0d1a",
        "header": "information-technology",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~f0a4cabebbaa99a26e852514fd1e82fa"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~700bc666ae333bdae8083b1807a00e6a"
        }]
      },
      "Seo_ComponentLink:ComponentLink~75fec1f4eb11525ed0e2a7d69bd9b21d": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~75fec1f4eb11525ed0e2a7d69bd9b21d",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcollections\u002Flearn-language",
        "label": "Popuar Language Courses"
      },
      "Seo_ComponentLink:ComponentLink~b5c352f28d21401ade103757562abced": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~b5c352f28d21401ade103757562abced",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=language&productDifficultyLevel=Beginner",
        "label": "Beginner Language Courses"
      },
      "Seo_ComponentLink:ComponentLink~c657d45a4c24b5601f74184bd4702a03": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~c657d45a4c24b5601f74184bd4702a03",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=language&productDifficultyLevel=Advanced",
        "label": "Advanced Language Courses"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ca3b501ac86a665cebcf3aae632841e5": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~ca3b501ac86a665cebcf3aae632841e5",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~75fec1f4eb11525ed0e2a7d69bd9b21d"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~b5c352f28d21401ade103757562abced"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~c657d45a4c24b5601f74184bd4702a03"
        }]
      },
      "Seo_ComponentLink:ComponentLink~f6aa5669db94ef224b3c8dde25712515": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~f6aa5669db94ef224b3c8dde25712515",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=language",
        "label": "All Language Courses"
      },
      "Seo_ComponentLink:ComponentLink~2be95978280f2939d4bf6bcc610bcaad": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~2be95978280f2939d4bf6bcc610bcaad",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=chinese",
        "label": "Chinese"
      },
      "Seo_ComponentLink:ComponentLink~2a0f4f0da0826c84b76fc562a50cec50": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~2a0f4f0da0826c84b76fc562a50cec50",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=english%20speaking",
        "label": "English"
      },
      "Seo_ComponentLink:ComponentLink~1c9f4c296455ba5cf33b6115b7c25beb": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~1c9f4c296455ba5cf33b6115b7c25beb",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=french%20language",
        "label": "French"
      },
      "Seo_ComponentLink:ComponentLink~81556dd102896970252779a5d025c360": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~81556dd102896970252779a5d025c360",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=korean",
        "label": "Korean"
      },
      "Seo_ComponentLink:ComponentLink~c9b007ba7234ff87281cff78e1568ac7": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~c9b007ba7234ff87281cff78e1568ac7",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mandarin",
        "label": "Mandarin"
      },
      "Seo_ComponentLink:ComponentLink~b9f807539e19c29574deb67569daee1e": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~b9f807539e19c29574deb67569daee1e",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=spanish",
        "label": "Spanish"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~712de05e1d3b86c4794864998f40a358": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~712de05e1d3b86c4794864998f40a358",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~f6aa5669db94ef224b3c8dde25712515"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2be95978280f2939d4bf6bcc610bcaad"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2a0f4f0da0826c84b76fc562a50cec50"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~1c9f4c296455ba5cf33b6115b7c25beb"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~81556dd102896970252779a5d025c360"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~c9b007ba7234ff87281cff78e1568ac7"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~b9f807539e19c29574deb67569daee1e"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~a59aea0bffaa1ac5252aaafa579bae5a": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~a59aea0bffaa1ac5252aaafa579bae5a",
        "header": "language-learning",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ca3b501ac86a665cebcf3aae632841e5"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~712de05e1d3b86c4794864998f40a358"
        }]
      },
      "Seo_ComponentLink:ComponentLink~89929262490d32f0bd734aa4abb37a49": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~89929262490d32f0bd734aa4abb37a49",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=health&productDifficultyLevel=Beginner",
        "label": "Beginner Health Courses"
      },
      "Seo_ComponentLink:ComponentLink~a5c26c58b2404a0c20e7e683fb36003c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~a5c26c58b2404a0c20e7e683fb36003c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=health&productDifficultyLevel=Advanced",
        "label": "Advanced Health Courses"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ea9d1b5f83dc0774f93d37c4e5d9880b": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~ea9d1b5f83dc0774f93d37c4e5d9880b",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~89929262490d32f0bd734aa4abb37a49"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~a5c26c58b2404a0c20e7e683fb36003c"
        }]
      },
      "Seo_ComponentLink:ComponentLink~11d983f30c271bee59b7d5b486e95d7c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~11d983f30c271bee59b7d5b486e95d7c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=anatomy",
        "label": "Anatomy"
      },
      "Seo_ComponentLink:ComponentLink~f8a7b506c1cf3dd8d4fa5e83137c51aa": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~f8a7b506c1cf3dd8d4fa5e83137c51aa",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=bioinformatics",
        "label": "Bioinformatics"
      },
      "Seo_ComponentLink:ComponentLink~e4d09bffcd118d6abcfe716041eaeaab": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~e4d09bffcd118d6abcfe716041eaeaab",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=biology",
        "label": "Biology"
      },
      "Seo_ComponentLink:ComponentLink~27579d2516c5e0e6556f2cfca11870ec": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~27579d2516c5e0e6556f2cfca11870ec",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=clinical%20research",
        "label": "Clinical Research"
      },
      "Seo_ComponentLink:ComponentLink~8f9fde7fcb12e321fcaff8d117253001": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~8f9fde7fcb12e321fcaff8d117253001",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=healthcare%20data%20analytics",
        "label": "Healthcare Analytics"
      },
      "Seo_ComponentLink:ComponentLink~c229471463070217fc4c7d0d6c69f550": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~c229471463070217fc4c7d0d6c69f550",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=medical",
        "label": "Medical"
      },
      "Seo_ComponentLink:ComponentLink~d497418cc7cc71c7525f9dceac10357c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~d497418cc7cc71c7525f9dceac10357c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=medical%20terminology",
        "label": "Medical Terminology"
      },
      "Seo_ComponentLink:ComponentLink~16b1f1689d2f9f0526c0e4297dd111ae": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~16b1f1689d2f9f0526c0e4297dd111ae",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mental%20health",
        "label": "Mental Health"
      },
      "Seo_ComponentLink:ComponentLink~e35f2b360c85fff4bfbdd69e715dade5": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~e35f2b360c85fff4bfbdd69e715dade5",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=neuroscience",
        "label": "Neuroscience"
      },
      "Seo_ComponentLink:ComponentLink~a5641652adb305802c298aec5613bdf4": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~a5641652adb305802c298aec5613bdf4",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=pharmaceutical",
        "label": "Pharmaceutical"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~f3299872e4fba8aec6641481c703d100": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~f3299872e4fba8aec6641481c703d100",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~11d983f30c271bee59b7d5b486e95d7c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~f8a7b506c1cf3dd8d4fa5e83137c51aa"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e4d09bffcd118d6abcfe716041eaeaab"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~27579d2516c5e0e6556f2cfca11870ec"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~8f9fde7fcb12e321fcaff8d117253001"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~c229471463070217fc4c7d0d6c69f550"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~d497418cc7cc71c7525f9dceac10357c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~16b1f1689d2f9f0526c0e4297dd111ae"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e35f2b360c85fff4bfbdd69e715dade5"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~a5641652adb305802c298aec5613bdf4"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~b56f28fedbe9b095a7324b6f61206fca": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~b56f28fedbe9b095a7324b6f61206fca",
        "header": "health",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ea9d1b5f83dc0774f93d37c4e5d9880b"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~f3299872e4fba8aec6641481c703d100"
        }]
      },
      "Seo_ComponentLink:ComponentLink~02b6be8567cc635be62bcdeeb078a35a": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~02b6be8567cc635be62bcdeeb078a35a",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=personal%20development&productDifficultyLevel=Beginner",
        "label": "Beginner Personal Development Courses"
      },
      "Seo_ComponentLink:ComponentLink~6d54f6d3c27813832340fefbbf77ca15": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~6d54f6d3c27813832340fefbbf77ca15",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=personal%20development&productDifficultyLevel=Advanced",
        "label": "Advanced Personal Development Courses"
      },
      "Seo_ComponentLink:ComponentLink~bd0c4cd4c7c8f4a179c520bedfa7e78c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~bd0c4cd4c7c8f4a179c520bedfa7e78c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=personal%20development&productTypeDescription=Guided%20Projects",
        "label": "Personal Development Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~9689d6d4e61ae8b9550d45444912465a": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~9689d6d4e61ae8b9550d45444912465a",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~02b6be8567cc635be62bcdeeb078a35a"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~6d54f6d3c27813832340fefbbf77ca15"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~bd0c4cd4c7c8f4a179c520bedfa7e78c"
        }]
      },
      "Seo_ComponentLink:ComponentLink~a10a50157f8a47fd3e5f05414ac15e5b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~a10a50157f8a47fd3e5f05414ac15e5b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=chatgpt",
        "label": "ChatGPT"
      },
      "Seo_ComponentLink:ComponentLink~3cf6e6ea93d848142adc688a777d3c4c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~3cf6e6ea93d848142adc688a777d3c4c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=conflict%20resolution",
        "label": "Conflict Resolution"
      },
      "Seo_ComponentLink:ComponentLink~ba6049213a2b61d8a15561a0226f2250": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ba6049213a2b61d8a15561a0226f2250",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=critical%20thinking",
        "label": "Critical Thinking"
      },
      "Seo_ComponentLink:ComponentLink~34bda5c585c79568cb10bbe4125d8a0b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~34bda5c585c79568cb10bbe4125d8a0b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=emotional%20intelligence",
        "label": "Emotional Intelligence"
      },
      "Seo_ComponentLink:ComponentLink~cddc6457a3818f18fde59e9709ed1685": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~cddc6457a3818f18fde59e9709ed1685",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mindfulness",
        "label": "Mindfulness"
      },
      "Seo_ComponentLink:ComponentLink~38b26a6ec237b51b4996725cf342d399": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~38b26a6ec237b51b4996725cf342d399",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=public%20speaking",
        "label": "Public Speaking"
      },
      "Seo_ComponentLink:ComponentLink~d136fa792769387c8c7a97a7df64d5b8": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~d136fa792769387c8c7a97a7df64d5b8",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=soft%20skills",
        "label": "Soft Skills"
      },
      "Seo_ComponentLink:ComponentLink~2f391b4bdfee267b9a868ccf72e035cc": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~2f391b4bdfee267b9a868ccf72e035cc",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=time%20management",
        "label": "Time Management"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~8d610f16f972d8a194a2c5fbc36140d3": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~8d610f16f972d8a194a2c5fbc36140d3",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~a10a50157f8a47fd3e5f05414ac15e5b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~18ab2f3df380b27ab9917cb17f4e6de4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~3cf6e6ea93d848142adc688a777d3c4c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ba6049213a2b61d8a15561a0226f2250"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~34bda5c585c79568cb10bbe4125d8a0b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~30f8388055076b96da99848dc18b6f7f"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cddc6457a3818f18fde59e9709ed1685"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~38b26a6ec237b51b4996725cf342d399"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~d136fa792769387c8c7a97a7df64d5b8"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2f391b4bdfee267b9a868ccf72e035cc"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~11e59889aa2de3fee41f5a3dcb19a9e0": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~11e59889aa2de3fee41f5a3dcb19a9e0",
        "header": "personal-development",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~9689d6d4e61ae8b9550d45444912465a"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~8d610f16f972d8a194a2c5fbc36140d3"
        }]
      },
      "Seo_ComponentLink:ComponentLink~c3844db3c037bb265549deb094d59354": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~c3844db3c037bb265549deb094d59354",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=engineering&productDifficultyLevel=Beginner",
        "label": "Beginner Science and Engineering Courses"
      },
      "Seo_ComponentLink:ComponentLink~6a3681e4bbae546467f94a77dbbb07b8": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~6a3681e4bbae546467f94a77dbbb07b8",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=engineering&productDifficultyLevel=Advanced",
        "label": "Advanced Science and Engineering Courses"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~3c03d7af086a8060d5ed3de161a6aeb0": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~3c03d7af086a8060d5ed3de161a6aeb0",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~c3844db3c037bb265549deb094d59354"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~6a3681e4bbae546467f94a77dbbb07b8"
        }]
      },
      "Seo_ComponentLink:ComponentLink~f297898f6d309cf8143e01c94962c6f3": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~f297898f6d309cf8143e01c94962c6f3",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=astronomy",
        "label": "Astronomy"
      },
      "Seo_ComponentLink:ComponentLink~cb0d44c7c7fff8d3ff7352cdcfc38413": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~cb0d44c7c7fff8d3ff7352cdcfc38413",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=cad",
        "label": "CAD"
      },
      "Seo_ComponentLink:ComponentLink~39e6d8de50d697a9c6edf77eab0ed681": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~39e6d8de50d697a9c6edf77eab0ed681",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=civil%20engineering",
        "label": "Civil Engineering"
      },
      "Seo_ComponentLink:ComponentLink~4410e1d78751a38f1618ec4cf9bc87af": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4410e1d78751a38f1618ec4cf9bc87af",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=construction%20management",
        "label": "Construction Management"
      },
      "Seo_ComponentLink:ComponentLink~7f29a6bd7fef07d51384b21d93d31d66": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~7f29a6bd7fef07d51384b21d93d31d66",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=engineering",
        "label": "Engineering"
      },
      "Seo_ComponentLink:ComponentLink~c45425ba16b93b4517700aa9439b4d1b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~c45425ba16b93b4517700aa9439b4d1b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mathematics",
        "label": "Mathematics"
      },
      "Seo_ComponentLink:ComponentLink~de07557f0da186197cefb0a71f6c0dd4": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~de07557f0da186197cefb0a71f6c0dd4",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=physics",
        "label": "Physics"
      },
      "Seo_ComponentLink:ComponentLink~4f70c3fda758f4b45d9a2bc376c40da9": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4f70c3fda758f4b45d9a2bc376c40da9",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=renewable%20energy",
        "label": "Renewable Energy"
      },
      "Seo_ComponentLink:ComponentLink~ea97b4c7f385300bee037775801143c9": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ea97b4c7f385300bee037775801143c9",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=robotics",
        "label": "Robotics"
      },
      "Seo_ComponentLink:ComponentLink~bbdb3c8154deb3afb83db2c19975c2a5": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~bbdb3c8154deb3afb83db2c19975c2a5",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=sustainability",
        "label": "Sustainability"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~98f39e12739cad2d43501aea5d0de6a0": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~98f39e12739cad2d43501aea5d0de6a0",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~f297898f6d309cf8143e01c94962c6f3"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~cb0d44c7c7fff8d3ff7352cdcfc38413"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~39e6d8de50d697a9c6edf77eab0ed681"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4410e1d78751a38f1618ec4cf9bc87af"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~7f29a6bd7fef07d51384b21d93d31d66"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~c45425ba16b93b4517700aa9439b4d1b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~de07557f0da186197cefb0a71f6c0dd4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4f70c3fda758f4b45d9a2bc376c40da9"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ea97b4c7f385300bee037775801143c9"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~bbdb3c8154deb3afb83db2c19975c2a5"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~96fbd6e2b6f815c4c67f863303ec2ab6": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~96fbd6e2b6f815c4c67f863303ec2ab6",
        "header": "physical-science-and-engineering",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~3c03d7af086a8060d5ed3de161a6aeb0"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~98f39e12739cad2d43501aea5d0de6a0"
        }]
      },
      "Seo_ComponentLink:ComponentLink~f1dee9679d9f18702cec66a813a51c91": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~f1dee9679d9f18702cec66a813a51c91",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=social%20science&productDifficultyLevel=Beginner",
        "label": "Beginner Social Science Courses"
      },
      "Seo_ComponentLink:ComponentLink~1dece8c4e31f8b50ea9dd9395f69d69b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~1dece8c4e31f8b50ea9dd9395f69d69b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=social%20science&productDifficultyLevel=Advanced",
        "label": "Advanced Social Science Courses"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~b7169dc3c79d01410bc35debe5e612b2": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~b7169dc3c79d01410bc35debe5e612b2",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~f1dee9679d9f18702cec66a813a51c91"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~1dece8c4e31f8b50ea9dd9395f69d69b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4ca8c8de5da3622124a5c4b32232d1e8"
        }]
      },
      "Seo_ComponentLink:ComponentLink~de51dea2b3b173d5aded2bb276b72659": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~de51dea2b3b173d5aded2bb276b72659",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=anthropology",
        "label": "Anthropology"
      },
      "Seo_ComponentLink:ComponentLink~f9c38b41916da554dd948f3eaf0e9a83": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~f9c38b41916da554dd948f3eaf0e9a83",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=archeology",
        "label": "Archaeology"
      },
      "Seo_ComponentLink:ComponentLink~58ef9488f41be1ea12a3b51c2aabc6b4": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~58ef9488f41be1ea12a3b51c2aabc6b4",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=criminology",
        "label": "Criminology"
      },
      "Seo_ComponentLink:ComponentLink~1b1e82cd07eb7a60b262671d572f967a": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~1b1e82cd07eb7a60b262671d572f967a",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fbrowse\u002Fsocial-sciences\u002Feconomics",
        "label": "Economics"
      },
      "Seo_ComponentLink:ComponentLink~af785238e2a333a42e0e647678145f22": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~af785238e2a333a42e0e647678145f22",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fbrowse\u002Farts-and-humanities\u002Fhistory",
        "label": "History"
      },
      "Seo_ComponentLink:ComponentLink~af5302e5f154bb01570186db9f7bb808": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~af5302e5f154bb01570186db9f7bb808",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=international%20relations",
        "label": "International Relations"
      },
      "Seo_ComponentLink:ComponentLink~9fd01530745097e1f2f4a0fed3b5c08b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~9fd01530745097e1f2f4a0fed3b5c08b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fbrowse\u002Fsocial-sciences\u002Flaw",
        "label": "Law"
      },
      "Seo_ComponentLink:ComponentLink~ed0c3260c1aea2cad3edaf24a917a382": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ed0c3260c1aea2cad3edaf24a917a382",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=political%20science",
        "label": "Political Science"
      },
      "Seo_ComponentLink:ComponentLink~2ea1b013fab82acedf32b1ff32aa9e37": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~2ea1b013fab82acedf32b1ff32aa9e37",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fbrowse\u002Fhealth\u002Fpsychology",
        "label": "Psychology"
      },
      "Seo_ComponentLink:ComponentLink~db7fa500d553d01e43b022dc84da6a7f": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~db7fa500d553d01e43b022dc84da6a7f",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=sociology",
        "label": "Sociology"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~8757746cd6b83ec2acd5e3ecfad0e195": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~8757746cd6b83ec2acd5e3ecfad0e195",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~de51dea2b3b173d5aded2bb276b72659"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~f9c38b41916da554dd948f3eaf0e9a83"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~58ef9488f41be1ea12a3b51c2aabc6b4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~1b1e82cd07eb7a60b262671d572f967a"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~af785238e2a333a42e0e647678145f22"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~af5302e5f154bb01570186db9f7bb808"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~9fd01530745097e1f2f4a0fed3b5c08b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ed0c3260c1aea2cad3edaf24a917a382"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2ea1b013fab82acedf32b1ff32aa9e37"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~db7fa500d553d01e43b022dc84da6a7f"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~da715ed98eed4a7ad1af0cc3c31bff97": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~da715ed98eed4a7ad1af0cc3c31bff97",
        "header": "social-science",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~b7169dc3c79d01410bc35debe5e612b2"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~8757746cd6b83ec2acd5e3ecfad0e195"
        }]
      },
      "Seo_ComponentLink:ComponentLink~76226c837aa4816cde3363eae0172d16": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~76226c837aa4816cde3363eae0172d16",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=humanities&productDifficultyLevel=Beginner",
        "label": "Beginner Arts and Humanities Courses"
      },
      "Seo_ComponentLink:ComponentLink~de7d7ace6af14c0560e9811336be204b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~de7d7ace6af14c0560e9811336be204b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=humanities&productTypeDescription=Guided%20Projects",
        "label": "Arts and Humanities Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~b0cf1dda8bc72703ccbc9322d45259bf": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~b0cf1dda8bc72703ccbc9322d45259bf",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~76226c837aa4816cde3363eae0172d16"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~de7d7ace6af14c0560e9811336be204b"
        }]
      },
      "Seo_ComponentLink:ComponentLink~43bc518ba6aa25ff82ff6f620a19ef19": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~43bc518ba6aa25ff82ff6f620a19ef19",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=architecture",
        "label": "Architecture"
      },
      "Seo_ComponentLink:ComponentLink~940f91756b8672c236c39de90f1bd35c": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~940f91756b8672c236c39de90f1bd35c",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=art",
        "label": "Art"
      },
      "Seo_ComponentLink:ComponentLink~ae2fd1c3637817f27eaf1786ab7a61d8": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ae2fd1c3637817f27eaf1786ab7a61d8",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=art%20history",
        "label": "Art History"
      },
      "Seo_ComponentLink:ComponentLink~d39ccc6b73616c88890625fd51eb70a2": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~d39ccc6b73616c88890625fd51eb70a2",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=copywriting",
        "label": "Copywriting"
      },
      "Seo_ComponentLink:ComponentLink~980e78e5575dfd59bf2964279a4505ae": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~980e78e5575dfd59bf2964279a4505ae",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=creative%20writing",
        "label": "Creative Writing"
      },
      "Seo_ComponentLink:ComponentLink~adabac013a2ded281e98c184c0d5f1a2": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~adabac013a2ded281e98c184c0d5f1a2",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=graphic%20design",
        "label": "Graphic Design"
      },
      "Seo_ComponentLink:ComponentLink~e20e3cb809836b738fe785df31b9a45f": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~e20e3cb809836b738fe785df31b9a45f",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=photography",
        "label": "Photography"
      },
      "Seo_ComponentLink:ComponentLink~08ac6345333d6101b895e465aae97693": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~08ac6345333d6101b895e465aae97693",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=social%20media%20marketing",
        "label": "Social Media Marketing"
      },
      "Seo_ComponentLink:ComponentLink~fe057fcf6b409baea0845c7098d3f800": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~fe057fcf6b409baea0845c7098d3f800",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=ux%20design",
        "label": "UX Design"
      },
      "Seo_ComponentLink:ComponentLink~4ca1c7686d8a8f1e35b0f056f35c9e81": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4ca1c7686d8a8f1e35b0f056f35c9e81",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=writing",
        "label": "Writing"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~e04ab299d24c90abce566ce492c56b77": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~e04ab299d24c90abce566ce492c56b77",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~43bc518ba6aa25ff82ff6f620a19ef19"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~940f91756b8672c236c39de90f1bd35c"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ae2fd1c3637817f27eaf1786ab7a61d8"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~d39ccc6b73616c88890625fd51eb70a2"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~980e78e5575dfd59bf2964279a4505ae"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~adabac013a2ded281e98c184c0d5f1a2"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~e20e3cb809836b738fe785df31b9a45f"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~08ac6345333d6101b895e465aae97693"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~fe057fcf6b409baea0845c7098d3f800"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4ca1c7686d8a8f1e35b0f056f35c9e81"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~cbff4b4acd36f482e019e23ea6a8d7bc": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~cbff4b4acd36f482e019e23ea6a8d7bc",
        "header": "arts-and-humanities",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~b0cf1dda8bc72703ccbc9322d45259bf"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~e04ab299d24c90abce566ce492c56b77"
        }]
      },
      "Seo_ComponentLink:ComponentLink~d7770dfdff1de6ceeb7482298f09aa1d": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~d7770dfdff1de6ceeb7482298f09aa1d",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mathematics&productDifficultyLevel=Beginner",
        "label": "Beginner Math Courses"
      },
      "Seo_ComponentLink:ComponentLink~4692642a7be231f9d501e5a9991c8699": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4692642a7be231f9d501e5a9991c8699",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mathematics&productDifficultyLevel=Advanced",
        "label": "Advanced Math Courses"
      },
      "Seo_ComponentLink:ComponentLink~b9bd29e4d929d1a99d38ec12691a7a68": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~b9bd29e4d929d1a99d38ec12691a7a68",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=mathematics&productTypeDescription=Guided%20Projects",
        "label": "Maths Projects"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ae7ccb1cc39f714f3d95f6644671aa6b": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~ae7ccb1cc39f714f3d95f6644671aa6b",
        "header": "get-started",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~d7770dfdff1de6ceeb7482298f09aa1d"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4692642a7be231f9d501e5a9991c8699"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~b9bd29e4d929d1a99d38ec12691a7a68"
        }]
      },
      "Seo_ComponentLink:ComponentLink~8ee43744a32eea4488c3032c40980446": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~8ee43744a32eea4488c3032c40980446",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=accounting",
        "label": "Accounting"
      },
      "Seo_ComponentLink:ComponentLink~7b42137cdf76603018a72cf9ab1fca86": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~7b42137cdf76603018a72cf9ab1fca86",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=algebra",
        "label": "Algebra"
      },
      "Seo_ComponentLink:ComponentLink~051cf40b9b431ae41c2a346dc350004e": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~051cf40b9b431ae41c2a346dc350004e",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=calculus",
        "label": "Calculus"
      },
      "Seo_ComponentLink:ComponentLink~3ad64e9b753a2ecceda5c5355dce13c4": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~3ad64e9b753a2ecceda5c5355dce13c4",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=discrete%20mathematics",
        "label": "Discrete Mathematics"
      },
      "Seo_ComponentLink:ComponentLink~4ee9f6a63bedfe86ae677093a02b11b7": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~4ee9f6a63bedfe86ae677093a02b11b7",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=financial%20modeling",
        "label": "Financial Modeling"
      },
      "Seo_ComponentLink:ComponentLink~508285d567f265d659af497a4439b52b": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~508285d567f265d659af497a4439b52b",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=linear%20algebra",
        "label": "Linear Algebra"
      },
      "Seo_ComponentLink:ComponentLink~2fde594d5c566544b5d7803d75bf9de2": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~2fde594d5c566544b5d7803d75bf9de2",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=optimization",
        "label": "Optimization"
      },
      "Seo_ComponentLink:ComponentLink~ae32311b7238012239373285f4989bb5": {
        "__typename": "Seo_ComponentLink",
        "id": "ComponentLink~ae32311b7238012239373285f4989bb5",
        "href": "https:\u002F\u002Fwww.coursera.org\u002Fcourses?query=probability",
        "label": "Probability"
      },
      "Seo_MegaMenuSubcategory:MegaMenuSubcategory~fdee00c39a829f7154177cbc77eba7f8": {
        "__typename": "Seo_MegaMenuSubcategory",
        "id": "MegaMenuSubcategory~fdee00c39a829f7154177cbc77eba7f8",
        "header": "popular-skills",
        "links": [{
          "__ref": "Seo_ComponentLink:ComponentLink~8ee43744a32eea4488c3032c40980446"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~7b42137cdf76603018a72cf9ab1fca86"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~051cf40b9b431ae41c2a346dc350004e"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~3ad64e9b753a2ecceda5c5355dce13c4"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~4ee9f6a63bedfe86ae677093a02b11b7"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~508285d567f265d659af497a4439b52b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~c45425ba16b93b4517700aa9439b4d1b"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~2fde594d5c566544b5d7803d75bf9de2"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~ae32311b7238012239373285f4989bb5"
        }, {
          "__ref": "Seo_ComponentLink:ComponentLink~bf28118abdf3d468e6943654778d6d37"
        }]
      },
      "Seo_MegaMenuCategory:MegaMenuCategory~975020e87cd6a75f5f0ff570a1557018": {
        "__typename": "Seo_MegaMenuCategory",
        "id": "MegaMenuCategory~975020e87cd6a75f5f0ff570a1557018",
        "header": "math-and-logic",
        "subcategories": [{
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~ae7ccb1cc39f714f3d95f6644671aa6b"
        }, {
          "__ref": "Seo_MegaMenuSubcategory:MegaMenuSubcategory~fdee00c39a829f7154177cbc77eba7f8"
        }]
      },
      "Seo_MegaMenu:MegaMenu~4fd4a56c435d5c26b3c3c366f51b074e": {
        "__typename": "Seo_MegaMenu",
        "id": "MegaMenu~4fd4a56c435d5c26b3c3c366f51b074e",
        "categories": [{
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~ec6128ad815bf6c98d655595dccef55b"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~28bb4164c8caf394bbff9f3bff04d1c2"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~7ddd623d066ed5229e68f3a8a2edda21"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~6b0180ebcc5d56e0c5b2a19303bf0d1a"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~a59aea0bffaa1ac5252aaafa579bae5a"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~b56f28fedbe9b095a7324b6f61206fca"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~11e59889aa2de3fee41f5a3dcb19a9e0"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~96fbd6e2b6f815c4c67f863303ec2ab6"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~da715ed98eed4a7ad1af0cc3c31bff97"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~cbff4b4acd36f482e019e23ea6a8d7bc"
        }, {
          "__ref": "Seo_MegaMenuCategory:MegaMenuCategory~975020e87cd6a75f5f0ff570a1557018"
        }]
      },
      "Seo_PageDataV1:PageData~98dee2bf8d3197072d4d3cf6b7588f10": {
        "__typename": "Seo_PageDataV1",
        "id": "PageData~98dee2bf8d3197072d4d3cf6b7588f10",
        "globalFooter": {
          "__ref": "Seo_Footer:PageGlobalFooter~4fd4a56c435d5c26b3c3c366f51b074e"
        },
        "subfooter": {
          "__ref": "Seo_Footer:PageSubfooter~4fd4a56c435d5c26b3c3c366f51b074e"
        },
        "metaTags": {
          "__ref": "Seo_MetaTags:PageMetaTags~7bd4f3f25b6992772af980fdb2de061d"
        },
        "megaMenu": {
          "__ref": "Seo_MegaMenu:MegaMenu~4fd4a56c435d5c26b3c3c366f51b074e"
        }
      },
      "Seo_PathConfiguration:PageData~98dee2bf8d3197072d4d3cf6b7588f10": {
        "__typename": "Seo_PathConfiguration",
        "id": "PageData~98dee2bf8d3197072d4d3cf6b7588f10",
        "pageData": {
          "__ref": "Seo_PageDataV1:PageData~98dee2bf8d3197072d4d3cf6b7588f10"
        },
        "eqpData": null
      },
      "SeoQueries:{}": {
        "__typename": "SeoQueries",
        "seoPathConfigurationQuery({\"path\":\"www.coursera.org\u002Fspecializations\u002Fartificial-intelligence-overview\"})": {
          "__ref": "Seo_PathConfiguration:PageData~98dee2bf8d3197072d4d3cf6b7588f10"
        }
      },
      "ROOT_QUERY": {
        "__typename": "Query",
        "Seo": {
          "__ref": "SeoQueries:{}"
        },
        "DescriptionPage": {
          "__ref": "DescriptionPageQueries:{}"
        },
        "ScopedContentRule": {
          "__ref": "ScopedContentRuleQueries:{}"
        },
        "CoursesV1@naptime": {
          "__ref": "NaptimeCoursesV1Resource:{}"
        },
        "CourseScheduleExperienceConfigurationV1@naptime": {
          "__ref": "NaptimeCourseScheduleExperienceConfigurationV1Resource:{}"
        }
      },
      "DescriptionPage_Faq:1740d9a7-ebdb-4100-b2fd-9c177685e736": {
        "__typename": "DescriptionPage_Faq",
        "id": "1740d9a7-ebdb-4100-b2fd-9c177685e736",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EThe specialization is composed by 5 courses with a total estimated workload of around 25 hours\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EThe specialization is composed by 5 courses with a total estimated workload of around 25 hours\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EHow long does it take to complete the Specialization?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EHow long does it take to complete the Specialization?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:47418d47-d3a7-423e-9c57-02a66c9b9e17": {
        "__typename": "DescriptionPage_Faq",
        "id": "47418d47-d3a7-423e-9c57-02a66c9b9e17",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ENo recommended background\u002Fknowledge is required\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ENo recommended background\u002Fknowledge is required\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EWhat background knowledge is necessary?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EWhat background knowledge is necessary?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:cfddbbec-6a5c-488d-8183-529507a9c805": {
        "__typename": "DescriptionPage_Faq",
        "id": "cfddbbec-6a5c-488d-8183-529507a9c805",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ENo specific order required\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ENo specific order required\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EDo I need to take the courses in a specific order?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EDo I need to take the courses in a specific order?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:635d63fd-6b65-47fc-8560-572ac52cc00b": {
        "__typename": "DescriptionPage_Faq",
        "id": "635d63fd-6b65-47fc-8560-572ac52cc00b",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EThis specialization does not confer any academic credit, grade or degree.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EThis specialization does not confer any academic credit, grade or degree.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EWill I earn university credit for completing the Specialization?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EWill I earn university credit for completing the Specialization?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:5804aaa7-0181-4d09-b152-9c45e53dff2e": {
        "__typename": "DescriptionPage_Faq",
        "id": "5804aaa7-0181-4d09-b152-9c45e53dff2e",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EThis course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EThis course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EIs this course really 100% online? Do I need to attend any classes in person?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EIs this course really 100% online? Do I need to attend any classes in person?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:12c39fca-4c41-49c1-85cf-937964bcc1d7": {
        "__typename": "DescriptionPage_Faq",
        "id": "12c39fca-4c41-49c1-85cf-937964bcc1d7",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EIf you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time. \u003Ca href=\"https:\u002F\u002Flearner.coursera.help\u002Fhc\u002Fen-us\u002Farticles\u002F208280266-Refund-policies\"\u003ESee our full refund policy\u003C\u002Fa\u003E.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EIf you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time. \u003Ca href=\"https:\u002F\u002Flearner.coursera.help\u002Fhc\u002Fen-us\u002Farticles\u002F208280266-Refund-policies\" target=\"_blank\" rel=\"noopener nofollow\" aria-label=\"\"\u003ESee our full refund policy\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": false
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EWhat is the refund policy?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EWhat is the refund policy?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:434603c3-5818-45a2-a9d4-68437af3971a": {
        "__typename": "DescriptionPage_Faq",
        "id": "434603c3-5818-45a2-a9d4-68437af3971a",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EYes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. Visit your learner dashboard to track your progress.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EYes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. Visit your learner dashboard to track your progress.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ECan I just enroll in a single course?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ECan I just enroll in a single course?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:7f320c64-aa7b-42ff-bc09-bdb77e56d6ee": {
        "__typename": "DescriptionPage_Faq",
        "id": "7f320c64-aa7b-42ff-bc09-bdb77e56d6ee",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EYes. In select learning programs, you can apply for financial aid or a scholarship if you can’t afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you’ll find a link to apply on the description page.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EYes. In select learning programs, you can apply for financial aid or a scholarship if you can’t afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you’ll find a link to apply on the description page.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EIs financial aid available?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EIs financial aid available?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Faq:0d2d5cf8-27d6-4342-b75a-5b83a01bef97": {
        "__typename": "DescriptionPage_Faq",
        "id": "0d2d5cf8-27d6-4342-b75a-5b83a01bef97",
        "answer": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EWhen you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free. If you cannot afford the fee, \u003Ca href=\"https:\u002F\u002Flearner.coursera.help\u002Fhc\u002Fen-us\u002Farticles\u002F209819033-Apply-for-Financial-Aid\"\u003Eyou can apply for financial aid\u003C\u002Fa\u003E.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EWhen you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free. If you cannot afford the fee, \u003Ca href=\"https:\u002F\u002Flearner.coursera.help\u002Fhc\u002Fen-us\u002Farticles\u002F209819033-Apply-for-Financial-Aid\" target=\"_blank\" rel=\"noopener nofollow\" aria-label=\"\"\u003Eyou can apply for financial aid\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": false
            }
          }
        },
        "question": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ECan I take the course for free?\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ECan I take the course for free?\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }
      },
      "DescriptionPage_Partner:405": {
        "__typename": "DescriptionPage_Partner",
        "id": "405",
        "accentColor": "#FFFFFF",
        "classLogo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttp:\u002F\u002Fcoursera-university-assets.s3.amazonaws.com\u002F45\u002Ffda090b19211e69ec6139bfb638ae2\u002FPolimi_logo_wide.png",
        "description": "Politecnico di Milano is a scientific-technological University, which trains engineers, architects and industrial designers.\nFrom 2014 Politecnico di Milano started the release of several MOOCs, developed by the service for digital learning METID (Methods and Innovative Technologies for Learning), giving everybody the chance to enhance personal skills.",
        "logo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttp:\u002F\u002Fcoursera-university-assets.s3.amazonaws.com\u002Ff7\u002F699a50b19711e6ba16b7bc20afd930\u002FPolimi_logo_partner-front.png",
        "name": "Politecnico di Milano",
        "partnerMarketingBlurb": null,
        "primaryColor": "#0F2C53",
        "primaryLogo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttp:\u002F\u002Fcoursera-university-assets.s3.amazonaws.com\u002F45\u002Ffda090b19211e69ec6139bfb638ae2\u002FPolimi_logo_wide.png",
        "productBrandingLogo": "https:\u002F\u002Fs3.amazonaws.com\u002Fcoursera_assets\u002Fxdp\u002FpartnerLogos\u002Fsvg\u002Fpolimi.svg",
        "rectangularLogo": "http:\u002F\u002Fcoursera-university-assets.s3.amazonaws.com\u002F50\u002Fdd5780b19711e69d58b1124dd60b1d\u002FPolimi_logo_vector.svg",
        "secondaryColor": "#547ab0",
        "shortName": "polimi",
        "squareLogo": "http:\u002F\u002Fcoursera-university-assets.s3.amazonaws.com\u002F4e\u002Ffda9c0b19111e6882591891fb498a5\u002FPolimi_logo_square.png",
        "website": "http:\u002F\u002Fwww.polimi.it\u002Fen\u002F",
        "instructorIds": ["54924922", "2261169", "33744112", "84313153", "10120672", "6303744", "127538498", "5521832", "127540725", "58774021", "127780364", "38644718", "22875121", "97097853", "97199246", "126109963", "127927015", "841794", "14145952", "59384245", "5549829", "97751227", "30777603", "2019129", "103864191", "98674264", "58449339", "15800343", "152205410"]
      },
      "DescriptionPage_Course:h5dcezicEeyZlQoNyXy15Q": {
        "__typename": "DescriptionPage_Course",
        "id": "h5dcezicEeyZlQoNyXy15Q",
        "description": "The course will provide a non-technical overview of the artificial intelligence field. Initially, a discussion on the birth of AI is provided, remarking the seminal ideas and preliminary goals. Furthermore, the crucial weaknesses are presented and how these weaknesses have been circumvented. Then, the current state of AI is presented, in terms of goals, importance at national level, and strategies. Moreover, the taxonomy of the AI topics is presented.",
        "name": "Artificial Intelligence: An Overview",
        "partners": [{
          "__ref": "DescriptionPage_Partner:405"
        }],
        "photoUrl": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-course-photos.s3.amazonaws.com\u002Fd8\u002F55e42cfb7d46bc8d769505eade77b3\u002FAI101_cover.jpg",
        "ratings": {
          "__typename": "DescriptionPage_Ratings",
          "averageFiveStarRating": 4.529411764705882,
          "commentCount": 27,
          "ratingCount": 119
        },
        "slug": "artificial-intelligence-an-overview",
        "skills": [],
        "cmlLearningObjectives": [{
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EExplain the seminal ideas leading to the birth of AI, the major difficulties and how the international community overtook them.\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EExplain the seminal ideas leading to the birth of AI, the major difficulties and how the international community overtook them.\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EDescribe what AI is today in terms of goals, scientific community, companies’ interests\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EDescribe what AI is today in terms of goals, scientific community, companies’ interests\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EDescribe the taxonomy of the know-how on AI in terms of techniques, software and hardware methodologies. \u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EDescribe the taxonomy of the know-how on AI in terms of techniques, software and hardware methodologies. \u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EExplain the need for national strategies on AI and identify the major Italian and European players on AI\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EExplain the need for national strategies on AI and identify the major Italian and European players on AI\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }],
        "totalContentDuration": "PT7H47M58S"
      },
      "DescriptionPage_Course:p_-Q0DicEeyeYA42DXbPkQ": {
        "__typename": "DescriptionPage_Course",
        "id": "p_-Q0DicEeyeYA42DXbPkQ",
        "description": "This course deals with the problems created, aggravated or transformed by AI. It is intended to give students a chance to reflect on the ethical, social, and cultural impact of AI by focusing on the issues faced by and brought about by professionals in AI but also by citizens, institutions and societies. The course addresses these topics by means of case studies and examples analyzed in the light of the main ethical frameworks.",
        "name": "Ethics of Artificial Intelligence",
        "partners": [{
          "__ref": "DescriptionPage_Partner:405"
        }],
        "photoUrl": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-course-photos.s3.amazonaws.com\u002Fe6\u002F6ff9aa24b548dcac467257d717f683\u002FAI102_cover.jpg",
        "ratings": {
          "__typename": "DescriptionPage_Ratings",
          "averageFiveStarRating": 4.737864077669903,
          "commentCount": 24,
          "ratingCount": 103
        },
        "slug": "ethics-of-artificial-intelligence",
        "skills": [],
        "cmlLearningObjectives": [{
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EDescribe the reasons for an ethical analysis applied to AI.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EDescribe the reasons for an ethical analysis applied to AI.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EIdentify the ethical and social impacts and implications of AI.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EIdentify the ethical and social impacts and implications of AI.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EUse critical skills in clarifying and ethically analyzing AI in different domains of life.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EUse critical skills in clarifying and ethically analyzing AI in different domains of life.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ECritically analyze the current policies for AI and use ethical and socially responsible principles in your professional life.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ECritically analyze the current policies for AI and use ethical and socially responsible principles in your professional life.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }],
        "totalContentDuration": "PT10H38M32S"
      },
      "DescriptionPage_Course:uX4sSDicEeyeYA42DXbPkQ": {
        "__typename": "DescriptionPage_Course",
        "id": "uX4sSDicEeyeYA42DXbPkQ",
        "description": "The purpose of the course is to help students understand the legal implications related to the design and use of artificial intelligence systems, providing an overview of the risks and legal protections that can be envisaged and giving an overview of the legislation and legal principles currently applicable on the subject. In particular, the profiles of civil and criminal liability, protection in terms of intellectual property and the impacts of AI on the fundamental rights of the individual - including privacy and the right to non-discrimination – will be examined.",
        "name": "Artificial Intelligence and legal issues",
        "partners": [{
          "__ref": "DescriptionPage_Partner:405"
        }],
        "photoUrl": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-course-photos.s3.amazonaws.com\u002Fb4\u002F5b767e591d4b5f930dae7ac2d4af47\u002FAI103_cover.jpg",
        "ratings": {
          "__typename": "DescriptionPage_Ratings",
          "averageFiveStarRating": 4.39622641509434,
          "commentCount": 12,
          "ratingCount": 53
        },
        "slug": "artificial-intelligence-and-legal-issues",
        "skills": [],
        "cmlLearningObjectives": [{
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ERecognize that the use of AI requires to be analysed, evaluated and addressed also from a legal point of view.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ERecognize that the use of AI requires to be analysed, evaluated and addressed also from a legal point of view.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EIndicate the main legal concepts of liability for choices made by or through intelligent systems and compensation for any consequential damage.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EIndicate the main legal concepts of liability for choices made by or through intelligent systems and compensation for any consequential damage.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EVerify whether and which criminal law principles apply when an offence is committed by an AI system.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EVerify whether and which criminal law principles apply when an offence is committed by an AI system.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ERecognize the difference between copyright and patent and recognize the risks to fundamental rights and freedoms deriving from  AI. \u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ERecognize the difference between copyright and patent and recognize the risks to fundamental rights and freedoms deriving from  AI. \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }],
        "totalContentDuration": "PT3H33M55S"
      },
      "DescriptionPage_Course:0SgQvTicEeyScxKfWjmBww": {
        "__typename": "DescriptionPage_Course",
        "id": "0SgQvTicEeyScxKfWjmBww",
        "description": "This course will address the hardware technologies for machine and deep learning (from the units of an Internet-of-Things system to a large-scale data centers) and will explore the families of machine and deep learning platforms (libraries and frameworks) for the design and development of smart applications and systems.",
        "name": "Technologies and platforms for Artificial Intelligence",
        "partners": [{
          "__ref": "DescriptionPage_Partner:405"
        }],
        "photoUrl": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-course-photos.s3.amazonaws.com\u002F92\u002Ff99609bafb4b0fba2f53460d4689af\u002FAI104_cover.jpg",
        "ratings": {
          "__typename": "DescriptionPage_Ratings",
          "averageFiveStarRating": 4.666666666666667,
          "commentCount": 8,
          "ratingCount": 33
        },
        "slug": "technologies-and-platforms-for-artificial-intelligence",
        "skills": [],
        "cmlLearningObjectives": [{
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EDescribe the technological scenario of AI (Cloud, Edge, IoT) from an IT perspective.\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EDescribe the technological scenario of AI (Cloud, Edge, IoT) from an IT perspective.\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EIdentify the Machine and Deep Learning techniques and solutions developed for IoT and Edge Computing systems.\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EIdentify the Machine and Deep Learning techniques and solutions developed for IoT and Edge Computing systems.\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EExplain the main challenges and opportunities of technologies and platforms for AI.\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EExplain the main challenges and opportunities of technologies and platforms for AI.\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }],
        "totalContentDuration": "PT2H55M"
      },
      "DescriptionPage_Course:pd6k5ZPdEeyw3RKLNRxAsw": {
        "__typename": "DescriptionPage_Course",
        "id": "pd6k5ZPdEeyw3RKLNRxAsw",
        "description": "The course provides a general overview of the main methods in the machine learning field. Starting from a taxonomy of the different problems that can be solved through machine learning techniques, the course briefly presents some algorithmic solutions, highlighting when they can be successful, but also their limitations. These concepts will be explained through examples and case studies.",
        "name": "Machine Learning: an overview",
        "partners": [{
          "__ref": "DescriptionPage_Partner:405"
        }],
        "photoUrl": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-course-photos.s3.amazonaws.com\u002F90\u002F0d0766c82d410b88d1af24572ec7af\u002FAI105_cover.jpg",
        "ratings": {
          "__typename": "DescriptionPage_Ratings",
          "averageFiveStarRating": 4.456521739130435,
          "commentCount": 8,
          "ratingCount": 46
        },
        "slug": "machine-learning-overview",
        "skills": [],
        "cmlLearningObjectives": [{
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EClassify machine learning problems, supervised learning problems and describe the limitations of machine learning techniques in supervised learning\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003Ctext\u003E\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EClassify machine learning problems, supervised learning problems and describe the limitations of machine learning techniques in supervised learning\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EClassify machine learning problems in unsupervised learning, describe the utility of dimensionality reduction techniques  \u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EClassify machine learning problems in unsupervised learning, describe the utility of dimensionality reduction techniques  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }, {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EFormulate a sequential decision-making problem, explain what a value function is and describe how to optimize a policy in reinforcement learning \u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "course\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EFormulate a sequential decision-making problem, explain what a value function is and describe how to optimize a policy in reinforcement learning \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        }],
        "totalContentDuration": "PT2H44M19S"
      },
      "DescriptionPage_Instructor:103864191": {
        "__typename": "DescriptionPage_Instructor",
        "id": "103864191",
        "coursesTaught": 1,
        "department": "DEIB - Dept. of Electronics, Information and Bioengineering",
        "fullName": "Marcello Restelli",
        "isTopInstructor": null,
        "learnersReached": 3440,
        "photo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-instructor-photos.s3.amazonaws.com\u002Fbe\u002F52337175104f0dba38f9889bbd5378\u002FRestelli-Marcello.jpg",
        "shortName": "restellimarcello",
        "title": "Associate Professor",
        "website": null
      },
      "DescriptionPage_Instructor:97097853": {
        "__typename": "DescriptionPage_Instructor",
        "id": "97097853",
        "coursesTaught": 1,
        "department": "DEIB - Dept. of Electronics, Information and Bioengineering",
        "fullName": "Nicola Gatti",
        "isTopInstructor": null,
        "learnersReached": 7153,
        "photo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-instructor-photos.s3.amazonaws.com\u002F4c\u002Fe5677f8df24b7389f20a6aa5464cf6\u002FGatti-Nicola.jpg",
        "shortName": "gattinicola",
        "title": "Associate Professor",
        "website": null
      },
      "DescriptionPage_Instructor:97199246": {
        "__typename": "DescriptionPage_Instructor",
        "id": "97199246",
        "coursesTaught": 1,
        "department": "DEIB - Dept. of Electronics, Information and Bioengineering",
        "fullName": "Viola Schiaffonati",
        "isTopInstructor": null,
        "learnersReached": 9529,
        "photo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-instructor-photos.s3.amazonaws.com\u002F9e\u002F4e165da06c4a558fdad82ada5cfe0c\u002FSchiaffonati-Viola.jpg",
        "shortName": "schiaffonativiola",
        "title": "Associate Professor",
        "website": null
      },
      "DescriptionPage_Instructor:97751227": {
        "__typename": "DescriptionPage_Instructor",
        "id": "97751227",
        "coursesTaught": 1,
        "department": "DEIB - Dept. of Electronics, Information and Bioengineering",
        "fullName": "Manuel Roveri",
        "isTopInstructor": null,
        "learnersReached": 2586,
        "photo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-instructor-photos.s3.amazonaws.com\u002F8f\u002Fa55d43158440fd932aa82d1584a68b\u002FRoveri-Manuel.jpg",
        "shortName": "roverimanuel",
        "title": "Associate Professor",
        "website": null
      },
      "DescriptionPage_Instructor:98674264": {
        "__typename": "DescriptionPage_Instructor",
        "id": "98674264",
        "coursesTaught": 1,
        "department": "Osservatori Digital Innovation of Politecnico di Milano",
        "fullName": "Annamaria Italiano",
        "isTopInstructor": null,
        "learnersReached": 4192,
        "photo": "https:\u002F\u002Fd3njjcbhbojbot.cloudfront.net\u002Fapi\u002Futilities\u002Fv1\u002Fimageproxy\u002Fhttps:\u002F\u002Fcoursera-instructor-photos.s3.amazonaws.com\u002Fd4\u002Fa860e94e9e49d590439872256d9f3b\u002Fitaliano_HQ.jpg",
        "shortName": "italianoannamaria",
        "title": "Senior Advisor",
        "website": null
      },
      "DescriptionPage_SpecializationPage:D5-G_39lEeye0BJDMcVCxw": {
        "__typename": "DescriptionPage_SpecializationPage",
        "id": "D5-G_39lEeye0BJDMcVCxw",
        "professionalCertificateType": "ADVANCED",
        "cardImageUrl": "https:\u002F\u002Fd15cw65ipctsrr.cloudfront.net\u002F04\u002F1e468b2a7846abad7984b0022dca1a\u002FAI_Specialization-Logo.png",
        "careerOutcomes": {
          "__typename": "DescriptionPage_CareerOutcomes",
          "additionalValueProps": null,
          "careerGrowthInPercentage": null,
          "jobTitleForMedianEntryLevelSalary": null,
          "disclaimersForEnterpriseLearners": null,
          "disclaimers": null,
          "jobOpeningsInUs": null,
          "medianEntryLevelSalary": null,
          "qualifyingJobTitles": null,
          "careerResources": null,
          "hiringPartners": null
        },
        "certificateLogo": "https:\u002F\u002Fd15cw65ipctsrr.cloudfront.net\u002F04\u002F1e468b2a7846abad7984b0022dca1a\u002FAI_Specialization-Logo.png",
        "cmlDescription": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003EThis Specialization is intended for beginners seeking to enter the artificial intelligence world. Through five courses, you will cover artificial intelligence technical groundings (including machine learning and technologies), ethical and legal issues, which will give you a clear picture of what artificial intelligence is and what opportunities artificial intelligence will provide in the next future.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003EThis Specialization is intended for beginners seeking to enter the artificial intelligence world. Through five courses, you will cover artificial intelligence technical groundings (including machine learning and technologies), ethical and legal issues, which will give you a clear picture of what artificial intelligence is and what opportunities artificial intelligence will provide in the next future.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "cmlFaqs": [{
          "__ref": "DescriptionPage_Faq:1740d9a7-ebdb-4100-b2fd-9c177685e736"
        }, {
          "__ref": "DescriptionPage_Faq:47418d47-d3a7-423e-9c57-02a66c9b9e17"
        }, {
          "__ref": "DescriptionPage_Faq:cfddbbec-6a5c-488d-8183-529507a9c805"
        }, {
          "__ref": "DescriptionPage_Faq:635d63fd-6b65-47fc-8560-572ac52cc00b"
        }, {
          "__ref": "DescriptionPage_Faq:5804aaa7-0181-4d09-b152-9c45e53dff2e"
        }, {
          "__ref": "DescriptionPage_Faq:12c39fca-4c41-49c1-85cf-937964bcc1d7"
        }, {
          "__ref": "DescriptionPage_Faq:434603c3-5818-45a2-a9d4-68437af3971a"
        }, {
          "__ref": "DescriptionPage_Faq:7f320c64-aa7b-42ff-bc09-bdb77e56d6ee"
        }, {
          "__ref": "DescriptionPage_Faq:0d2d5cf8-27d6-4342-b75a-5b83a01bef97"
        }],
        "cmlLearningObjectives": [],
        "cmlRecommendedBackground": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ENo recommended background\u002Fknowledge is required.  \u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ENo recommended background\u002Fknowledge is required.  \u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "coBrandingEnabled": false,
        "companyLogos": [],
        "courses": [{
          "__ref": "DescriptionPage_Course:h5dcezicEeyZlQoNyXy15Q"
        }, {
          "__ref": "DescriptionPage_Course:p_-Q0DicEeyeYA42DXbPkQ"
        }, {
          "__ref": "DescriptionPage_Course:uX4sSDicEeyeYA42DXbPkQ"
        }, {
          "__ref": "DescriptionPage_Course:0SgQvTicEeyScxKfWjmBww"
        }, {
          "__ref": "DescriptionPage_Course:pd6k5ZPdEeyw3RKLNRxAsw"
        }],
        "degrees": [],
        "description": "This Specialization is intended for beginners seeking to enter the artificial intelligence world. Through five courses, you will cover artificial intelligence technical groundings (including machine learning and technologies), ethical and legal issues, which will give you a clear picture of what artificial intelligence is and what opportunities artificial intelligence will provide in the next future.",
        "difficultyLevel": "BEGINNER",
        "domains": [{
          "__typename": "DescriptionPage_Domain",
          "domainId": "computer-science",
          "domainName": "Computer Science",
          "subdomainId": "algorithms",
          "subdomainName": "Algorithms"
        }, {
          "__typename": "DescriptionPage_Domain",
          "domainId": "computer-science",
          "domainName": "Computer Science",
          "subdomainId": "design-and-product",
          "subdomainName": "Design and Product"
        }],
        "headline": "Enter the artificial intelligence world",
        "instructors": [{
          "__ref": "DescriptionPage_Instructor:103864191"
        }, {
          "__ref": "DescriptionPage_Instructor:97097853"
        }, {
          "__ref": "DescriptionPage_Instructor:97199246"
        }, {
          "__ref": "DescriptionPage_Instructor:97751227"
        }, {
          "__ref": "DescriptionPage_Instructor:98674264"
        }],
        "learnerIncentivePromotions": [],
        "learningHoursPerWeek": 10,
        "learningOutcomes": null,
        "metaImgSrc": "https:\u002F\u002Fs3.amazonaws.com\u002Fcoursera_assets\u002Fmeta_images\u002Fgenerated\u002FXDP\u002FXDP~SPECIALIZATION!~artificial-intelligence-overview\u002FXDP~SPECIALIZATION!~artificial-intelligence-overview.jpeg",
        "name": "Artificial Intelligence: an Overview",
        "pageViewsInLastMonthCount": 3424,
        "partners": [{
          "__ref": "DescriptionPage_Partner:405"
        }],
        "primaryLanguages": ["en"],
        "translatedLanguages": [{
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "de",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "hi",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "ru",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "sv",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "ko",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "el",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "pt-BR",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "it",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "fr",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "es",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "zh-CN",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "ar",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "th",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "uk",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "ja",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "id",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "pl",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "nl",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "tr",
          "isMachineTranslated": true
        }, {
          "__typename": "DescriptionPage_TranslatedLanguage",
          "code": "kk",
          "isMachineTranslated": true
        }],
        "subtitleLanguages": ["en", "ar", "fr", "uk", "zh-CN", "el", "it", "pt-BR", "nl", "ko", "de", "ru", "th", "id", "sv", "tr", "es", "hi", "ja", "kk", "pl"],
        "productVariant": "STANDARD_SPECIALIZATION",
        "ratings": {
          "__typename": "DescriptionPage_Ratings",
          "averageFiveStarRating": 4.587628865979381,
          "commentCount": null,
          "ratingCount": 150
        },
        "skills": ["Artificial Intelligence (AI)", "Ethical issues of artificial intelligence", "Machine Learning", "Legal issues of artificial intelligence"],
        "slug": "artificial-intelligence-overview",
        "specializationAndCourseSkills": ["Artificial Intelligence (AI)", "Ethical issues of artificial intelligence", "Machine Learning", "Legal issues of artificial intelligence"],
        "subheader": "",
        "totalEnrollmentCount": 4991,
        "totalLearningMonths": 1,
        "projectsOverview": {
          "__typename": "CmlContent",
          "cmlValue": "\u003Cco-content\u003E\u003Ctext\u003ENo specific hands-on project is required but through this specialization, composed by 5 introductory courses. Learners will have all the necessary concept and tools to start building their own projects, combining the tools and concepts seen in the courses.\u003C\u002Ftext\u003E\u003C\u002Fco-content\u003E",
          "dtdId": "s12n\u002F1",
          "htmlWithMetadata": {
            "__typename": "CmlHtmlWithMetadata",
            "html": "\u003Cdiv class=\"cmlToHtml-content-container\" style=\"white-space: pre-wrap\"\u003E\u003Cp\u003ENo specific hands-on project is required but through this specialization, composed by 5 introductory courses. Learners will have all the necessary concept and tools to start building their own projects, combining the tools and concepts seen in the courses.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E",
            "metadata": {
              "__typename": "CmlHtmlMetadata",
              "hasAssetBlock": false,
              "hasCodeBlock": false,
              "hasMath": false,
              "isPlainText": true
            }
          }
        },
        "productTags": {
          "__typename": "DescriptionPage_ProductTags",
          "industryCertificationName": null,
          "industryCertificationQualification": null,
          "linkToACECreditRecommendation": null,
          "professionalCertificateType": "ADVANCED"
        },
        "launchedAt": "2022-04-18T12:56:34.207Z",
        "testimonials": []
      },
      "DescriptionPageQueries:{}": {
        "__typename": "DescriptionPageQueries",
        "querySpecializationPage({\"input\":{\"slug\":\"artificial-intelligence-overview\"}})": {
          "__ref": "DescriptionPage_SpecializationPage:D5-G_39lEeye0BJDMcVCxw"
        }
      },
      "ScopedContentRule:CourseraPlusSubscription~Specialization~D5-G_39lEeye0BJDMcVCxw": {
        "__typename": "ScopedContentRule",
        "id": "CourseraPlusSubscription~Specialization~D5-G_39lEeye0BJDMcVCxw",
        "policy": "ALLOW"
      },
      "ScopedContentRuleQueries:{}": {
        "__typename": "ScopedContentRuleQueries",
        "getRule({\"input\":{\"productItemId\":\"D5-G_39lEeye0BJDMcVCxw\",\"productType\":\"Specialization\",\"scope\":\"COURSERA_PLUS_SUBSCRIPTION\"}})": {
          "__typename": "ScopedContentRule_getPayload",
          "rule": {
            "__ref": "ScopedContentRule:CourseraPlusSubscription~Specialization~D5-G_39lEeye0BJDMcVCxw"
          }
        }
      },
      "NaptimeCoursesV1:h5dcezicEeyZlQoNyXy15Q": {
        "__typename": "NaptimeCoursesV1",
        "id": "h5dcezicEeyZlQoNyXy15Q",
        "courseStatus": "launched",
        "upcomingSessionStartDate": 1726470000000,
        "plannedLaunchDate": "December 12, 2021",
        "courseMode": "SESSION"
      },
      "NaptimeCoursesV1Resource:{}": {
        "__typename": "NaptimeCoursesV1Resource",
        "get({\"id\":\"h5dcezicEeyZlQoNyXy15Q\",\"showHidden\":true})": {
          "__typename": "NaptimeCoursesV1Connection",
          "elements": [{
            "__ref": "NaptimeCoursesV1:h5dcezicEeyZlQoNyXy15Q"
          }]
        }
      },
      "NaptimeCourseScheduleExperienceConfigurationV1Resource:{}": {
        "__typename": "NaptimeCourseScheduleExperienceConfigurationV1Resource",
        "byBranchFromEarliestOpenSchedule({\"id\":\"h5dcezicEeyZlQoNyXy15Q\"})": {
          "__typename": "NaptimeCourseScheduleExperienceConfigurationV1Connection",
          "elements": [{
            "__typename": "NaptimeCourseScheduleExperienceConfigurationV1",
            "experienceType": {
              "__typename": "NaptimeCourseScheduleExperienceConfigurationV1_experienceType_alwaysAvailable",
              "typeName": "alwaysAvailable"
            }
          }]
        }
      }
    };
    window.renderedClassNames = ["_wwcfwz"];
    window.detectedTimezone = "Asia/Kolkata";
  </script>
  <script src="https://browser.sentry-cdn.com/7.116.0/bundle.tracing.replay.min.js" integrity="sha384-v5KCoyoCh1Yh7c6eK4LMmVPKg0QXHz2v0MnregrGvYS5ZvJBHm52nCnHxyqhUP88" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    (function() {
      if (typeof Sentry === 'undefined') return;
      var sentryConfig;
      try {
        sentryConfig = JSON.parse("{\"publicDsn\":\"https://25bb4abda4c8faf350b6124d82304215@o75955.ingest.sentry.io/4505745374576640\",\"enabled\":true,\"sampleRate\":0.05}");
      } catch (err) {
        sentryConfig = null;
      }
      if (sentryConfig && sentryConfig.publicDsn) {
        Sentry.init({
          allowUrls: [new RegExp('^webpack://'), new RegExp('^https://d3njjcbhbojbot.cloudfront.net/web')],
          dsn: sentryConfig.publicDsn,
          enabled: sentryConfig.enabled,
          environment: 'production',
          integrations: [
            Sentry.browserTracingIntegration({
              enableInp: true,
            }),
          ],
          release: '47503615f13182d7daecb2b48a5097dbf168e0d8',
          sampleRate: sentryConfig.sampleRate,
          tracesSampleRate: sentryConfig.sampleRate / 10
        });
        Sentry.setTag('appname', 'consumer-description-page');
        Sentry.setTag('version', '47503615f13182d7daecb2b48a5097dbf168e0d8');
        if ("{{APPVERSION_ACA}}".indexOf('APPVERSION_ACA') < 0) {
          Sentry.setTag('aca', "{{APPVERSION_ACA}}");
        }
      }
    })();
  </script>
  <script>
    var loadScript = function(url, success, async) {
      var newScript = document.createElement('script');
      var scripts = document.getElementsByTagName('script');
      newScript.type = 'text/javascript';
      newScript.async = async ||false;
      newScript.crossOrigin = 'anonymous';
      if (success) {
        if (newScript.addEventListener) {
          newScript.addEventListener('load', function() {
            success();
          }, false);
        } else if (newScript.readyState) {
          newScript.onreadystatechange = function() {
            if (this.readyState == 'complete') {
              newScript.onreadystatechange = null;
              success();
            }
          };
        }
      }
      if (scripts && scripts.length) {
        var lastScript = scripts[scripts.length - 1];
        lastScript.parentNode.insertBefore(newScript, lastScript.nextSibling);
      } else if (window.document && window.document.body) {
        window.document.body.appendChild(newScript);
      }
      // IE9 will execute the proper order if src is set AFTER injection
      newScript.src = url;
    }
    window.coursera = {};
    window.appName = "consumer-description-page";
    window.locale = "en";
  </script>
  <script>
    coursera.config = (function() {
      var config = JSON.parse('{"gapi_eventing_data":{"project_number":"274249572679","api_key":"","client_id":"274249572679-al8nc3ttcavj0n91due232a3h6s3r9vk.apps.googleusercontent.com"},"bigquery":{"dataset":"mydataset","table_prefix":"livedata_"},"dir":{"home":"/"},"debug":false,"compress":true,"optimize":true,"environment":"production","log":"error","url":{"api":"/maestro/api/","maestro":"/maestro/api/","base":"https://www.coursera.org/","origin":"https://www-origin.coursera.org/","cloudfront_api":"https://d1hpa2gdx2lr6r.cloudfront.net/maestro/api/","accounts":"https://accounts.coursera.org/","assets":"https://d3njjcbhbojbot.cloudfront.net/web/","assets_domain":"https://d3njjcbhbojbot.cloudfront.net","resource_assets":"https://coursera_assets.s3.amazonaws.com/","app_assets":"https://d3njjcbhbojbot.cloudfront.net/web/","app_chunks":"https://d3njjcbhbojbot.cloudfront.net/webapps/","imageProxyRoot":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/","imageProxyApiRoot":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/","imageRoot":"https://coursera_assets.s3.amazonaws.com/images/","domain":"https://www.coursera.org","originSubdomain":"https://www-origin.coursera.org","appChunks":"https://d3njjcbhbojbot.cloudfront.net/webapps","appAssets":"https://d3njjcbhbojbot.cloudfront.net/web","imageProxy":"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy"},"version":"47503615f13182d7daecb2b48a5097dbf168e0d8","versionTimestamp":"1725051510853"}');
      if (config) {
        // requesters country of origin, injected by edge
        // in the following format https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        config.requestCountryCode = 'IN';
        return config;
      } else {
        return {};
      }
    })(); /* global coursera */
    // Provide a string that will be replaced by edge.
    // Make sure to use double quotes because edge only escapes double quotes.
    // Then check that edge actually did the replacement.
    // Otherwise return an empty object.
    // You must use double quotes for the injected string
    coursera.epicOverrides = (function() {
      var injectedString = "{\"elements\":[{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"aWv-3T39Ee-avw61CxyDOw\",\"variantId\":\"_XFqnID2ThWxapyA9p4VLA\",\"parameterName\":\"showJulyAICampaignBadgeAndBanner\",\"id\":0,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"authentication\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Sqp5JBjVEe2CohKHYI4gyw\",\"variantId\":\"SEkWU2ESQP2JFlNhEvD93A\",\"parameterName\":\"sendTrafficToJavaUserEmails\",\"id\":2,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"t5UgNJUrEe66WQqPYbx8Tw\",\"variantId\":\"PilXJkzoRSepVyZM6CUn8w\",\"parameterName\":\"enableContractsHardPause\",\"id\":3,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"1U7BVtf9Ee6zwxJ4Zk1IsQ\",\"variantId\":\"XSksZg_7R56pLGYP-yeerg\",\"parameterName\":\"enableAutoProctor\",\"id\":4,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"ixmM8BkgEe-4rgr_4F6Rww\",\"variantId\":\"GjlzESYoTf65cxEmKB3-lg\",\"parameterName\":\"sendTrafficToJavaEnterpriseContractWrite\",\"id\":5,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"vJ4xQaHAEe2fDxKH70C7Rw\",\"variantId\":\"7hUuilO9QxmVLopTvcMZtA\",\"parameterName\":\"enableGoogleOwnedXDP\",\"id\":6,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"growthFalcons\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"-rLqwP94Eeuy73vt8DF3Pw\",\"variantId\":\"JjL5STo9SLmiPkoE9Kf_-w\",\"parameterName\":\"uciApmNextStartDate\",\"id\":8,\"version\":1,\"value\":\"January 9\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"GHGqEJH4EemC3Kv3M-kuwQ\",\"variantId\":\"CBZP85RlRI6zlbJ82HnN8w\",\"parameterName\":\"masterTracksPaidOnCoursera\",\"id\":9,\"version\":1,\"value\":[\"construction-engineering-management-umich\",\"supply-chain-excellence-rutgers\",\"innovation-management-entrepreneurship-hec\",\"social-work-umich\",\"sustainability-development-umich\",\"ux-design-minnesota\",\"data-analytics-managers-tufts\",\"data-science-machine-learning-iitr\",\"power-electronics-motors-ev-iitbombay\",\"digital-transformation-iitbombay\",\"digital-transformation-dartmouth\",\"ai-marketing-darden\",\"leading-innovation-with-creativity-hec\",\"business-essentials-ie\",\"blockchain-duke\",\"oxford-cyber-security\",\"oxford-fintech\",\"oxford-blockchain-strategy\",\"mit-data-strategy\",\"mit-health-tech-innovation\",\"mit-leadership-human-ai-collaboration\",\"cambridge-regtech\"],\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"LzAmIIm1Eee_1KG2a8Jzlw\",\"variantId\":\"FcjedWp9QUO_LNlOuB04bg\",\"parameterName\":\"courseCertUpsellList\",\"id\":10,\"version\":1,\"value\":{\"schedule-projects\":\"applied-project-management\",\"project-management-capstone\":\"applied-project-management\",\"project-planning\":\"applied-project-management\",\"project-risk-management\":\"applied-project-management\"},\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"wFFlBAV7Ee6vFhIeJsQy6w\",\"variantId\":\"FeyGxHRDS5-shsR0Q7ufeg\",\"parameterName\":\"enableApigeePortal\",\"id\":11,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"QYEeIOPsEeuQ0x3ptZ8f9w\",\"variantId\":\"NfqrFbFiTraJ4fLEQgJ2PQ\",\"parameterName\":\"teamsLandingSearchTest\",\"id\":13,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"uVvSCknnEe-x4Qr_6j0XOw\",\"variantId\":\"77cID6O8QaC3CA-jvAGgpg\",\"parameterName\":\"truncateResultsCountSERP\",\"id\":19,\"version\":1,\"value\":\"no-count\",\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"oukzOzKzEe2afQozeEbGEw\",\"variantId\":\"Hsmg079zQ-yJoNO_c2PsHg\",\"parameterName\":\"enableEnterpriseReimagineDiscoverySearch\",\"id\":20,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"UNpP5kQgEe2cfhLj_B41Zw\",\"variantId\":\"c16-rjMsRfSevq4zLJX0kw\",\"parameterName\":\"enablePlagiarismDetectionAuthoring\",\"id\":21,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"g2uWWufvEe6PRg7CBHvMLQ\",\"variantId\":\"5WacPyIBR2imnD8iAQdorQ\",\"parameterName\":\"marketingConsentModalRestrictedEnterprises\",\"id\":22,\"version\":1,\"value\":[\"wUnIXAWGSluh6nPgkk-U7Q\",\"WpsN3G6xRGOAM_JokfF64g\",\"BuDYakZoRCygmgchZbvKWg\",\"z0BIUPMjQpC8nZ2AwTjvCw\",\"C5ZTs8KzR0eS8ePEYazlOw\",\"Bs7e4CK9QgaElyD8RGbERQ\",\"pH4h-SgQRsKQt37rOx1UWg\",\"Qjuq4eQ6Qci1Gn6A7gv2-w\",\"LqlsgqfYTVOajHVCK0YtiQ\",\"oAv4uQQmQ_6uggoP082veg\",\"uBcqWQWoTXGAkR0J-e3Dpg\",\"dbiBuSR5QBGLeGsS7qC6ow\",\"j8gFFNSFSqirvsWEdUhpGw\",\"Lt0Kj04fQJuJ2xjOTLNwWQ\",\"xPEOX7A4QEW5tRWrLYXHTg\",\"STXk0Id6Q2KkEY_fnL29TQ\",\"rbSwUNGZQxK_53h3hreL3g\",\"ORSbtoPMRJa7yWvLgczeew\",\"YzYQtmDkRoyfGtzR685vYg\",\"QQLGmsa6Re-KpxY5eYUYSA\",\"wdXo9QVCQkSp8PPO2xGKOw\",\"jYB4Gq42RsOLEZX0anXZNw\",\"CwO6N3JRTnuAoDvQhSAMnQ\",\"9ZxZPKlGQR2OZ2-f9Fm-Ew\",\"_rdKG7miQiytu051ItrdBA\",\"sqR7qzE1TZe97tAfb-HBgg\",\"-JkThBbHQvuQg5rLnGBjvQ\",\"Isc-tUr-SXa880_4jlIqZg\",\"EiNtebucR0-i38-xCglQzQ\",\"LXHHXVqASzGM_MHNzBrNnw\",\"fjX-yP2FSy2DrtWmlmustg\",\"v_KwlEmNRnGW2rF8ZigeLw\",\"4FBwOcbnTWCgC8u86IM8yw\",\"3EmqTKAjSZGoalMou97GcQ\",\"I9JPqPZPSU2HHJwVVPwW4A\",\"ZhzO-H9ySN-ejtxiPTOQjg\",\"K-dT7XGtReW-5Pm2mwUa-g\",\"MGOCS3vxTvOrLQe14-Ab-Q\",\"h7w1l5VYQAqFhu3fm_MVkg\",\"q14iNo9_TrG4eDBqANKsuw\",\"PTIEbEGyQK2wqanS8WpMVQ\",\"S_fwO3HTQTmmHOhfqGRz0w\",\"PmioQFeYRvGGo3hbKUdZIg\",\"DIKFepulR26aEGdKOmKbfw\",\"5nUGUXxHR72E-ahqYobRNg\",\"HfXZOmqfQR6vYGd5k_GIvg\",\"GcklYYeGQjG87p4QlztQ5A\",\"TarEnwSDR8KMPakBJQRttg\",\"41ies7EtSEW49F4W6cCzMQ\",\"9a3ASxreS9ifG8Q-uJHHfw\",\"mz0eJgNJTe2tk09IU0Fd4Q\",\"-IUJPK41Qa6qtIA-yIJ2og\",\"g2HUUDrwRdWj562wueqnjg\",\"8np9db00SVyKloqp6eb3RQ\",\"nuM2Tg9MTpy8oa2TxBqdxg\",\"9j74DB4WQBCOku8gyc0yVA\",\"GeYNJT8JQ4eiNyWNQoOa4Q\",\"UPQtJI-zRJ6DwpgFn9ZVLw\",\"3QguHt9oRGmx3DsVh96j3Q\",\"lrEsQbsBR-Ox0hsKm5xplw\",\"J2M8_TAhSXiDWaXmxDo5zQ\",\"GBvTnx8kSjaMI6u-WUbnbw\",\"-2kduxoOTMKqyyrkMd_8eQ\",\"3yg-iee0QIa9-bqrHjcdSw\",\"vc4VWG69QdGxPZMZvcTvlA\",\"VJcCa5LOQe6ncVXZOxYTyA\",\"w4pwPiLIS8uNqKF02S-tJQ\",\"wlHGZCxsSceUuu9yE2sihA\",\"bMkXnDhMShWWp3l5QyKRaw\",\"KVEGL-ykR7CyYbRsxvDylA\",\"p7q-Q8zVTjO-REHFhRte8g\",\"qPxIys4ISh27TQMRkcAzQw\",\"60Ehb-nEQZKDBHfcBV_KmA\",\"J6ZAQRSRSEqcPeVsto8bzA\",\"64u8YsMaRly_fDnMLWdYag\",\"xPQj_QQtQj6wwn2cIDY7pg\",\"Y-zsMF6dSbqzBbxRMfGaww\",\"Rv3Kli7dTFK75P4mPnuFnQ\",\"4kHdnnRtRS-r82aXS-chig\",\"w3a03QcORuGVwkNp1k-OCA\",\"cfInB-puTqmWGcLcoLEptw\",\"5lBo7FYKSi2n712aY3uvkw\",\"4RxmztuXT7qj_7TD7WZTJQ\",\"0w-BSmaFTIKXlQXCbsckmQ\",\"zy3arf5rSgaKQEvKpQDQ8w\",\"pBWp6KrITPaf-bx6zuGoOw\",\"_khIP87SRomhUydEliGbnw\",\"h4n1j282TBOrtVR4Ljxqlg\",\"-KDK5syWR7yqTfqfdeiuPQ\",\"VVyigt5URDmKPmZlZ2xY5Q\",\"4NrIjPWlSc67wt-3VxTXsQ\",\"EMpPBPWTT7as-Aol7tOJPg\",\"cBmLvt0uTguBuR5wslycjA\",\"pRPGSB83S-quvJjavY_Udw\",\"niy-3Ve2TwG4CU2KRylm9g\",\"8gYXTTqAR2Ctym3dpU6xlg\",\"zn13aFTuQ5GjHVWGQB2EYg\",\"3d4Hz8jgRXaySuyiNsj8lA\",\"F_qFPfA3S4mWQ7LpzvRQIQ\",\"OBf7ST3JTySk-ZEPLnE1RA\",\"wYbU_SoPR9midPPENHeDag\",\"4YBF_mJ3T6K_StPFMyxXYQ\",\"ac2mIJI2TTq_Lt9ZCJJaQw\",\"Prw5qGjISCKg1-iZ5CmCFQ\",\"LJ74qkvDQs6kN8IE8_RvZg\",\"8rbXdt85Q8iY_fo9Z5Wbvw\",\"LiNoTJIISiqeCQMck4OhCw\",\"9Cn0pZluQViO2V6YU1-s5Q\",\"hHRZVwVCRpuqIskiWn3vEA\",\"bM18m82fT0CworwYtzOEYQ\",\"udk0oaKqQBKI96E1B2bifQ\",\"Ifj11TXfSB-Gy7-_QA4PlQ\",\"G1QZzJqIRLWBOqHd78UPDg\",\"4-XodGnRRFWCkWt-DarQQw\",\"cam_hcWZSHyyvxL9EmMuww\",\"FT4V33EjRdmyxlpEqncXtg\",\"o2uIsP-STbSi7CPEBtec_A\",\"Akufv4luSH-lKW2EmIlMxA\",\"DCCnmluHTriQh7fNd_bNPw\",\"EnxxDlYmS-i7kzM7mGXmwg\",\"0_RaTvP1TbSpeJjchVXbkw\",\"huj5yO7SR9yrJv07rm3lLA\",\"gfujQbXfSLePCo_dZT1wfw\",\"DHHqkd_qQMusWMbu6Rvong\",\"snBIu-vFQIyQhO48INLXIw\",\"YUbES5dqTI2FuftXpWJldw\",\"VKlnRCHeTU-mrTxMOe2YAA\",\"O8K6wUzmRdSOQw9sKCLJMA\",\"ibWwRHhNQy2j24yTzlB0vA\"],\"status\":\"RUNNING\"},{\"namespace\":\"DegreesDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"j6gXUL0pEe2fDxKH70C7Rw\",\"variantId\":\"xja79vZhRt62u_b2YabeuA\",\"parameterName\":\"destinationDegreeList\",\"id\":23,\"version\":1,\"value\":[{\"id\":\"base~Xa4Vp6CCRpO045BgnzPLVg\",\"slug\":\"mba-business-administration-umgc\"},{\"id\":\"base~578EJoPLRqKl3bJwQtfMAw\",\"slug\":\"cybersecurity-management-policy-umgc\"},{\"id\":\"base~dQHoHBzgQuqcQTCNE4ojTA\",\"slug\":\"cybersecurity-technology-umgc\"},{\"id\":\"base~xPBKAGzhRuiiQsHw9WJUeg\",\"slug\":\"ms-construction-management-lsu-online\"},{\"id\":\"base~FHnBaRJWTRSYMsUrScOyHA\",\"slug\":\"ms-civil-engineering-lsu-online\"},{\"id\":\"base~eQRUDgdCR_al8hEQoQbr_w\",\"slug\":\"ms-analytics-lsu-online\"},{\"id\":\"base~4PbJ25kvRYqVh3dOajdXSA\",\"slug\":\"ms-leadership-human-resource-development-lsu-online\"},{\"id\":\"base~26t4dv7JRKKPjn-8fZF1LA\",\"slug\":\"mba-master-business-administration-flores-lsu-online\"},{\"id\":\"base~jDqtuhL3R-GVG_j_UsebFA\",\"slug\":\"ma-education-higher-education-admin-lsu-online\"},{\"id\":\"base~rWayFNK2QtKFVprmo4qucg\",\"slug\":\"ma-education-edtech-lsu-online\"},{\"id\":\"base~Wh-pEJudS8iOQK-ECbnB-A\",\"slug\":\"master-of-computer-science-ou\"},{\"id\":\"base~s3zhDkwtTq2od4_Q9Uq96g\",\"slug\":\"master-of-data-science-and-analytics-ou\"},{\"id\":\"base~QdiwNJhNTzyUPQ_4-k8R7A\",\"slug\":\"master-of-accountancy-ou\"},{\"id\":\"base~GipAlC4UQTSBRtlyr0Zolw\",\"slug\":\"master-of-finance-ou\"},{\"id\":\"base~dNYP9zF8QBeyzKSNevtrLw\",\"slug\":\"master-of-business-administration-ou\"},{\"id\":\"base~MaDFTlrER0Oi0_9m6Qkt2Q\",\"slug\":\"master-of-supply-chain-management-ou\"},{\"id\":\"base~J9Ydfmt8QXG2QMVanA2rNQ\",\"slug\":\"master-science-management-umgc\"},{\"id\":\"base~DcjmxVMpQyeWHcOd1DWjZQ\",\"slug\":\"master-science-data-analytics-umgc\"},{\"id\":\"base~m068p-nzSReSYUmahOE_ng\",\"slug\":\"master-science-it-umgc\"},{\"id\":\"base~LbrpHXt9SsWCObuM1NCcWg\",\"slug\":\"bachelor-science-cybersecurity-technology-umgc\"},{\"id\":\"base~4rsS59fzQ6KhhCkrac6k6g\",\"slug\":\"bachelor-science-cybersecurity-management-policy-umgc\"}],\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"GWcb4HBKEeqysA33ez87GA\",\"variantId\":\"1TNo-3C8Qzy8f2YWbLzmSA\",\"parameterName\":\"blacklistProjectToggleBanner\",\"id\":24,\"version\":1,\"value\":[\"XhOW5ZDBRDGRGt4kuEzcHA\",\"8ek6DCuMQ3-DIGth4ZJCjw\"],\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"U0ujkz1iEe-L_xJvew_1VQ\",\"variantId\":\"YC7aAQ3iTg6u2gEN4n4OHQ\",\"parameterName\":\"useSkillCertificatePCDPLabel\",\"id\":28,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"V5ZqwHkOEeqDNWGdltv_gg\",\"variantId\":\"TvGzm8HeR12Lb4q4ZEKZUg\",\"parameterName\":\"courseMatchEnabled\",\"id\":31,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"1NzVco-XEe6UWAoO-JAdVQ\",\"variantId\":\"uFXA8VedQaWVwPFXnTGlhA\",\"parameterName\":\"sendTrafficToJavaEnterpriseContract\",\"id\":32,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthPremium\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"jDWngM1aEeyRV_VbozKOjQ\",\"variantId\":\"PO25EJ8PSJ-lwdeB4TMv5g\",\"parameterName\":\"DDPTestimonials\",\"id\":33,\"version\":1,\"value\":\"top\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthPremium\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"_1l9gKCcEey27W8Ze_5_JA\",\"variantId\":\"qld2XvuVSRqc0auf9oTVYg\",\"parameterName\":\"showDegreeDeadline\",\"id\":34,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"KVQ2cAaDEeyHVQekxbSZMA\",\"variantId\":\"SlTcC6rOQ92ckRu2YHeaTw\",\"parameterName\":\"enableGradebookAcademicIntegrity\",\"id\":36,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"DegreesDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"DVrWxwSgEe-C1w6tOivQcQ\",\"variantId\":\"Gu2UKvT6QK2tlCr0-pCtig\",\"parameterName\":\"showThrottledDestinationDegrees\",\"id\":37,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"Authoring\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"yYoSsNZaEeiwzD2WFbU35A\",\"variantId\":\"O-ReOMJeToSDFhO_4ss6kg\",\"parameterName\":\"enableFullStory\",\"id\":39,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"NtkSiB9-Ee6vFhIeJsQy6w\",\"variantId\":\"ZNPGGU9WT1mTxhlPVs9ZVw\",\"parameterName\":\"enableAiCollectionTitle\",\"id\":40,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"pageHeader\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"p_ehwHeyEeuVrxMze-F57g\",\"variantId\":\"gD_eSXmQTYitB1evyLV84w\",\"parameterName\":\"enableForStudentsHeaderButtonV2\",\"id\":42,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Nvn45TPfEe-1_w5n68OZIw\",\"variantId\":\"qASnlW-TR06Ep5Vvk1dO4w\",\"parameterName\":\"useStreamlinedMWebLOHP\",\"id\":44,\"version\":1,\"value\":\"B\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"i2LkDwenEe2MYgqq548edQ\",\"variantId\":\"vNoHnu22RxaaB57ttpcW2w\",\"parameterName\":\"enableUnifiedEnterpriseCareerAcademy\",\"id\":46,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"DJpQEAzgEeyH-FdsN6JR7Q\",\"variantId\":\"rO9lEffYRWGbX3yIPfJZMg\",\"parameterName\":\"xddpHeaderDegreeRatingSlugsUnderTest\",\"id\":47,\"version\":1,\"value\":[\"msee-boulder\",\"master-of-science-data-science-boulder\",\"global-mba-macquarie\",\"global-mph-imperial\",\"unt-online-bachelor-completion\",\"imsa\",\"omie\"],\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"tTJj4DfdEeqZbo2L3ch41Q\",\"variantId\":\"lnpvQf-XTQy9rZgkfwjgJw\",\"parameterName\":\"whitelistOrganizationProgramsForSSOLogin\",\"id\":48,\"version\":1,\"value\":{\"wCgU6y8DQC6H-old1HQ-sA\":[],\"VEuvkUrQSaCtZyYELXK8fw\":[],\"SU7ox5R6SQiWmkCjkwsdQQ\":[],\"zWpYr3LOQwGqrRh2q_OJ1Q\":[],\"KI2pTz9TTp-Be81cbYbqBg\":[],\"rP4Rsb26Qn6fmEVMy1Gkvw\":[\"o7AfSfiFEeyDJgo9m7KBDw\",\"FcaJ8ggdEe2Ezg6wbJ9x3w\"],\"jQaMjLMKRuW91n5sL_aM1Q\":[],\"3K4HfgLbR9a52dNrv1kmCw\":[],\"E_xkEjUkSHKavsXbYl-mMQ\":[],\"yMlVSsYgSmSpcBX7yavP7Q\":[],\"VcE-80QnTKiAauajn3pq5A\":[],\"qO1wM7NkT6SSmR3yZ6PA-Q\":[],\"V-VG-LonQJCJHn9IvV-DTQ\":[],\"Oi0940SLQ8al4nDD4KlZxw\":[],\"_W9XETDWT1eXZdSpGd-INQ\":[],\"3ikw8rueRyCdCjEdGICYvQ\":[],\"xnmj4fAXTZGqNN2yVriHVA\":[],\"ErHlUv0mQhWIg5bScJ3Z1A\":[],\"mej6dzCXQ4GXfUg2aPCOXA\":[],\"VLOZBrBfT_mor6UI-Dbylg\":[\"35j0IyplEe2ithKzKjUfXw\",\"9WOROSplEe2zzAqYSlf9Tw\",\"I3ul9SpmEe2pkg4qri6WQw\",\"O2TdRSpmEe2zzAqYSlf9Tw\",\"WSStiipmEe2ithKzKjUfXw\",\"WOWGqy5yEe2GERI2f2VMQQ\",\"WVHdBS5yEe2pkg4qri6WQw\",\"Wbd8sS5yEe2GERI2f2VMQQ\",\"WiJMgS5yEe2pkg4qri6WQw\",\"WoynFi5yEe2pkg4qri6WQw\",\"WwDFfy5yEe2zzAqYSlf9Tw\",\"W1wsIi5yEe2GERI2f2VMQQ\",\"W9qD5i5yEe2GERI2f2VMQQ\",\"XDm66S5yEe2GERI2f2VMQQ\",\"XJsUzC5yEe2GERI2f2VMQQ\",\"XQpRYC5yEe2GERI2f2VMQQ\",\"XWoklC5yEe2pkg4qri6WQw\",\"Xb9JdS5yEe2pkg4qri6WQw\",\"XhUxjC5yEe2zzAqYSlf9Tw\",\"XnHQmS5yEe2pkg4qri6WQw\",\"Xs36Wy5yEe2pkg4qri6WQw\",\"XyZTmS5yEe2GERI2f2VMQQ\",\"X4BafS5yEe2GERI2f2VMQQ\",\"X9X0bC5yEe2zzAqYSlf9Tw\",\"YC9fKC5yEe2pkg4qri6WQw\",\"YIXjnS5yEe2pkg4qri6WQw\",\"YNukpy5yEe2zzAqYSlf9Tw\",\"YTOvvC5yEe2zzAqYSlf9Tw\",\"YY4E1y5yEe2GERI2f2VMQQ\",\"FnwoZzWYEe2RNAp13uU-EQ\",\"ErtEyzlrEe2RNAp13uU-EQ\"],\"v62pA1sVQf-0UcCOkccheQ\":[],\"2A9mKb65RD2Ys4RWRHQ-AA\":[],\"FS3ROW4RSu-KRKfOg2ekjg\":[],\"8ncGNYbfT6O42SffSGyurg\":[],\"1G6WHRtvT-2fi7jZWgbY7A\":[],\"LJJZDya8SDe1cjfW8NxcyQ\":[],\"KafnWWFzSpKi_rUzvfgv9g\":[],\"41e4DKovTGelnKYQU9YOPw\":[],\"hRYPvnVxRleiMGiQh9U3Ew\":[],\"RepB2tn5Q5WJK1wcr37hEw\":[],\"Fb2xMnsRQ0OjrjRxKUnXkA\":[],\"2tV9LaC3QCSVp436Lscu7A\":[],\"dYlAzMasSceXSg2-1retKg\":[],\"brOxHzr6TPOuidKLSQu9hA\":[\"WOEiGKbuEe2UmBIo52OeeQ\",\"fN7st585Ee2T3wqeKGAWvQ\",\"TnsQOqJOEe2Wrw4eqGZMyw\"],\"RVvTYmZ5SJKOTzlTqfHr6w\":[],\"uEd7UvUMSzOQ4-5KcOjXuw\":[],\"LwEC3Fj4T2yf70p34aowvQ\":[],\"Bqbj5r4MR0eDDV8l1-F9Hw\":[\"ZVf4UOLUEeu3MxLEla4MuQ\"],\"M9lgWK-BSwu1546exzLLyg\":[],\"aq_ivW0lQWG_rr5S3U4KXA\":[],\"5AJunLjSRWeiANhhChf1Cg\":[],\"IqrQ8dRGTKapDGmwpi6TaA\":[],\"cl3DQUjHQPSTS-JUv19TDQ\":[\"XbAdOy2zEeq4sw7_OqGIUw\"],\"4oFUt_auQtei8MJI1o82ng\":[],\"dq4dnhPNSC6uJFW8o7x1FQ\":[],\"sKCwu_hSRCWpcPxTPVYazA\":[],\"FT4V33EjRdmyxlpEqncXtg\":[],\"q50ouMR4QwqGC9Yl2ImyPg\":[],\"mlTUfBQeRM-melpzDDm4DQ\":[\"i3S2e8VQEey87AoFQbiOqQ\",\"wNz_I9A3EeyTdg4dicaxyw\",\"wTUKNtA3EeyTdg4dicaxyw\",\"weF22tA3EeyTdg4dicaxyw\",\"wjWJtNA3EeyXlArB4XpfOQ\",\"woo5aNA3Eeyx_xJ1Ky8bqQ\",\"wt83OtA3EeyXlArB4XpfOQ\",\"wzih29A3Eeyx_xJ1Ky8bqQ\",\"w4mBktA3EeyTdg4dicaxyw\",\"w94JodA3Eeyx_xJ1Ky8bqQ\",\"xC6ao9A3Eeyx_xJ1Ky8bqQ\",\"xiTs_tA3EeyTdg4dicaxyw\",\"xryYjtA3EeyXlArB4XpfOQ\",\"x1UvptA3EeyTdg4dicaxyw\",\"x-_odtA3EeyXlArB4XpfOQ\",\"yIgJ1NA3Eeyx_xJ1Ky8bqQ\",\"yRKWldA3Eeyx_xJ1Ky8bqQ\",\"yb_tmdA3Eeyx_xJ1Ky8bqQ\",\"ylBuVdA3EeyTdg4dicaxyw\",\"yuzU09A3EeyXlArB4XpfOQ\",\"y3f91tA3EeyXlArB4XpfOQ\",\"zB4B2tA3EeyXlArB4XpfOQ\",\"zLM9CtA3Eeyx_xJ1Ky8bqQ\"],\"o3cqr1JxSiGd2KoqrMqeNg\":[],\"S_bhjmJVQ9aY3rpQ1Ut37Q\":[],\"b8Bn7qvjSI-kkjVXpmdtvg\":[],\"mwpeou3AQWqwC3LU5uWnww\":[\"rKvrPnnMEeyJmQ5SkH7MjQ\",\"JdfRNXnNEey8gw5OdO6UZQ\",\"hjdMuHzSEeyYeRLBcJzQIQ\",\"t1dJm3zSEeyD2Ap1WnBgBw\",\"4gphAHzSEeyvSQ4E5yZ-qQ\",\"6wCAiYK2EeyWSA55lDDqMw\",\"GRIsEoK3Eeyk2w62S0UgBQ\",\"M5ncGIK3EeyxRRL70CvO1Q\",\"U3sFrIK3Eeyi1RL0juUV0Q\",\"iJYlwYK3EeyisQrHs5T8bw\",\"sQzhdYK3EeyxRRL70CvO1Q\",\"0-ykxYK3EeyqQQppYkQRLw\",\"WeNSsJX8EeyBZBIGc52gyw\",\"h_NQ7JX8Eey-_QrmwN94AQ\",\"5ntvDJYDEeytdQ5YOa9VcQ\",\"D3iZOJYEEeydZxKKS2Fzyw\",\"FcZA4pYQEeyYvhJWYjbL4Q\",\"Lg4TEpYQEeyQ2A6fpsFjfw\"],\"niW3z9euR-GyCPv-D-KCRw\":[],\"qMqU3jYCQ_KxOF_YIZBVMA\":[],\"AwJwDe1STtyrlR1CMJIXFw\":[],\"XpdBuc9HS6-VKhWlRvdgqQ\":[],\"2hG45wyGQC20WytsI0wkxg\":[],\"RNxS7Ya2SXqeyi-siAR1FA\":[],\"wLTKk4zXTZKkCUdq5vjuvQ\":[],\"qvjDL6uXTqm8CAJJow2fjA\":[],\"1pi1quNAQYWKvVP0y9Z0tQ\":[],\"EYtJdT9ORm-WiqS2Km3fAQ\":[\"UM_p_PBKEemdlwrsvuHfBA\"],\"ZhzO-H9ySN-ejtxiPTOQjg\":[\"mko62FKHEeqUWxIBZwsASw\",\"5-gfRg5KEeu5mwqVTvzPvQ\"],\"CYkqCrjpRXmj9LqDGAC_9g\":[],\"bA4bL5rCSrCWmWzpK8lyNg\":[\"dMEYVLTaQl6BGFS02oJeJg\",\"3AT9vwNuQiWE_b8DbjIlPw\"],\"9iLF1VCNTnC0URhPZ5dbqA\":[\"egK7cVXQEeuRxg573cjZmw\"],\"bXTJbJ0IRiKYYydVFBQ4iw\":[],\"G_cV7V4cSPGl2P61XfB-rw\":[],\"eroBoTXBRZm9ghBVYqky_Q\":[],\"8g0tN1z4SgaToICUuvY_fw\":[],\"KwneQA4DRsG_7_HgRbtA0w\":[],\"51Vce0_TTIySkzFun7biwA\":[],\"GSSVleGjQkyflsIlGMRBQQ\":[],\"mnpFue2lQ06SuQzdr8jWpQ\":[],\"hz61en91QUuWXFGk5hROMg\":[],\"BxxVZBdfTrKwqMpDeodZ2Q\":[],\"1ILe_IuUQjSWKhhyTxcvBQ\":[],\"Q3FkiA8mRreJ2FWjdl74pQ\":[],\"p-f9h6LiRrmiT1leFL7h_g\":[],\"vQQ0not8QbGpb4xn-59mgA\":[\"6Gaet_fyTXymnrf38k18Sw\"],\"ZKCyGw1USYOqFTZRsARt6g\":[\"t7aA0UelRGW2gNFHpdRl4Q\",\"xRblOgM7SuyW5ToDOxrsGg\",\"uwKkM_YkSa6CpDP2JCmu9A\",\"XbcISm90Qb-3CEpvdHG_OA\",\"UxB4cnmSRzSQeHJ5kgc0pw\",\"5rG9A0-wRfGxvQNPsCXxrA\",\"4ovy-CnqRbOL8vgp6oWz1A\",\"f_Hq3hKqTAix6t4SqlwIUQ\",\"zc8dyeEMTkSPHcnhDI5E9g\",\"A9Klx-fGQH2SpcfnxvB9NA\",\"S60hJHUaSZCtISR1GrmQeg\",\"Rhjhip4XQT-Y4YqeFwE_uQ\",\"XCWxGE-oS2WlsRhPqFtluA\",\"Iy7KWA6oShKuylgOqMoSTQ\",\"k4fDlgwAS2eHw5YMAHtnNQ\",\"k9CKUeVfTw6QilHlXy8OPw\",\"HTS10mTORY60tdJkzlWOXg\",\"836ZIkMqTUO-mSJDKu1D5Q\",\"QJwVkhXyQe6cFZIV8gHuLg\",\"hukLFD-HQNCpCxQ_h-DQeQ\",\"tCCm0suyQOmgptLLsoDpmQ\",\"KmTX0lZiQASk19JWYtAEvg\"],\"ytdBoAVYTBOs6pKpMX3yBA\":[],\"M4bVSPZKQVGnTas3qEMjZw\":[],\"YGpl18euSXypRA-8P0gH0Q\":[],\"bcqXKdPBReiD70GG6kPkXg\":[],\"1qP85G7_RoGaos_LlzWNqQ\":[],\"PHclKolPTAOUF-t8tdtejg\":[],\"kT3nStEnR-6gUFG0Z7jckA\":[],\"FPTM1JXMTPC6eURcC5raog\":[],\"vHAmx7l3QpeS5FP0AGb4LQ\":[],\"WmFSmXRrQnyrOZPprY_-zg\":[],\"4OWrwi0qT0KkM5vRabTQGA\":[\"E2iH5bzeEemjaApbB899Bg\"],\"6OT3xdhCT12VQWtyq53Cog\":[],\"sL97rcIrTE-Purzq6Oi3_Q\":[],\"V6mz4z3ZQYSCK7bWzbpIpw\":[],\"xfi9MCIeRtiqTtKYF_KwCg\":[],\"t-qo3NspT-Cml1EbYzB2cA\":[],\"PNIxDdYHQKeCwB2vcVKukw\":[],\"GA7-YL51RNmR4y_JTOWtbw\":[],\"10svfFjATaGrjDacqhfF5g\":[],\"SUdfe5EzQY-B72k2w0xWhA\":[],\"ciUj-xYURuqMdaQ97Hptvg\":[],\"mynUXwBDQbaqMZfzBxXwvg\":[],\"X7VRIMRFR8mzOxT-yoGDug\":[],\"zVdaLnSRTnqiHz_5CspQJw\":[],\"a54vNd6lRx2_ClJsietOWA\":[],\"Mcyt1nzbS3C1ENqmu7OAyQ\":[],\"nsbFLGQMTw2Be8s4PtcfQQ\":[],\"cB5z7bbnQw-AfxfdHFkxkw\":[],\"LLIAbjqcQlq7I6BT_8H65w\":[],\"Po3nl44NQGOseL2c8EJV9Q\":[],\"of5evJWgTOO51MbSk2BjIg\":[],\"nuM2Tg9MTpy8oa2TxBqdxg\":[],\"FEQ7hdNcQo-85ivem0pTrw\":[],\"Hd4gLL5cRQi4uq7WYKDDbg\":[\"T_mdh916EeyEtg4AAuPPFw\"],\"uJ-iLpKlTPGTbaPa1c21_w\":[],\"dGTZm7NXTxaaI4DCSeEiTQ\":[],\"oT8umhzgThaQgm2w4JVdXA\":[],\"8kGx_c1xSHyvrWtPpjhrEw\":[],\"wY8j8lXgQcScp20mCslv9A\":[],\"Li5F9eaFQ7Crrd8y2IMJ9g\":[],\"p7q-Q8zVTjO-REHFhRte8g\":[\"Ia_89j1JEeqvqxKY0Jj6Uw\",\"FiOiAKdpEeqEDA42YBMnow\",\"Jys5JadpEeqEDA42YBMnow\",\"i8pLC3UtEeq61BLtM0QViQ\",\"ATS_gKdpEeqEDA42YBMnow\"],\"xnk_8jBJTUObGnD-ujzfRA\":[],\"dwGsVcg9SRWKwDXveedlTg\":[],\"EkgXlKSHRfqkGn968RIn0w\":[],\"dsaoH-poT2u__RL6NAVxQQ\":[],\"Fj2y1dYVSGisNewqgqbsaA\":[],\"3k28Y_2yTEivQWOc6a7C2g\":[],\"i84vO2x1Tg-1Fqu6lIjGnA\":[],\"m3_0oAHlQ9Sd4FRO5Fyf8Q\":[],\"w0UClV_qSlqzYpm_q-JTeQ\":[],\"WgcvXDe-QcK7VuSz_WiabQ\":[],\"6R2LCkaJRH-Qp6awkV4jhQ\":[],\"HDJMT3dZT1SpIjQVzPHFUQ\":[],\"RPHPOyp2T1S-V4e5IDsozw\":[],\"4WeFLjlWT1GwfyRTv0agqQ\":[],\"19AJn89MR_CEDBDmExv63w\":[],\"vWhWjQ-zSICym_4F4qWBaQ\":[],\"nxsDbjTuTCetSolepxj7oQ\":[\"1VdFLL_JEeu2fQ7O4Z7vAQ\",\"a4pjOWKAEeyg0BKGdFRS-w\",\"p3RT7VIsEeywYw649O0M7w\",\"WVaXyeeAEeyQTBI_6bMl7Q\",\"vxgUyb_JEeuPlArp8CwpPQ\",\"91P8LL_JEeu26g6rhFzq1w\",\"Pvy7AlI0Eey2EA7s5l9n4Q\",\"mYXYioGbThiF2IqBmz4YOw\",\"12iQjfGVTg-okI3xlf4PyQ\"],\"rxUU6oufStK5p3f36j3oaw\":[],\"UQAsGMZ-Q9unt5OKFJpPFw\":[\"O9loUosREeq1qA66YY5ZsQ\",\"gBKN0euXEeqBqgrNjGIE6w\"],\"RJNhTG_1SI2P1gentdA5oQ\":[],\"fVWMb1pwTz6Duqp8k2dnRw\":[],\"eyal1yPNSzCUIGUO8eVmbw\":[],\"Qg8ss64VRlq8CsUdQsPQ7A\":[],\"LuOaku5TRnGGVl5_BzFv4g\":[],\"CiTLdNFaSAeyqlcgmi4cCA\":[],\"U4-O2VUtSoeOBY_VK4CGXw\":[],\"kRFerzGfQjyRZsqQHmi8jA\":[],\"iKQSw3d6RX2rCF4JWLk8jQ\":[],\"cNBEatW1TvycRlFJGD-1Uw\":[],\"OTGhfRUjQdW877ZELiJh3w\":[],\"3yg-iee0QIa9-bqrHjcdSw\":[\"8zHifF-2EemZsAocpbohtA\",\"GrJuMKy1EemtYw7WimdZog\",\"90Q1n3s7EemBiBLCtk78NA\",\"on7OREDdEemt8g6E7tChUA\"],\"0XGeOUQXTxKXJK4deRbLCw\":[],\"fJhBtT_OQLO8FnoHKQhj8w\":[],\"u_wfYCJnQU6zdYOQOjm3pQ\":[],\"DpnNQVZRTwe4jw7OcDX6sw\":[],\"ynO0XKWuSdu5ft48T9GkqQ\":[],\"W_O2dUkgSK6RfrCSDCGVQA\":[],\"1_MgWm-IRmaq4MJySGas-A\":[],\"AQ6QdU8FSJOdQ0LtqxyBpQ\":[],\"cJNuRfMdSImVwylZWDvgLg\":[],\"z0BIUPMjQpC8nZ2AwTjvCw\":[],\"MulKzjOdTj-ODjN4zv9npA\":[],\"xdXJ37qCTV2SqoVuu4LajA\":[\"1zw3kRCSEeyJjA6akdPyTQ\"],\"aBtEiGw1TSqMoAv_6EDd_w\":[],\"qu2qH3oXQGCg_cpnYmCXrA\":[],\"h5Poy2mlSei35qri9fQeFQ\":[],\"7qVYXoHPR-2o1Ah2HzAH2Q\":[],\"VTA0BpmdT5SXvmMUsmXrTQ\":[],\"AwrVy-skQIeyE0yVxuSWNQ\":[],\"Le4opKD1QWSREikq9DPn_w\":[],\"mC3NWpQvRzeUZnpHm7Ytlg\":[],\"aWgUAUfeTrmxJ-_AbZ2mwQ\":[],\"APpUFCv_TN2Vm8zLdqCKag\":[],\"bkOC5gU_S1ezW0Beowh7vQ\":[],\"5U4rS38hSs6CdmPSfQUoAA\":[],\"o5UIEnTeSkiH3f2jpVFu5w\":[],\"zeJKArTKRR-EkQELjw4U0Q\":[\"TUAQnbZ9EeawPhIF4bjuNg\",\"B4-VWYmpEeqPUw4n-L_j6w\"],\"UxeDLyO7QQejsRvLAhFNtw\":[],\"sDwQ2m_US4y97ctziq7NGw\":[],\"UooLaJAlQZmfh48f7vo0Pw\":[],\"6etthrlARcmuPFfFgnJz6A\":[],\"dovWTawTQySoTd44O7uGKg\":[],\"qo1rHOVfTJ25tPNH1Q085Q\":[],\"BIEk4wT1TvS6FxCxEDsa6w\":[],\"Ct9uCV2iSjefwKJJ1J-2pw\":[],\"u4AEhyA9T_ePwl_23XBZ4Q\":[\"sFPHI15eEeyCCg7LEPS1Xw\"],\"s5mqoP1RQEWqvHpUCzQzoA\":[],\"RD_OMJlmSb-F3I0kavMUaw\":[],\"Gw9sDdyST1WS2xY9yKchig\":[],\"0U4jJqgNTSaV7fC5Yf1ukw\":[],\"89De385rT5Sbdjwp6MYRqg\":[],\"pkUvlUjDRAW4SlD5nsZmtg\":[\"K1iIcMqsEeuSPA4s1Equ5w\"],\"HStNU7bGQ8GlH9Ao1-GixA\":[\"MdXpbTxSEeyntw5Cf4xr9Q\"],\"thbCamXuSSuZ_VowozWw1g\":[],\"DjVXntQ0T2ekVrTu5uf0nw\":[],\"Vs9s3XOjS1KFmeooX1VE3g\":[],\"NSp5xCg5TbSh7HpDDBd9Ww\":[],\"treRm3Y2R0Oo_5G3e1ZIVg\":[],\"qol7lTuyTkSy5EwxHH2Ytw\":[],\"5oZcva98TYKOGj925tZktg\":[],\"xYgWSglJQNSBvu9YQ2WP1g\":[],\"FMzPt4Q4RU2Y6jbm38h51A\":[],\"x0F1nf25QOuU82cuoEpIvg\":[],\"lYS_p3O0T0uY9IDsISJ68Q\":[],\"Q-8R8hBTRy-Jb_ybWfFvpg\":[],\"Qi87y38NQ4Osz-TE_8VvwA\":[],\"xrrlIO6hS-KD9C3FCQ3PPw\":[],\"8rbXdt85Q8iY_fo9Z5Wbvw\":[],\"D-A73DpzSt-LDrWJk0ovLQ\":[],\"A8q0BxroRxO4DHpHFPDVLA\":[\"H8OOSor9Eeq2NwqVBq8-lw\"],\"KjATT2I_Tzqdky1yTtdOlA\":[],\"uw4N7XTlQ1S4upXvBCNWTQ\":[],\"VjOacgPMS3SXiQNk9BaMDA\":[],\"Lt0Kj04fQJuJ2xjOTLNwWQ\":[],\"IJIvUhUXTDqxvMYTcijWvg\":[],\"pHkJdIesQ_-qTKStYF2fSQ\":[],\"b2KbDyvrQs2cXAfzSMzELg\":[],\"kWFRxYJ0TJ6g1UUnzqsE3g\":[],\"VDVMNEgFSW6VnGQti0XlXg\":[],\"ZLynW-EKQxGXnoBeG-CLhg\":[],\"YDNx7e-FQgCsp9zRYN2mNQ\":[],\"93C7m-F-QKqMdj7htXouqQ\":[],\"yfJG6cPAQqKxTXBKhNbqbg\":[],\"ywtkbag6TR6r92ChmGzZZw\":[],\"P5CNyulESnO0Pco7hcEavQ\":[],\"HckSHgnRSDaR4b21Uxa9sg\":[\"s93xmYPKEemDBQ7UkImyKg\"],\"WG4gxJQITKK3LPBaeK0VJA\":[],\"ZAcsQ0gfSPCvmYFGv27ndQ\":[],\"mhnNOy69RdGT8YexnuBMSg\":[],\"kbU6Z9h_RRmC0AYlHE1rNA\":[],\"ljt6SxkzTpWvIL7JdAChSQ\":[],\"dNRfcR2rT6SmaMLP1rMLMg\":[],\"FHs3DRZDSCyjYH3NGfIrYw\":[],\"o3xwaotwT960rwFcx1LYqQ\":[\"rXZaTbkfEem59wrYwcmf9g\",\"atxKA2O6EeqMlgowF_h2XQ\",\"_u679VnFEeuMwxIJT39hMw\"],\"IcngdBMLR8avlLVLaWPKyw\":[],\"3MP4PM1JRVyrVc9PtSJrKA\":[],\"YjxMn4qVTOmMqPrR1H30qg\":[],\"0uKMrnOjReyktOGNbYE7aA\":[\"q8d9f1_0Ee2ZwxJS2WkHnw\",\"yxvQkl_0Ee2r-A4OLPBniw\",\"gAeg2EkuEe2WOwqfTV-uUQ\",\"l7mcrlEKEe26iQqpb9kTuQ\"],\"T_tlH5P0Q6e5QSPTgAK_3A\":[],\"9o1v839HTTWenK1Uj-GCxA\":[],\"RRzPYszSRHC-CdAxOwmaZA\":[],\"ISQDCs1iSkmjNdEKZ0jOsw\":[],\"ejVzB2snQvqu3Uwm-Zhhpw\":[],\"Ik8sHzsWRzmLa9lH9-MWjQ\":[],\"ADuy58X9QQSzYYRsjn9hnw\":[],\"PTyaCyAaQa-KvzIBbq_rtA\":[\"VfuQddDWEeqjvw5E9VcM4Q\",\"tnCFsNArEeqJhg7gtAoGmw\",\"gAtrSOGVEeqCcQr7TU8f4Q\"],\"4QU593xZSxqcrz7qu5fA3Q\":[],\"Gi8IVteNTaK1YxkNeHNtIQ\":[],\"3FIXfWgxQVKC0QdX3tocJg\":[],\"pvsrpIk5QGGU9rBmIH_LHg\":[],\"JrkUAKnhTZqOfoqyOMa7bg\":[\"7-RwsvafEeqScRJScB9O2Q\",\"DTKu-tWVEeqn8xIFrqiyGQ\",\"8wK3d2N7Eeqo_Ao0Oh3tjQ\",\"l5TqtzAbEemDDQ74jsQhug\",\"yDoEdZffEe213A5H3yK0Fw\"],\"d1F4saQpS7SccYh6QPGRqQ\":[],\"f7np68-DSg-6N_nf55NbEA\":[],\"kR0kXhfARxe6NgBqKD8lPA\":[],\"WQk1jT_5Qayk0dog2huSwQ\":[],\"LeIQPIdEQA27xwO7dhH56g\":[\"d8zU-pGCEeqQMA4tVons5w\"],\"A9H5jqLsQP-rgnDHFd0HOw\":[],\"nEaUlRxvRiW0qbXCu78GiQ\":[],\"-gbbK4zGQb6x9ryaIuvKeA\":[],\"S9tcvCRMTJKuEp8V89L8RA\":[],\"eWwjM7cdQMqbnT0wF865KQ\":[],\"tKwHiR1bQSWT8DG9VoVinw\":[],\"sWPMo2DcRSq4pH81pY-vxQ\":[],\"ZcgPTjiUT4Svb50ssGrHyQ\":[],\"oojJLF6rSHePQjzF_xcuJg\":[],\"M7GrQ3IjTYW0CugmQUB-fA\":[],\"zQARAyIqQbOtBlWCckhqHQ\":[],\"vU8DlawoQ_i2XzODpq8DMg\":[],\"a4nUj8MVRTefptwo8umM5w\":[],\"qwsT9_LAQx2YbCHo3Cm4ag\":[]},\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagValues\":[\"someCourseId\"],\"tagName\":\"course_id\"},\"namespace\":\"learnerRedPandas\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Ywq7IPzoEei9bTm7iaJ61g\",\"variantId\":\"mTS_KBylRwyBP-cO3KMZrA\",\"parameterName\":\"isUofLDegreeCourseMarch2018\",\"id\":49,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"cWgq0BbnEeqXYC-7WwsKNQ\",\"variantId\":\"CAc3_hNcTXGvSImExOno2w\",\"parameterName\":\"enableUpdatedGlobalFooter\",\"id\":51,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Px2GQLqxEeym20nJnv0EKg\",\"variantId\":\"V2MqpdMKT86o9QLhscAEsw\",\"parameterName\":\"enableDegreeUpsellsForPCDP\",\"id\":52,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagName\":\"specialization_id\",\"tagValues\":[\"4JGavHT_EeaWKQo_29qXIQ\",\"r10Jy2huEeaDsA4V_O3EAQ\",\"xe8TSnRkEeaflgpbsOXi2w\",\"qG-wrV5SEeawWQoiUy1qRQ\",\"kLWnFWsyEeeVdhKUpvOPZg\",\"7lHCSlFIEeeffRIHljDI_g\",\"oRyN5IglEeePyRLleDGmxg\",\"qzhn9PT2EeSKSCIAC7TI2A\",\"I-nFAEigEeiR8w76z8x-Vg\"]},\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"nJISAIagEeucQQE_M6uwhQ\",\"variantId\":\"RzRK2wg6Q7CkqXcINpHkyA\",\"parameterName\":\"denylistS12nsFromFinaid\",\"id\":55,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"UrB_auU1Ee6zwxJ4Zk1IsQ\",\"variantId\":\"PQLlD4-zQE-C5Q-Ps6BPFw\",\"parameterName\":\"enableArticlesSubfolders\",\"id\":56,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"UrB_auU1Ee6zwxJ4Zk1IsQ\",\"variantId\":\"PQLlD4-zQE-C5Q-Ps6BPFw\",\"parameterName\":\"enableArticlesSubfolders\",\"id\":57,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"6n0FwFRYEeyaaPNBRNbqEw\",\"variantId\":\"UV_z0IReSz-HcBrXyfN9hQ\",\"parameterName\":\"forStudentsExperiment\",\"id\":61,\"version\":1,\"value\":\"Control\",\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"B51hkIm1Eeeu0vP8VMCxJA\",\"variantId\":\"a9Qlp1PJRwG9CkFocl2YBQ\",\"parameterName\":\"s12nCertUpsellList\",\"id\":62,\"version\":1,\"value\":{\"project-management\":\"applied-project-management\"},\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"OHlHMDZeEeuijclRBc_hig\",\"variantId\":\"5UeP7xgLRW21tyTQfFDxDA\",\"parameterName\":\"showRichWebinarsExperience\",\"id\":63,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Aa_zJPwIEe666w76OVbGYQ\",\"variantId\":\"mi7uRO9uQCeu7kTvbsAnZg\",\"parameterName\":\"enableXdpSubfolders\",\"id\":66,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Aa_zJPwIEe666w76OVbGYQ\",\"variantId\":\"mi7uRO9uQCeu7kTvbsAnZg\",\"parameterName\":\"enableXdpSubfolders\",\"id\":67,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"DegreesDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"cKi6ASgEEe6vFhIeJsQy6w\",\"variantId\":\"mCS3zO20QBqkt8zttAAaZw\",\"parameterName\":\"showDestinationDegrees\",\"id\":69,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"_MafsKLnEee84KOrlKUKvQ\",\"variantId\":\"79kQavd8QKeIpwJEuuILEg\",\"parameterName\":\"cdpUpsellV2Enabled\",\"id\":70,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"payments-backend\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"4-69cI3jEe2EEBIgawbLzw\",\"variantId\":\"pIbfbSwvSDSG320sLwg0UA\",\"parameterName\":\"rolloutProductSkuToJava\",\"id\":72,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"hhWbZgjPEe-nlw5rS2MojQ\",\"variantId\":\"l3U0vsUnQyS1NL7FJ-MkXg\",\"parameterName\":\"enableEnterpriseGenAIHubPages\",\"id\":74,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"d_6nwMrEEeq7o0HYblwlPw\",\"variantId\":\"tLFTNBl1Sz2nLkJ4rWUCOQ\",\"parameterName\":\"degreesWithFinancialTab\",\"id\":75,\"version\":1,\"value\":[\"master-of-computer-science-asu\",\"bachelor-of-science-computer-science-london\"],\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagName\":\"course_id\",\"tagValues\":[\"Ag847PF9Eeu7_Q6nSq8znw\",\"G8JqXl8VEeu8xgoxFomNmw\",\"XuXxNXKXEe6D4w6kbtK0ww\",\"0ZKfGaZHEe6oQA6J-7B2nw\",\"lf5lYaZHEe6oQA6J-7B2nw\",\"W_kbvIWJEe6hyw4UDDa2MQ\",\"78TEAlGZEe6OZwo2fRssDQ\",\"JClBHF1GEeyDkAqiUF1pDQ\",\"IFyXoV-JEeyGyBIIdSsL5w\",\"yFhU2XzeEe6_Ow7OYY5Yqw\",\"qxv2YV-IEeyGyBIIdSsL5w\",\"2pB1BeveEeyDYwq6z4uKRQ\",\"uqI54OvjEeyozBJ-29c9rQ\",\"Mbt3FOvlEeyDYwq6z4uKRQ\",\"T7BVWTK8Ee2PAQonVRkX_w\",\"nmFF2kv8Ee2duhJkJYfIJQ\",\"Dn5CXbw0Ee2u-xIQXc-B6w\",\"1IFPojK_Ee2rxxLf5KsrIw\",\"1xINBDK_Ee2PAQonVRkX_w\",\"TEhZHev0EeyLcA5hHZ0Uxw\",\"hl0MwOwBEeyDYwq6z4uKRQ\",\"j6XXhznOEe2a7QpIshOMSQ\",\"knCQNTnOEe2skBJ6qkJn8w\",\"snwdMb04Ee2PMA5vPCVxYw\",\"PhICSoItEe2cbxIuLDJE9Q\",\"hzaR7jnOEe2skBJ6qkJn8w\"]},\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"dlOcmTyCEe6vFhIeJsQy6w\",\"variantId\":\"WC7Dv2_sROyuw79v7LTsYA\",\"parameterName\":\"enableIdVerificationFingerprint\",\"id\":76,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"04RUwDwJEeySU81RSx04JQ\",\"variantId\":\"7eeVRVJ8QHqnBClgucU4kw\",\"parameterName\":\"enableProgramHomeInstantSearch\",\"id\":79,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Zh664D8iEeu5TlUlV7yTkA\",\"variantId\":\"s2CO2FqTTfWbFkmlhsf7Lg\",\"parameterName\":\"androidReCaptchaLoginScoreThreshold\",\"id\":80,\"version\":1,\"value\":0.31,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Zh664D8iEeu5TlUlV7yTkA\",\"variantId\":\"s2CO2FqTTfWbFkmlhsf7Lg\",\"parameterName\":\"androidReCaptchaSignupScoreThreshold\",\"id\":81,\"version\":1,\"value\":0.31,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"7fyybmATEe6pXA42bWMdmQ\",\"variantId\":\"-SVTv2n7SR6lU79p-8keFQ\",\"parameterName\":\"showGeneratedProductCardImage\",\"id\":82,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagName\":\"course_id\",\"tagValues\":[\"zO0q-VpMEemgBRIM9zNZlg\",\"gVKWUsKHEe2uTg6FBgJJHw\",\"pkvEcCpEEe6mDAo3fVlzHw\",\"nd9LQDloEeqkSg7PWecuTw\"]},\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"kA2zdelHEe2TRhJQjI_Svw\",\"variantId\":\"TTexfZ9FTqm3sX2fRd6plg\",\"parameterName\":\"enableHonorlock\",\"id\":83,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"ncfqYDi2Eeujo0U57Xxp-Q\",\"variantId\":\"UJ0ZzoNMTpW9_enF-Uv8Yg\",\"parameterName\":\"enableInvoiceUpsells\",\"id\":84,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"LOwb3VvUEe-sfQ4sW9OJDw\",\"variantId\":\"_5_gFUFKS1qf4BVBSjtaQA\",\"parameterName\":\"showNewSERPSuggestedSearch\",\"id\":85,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"0IP5sQipEe-MZQr_wKqqnw\",\"variantId\":\"sWZOu-6tQI2mTrvurdCN_g\",\"parameterName\":\"useDynamicDegreePathway\",\"id\":87,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"J8vfsML1EeqQzp3fUMgVAA\",\"variantId\":\"hDvta7YBSuCgooGBTI2vTw\",\"parameterName\":\"degreesOnHostedApp\",\"id\":88,\"version\":1,\"value\":[\"ma-public-policy-jgu\",\"mba-fia\",\"ma-international-relations-security-strategy-jgu\",\"mba-business-analytics-jgu\",\"master-in-business-management-mbm-egade-tecdemonterrey\",\"statistics-data-analytics-pgdip-isi\",\"global-mba-macquarie\",\"gmp-infrastructure-isb\",\"gmp-operations-supply-chain-isb\",\"emba-iitr\",\"bachelor-of-science-computer-science-bits\",\"msm-digital-transformation-healthcare-northeastern\",\"maestria-ciencias-computacion-pucp\",\"pgdm-spjimr\",\"elephants-cheetahs-operations-systems-iimahmedabad\",\"bachelor-of-science-data-science-ai-iitguwahati\"],\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"qUohUPunEeuptMG5qj0t0g\",\"variantId\":\"RTyWElnHTaG4fWVuYBdONw\",\"parameterName\":\"googleGatewaysIndiaLocalizationOverrides\",\"id\":89,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagName\":\"specialization_id\",\"tagValues\":[\"4JGavHT_EeaWKQo_29qXIQ\",\"r10Jy2huEeaDsA4V_O3EAQ\",\"xe8TSnRkEeaflgpbsOXi2w\",\"qG-wrV5SEeawWQoiUy1qRQ\",\"kLWnFWsyEeeVdhKUpvOPZg\",\"7lHCSlFIEeeffRIHljDI_g\",\"oRyN5IglEeePyRLleDGmxg\",\"qzhn9PT2EeSKSCIAC7TI2A\",\"I-nFAEigEeiR8w76z8x-Vg\"]},\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"60Z_QIafEeucQQE_M6uwhQ\",\"variantId\":\"X35dR-93RY-gVQqfxE7tEg\",\"parameterName\":\"blacklistS12nsFromFinaid\",\"id\":90,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"7ntPEDSZEemUF9PO6Co8LA\",\"variantId\":\"w_SpVBXiQj2apN9FAUtmGQ\",\"parameterName\":\"fullStoryAdminDashboardEnabled\",\"id\":92,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"jY270CnOEeuYzk0gHaHvCQ\",\"variantId\":\"Gn2HBKH2RACY_7VxTtOQig\",\"parameterName\":\"showDegreesHomepage\",\"id\":93,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"RRm_4JZpEeuW26mjdCzi1Q\",\"variantId\":\"FuHuzPXqRfO89BCCGqX-4w\",\"parameterName\":\"showSocialSciencesCategoryHub\",\"id\":94,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"RRm_4JZpEeuW26mjdCzi1Q\",\"variantId\":\"FuHuzPXqRfO89BCCGqX-4w\",\"parameterName\":\"showSocialSciencesCategoryHub\",\"id\":95,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"courseraPlus\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"C-Ph2gdwEe-nlw5rS2MojQ\",\"variantId\":\"wkk4RMZRQjmJOETGUTI5pg\",\"parameterName\":\"showWesOnCourseraPlusLandingPage\",\"id\":96,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Arx50izUEe-Zyg6VfSvr5Q\",\"variantId\":\"3fXp2uIvRPK16driL2TynQ\",\"parameterName\":\"enterpriseCollectionsRollout\",\"id\":97,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"ngh-sGflEeqiZTsLFdC3wg\",\"variantId\":\"9QAYlHJXQUefB8uvfYfcoQ\",\"parameterName\":\"coronavirus-ts\",\"id\":98,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"VO43DW6pEe6vFhIeJsQy6w\",\"variantId\":\"2V2HFDO5SLGdhxQzuWix9Q\",\"parameterName\":\"idVerificationFingerprintExclusionList\",\"id\":99,\"version\":1,\"value\":[\"67563874\",\"118036568\",\"110932339\",\"128176012\",\"91005146\",\"129344167\",\"22927484\",\"114818385\",\"126134397\",\"103790493\",\"99138177\",\"90938733\"],\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"OAHoQGT-EeixDMMjZdsNTg\",\"variantId\":\"g6mOUoyFS_27CJqr5jD1PQ\",\"parameterName\":\"seoOverrideEnabledApps\",\"id\":100,\"version\":1,\"value\":[\"premium-hub\",\"xdp\",\"xpdp\",\"xdp-perf\",\"xdp-react-16\",\"browse\",\"browse-perf\",\"university-program\",\"video-logged-out-page\",\"video-logged-out-page-react-16\",\"catalog\",\"partners-graphql\",\"directory\",\"directory-graphql\",\"front-page\",\"front-page-perf\",\"collections\",\"search\",\"next\",\"seo-entity-page\",\"articles\",\"ent-website\",\"consumer-description-page\",\"enterprise-description-page\",\"degree-description\",\"reviews\"],\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"O8_p_EjrEe6pXA42bWMdmQ\",\"variantId\":\"v0hashHIQluIWrIRyKJbWA\",\"parameterName\":\"enableMachineTranslatedBusinessContent\",\"id\":101,\"version\":1,\"value\":{\"CqVCoaCTS8-aRxEwpMW8Hg\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"kGeWsgwYQL6qXJeTw46enQ\":[\"de\",\"pt-BR\",\"it\",\"es\"],\"1ldb0gfmQE2Q9mvZdKwcTQ\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"BSPmkBivSR2iufqpuNTDUQ\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"x3pWkPZrSWO3fcUWCh2uMg\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"hKjV8hOiTcuqPC3_E82lBA\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"tQZkBkwmTZmcWIO0bz25mw\":[\"ar\",\"de\",\"el\",\"es\",\"fr\",\"hi\",\"hu\",\"id\",\"it\",\"ja\",\"kk\",\"ko\",\"nl\",\"pl\",\"pt-BR\",\"ru\",\"sv\",\"th\",\"tr\",\"uk\",\"zh-CN\"],\"W0bPXCV0TqOtMCXS5B89Ag\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"8EVvzsJYRGO62ciZwjYn0A\":[\"ar\",\"de\",\"el\",\"es\",\"fr\",\"hi\",\"hu\",\"id\",\"it\",\"ja\",\"kk\",\"ko\",\"nl\",\"pl\",\"pt-BR\",\"ru\",\"sv\",\"th\",\"tr\",\"uk\",\"zh-CN\"],\"gjf5F9YQT_6T7WwQwXn-EQ\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\"],\"yiiMIijbSRWOWC3DdeJ0cg\":[\"ar\",\"de\",\"th\",\"pt-BR\",\"id\",\"fr\",\"es\",\"zh-CN\"]},\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"0obCs0OgEe-f8w6v-VdCmQ\",\"variantId\":\"iT3itvsMQli94rb7DIJYmg\",\"parameterName\":\"showHorizontalKIMOnXDP\",\"id\":102,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"oEO8wD59EeuIqcELg5SKdA\",\"variantId\":\"EHwzLGwZS7WoIOgsF5CTYA\",\"parameterName\":\"useEnterpriseInvisibleReCaptcha\",\"id\":103,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"mAzrEISyEeqqu__DS83GMg\",\"variantId\":\"c2GnVpajRk21R2uAeM730w\",\"parameterName\":\"workforce-recovery-ts\",\"id\":104,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"V-s5IB9CEe6pXA42bWMdmQ\",\"variantId\":\"Dhe3RdarSpCXt0XWq3qQIQ\",\"parameterName\":\"enableGibberishDeterrenceAuthoring\",\"id\":105,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"43LRYKLmEee84KOrlKUKvQ\",\"variantId\":\"OeJcpchXR5-Kt8tqqaITLA\",\"parameterName\":\"sdpUpsellEnabled\",\"id\":107,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"A5QqqFjtEe-USQr_6ZvHVQ\",\"variantId\":\"o7V1FAgFTea1dRQIBV3mAw\",\"parameterName\":\"alwaysShowSearchBar\",\"id\":110,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"c2ExaLlHEe6PRg7CBHvMLQ\",\"variantId\":\"LNon_wHbSEKaJ_8B2xhCbA\",\"parameterName\":\"enableEnterpriseDomainRollout\",\"id\":111,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"ExJOcIswEeuGOe1-nY2olg\",\"variantId\":\"RzYKLHJiSpSEBZur5IB7dQ\",\"parameterName\":\"certificatesHub\",\"id\":112,\"version\":1,\"value\":\"alternative\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDegrees\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"ExJOcIswEeuGOe1-nY2olg\",\"variantId\":\"RzYKLHJiSpSEBZur5IB7dQ\",\"parameterName\":\"showCertificatesHub\",\"id\":113,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"pzGNo2GCEe-USQr_6ZvHVQ\",\"variantId\":\"v7ZUZwkfSIe2VGcJH_iHOw\",\"parameterName\":\"showNewMegamenu\",\"id\":114,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GoogleCertificate\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"BL--WiKOEe-BZw7QjuOi1Q\",\"variantId\":\"sxsieuEeRZabInrhHuWWyw\",\"parameterName\":\"showPageBannerOnGoogleXdp\",\"id\":115,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"bGUAYIagEeuiopWlkftNvw\",\"variantId\":\"qU9P8ogRQ9G5JzMczQh65w\",\"parameterName\":\"denylistCoursesFromFinaid\",\"id\":119,\"version\":1,\"value\":[\"IIZBW6-mEeaHBgqkZt_jWA\",\"zErmN5rZEeajJhIEs83WWg\",\"RpCqbucEEeaH9Q51wS-wDA\",\"GZluGec0EeaqHRKenm-C8A\",\"10W6Te_sEea7DBK-0BPzLg\",\"04UTtdz5EeaM5xKSknhJng\",\"_qMNfupfEea9sQ4_cyco6A\",\"coKKdodfEee-nQrsYRBh-g\",\"lAe6xrqUEeeJRwrm1qGMrA\",\"VivQGEdIEemEVA7yMJH7Bg\",\"pJ3XYkagEemxLA6xYs8f6A\",\"rUDAA-ShEemHfgqEl4_jig\",\"t2Gp3snCEemHiQqglUGzsg\",\"FALeCNrsEemxthIDmiPlEg\",\"7F3IvslLEemrpgp-DHPbHA\",\"mgu5l9rGEemZYA6RFvxeDg\",\"77ztW8kLEem39RJQBK97pA\",\"xxP3poDiEeq4zBKgTIm8gQ\",\"bKb57q0GEea2UQpM2-WzDg\",\"UyptSa-mEeauxBIk_RF-8A\"],\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagName\":\"partner_id\",\"tagValues\":[\"1447\",\"71\"]},\"namespace\":\"leeCoreLex\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"yfL25d32Ee22JQpc4-XSOw\",\"variantId\":\"tt3bcg_vQCGd23IP77Ah8A\",\"parameterName\":\"showRecommendedModuleDeadlines\",\"id\":125,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"nw_VaJCBEe6q_A4bEB8VzQ\",\"variantId\":\"IVfEaKQsTLSXxGikLAy0WA\",\"parameterName\":\"enableForceSSOLogin\",\"id\":126,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"DegreesDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"0OYyGASgEe-C1w6tOivQcQ\",\"variantId\":\"xja79vZhRt62u_b2YabeuA\",\"parameterName\":\"throttledDestinationDegreeList\",\"id\":129,\"version\":1,\"value\":[{\"id\":\"base~zvFnFcxLSkG3HnhciHOqPA\",\"slug\":\"mcit-penn\"}],\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"E_XHYKjMEemz0E0RgmlhTw\",\"variantId\":\"RRThfIX5ThKtBEZLu0K4SA\",\"parameterName\":\"expert-network-page\",\"id\":131,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"VDYIyNGaEe6PRg7CBHvMLQ\",\"variantId\":\"5TCz_macTNOws_5mnNzTDw\",\"parameterName\":\"showPageBanner\",\"id\":132,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"39ySQH-3Eey_UIuw8Ne3Bg\",\"variantId\":\"5lB_sLzAQCmr9dtfTkna5g\",\"parameterName\":\"enableTeamsLandingContentfulIntegration\",\"id\":133,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"63MWEFf6EeqGr-cZzTH5jQ\",\"variantId\":\"gRH7soCSRWiC2QovtYJbgA\",\"parameterName\":\"disablePendo\",\"id\":134,\"version\":1,\"value\":[\"VoVGuNLeQuSBpl8U3rk5Hg\",\"6i-hJlw0Q5eWk5LwulzUUg\"],\"status\":\"RUNNING\"},{\"namespace\":\"siteMisc\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"Q9gB6LHaEe2RbwohxJoGhw\",\"variantId\":\"W2tex70ZS4qrXse9GduKvg\",\"parameterName\":\"graphqlGatewayQueryLinkOverride\",\"id\":135,\"version\":1,\"value\":{\"MobileHeaderProgramQuery\":\"gatewayWrapperGql\",\"OpenCourseMembershipsV1Query\":\"gatewayWrapperGql\",\"CourseDataQuery\":\"gatewayWrapperGql\",\"AdminContractDetailsQuery\":\"gatewayWrapperGql\",\"TspCourseRecommendationsQueryLight\":\"gatewayWrapperGql\",\"TargetSkillProfileUserStatesQuery\":\"gatewayWrapperGql\",\"ProgramMembershipsByUserQuery\":\"gatewayWrapperGql\",\"SkillBasedRecommendationsQuery\":\"gatewayWrapperGql\",\"CollectionTableMetadataQuery\":\"gatewayWrapperGql\",\"CourseAutoenrollmentModalQuery\":\"gatewayWrapperGql\",\"CuratedCollectionDetailsQuery\":\"gatewayWrapperGql\",\"Images\":\"gatewayWrapperGql\",\"SDPRichEntityQuery\":\"gatewayWrapperGql\",\"ProgramDraftQuery\":\"gatewayWrapperGql\",\"MegaMenuQuery\":\"gatewayWrapperGql\",\"AuthoringTeamworkMetadataActivitySetQuery\":\"gatewayWrapperGql\",\"PublicPromotionInfoProductCollectionFinder\":\"gatewayWrapperGql\",\"GetAllProgramCurriculumContentsQuery\":\"gatewayWrapperGql\",\"S12nCoursesByIdQuery\":\"gatewayWrapperGql\",\"enterprisePaymentWalletQuery\":\"gatewayWrapperGql\",\"MegaMenuSkillDataQuery\":\"gatewayWrapperGql\",\"TSPCollectionListQuery\":\"gatewayWrapperGql\",\"ProductsOwnedById\":\"gatewayWrapperGql\",\"ProductQuery\":\"gatewayWrapperGql\",\"ProductItemDetails\":\"gatewayWrapperGql\",\"EnterpriseProgramSessionAssociationsQuery\":\"gatewayWrapperGql\",\"AuthoringTeamworkScopeIdByNonHighEngagementGroupQuery\":\"gatewayWrapperGql\",\"orgMembershipQuery\":\"gatewayWrapperGql\",\"UpdateAuthoringTeamworkMetadataActivitySetQuery\":\"gatewayWrapperGql\",\"PersonalizationSessionsV2AuthoringEligibilityCheckQuery\":\"gatewayWrapperGql\",\"HasProgramSummaryQuery\":\"gatewayWrapperGql\",\"StaffSessionsVgatewayWrapperGqlAuthoringEligibilityCheckQuery\":\"gatewayWrapperGql\",\"UnifiedEnterpriseOnDemandSpecialziationsMembershipsQuery\":\"gatewayWrapperGql\",\"getCourseBySlug\":\"gatewayWrapperGql\",\"EnterpriseTargetSkillProfileQuery\":\"gatewayWrapperGql\",\"GetAllProgramDraftStatusesQuery\":\"gatewayWrapperGql\",\"RelatedCoursesQuery\":\"gatewayWrapperGql\",\"TeamworkLearnerTeamsVgatewayWrapperGqlQuery\":\"gatewayWrapperGql\",\"FindByPromoCodeQuery\":\"gatewayWrapperGql\",\"S12nNamesByIds\":\"gatewayWrapperGql\",\"getCourseTotals\":\"gatewayWrapperGql\",\"CurriculumSummariesDataLoaderQuery\":\"gatewayWrapperGql\",\"ProgramCurriculumDomainsQuery\":\"gatewayWrapperGql\",\"MegaMenuDataQuery\":\"gatewayWrapperGql\",\"VideoCoursesQuery\":\"gatewayWrapperGql\",\"AllCourseReviews\":\"gatewayWrapperGql\",\"TaxEstimatesQuery\":\"gatewayWrapperGql\",\"ProgramProductMetadataGetQuery\":\"gatewayWrapperGql\",\"getS12nModalData\":\"gatewayWrapperGql\",\"VLPCourseMaterialsQuery\":\"gatewayWrapperGql\",\"AdminPagePermissionQuery\":\"gatewayWrapperGql\",\"ThirdPartyOrgMultiGetQuery\":\"gatewayWrapperGql\",\"CommonProgramProductMetadataMultiGetQuery\":\"gatewayWrapperGql\",\"ProgramCreationPageQuery\":\"gatewayWrapperGql\",\"XdpCourseDataQuery\":\"gatewayWrapperGql\",\"TopRecommendationsForSkillSetCustomQuery\":\"gatewayWrapperGql\",\"UserProductTransactions\":\"gatewayWrapperGql\",\"LOHPCollectionQuery\":\"gatewayWrapperGql\",\"ProgramDetailsMainQuery\":\"gatewayWrapperGql\",\"EnterpriseHomePageQuery\":\"gatewayWrapperGql\",\"membershipQuery\":\"gatewayWrapperGql\",\"GetEnrollmentByUserIdAndProductIdQuery\":\"gatewayWrapperGql\",\"SgatewayWrapperGqlgatewayWrapperGqlnSessionDatesQuery\":\"gatewayWrapperGql\",\"AcademicDisciplineBannerFirstNameQuery\":\"gatewayWrapperGql\",\"SettingsQuery\":\"gatewayWrapperGql\",\"CourseAutoenrollmentSessionDatesQuery\":\"gatewayWrapperGql\",\"FinAidProductCardInfoOnDemandCoursesV1Resource\":\"gatewayWrapperGql\",\"EnterprisePartnersQuery\":\"gatewayWrapperGql\",\"AuthoringTeamworkScopeIdByHighEngagementGroupQuery\":\"gatewayWrapperGql\",\"SlackPartnersQuery\":\"gatewayWrapperGql\",\"EnrollmentAndUsersQuery\":\"gatewayWrapperGql\",\"DegreeLearnerMembershipsQuery\":\"gatewayWrapperGql\",\"SubscriptionsQuery\":\"gatewayWrapperGql\",\"EnterpriseProgramWithSkillsetsQuery\":\"gatewayWrapperGql\",\"PortfolioProjectsByIdsQuery\":\"gatewayWrapperGql\",\"PromotionsGet\":\"gatewayWrapperGql\",\"AdminDashboardPageBaseQuery\":\"gatewayWrapperGql\",\"ReviewsPage\":\"gatewayWrapperGql\",\"VLPHelpfulReviewsQuery\":\"gatewayWrapperGql\",\"AuthoringTeamsVgatewayWrapperGqlQuery\":\"gatewayWrapperGql\",\"HasCourseraLabsQuery\":\"gatewayWrapperGql\",\"S12nProductSkusForFinaid\":\"gatewayWrapperGql\",\"CurriculumCollectionsQuery\":\"gatewayWrapperGql\",\"LinkedEnterpriseProgramsQuery\":\"gatewayWrapperGql\",\"GdprMembership\":\"gatewayWrapperGql\",\"AdminContractsQuery\":\"gatewayWrapperGql\",\"DegreeResourceInfo\":\"gatewayWrapperGql\",\"ThirdPartyOrganizationsQuery\":\"gatewayWrapperGql\",\"TopDegreePathways\":\"gatewayWrapperGql\",\"EnterpriseProductConfigurationMetadataQuery\":\"gatewayWrapperGql\",\"PromotionDetailsQuery\":\"gatewayWrapperGql\",\"CourseInfoQuery\":\"gatewayWrapperGql\",\"EnterpriseDetailsAppQuery\":\"gatewayWrapperGql\",\"ContentConfirmationQuery\":\"gatewayWrapperGql\",\"ProgramProductEnterpriseMetadataMultiGetQuery\":\"gatewayWrapperGql\",\"checkSwitcherProgram\":\"gatewayWrapperGql\",\"getOnDemandCourseData\":\"gatewayWrapperGql\",\"OnDemandLearnerMaterialsQuery\":\"gatewayWrapperGql\",\"EnterpriseCourseRecommendationsForSkillId\":\"gatewayWrapperGql\",\"PartnerMembershipsQuery\":\"gatewayWrapperGql\",\"EnterpriseSgatewayWrapperGqlgatewayWrapperGqlnRecommendationsForSkillId\":\"gatewayWrapperGql\",\"FinancialAidCoursesV1Resource\":\"gatewayWrapperGql\",\"OnDemandSpecializations\":\"gatewayWrapperGql\",\"AnalyticsContractsQuery\":\"gatewayWrapperGql\",\"PrivateSessionCurriculumSummariesDataLoaderQuery\":\"gatewayWrapperGql\",\"ChooseContractQuery\":\"gatewayWrapperGql\",\"GetBaseCertificateSlugsQuery\":\"gatewayWrapperGql\",\"OrgLoaderQuery\":\"gatewayWrapperGql\",\"TopRecommendationsForSkillSetQuery\":\"gatewayWrapperGql\",\"GetIdVerificationHistory\":\"gatewayWrapperGql\",\"SavedProductsQuery\":\"gatewayWrapperGql\",\"ProgramDetailsSkillSetsQuery\":\"gatewayWrapperGql\",\"ProgramsQuery\":\"gatewayWrapperGql\",\"ObjectiveSummaryQuery\":\"gatewayWrapperGql\",\"ProgramSSOBannerQuery\":\"gatewayWrapperGql\",\"PreviewSkillCollectionListBySkillQuery\":\"gatewayWrapperGql\",\"CourseDetailsQueryVlp\":\"gatewayWrapperGql\",\"LearnerCourseScheduleRunningAndUpcomingQuery\":\"gatewayWrapperGql\",\"FinancialAidApplicationsByUserAndProduct\":\"gatewayWrapperGql\",\"DomainGetAllQuery\":\"gatewayWrapperGql\",\"FirstNameQuerygatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGqlgatewayWrapperGql\":\"gatewayWrapperGql\",\"ProgramBySlugQuery\":\"gatewayWrapperGql\",\"LoggedOutProgramHeaderQuery\":\"gatewayWrapperGql\",\"InstructorProfileViewerByShortNameQuery\":\"gatewayWrapperGql\",\"InstructorProfileViewerByIdQuery\":\"gatewayWrapperGql\",\"CDPRichEntityQuery\":\"gatewayWrapperGql\",\"CourseraPlusPrepaidOwnershipDaysQuery\":\"gatewayWrapperGql\",\"Subscription\":\"gatewayWrapperGql\",\"nextStepQuery\":\"gatewayWrapperGql\",\"GetCoursesWithSessionsQuery\":\"gatewayWrapperGql\",\"FinancialAidCourse\":\"gatewayWrapperGql\",\"FetchProductOverviewQuery\":\"gatewayWrapperGql\",\"XdpDataQuery\":\"gatewayWrapperGql\",\"GenericProductVariantQuery\":\"gatewayWrapperGql\",\"ProgramCurriculumProductsQuery\":\"gatewayWrapperGql\",\"SFCVLPCourseMaterialsQuery\":\"gatewayWrapperGql\",\"GetProgramCurriculumData\":\"gatewayWrapperGql\",\"AccomplishmentsPaymentsRecommendationQuery\":\"gatewayWrapperGql\",\"ProfessionalCertificatesData\":\"gatewayWrapperGql\",\"DegreeHomeAppQuery\":\"gatewayWrapperGql\",\"CourseTypeMetadataByCourseIdQuery\":\"gatewayWrapperGql\",\"PartnerListingPageQuery\":\"gatewayWrapperGql\",\"AuthoringUserCoursePermissionsQuery\":\"gatewayWrapperGql\",\"enterpriseContractQuery\":\"gatewayWrapperGql\",\"PortfolioProjectQuery\":\"gatewayWrapperGql\",\"PublicPromotionInfoLandingPageBannerFinder\":\"gatewayWrapperGql\",\"MiniCDPQuery\":\"gatewayWrapperGql\",\"MiniSDPQuery\":\"gatewayWrapperGql\",\"EnterpriseSubjectMatterExpertsQuery\":\"gatewayWrapperGql\",\"AnnouncementSessionsVgatewayWrapperGqlAuthoringEligibilityCheckQuery\":\"gatewayWrapperGql\",\"ThirdPartyOrganizationByPartnerIdQuery\":\"gatewayWrapperGql\",\"VLPCourseDetailsQuery\":\"gatewayWrapperGql\",\"ProgramSkillSetsSelectionQuery\":\"gatewayWrapperGql\",\"FullSkillCollectionListBySkillQuery\":\"gatewayWrapperGql\",\"LinkedAtomInfoQuery\":\"gatewayWrapperGql\",\"EnterpriseProgramSessionAssociationsByProgramsAndCourseQuery\":\"gatewayWrapperGql\",\"CDPSchemaMarkupQuery\":\"gatewayWrapperGql\",\"IdVerificationsQuery\":\"gatewayWrapperGql\",\"AuthoringTeamworkListActivitySetsQuery\":\"gatewayWrapperGql\",\"AdminUserPermissionsQuery\":\"gatewayWrapperGql\",\"getCourseCards\":\"gatewayWrapperGql\",\"ProgramAlternativeEmailModalQuery\":\"gatewayWrapperGql\",\"ProgramAddEmailModalQuery\":\"gatewayWrapperGql\",\"XdpSpecializationDataQuery\":\"gatewayWrapperGql\",\"EnrollmentChoiceModalProductDescriptionQuery\":\"gatewayWrapperGql\",\"SkillCollectionListBySkillSetQuery\":\"gatewayWrapperGql\",\"DomainSubdomainQuery\":\"gatewayWrapperGql\",\"PublicPromotionInfoProductPageBannerFinder\":\"gatewayWrapperGql\",\"UserSubscriptions\":\"gatewayWrapperGql\",\"GoogleSchemaInfo\":\"gatewayWrapperGql\",\"SpecializationInfoQuery\":\"gatewayWrapperGql\",\"DirectoryPageCoursesQuery\":\"gatewayWrapperGql\",\"SavedContainerCourseQuery\":\"gatewayWrapperGql\",\"PromotionUserEligibleRulesGet\":\"gatewayWrapperGql\",\"PublicPromotionInfoProductItemFinder\":\"gatewayWrapperGql\",\"OrganizationSkillSetsQuery\":\"gatewayWrapperGql\",\"SgatewayWrapperGqlgatewayWrapperGqlnMetadataForSgatewayWrapperGqlgatewayWrapperGqlnRecommendations\":\"gatewayWrapperGql\",\"AutoenrolledCoursesQuery\":\"gatewayWrapperGql\",\"ObjectiveListQuery\":\"gatewayWrapperGql\",\"EnrollmentChoiceModalQuery\":\"gatewayWrapperGql\",\"CoursesNamesByIds\":\"gatewayWrapperGql\",\"ArticleEstimatedReadTimeQuery\":\"gatewayWrapperGql\",\"XdpSpecializationMetadataQuery\":\"gatewayWrapperGql\",\"EnterpriseBadgesCoursesSessionDatesQuery\":\"gatewayWrapperGql\",\"CourseSlugQuery\":\"gatewayWrapperGql\",\"FilterSessionsV2AuthoringEligibilityCheckQuery\":\"gatewayWrapperGql\",\"RatingQuery\":\"gatewayWrapperGql\",\"ProgramSummaryListContainerQuery\":\"gatewayWrapperGql\",\"AutoEnrollmentCourseInfoQuery\":\"gatewayWrapperGql\",\"PartnerPageQuery\":\"gatewayWrapperGql\",\"ProgramHomeModalManagerXdpQuery\":\"gatewayWrapperGql\",\"GetUserVerificationRequirements\":\"gatewayWrapperGql\",\"ClipsCourseDetailsQuery\":\"gatewayWrapperGql\",\"ForCreditCurriculumTracksByProgramQuery\":\"gatewayWrapperGql\",\"PrivateAuthoringPartnerIdQuery\":\"gatewayWrapperGql\",\"UnifiedCheckEnterpriseAdminRolesQuery\":\"gatewayWrapperGql\",\"LOHPDegreeListsV3Query\":\"gatewayWrapperGql\",\"FetchProductOverviewQueryVlp\":\"gatewayWrapperGql\",\"AccomplishmentsPaymentsCourseQuery\":\"gatewayWrapperGql\",\"AdminWorkspaceImages\":\"gatewayWrapperGql\",\"CourseMetadataForCourseRecommendations\":\"gatewayWrapperGql\",\"DegreeHomeProgressQuery\":\"gatewayWrapperGql\",\"EnterpriseBadgeCoursesMultiGetQuery\":\"gatewayWrapperGql\",\"getLihpCourseData\":\"gatewayWrapperGql\",\"VLPFetchProductOverviewQuery\":\"gatewayWrapperGql\",\"UnifiedEnterpriseOpenCourseMembershipsQuery\":\"gatewayWrapperGql\",\"AdminDashboardPageQuery\":\"gatewayWrapperGql\",\"CollectionPageQuery\":\"gatewayWrapperGql\",\"SkillSetListQuery\":\"gatewayWrapperGql\",\"ProductsOwnedAndExpiredByIds\":\"gatewayWrapperGql\",\"ProductPriceQuery\":\"gatewayWrapperGql\",\"CoursesFinaid\":\"gatewayWrapperGql\",\"getDegreeListsV3ByDomainQuery\":\"gatewayWrapperGql\",\"GetUpcomingCourseStatesQuery\":\"gatewayWrapperGql\",\"EnterpriseContractWithTagsQuery\":\"gatewayWrapperGql\",\"CatalogCollectionPageQuery\":\"gatewayWrapperGql\",\"OnDemandSpecializationForNonRecurring\":\"gatewayWrapperGql\",\"GdprMembershipQuery\":\"gatewayWrapperGql\"},\"status\":\"RUNNING\"},{\"namespace\":\"LearnerProfile\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"rhhm62RQEe6pXA42bWMdmQ\",\"variantId\":\"Of-lKP4oQC2_pSj-KAAtoA\",\"parameterName\":\"enableOptionalFieldProfile\",\"id\":136,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagName\":\"specialization_id\",\"tagValues\":[\"4JGavHT_EeaWKQo_29qXIQ\",\"r10Jy2huEeaDsA4V_O3EAQ\",\"xe8TSnRkEeaflgpbsOXi2w\",\"qG-wrV5SEeawWQoiUy1qRQ\",\"kLWnFWsyEeeVdhKUpvOPZg\",\"7lHCSlFIEeeffRIHljDI_g\",\"oRyN5IglEeePyRLleDGmxg\",\"qzhn9PT2EeSKSCIAC7TI2A\",\"I-nFAEigEeiR8w76z8x-Vg\"]},\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"YfO0UKw-EeaYE9MukwFz8Q\",\"variantId\":\"8s9nppE2RtaydvvGsqsslg\",\"parameterName\":\"blacklistS12nsFromFinaid\",\"id\":137,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"learnerRedPandas\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"36x70KAkEeiwZ0ERHrYUKg\",\"variantId\":\"itHMU7RlTyKuPlPauLONiQ\",\"parameterName\":\"shouldUseOriginalSessionsV2ExperimentWhitelist\",\"id\":138,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"ToDTrFTJEe-USQr_6ZvHVQ\",\"variantId\":\"fydQpiw4T0WnUKYsOL9F6w\",\"parameterName\":\"enableOnboardingModalDebugging\",\"id\":139,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"OFKzAF0wEeyQlfta9yo-Cg\",\"variantId\":\"5VNf851GS1CmIQw79HewDQ\",\"parameterName\":\"enableAndrewNgCollectionLinkInMegaMenu\",\"id\":141,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"BlueJays\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"5y7MBBi-Ee2GXAooChQtCw\",\"variantId\":\"bY-EQbPvR9-PhEGz75ff8w\",\"parameterName\":\"enableEnterprisePanelFederationQuery\",\"id\":142,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Enterprise\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"BGAB0A-mEeq5Y08IrBQR4Q\",\"variantId\":\"lsKRrgyUTUmCxupD_6XsLQ\",\"parameterName\":\"enableContractRenewal\",\"id\":145,\"version\":1,\"value\":[\"AAF5FgTmRq2GzxwgweDj1g\",\"3oYaAXOkScaI7f8ujpWqcA\"],\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"wf7ZqVAAEe2Zqg6BvjZWRQ\",\"variantId\":\"JW973JRsSlCve9yUbKpQuw\",\"parameterName\":\"showDecisionCriteria\",\"id\":147,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"Growth\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"tNRdIKuTEeqfEin3BNCiDg\",\"variantId\":\"OLS6EQbbRSqF-q37lBTjfA\",\"parameterName\":\"domainToGuidedProjectsMapping\",\"id\":148,\"version\":1,\"value\":{\"business\":\"/browse/business?facets=entityTypeTag%3ARhyme+Projects%2CcategoryMultiTag%3Abusiness\",\"computer-science\":\"/browse/computer-science?facets=entityTypeTag%3ARhyme+Projects%2CcategoryMultiTag%3Acomputer-science\",\"data-science\":\"/browse/data-science?facets=entityTypeTag%3ARhyme+Projects%2CcategoryMultiTag%3Adata-science\",\"information-technology\":\"/browse/information-technology?facets=entityTypeTag%3ARhyme+Projects%2CcategoryMultiTag%3Ainformation-technology\"},\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"KtoukI6lEeiMkCN8QsAfwQ\",\"variantId\":\"41RejuFyT2OBM2mrRYr6sQ\",\"parameterName\":\"authoring\",\"id\":150,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthAcquisition\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"lFJIDDPMEe-xDxKskKHctw\",\"variantId\":\"2aHrk9GDTneh65PRg053MA\",\"parameterName\":\"enablePartnersPageMigration\",\"id\":152,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"OIQiELxNEey322Wgpz6ddA\",\"variantId\":\"lecnDk_fRVCEqfUmhSCYUg\",\"parameterName\":\"preEnrollmentFlow\",\"id\":153,\"version\":1,\"value\":\"PAYMENT_WALLET_CAPTURE\",\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"cynvuEkaEe-x4Qr_6j0XOw\",\"variantId\":\"lDN-Jj_dRdGzfiY_3fXRyw\",\"parameterName\":\"useStreamlinedMWebXDP\",\"id\":154,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"edgeRouting\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"MBhBPjJGEe-mFBJ7jmy-sQ\",\"variantId\":\"1oB6TNp-Ri2AekzafmYt_w\",\"parameterName\":\"orgLandingRollout\",\"id\":155,\"version\":1,\"value\":\"alternate\",\"status\":\"RUNNING\"},{\"namespace\":\"XDP\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"wUui1EdxEe6vFhIeJsQy6w\",\"variantId\":\"ma-xPxoOT86vsT8aDs_OWA\",\"parameterName\":\"sendTrafficToBFF\",\"id\":156,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"tagTarget\":{\"targetType\":\"WHITELIST\",\"tagValues\":[\"HRSOu-BiEeOZpyIACyeXpA\",\"0OEv42lpEeaUlwon5hM_Dw\",\"ESRGuuYzEeeUDhLeFYRShg\",\"lswH0jTZEea1ggpF7DR5sw\",\"q3r0bBbMEeafcQ6IJeJ6Vw\",\"qn0BuLTsEeeEuBKG5mUxcg\",\"goJ9vXd_EeWtpg5GoAM5Iw\",\"4vLX1NAeEeWihQ6ogHC6vQ\",\"_eIWXiykEeaibBJMku26Gw\",\"d97rTJHcEeeLfAo2ml5Pyg\",\"gh5rVEd3EeW2ZBIIl17oPw\",\"H9j3VizfEeW-zwq84wShFQ\",\"hp5KWAVyEeaa_RIigsB41Q\",\"sPT4Do1cEeWbIxKn7M-nSQ\",\"Anu7oplDEeWqkw5zNB248Q\",\"-YdYt3Q6EeWxvQr3acyajw\",\"2QKA3X3EEeW-FwqtbgSK1Q\",\"JI9lH7iAEeWddwqLXioIgw\",\"2bS6_yWeEeeikAo7i2uNUg\",\"zX9TJI2iEeWbIxKn7M-nSQ\",\"hHc_5i-9EeWv_w7cMMH1Uw\",\"bIkXsq9HEeSmzyIAC0yFng\",\"Wf2bzsqnEeWBhRLooYlj_Q\",\"AXmFGEEjEeWpogr5ZO8qxQ\",\"4yPs1NawEeeIbwqmmTZQLA\",\"euRJEycxEeWP8AqYi9cmiw\",\"LrZ_qEziEeWyUw4oVjG8nQ\",\"b8OFK47-EeWF6gpQJiw6hQ\",\"o_uax8a6EeWIJRKecECAWw\",\"3cmY9AVPEeWr2CIAC20DIw\",\"-ahG_eF_EeaH3gpl1SSeHg\",\"e9sNO-GnEeaKEg7zbPMg-A\",\"539Ys48mEeWF6gpQJiw6hQ\",\"3mA6QTIyEeWsOA5fzAmxbw\",\"fqVFH2MHEeaMZBK2pChIVQ\",\"XosatFKUEeWEHRLwpfV5DQ\",\"PKJBXN8SEeWxQg6ioCYbHw\",\"pIrEKFV5Eea6Uwq1IhBOhw\",\"948IYJRQEeeOpwoxDQI2lg\",\"5JJoCSsxEeWWnhJMxi0Z9Q\",\"G6SPg3t8EeeAExLLhasP5A\",\"qqRBbiEREeW5Rwo0txKkgQ\",\"UFSkjArtEeaLXQp-QzuOHQ\",\"0T3Y9XjjEeeY4QpmMQsEfA\",\"zfksZy_FEeWWqBIFfWmDPQ\",\"jOSNeqolEeehsA7jkIRnug\",\"X8wHJ9gYEeahUgoYYL5t3g\",\"r0V6xDciEeWO-Qq6rEZAow\",\"RdcXx-kUEeWDtQ4tuIgsiw\",\"q6P-8ed8EeSglCIACzUL2A\",\"9_2drtq_EeWoKQ6POrXqdQ\",\"nw7W8Ib0EeWLPRLnVNA9qw\",\"sIhBvix6EeWccAqzeA4VPw\",\"oIIVJqNXEeWM5RIHOLu8Dw\",\"CMriWkeSEea9IA5mW7znqQ\",\"cL6HnUpNEeWb5ArkqfgJBw\",\"Wokt7DntEeWO-Qq6rEZAow\",\"WGJsi1UuEeWaMw4b4yEpbw\",\"wWmv2BEhEeWvmQrN_lODCw\",\"IEGB9xHcEeaRgQ4evS8KlQ\",\"GNr7-GFfEeW5iQpSR8Sfhw\",\"K7JO2Pp5EeSZDSIACyoA8g\",\"_HnWrRtDEeWP9g4JMjGIiQ\",\"vnoctcCAEeedJRJjt8USWA\",\"WFRV5ZVGEeaPOA7y0lv8VQ\",\"l-VzSGYDEeWq4RLQvtY_lQ\",\"5CCP4gWAEeWXaSIACyAJQw\",\"m4gpU445EeWq-BKQI4jyyw\",\"1pTpF9v9EeWcBg435JRSdw\",\"-O2O1Sy8EeWV6Q7jN0iEaQ\",\"JpfomI7mEeWzARIeC3uC5w\",\"5AYG1NbQEeWEOQ7ZE5jC0Q\",\"wx3x5cPREeedYw67U0qIKg\",\"UwNrlYaGEeS8XCIACzASlQ\",\"b4OfB0R4EeaL3g5tgt_P6Q\",\"6GKIgtwaEeWbigpIjeBbbQ\",\"JKQGR1UHEea4Zwq5JsP8XQ\",\"eQ92vI2YEeWeogpSJNat4w\",\"H4Lq9DClEeeckAoFzJuh9g\",\"1e3cxzeNEeWO-Qq6rEZAow\",\"pNYBd3jtEeeFwApLz3FWEg\",\"PsI7dlrCEeW5ChKOjFc59Q\",\"gvw1-gKyEeaJMgqy4cb6jQ\",\"rAY3Bp_JEeajJhIEs83WWg\",\"5qe8W_5iEeSiniIAC1OXJA\",\"6tx1Y3LiEeWxvQr3acyajw\",\"2Hgif4zPEeeypArJuorftg\",\"KK4EhXQMEeSc3CIACrbZqg\",\"Ff8L7HZAEeeobg7O-NRcDA\",\"rgBZRpwaEeafIQpJGWIzpg\",\"u3forbRfEeeAxAouDGu3cg\",\"qzwLIm32EeabgxL_CsKzaQ\",\"MQLdHLd0EeeChhJXz190Vg\",\"Ua5FJQKYEeijwg6Q7AfPog\",\"yVYjJjlJEea_QBJ9iBnl3w\",\"K0CLlm15Eeem_Q73lEzyLA\",\"m4P_9jaeEeWBMQ5pdIoFkQ\",\"-_a5rfggEeS0mSIACx2P1w\",\"ix4wfRhfEea3DxJjpF7HPw\",\"ESrs85KbEeW2aQ7olstw0Q\",\"9iW9MyKnEeapkBKJ0Y_FqQ\",\"_pVIj63IEeeApxJ8N9WHcA\",\"VkYMdI_XEeWZyg6bf_Oxkw\",\"W1GYfZBWEeaPiw57oPj_hQ\",\"YrbKHF42Eea2uw7FUMTxlQ\",\"S2yYbyBiEeWa6hIFcmm3AQ\",\"mtT9uoZDEee5sQp-c2T9xg\",\"m3-YVtKREeaskwrhgK9PcA\",\"Ycu2Tay_EeaVdxKCaraLyA\",\"5UGFRKUVEeStrCIACxCS_Q\",\"X_ZG4rVzEeWq2A7HIftJ6w\",\"93w6xNzBEeSvjyIAC3jXcg\",\"z_MvXQoVEeWCpyIAC3lAyw\",\"EVxWU6_bEeSmUyIACymLoA\",\"pkE92hJhEearKQowajWNkQ\",\"yn4BHt70EeWDLBKS83bB7Q\",\"EZVzungdEeWi0g6YoSAL-w\",\"TEfLGl5WEeW5iQpSR8Sfhw\",\"7O843CBJEeWcQw5YiljpGw\",\"D-kRGMhiEeSHHCIAC12q0A\",\"3BtSOZkvEeeNegqR6J6tDg\",\"NtRu6kfmEeWk9g4dP2hYVQ\",\"HcZv2HHtEeWrAxJQXw-8PQ\",\"STiBVnU-EeWKsgrp3VnvAw\",\"tjqUXz-5EeWpogr5ZO8qxQ\",\"zVy42a12EeWKaQ6n__gsuQ\",\"7mp9vlryEeWzUQ41NnCQkQ\",\"dPkbnh6zEeWP0w4yK2369w\",\"_aXKkBnJEeW9dA4X94-nLQ\",\"Dvgs4iAXEeWKeQ6ae81EbQ\",\"X_CuLfb0EeWfYgqbi1xsdw\",\"zarv50qwEeaovA5yk1oeyQ\",\"od-wAux4EeWaMA7Pe7xMzw\",\"GniSDGdyEeWq4RLQvtY_lQ\",\"evGYoZ65EeW6bw4ogk2HGQ\",\"0jVDw8z0EeSMfSIAC4tSZw\",\"V2Rnzt9KEeWVFwqmKx7D2Q\",\"mXOBuEEkEeWKOBLv1z6n9w\",\"kb8BeBtHEeWP9g4JMjGIiQ\",\"ix6p0FfOEeWT8xIUiEQHHQ\",\"ET33QCcYEeWbYQ5aIUJhSw\",\"jsozn_dMEeaSfhKA_sgPeg\",\"kKwHoIP4Eea_HA7U3gpEVw\",\"NZmNZlzAEeW3Vw7jVMSMiw\",\"NJWa6CDkEeWa6hIFcmm3AQ\",\"QtAD8SXCEeWxbhIkPfddLQ\",\"i4lCti8mEeadCQq-_15rRQ\",\"X9NQX3HtEeWi0g6YoSAL-w\",\"A06r2j6XEea_VAogyls_Sw\",\"GutC4Nm9EeWkoRJloSKtsw\",\"lXNlz0B0EeWKOBLv1z6n9w\",\"BvhI5eJkEeWr4g7T_DyXNw\",\"N8tsZtwdEeenDAqfmPZsgg\",\"Ubg5m6GeEeSoeSIAC0cUQw\",\"KCDwoVb9EeWaMw4b4yEpbw\",\"Ckas6KfpEeS3eyIACw6YLg\",\"01MWvUeMEeaeRgqQhMBV5Q\",\"tOKC7icYEeW6YBLN1oULHQ\",\"eLzp7w-NEeWPhwrBf2tcNQ\",\"bALgYL4jEeejoA6gkzed5A\",\"UMooQlv8EeWzUQ41NnCQkQ\",\"OFscqWDPEeWFnw4rjmRYKQ\",\"KoJTHEpJEeWJHwqqqPAooQ\",\"atv2JmMHEea4ixIRhYg8jQ\",\"zs3YSHQ6EeWrAxJQXw-8PQ\",\"L7stsPOKEeSlpiIAC7NwBA\",\"kGjoPlCdEeWfzRIay-bDMQ\",\"jA4AZLlTEeWfYA612mWHZw\",\"mTI4WFplEeWPXA4vXFBIfw\",\"szecWzeyEeSnNyIACxiLYQ\",\"LZZg6vhQEeWfYgqbi1xsdw\",\"3FBY1Z4eEeev7w6v-2RTNg\",\"t2hchZe2EeWjfxIrc5BW9Q\",\"Ijr8rurHEeSb-yIACwuKNg\",\"mzD-aSOFEeW5Rwo0txKkgQ\",\"kKyRFEEiEeWB_AoW1KYI4Q\",\"d9Ou11BAEeeffgqJyG_Okg\",\"yFZxWd8aEeWDLBKS83bB7Q\",\"NnouyjuOEeWFSA6UPWxRyQ\",\"S7NS8xoFEeWwrBKfKrqlSQ\",\"nzM4LgHTEeaosAqqqSjfcQ\",\"QH3jq7RDEeeMiQ4Nm9ulJA\",\"gkMKPVDMEeWfzRIay-bDMQ\",\"mKzzYp5YEeWVBgpelZA5Jw\",\"JJ1g_B6sEeWFIxLDnS6_kQ\",\"tlTh8kzVEeagxwr1Kg22cw\",\"ghnWYbvuEeWuCAqiwoZfSw\",\"urbm-CT-EeWCGRL6mLoB5w\",\"9uthHBq9EeWg_RJGAuFGjw\",\"5veWow4QEeayXBIQdVd_6w\",\"6mOCpgP8EeWmBSIAC9UI2A\",\"cYz0Y3QxEeSdOyIAC1STUg\",\"xtpKLngcEeWrAxJQXw-8PQ\",\"dbg14I1oEeWbIxKn7M-nSQ\",\"a0OJ1ha4EeWKlgqs7LdhRw\",\"uIwhB9m0EeWmJA7MFk_WCQ\",\"cm6SuF0tEeeRBg6DrzW1mg\",\"F8ZetLm6EeWbNBLZhfEI2Q\",\"tudrlqdjEeellg6wyPI6Pg\",\"opX5uCGvEearhhL0e-FIDw\",\"ZTyI7epPEeWvGQrWsIkLlw\",\"sQEO1tohEeSQryIAC46GNw\",\"q6hZQfQtEeS_qSIACxODig\",\"gUk1J6KaEeWzcRL32DA-SQ\",\"qBprGt8cEeWsvwp02yXW0Q\",\"Gyll8Zh9EeWZyg6bf_Oxkw\",\"EwR6zhSDEeWCWhKuhISYpw\",\"gtbTilrcEeW5ChKOjFc59Q\",\"Lka_AUNqEeSEgyIAC1AP1w\",\"VT7tQKIyEeWiwAqQT7MHVQ\",\"5hRQhN9AEeWsvwp02yXW0Q\",\"yoEcMimLEeWbhg7tBrEPHw\",\"1IxAHTxmEeWdUgozVKt3nw\",\"hhFDsQ72EeWPhwrBf2tcNQ\",\"vqy5rJJMEeehcwpLungpGA\",\"ZvLQKUDrEeaDtA7V-fOzBw\",\"jIaMzuYjEeWomRIq0eOZbw\",\"g6miROxMEeWgEA49BslyNQ\",\"CdrDcFM2EeaLwg5UuE_6KQ\",\"o4mFTLyQEea5qAp8aGSsAg\",\"NNB3vnsMEeaCZBIelfdoiQ\",\"G5hfwlaTEeWsGQ6fKrurvQ\",\"Wi6g78WsEeWCSBJ1_yk7Tw\",\"0ayiYtaOEeWvEArBkQ8C9Q\",\"wZm0CJ0jEeWILQ7D3uPEMw\",\"l9ryvRniEeWjrA6seF25aw\",\"XUv9NVL-EeWEHRLwpfV5DQ\",\"lDOzNnwOEeSreSIACy-QzA\",\"82aQj7-XEeWlXArQvkLgXw\",\"LY8dVhVXEeWvmQrN_lODCw\",\"BvJl4ZynEeeeLg6Ny5iuug\",\"98ToAjCQEeeUJAp8qPNzqg\",\"WUlWcFTeEea6Uwq1IhBOhw\",\"-Ph0DnwyEeaA7w6yFE2sWQ\",\"p6GNi4gDEeW0iQ6RUMSWEQ\",\"0SYC5bspEeScJSIAC0aWWQ\",\"jFTD2Tu2EeWFSA6UPWxRyQ\",\"k2Ty4TonEeWO-Qq6rEZAow\",\"FjD-ZB8oEeScWCIACnuVZQ\",\"0l8lhEXrEeWbNhIvIryYow\",\"Qzq_RhPlEeWfzgpfp_iBVw\",\"THaE_RqwEeWDtQoum3sFeQ\",\"7OuwOuZMEeW05Qou4vkexQ\",\"JV2US53WEeW4xRJkiwxnYw\",\"Qj-ZfiUAEeWxbhIkPfddLQ\",\"2RQKJFb6EeWTbwotamPtlQ\",\"rWODgk58EeaSCRItpK5oLQ\",\"EwG0wVcFEeWoihJUyvgO6w\",\"3oV7d6_HEeS5PyIAC4GQ5A\",\"KixhPZSuEeWI6BJRAK7IKQ\",\"LEwPv7bcEeSrhSIAC2sFOw\",\"bnQLDSclEeWbiBJCM9ziNQ\",\"F5IIkY2jEeW-ng7WVUsFiQ\",\"s5sEkwAHEeW9ISIACxWDhA\",\"j_-Kkrw7Eea5qAp8aGSsAg\",\"-DeBzORjEeSwliIAC3sMgg\",\"xfaXlhvMEeeK5RKT8BCCCA\",\"FuHL-RuOEeSduyIAC0iV4g\",\"XUoQOTbqEeWoUw6Yc8vnEw\",\"At1XBOAAEeWoTg63tTECEQ\",\"grRYIubyEeaVLRKoA_hS8A\",\"fcqBEnxQEeaXRRKK7mMjqw\",\"xRA5cxnoEeWg_RJGAuFGjw\",\"w-VZF214EeeWCg71xNIlJg\",\"-WZJR3fJEeWKxgq26fqTNQ\",\"SgcGB0YOEeemlQrrzf9X-A\",\"d1WkxNf4EeSFEiIAC0CpYw\",\"KQ7XaDaaEeWWBQrVFXqd1w\",\"AUxxP-LfEeaqDQq7dMI62A\",\"lO5va7h_EeayqhK4SOTn7g\",\"IH7VjpoSEeWxTA6NLywNHw\",\"RXo42NFzEeWEOQ7ZE5jC0Q\",\"fZN4SVfiEeWsGQ6fKrurvQ\",\"dh3wTQZNEeWJMSIAC7Jl0w\",\"aWeQOYdaEeacLAowENVELw\",\"ofu7SKAEEeSrqiIAC46RtQ\",\"-KDHP5UFEeaPOA7y0lv8VQ\",\"Q5o-hKIwEeWzcRL32DA-SQ\",\"WaKiiuSYEeSRgCIACxAE0Q\",\"v9CQdBkhEeWjrA6seF25aw\",\"Xr4n5w7WEeeiThJuAhkCcA\",\"HBzqJ09KEeaSCRItpK5oLQ\",\"LcLAGMEVEeWvUhLEBd1H9w\",\"Vl33l3YNEealBw7zEbSgBw\",\"jB4S7oIAEeWVOA72XBQbjQ\",\"lAGmYTKVEeWgIQ7IEhB31Q\",\"r74vRmEsEeWQAgqoue9YNw\",\"eUhVWo2iEeWJIAqFKsey7w\",\"FioEDkKkEeWpogr5ZO8qxQ\",\"3vTfVlUsEeWaMw4b4yEpbw\",\"s6_Z4SBAEeWcQw5YiljpGw\",\"nymnhGMNEeWMMg7wwTZV_Q\",\"Cn3HgzTdEeWW9BKhJ4xW0Q\",\"yt9FQtZWEeaDExLRWbCaPg\",\"caUavg4QEeaY6ApZCjoQPw\",\"Niihyrb2EeSNXyIAC0mVOQ\",\"aPM0Nx7iEea8agoSdQeRvQ\",\"TN2PygiBEeW4diIACwKO-g\",\"iXq6zSWTEeWs4gorU6Q1Yw\",\"G_9QyIesEeWfngrMqWa91Q\",\"SdHxfbfoEeaySxJObWl3bA\",\"JBCvTm03EeWEewoyD2Bc5Q\",\"VuB23StaEeWccAqzeA4VPw\",\"q78Cq1x8EeW9BBKT5ztNhQ\",\"R3QoIjeuEeWCYBKNeFwojw\",\"ICHUM2UiEeaspg4CA9Hi1w\",\"W62t_A-ZEeWuEBJhzy2uFw\",\"eH8S1b38EeWxzxJER_JW2w\",\"ugSnwH9hEeSiIiIAC3lQMQ\",\"tEqImn2kEeWb-BLhFdaGww\",\"6Fa6w3EjEeWbbw5cIAKQrw\",\"rWOCs42DEeWIbw4397jVQw\",\"MOYxuFfOEeWTbwotamPtlQ\",\"xOBaY1ibEeS-oiIAC0UN8Q\",\"DoehDsNaEeSFKyIACw6TQw\",\"A82QaHtJEeSliSIAC0EO7A\",\"iI9VRSBSEeW5Rwo0txKkgQ\",\"uhmPeQZHEeWNRCIAC3rB3Q\",\"we2C0U9DEealsQ4S5bCf-Q\",\"BPAnFSl4EeWbhg7tBrEPHw\",\"Xy2quTeOEeWJaxK5AT4frw\",\"7Iw3cbCiEeS-qCIACimRTw\",\"N6kw6qEJEeSHiSIAC0EiMQ\",\"3TdKKA-VEeWhsgqB1eduww\",\"Nap1_eB0EeWHHAokaxVUhQ\",\"0zQ5g82xEeeDaxJqd7j5uA\",\"ouoDtVM7EeaUyhJ5kBsouw\",\"cKvqIUXWEeSAFiIACyyIrg\",\"xAUa37WoEeW-DxJ4SAJAhQ\",\"IFz46F48EeSncCIAC0eNkA\",\"ijXGKZHZEeerwQrGqCbRTA\",\"pNJRE3jlEeeO7g69QmeD8A\",\"a9S36isyEeWccAqzeA4VPw\",\"4c3Na4HJEeebiA46KC81FA\",\"192QixZOEeWKlgqs7LdhRw\",\"_UsmIV-PEeSnpyIACzWBsQ\",\"1HMhd4JEEeWxQQoymFg8zQ\",\"xK2ybtwzEeez4BKR_KlTkA\",\"aLT8b2rnEeak0hLPfPzoPw\",\"etUml1ZbEeWQVQr3-Nu12w\",\"M9h7jndcEeWi0g6YoSAL-w\",\"fVStkiGAEeWibgoGfGzczQ\",\"B6xVo03bEeaSCRItpK5oLQ\",\"NHZYDoLEEeWXmQ4F86nmrw\",\"wNpXSI7-EeW93wo8Ha4kow\",\"Uq0cvh6TEeS2uyIACzGOcw\",\"LZj7-KJCEeWYyRIEa7jVJw\",\"QKGzLQoYEeWKzSIAC7Uk8A\",\"wmoTBzyAEeWFSA6UPWxRyQ\",\"6AL8FY7BEeW5gxKDBxYMJw\",\"dQMNsk2NEeW2EwoziUhyxQ\",\"C40AUGZoEeWq4RLQvtY_lQ\",\"Kzg9QkDxEeWZtA4u62x6lQ\",\"VIUTXB0IEea20BJooCBlFw\",\"IJnuLLWoEeWfYA612mWHZw\",\"7pQIqpStEeWzARIeC3uC5w\",\"bzhAuJ9sEeWJORITtzkPnQ\",\"5d5-vUEkEeWKOBLv1z6n9w\",\"K4eYfU1aEeWigQ4Vtn6olw\",\"4gFDJxJhEeayXBIQdVd_6w\",\"0nQ09Q4SEeaY6ApZCjoQPw\",\"pbw8djXzEeW6RApRXdjJPw\",\"eBEnnYkqEeWGBwqGAoUFww\",\"zyGo9ph2EeSyKiIAC0EFDA\",\"_PYZqCETEeW5Rwo0txKkgQ\",\"8Yiz7ITUEeaTWA5e4i8Kvw\",\"dScDad8bEeWNrAqe1RXmgw\",\"O4zNy4R9EeWXmQ4F86nmrw\",\"WHpKheovEeWHHw4eQCNF6Q\",\"893hvnH8EeWLqw7zlLhRzQ\",\"vV5KmA_3EeWPhwrBf2tcNQ\",\"A9Yb1uFoEeWLHw5Kc9wFbw\",\"wywOj9ZqEeWoww7Hc7148Q\",\"KEY9D8SzEeWhPQ55lNYVVQ\",\"7wfVmobsEeWgjA5cAvYgmw\",\"Q_W9Aw5BEea7axIlQHzY1Q\",\"iRBJm_LREeSplSIACzYDNg\",\"Rtlt9eFdEeSGQSIAC1sPoA\",\"l28DESP2EeWcQw5YiljpGw\",\"0lWQ0yP5EeWibgoGfGzczQ\",\"yC0iaOrHEeSb-yIACwuKNg\",\"n5-mrvV_EeW_Fg5kRHBRWw\",\"R9bQ2bU2EeWhzw6RmNsYkQ\",\"XrCGMTroEeeAnw4ZpXnkxA\",\"iYYp3BipEeeAuQ5XyvTfVA\",\"wU9rptfZEeSQpiIAC2iNcA\",\"Fw4ZgaAIEeSrPCIAC1SWlw\",\"oBD-Aq5rEeWDaxLlMKJUpw\",\"y20FTlDPEeWMlwoziUhyxQ\",\"ex6zqWw6EeSBviIAC4cMmw\",\"0qiIqiLuEea8agoSdQeRvQ\",\"X8YjHDowEeWnxw5wP_KHTw\",\"5qFfbA5AEeaoZBKRisF_Dw\",\"3KNgoXgcEeWrAxJQXw-8PQ\",\"92ijl7WhEeW-xg611XxSbw\",\"1AOj5h1WEeaSjBI-YFKkww\",\"yGzRJSWJEeWs4gorU6Q1Yw\",\"qwVGRrgdEeWkwBIgnN7tuw\",\"UZ2GhkvlEeWyUw4oVjG8nQ\",\"NSxhuc9cEeWczg7kSY_tVQ\",\"EGWVwnE7EeWxvQr3acyajw\",\"7FRjpz1BEeWC4g7VhG4bTQ\",\"q4jrAUR4Eea5xg7_DSTNnw\",\"qqP6hnElEeWi0g6YoSAL-w\",\"5uY2s0U4EeWbNhIvIryYow\",\"wIiu6ShLEeabkA6A3tuC4Q\",\"RugeU1pBEeaw3QoEHqdPHw\",\"ujDaYENhEeSfwCIACxeXRw\",\"c7SmIq3JEeeN3goWo4mKhg\",\"-cU13ARSEee5kw7fsxuOhg\",\"Zsd6tn68EeeOgw4a3SFqnA\",\"CaJoOSNrEeaLUg4ucc6JJQ\",\"8Z78nUQREeabNQ5k0FBNlQ\",\"7mdQ8leoEeeZ3g7LRzMq2g\",\"X55NADVvEeW6RApRXdjJPw\",\"13cxmIVmEeaSuApRnRH4vw\",\"LAsCMVNlEeaLwg5UuE_6KQ\",\"oHkr8bWNEeW2iwpbOuagWQ\",\"QYYAP_ZSEeWzQw5ZtKzbdQ\",\"mn-McyvqEeWccAqzeA4VPw\",\"9GGvo5QIEeWBAQoVMoNgNQ\",\"nnd5lshWEeSA1yIACye2oA\",\"DVetX9HfEeWlbgqNCYymGw\",\"H9F0uPUfEeW_PAqltdIuVw\",\"zfZ1eLJIEee1URLG_iv35A\",\"-ufScs8fEeSS_CIACzcAUg\",\"kZ029icpEeWbYQ5aIUJhSw\",\"W-ayAiM9EeSjriIACzaDig\",\"M7W0H9_dEeS2ayIAC7NlsA\",\"NiK99anHEeS88iIAC1WehA\",\"SN5tm_tBEeScRyIAC3-PxA\",\"XMBb_CfbEeaiMhLaNG_3QQ\",\"VXrdLODREeWGtArzEGZPmw\",\"5HBkkNZEEeau6wpUmreBng\",\"eKJIPOAMEeelCBLoDv22aA\",\"7_wUMCBSEeW5Rwo0txKkgQ\",\"KqKtbzXyEeWW9BKhJ4xW0Q\",\"XdQwhCQcEeapkBKJ0Y_FqQ\",\"senhGTbqEeWw6g4yTrGrVQ\",\"1b9VUDu6EeWdUgozVKt3nw\",\"pDX5iINYEealyAq9mBiU-w\",\"Yg0QhCDeEeWXzxJxfIL00w\",\"yE4SeOsyEeWaMA7Pe7xMzw\",\"X1gEFr4LEeaqug5_d2-DwA\",\"KIU_MO-XEeaChwpLfdCNZA\",\"83wSTQbEEeaCAQ5MYbYgBw\",\"b6AxviyUEea8-BJ7AvBU3Q\",\"1cW_OysHEeWccAqzeA4VPw\",\"bpULWbWpEeWbNBLZhfEI2Q\",\"QKuGrOVSEeWqgA7hWaP3zw\",\"EZaf2jCPEeeo0w7S4sUhzA\",\"enk-CJRMEeaerwqx2eVOvQ\",\"VlVL7qXiEeScJCIACymM8Q\",\"wIj8XHHLEeSXYyIACw0Peg\",\"7_kA050XEeWIXgpWJNgyEw\",\"fUpdLCAMEeWibgoGfGzczQ\",\"d_71NKdPEeSOWCIAC2iDyw\",\"mShQi8YfEeWg0QoHq3JjoQ\",\"3uUhp3hZEee12AoVaVBtGA\",\"m3M_QRdcEeaEIQq1FSQEZQ\",\"QdHw-bjSEee9Dw6zl3J7sA\",\"SiUFNQMIEeWKrCIAC49PHA\",\"6kAowBObEeWfzgpfp_iBVw\",\"t1gZRTXyEeW6RApRXdjJPw\",\"SrM6V-3pEeSJZSIAC0gHUg\",\"CTZdEFfbEeWsGQ6fKrurvQ\",\"W9XMEny5EeW3pg6oA-kqJQ\",\"RYH9NTXzEeWWBQrVFXqd1w\",\"tMHV7wu7EeWoRw4pD4cXmw\",\"j0Ytj2cAEeWUihJ1ayDcyQ\",\"z7qyITcjEeWnxw5wP_KHTw\",\"asKM33phEeafpQ7bFXmnJw\",\"pBpdFgq4EeafmAoLZ2pYtw\",\"Fp0K8RoEEeWDtQoum3sFeQ\",\"p2kZV1WKEeeozwrtSTjoGg\",\"mG15ZhQ9EeWCWhKuhISYpw\",\"gja-ZYNWEeWxQQoymFg8zQ\",\"BOxskeJGEea3uhKgRSNY-g\",\"zc34tTekEeWXuQopUhAqaw\",\"UShq4HPgEeWi0g6YoSAL-w\",\"z5mjsWCeEeWVEg5QpF1H_w\",\"Ts1j3OZkEeaw3QpTaAahwA\",\"Wv_qFVYzEeWKXg4Y7_tPaw\",\"b-UZI43PEeWTzg6WBWinhQ\",\"m8Ax7uY0EeWPBQp-iKDXPw\",\"QGl4qFJkEeauXRI4ypm_Yw\",\"oZirzngdEeWrAxJQXw-8PQ\",\"EKfyaEtaEeW4rRLEP0z9Bw\",\"gDXTbUEjEeWKOBLv1z6n9w\",\"yS8ezjDPEeW-zwq84wShFQ\",\"ceSIMmPeEeWXRApPoSsREw\",\"8To4DTVtEeWWBQrVFXqd1w\",\"-1YwAnTLEeSjmyIAC0aXFg\",\"0B_AVEqwEeaw2hIsmg4YHQ\",\"7QEXSlPgEeaVmgqzlkasOw\",\"sCnDCtBhEeWFqw71fuUDrw\",\"ZR2zKt-eEeW2DxJ2-klr8Q\",\"UHpTmhtHEeWBKhJRV_B8Gw\",\"31zZu_xWEealqA7jlkBudg\",\"BySMWm04EeW8nRIpKnwp7Q\"],\"tagName\":\"course_id\"},\"namespace\":\"Flex\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"xTa1IEHQEeiivJ_nrtfPhg\",\"variantId\":\"CxuUpUdMRCC3R5mHjcrJzw\",\"parameterName\":\"sessionsV2EnrollmentEnabled\",\"id\":157,\"version\":1,\"value\":false,\"status\":\"RUNNING\"},{\"namespace\":\"GrowthDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"JCi38L8rEeyN4LMGyyJm3g\",\"variantId\":\"TRD7qa0NQt66Yo6qcwVBYQ\",\"parameterName\":\"showCoBrandingPartnerLogos\",\"id\":159,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"BlueJays\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"6ePpEN3LEey2vr_CDQTCXg\",\"variantId\":\"9Cw1OsKrQ1W-uOR9FI5guA\",\"parameterName\":\"globalHelpButtonUrlExclusionsRegex\",\"id\":160,\"version\":1,\"value\":\"^/(?:programs|teach|admin|business|degrees|degree-description|internal|o/[a-zA-Z0-9-]+/admin|learn/[a-zA-Z0-9-]+/(?!lecture|supplement|videos|course-manager|graded|ungraded|wiseFlow|programming|quiz|exam|team|irt|peer|discussionPrompt|team|assignment-submission|placeholder))\",\"status\":\"RUNNING\"},{\"namespace\":\"DegreesDiscovery\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"26y5xACzEe6tLg6_DDNBVQ\",\"variantId\":\"8LaLvyydTv22i78snd79Sw\",\"parameterName\":\"pgdipsMarketedAsDegrees\",\"id\":161,\"version\":1,\"value\":[\"statistics-data-analytics-pgdip-isi\",\"pgdm-spjimr\",\"pg-cert-public-health-imperial\",\"grad-cert-global-business-practice-macquarie\"],\"status\":\"RUNNING\"},{\"namespace\":\"AcademicIntegrity\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"s627zlPZEe6YYwrfq_--AQ\",\"variantId\":\"rtxSN03wS1-cUjdN8DtfgA\",\"parameterName\":\"enableFileUploadPlagiarismDetection\",\"id\":162,\"version\":1,\"value\":true,\"status\":\"RUNNING\"},{\"namespace\":\"growthFalcons\",\"idForAllocation\":\"7023866565-1725174923225\",\"experimentId\":\"I3RO7iSiEe2HvRJW7j6mHw\",\"variantId\":\"8wWPvcdeT3eFj73HXs934w\",\"parameterName\":\"isInternationalPhoneNumberEnabled\",\"id\":164,\"version\":1,\"value\":true,\"status\":\"RUNNING\"}]}";
      if (injectedString.search('EPIC_SITE_HOME_PLACEHOLDER') >= 0) {
        return {};
      }
      var epicResponse = injectedString && injectedString !== undefined ? JSON.parse(injectedString) : {};
      return epicResponse.elements || {};
    })();
    /* globals coursera */
    /* eslint-disable quotes */
    coursera.user = (function() {
      var userJson = "{}";
      try {
        return JSON.parse(userJson);
      } catch (e) {
        return {};
      }
    })();
    /* globals coursera*/
    // Defines a named AMD module containing the course ID
    coursera.courseId = (function() {
      return '{{ ONDEMAND_COURSE_ID_PLACEHOLDER }}';
    })();
  </script>
</body>
  )
}

export default product