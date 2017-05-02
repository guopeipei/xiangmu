;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhinanzhen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999488 962.254727c-60.773132 0-119.740128-11.908214-175.262676-35.393091-53.618175-22.678512-101.767801-55.141878-143.112442-96.485495-41.34464-41.34464-73.806983-89.49529-96.486518-143.113465-23.484877-55.522548-35.392068-114.489544-35.392068-175.262676 0-60.773132 11.908214-119.740128 35.392068-175.262676 22.679535-53.618175 55.141878-101.767801 96.486518-143.112442s89.494267-73.806983 143.112442-96.486518c55.522548-23.484877 114.489544-35.392068 175.262676-35.392068 60.774155 0 119.741151 11.908214 175.262676 35.392068 53.617152 22.679535 101.767801 55.141878 143.113465 96.486518 41.343617 41.34464 73.806983 89.494267 96.485495 143.112442 23.484877 55.522548 35.393091 114.489544 35.393091 175.262676 0 60.774155-11.908214 119.741151-35.393091 175.262676-22.678512 53.617152-55.141878 101.767801-96.485495 143.113465-41.34464 41.343617-89.49529 73.806983-143.113465 96.485495C631.74064 950.346513 572.773643 962.254727 511.999488 962.254727zM511.999488 102.677521c-55.265698 0-108.8675 10.819416-159.317519 32.159444-48.739051 20.615527-92.51609 50.132794-130.114406 87.73111s-67.115584 81.375356-87.73111 130.114406c-21.340027 50.450019-32.159444 104.051821-32.159444 159.317519s10.819416 108.8675 32.159444 159.316495c20.615527 48.740074 50.132794 92.51609 87.73111 130.114406 37.598316 37.59934 81.375356 67.116607 130.114406 87.73111 50.450019 21.340027 104.051821 32.159444 159.317519 32.159444s108.8675-10.819416 159.316495-32.159444c48.740074-20.615527 92.51609-50.131771 130.114406-87.73111 37.59934-37.598316 67.116607-81.374332 87.73111-130.114406 21.340027-50.450019 32.159444-104.051821 32.159444-159.316495s-10.819416-108.8675-32.159444-159.317519c-20.615527-48.739051-50.131771-92.51609-87.73111-130.114406-37.598316-37.598316-81.374332-67.115584-130.114406-87.73111C620.866988 113.496937 567.265186 102.677521 511.999488 102.677521z"  ></path>' +
    '' +
    '<path d="M754.585479 269.424242c-3.41068-3.409656-8.736988-3.975545-12.787234-1.360997L455.792349 452.747501c-1.218758 0.787946-2.257413 1.825578-3.045359 3.045359L268.0525 741.779314c-2.616594 4.050246-2.049682 9.377578 1.359974 12.787234 1.976004 1.976004 4.596691 2.997264 7.239891 2.997264 1.916653 0 3.844561-0.536212 5.547343-1.63729l285.995663-184.685279c1.218758-0.787946 2.257413-1.824555 3.045359-3.044336l184.704722-285.986453C758.562047 278.161231 757.995135 272.833899 754.585479 269.424242zM511.999488 554.850947c-23.62814 0-42.850947-19.222807-42.850947-42.850947s19.222807-42.850947 42.850947-42.850947 42.850947 19.222807 42.850947 42.850947S535.627628 554.850947 511.999488 554.850947z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-quanbu" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M294.810423 281.375435l682.172751 0c25.997094 0 47.072085-21.074991 47.072085-47.072085s-21.074991-47.072085-47.072085-47.072085L294.810423 187.231265c-25.997094 0-47.072085 21.074991-47.072085 47.072085S268.812305 281.375435 294.810423 281.375435z"  ></path>' +
    '' +
    '<path d="M75.822896 237.373269m-73.678046 0a72 72 0 1 0 147.356093 0 72 72 0 1 0-147.356093 0Z"  ></path>' +
    '' +
    '<path d="M976.983173 461.857996 294.810423 461.857996c-25.997094 0-47.072085 21.074991-47.072085 47.072085 0 25.997094 21.074991 47.072085 47.072085 47.072085l682.172751 0c25.997094 0 47.072085-21.074991 47.072085-47.072085C1024.055259 482.932987 1002.980267 461.857996 976.983173 461.857996z"  ></path>' +
    '' +
    '<path d="M75.822896 512m-73.678046 0a72 72 0 1 0 147.356093 0 72 72 0 1 0-147.356093 0Z"  ></path>' +
    '' +
    '<path d="M976.983173 736.484727 294.810423 736.484727c-25.997094 0-47.072085 21.074991-47.072085 47.072085s21.074991 47.072085 47.072085 47.072085l682.172751 0c25.997094 0 47.072085-21.074991 47.072085-47.072085S1002.980267 736.484727 976.983173 736.484727z"  ></path>' +
    '' +
    '<path d="M75.822896 786.626731m-73.678046 0a72 72 0 1 0 147.356093 0 72 72 0 1 0-147.356093 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhinanzhen1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M954.5216 325.05344c-24.192-57.19552-58.81856-108.55424-102.92224-152.6528-44.09856-44.09856-95.4624-78.72512-152.6528-102.91712C639.7184 44.43136 576.82432 31.72864 512 31.72864s-127.72352 12.6976-186.94656 37.75488c-57.1904 24.192-108.55424 58.81856-152.6528 102.91712-44.10368 44.09856-78.72512 95.4624-102.92224 152.6528C44.43136 384.27648 31.72864 447.17568 31.72864 512s12.6976 127.7184 37.74976 186.95168c24.192 57.1904 58.81856 108.54912 102.92224 152.64768 44.09856 44.09856 95.4624 78.73024 152.6528 102.92224 59.22304 25.05216 122.12224 37.74976 186.94656 37.74976s127.7184-12.6976 186.94656-37.74976c57.19552-24.192 108.55424-58.81856 152.6528-102.92224s78.72512-95.4624 102.92224-152.64768c25.05216-59.22304 37.74976-122.12224 37.74976-186.95168 0-64.82432-12.70272-127.7184-37.74976-186.94656z m-182.31296-58.1632l-197.0176 305.0496a10.93632 10.93632 0 0 1-3.2512 3.2512l-305.05984 196.99712a10.92608 10.92608 0 0 1-13.63968-1.44896 10.91584 10.91584 0 0 1-1.44896-13.63968l197.00736-305.0496c0.83968-1.30048 1.9456-2.4064 3.24608-3.2512l305.0752-196.99712a10.91072 10.91072 0 0 1 15.08864 15.08864z"  ></path>' +
    '' +
    '<path d="M512 466.29376c-25.20576 0-45.71136 20.5056-45.71136 45.70624s20.5056 45.71136 45.71136 45.71136c25.20064 0 45.71136-20.51072 45.71136-45.71136 0-25.20064-20.51072-45.70624-45.71136-45.70624z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye_shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M993.585 521.484l-468.663-438.634-468.674 437.341c-9.164 8.563-9.681 22.949-1.104 32.114 8.553 9.164 22.943 9.675 32.107 1.108l437.637-408.374 437.648 409.617c4.043 3.798 9.5 6.13 15.5 6.13 0.007 0 0.017 0 0.025 0 0.012 0 0.023 0 0.038 0 6.523 0 12.402-2.761 16.531-7.175 8.581-9.178 8.117-23.555-1.047-32.125z"  ></path>' +
    '' +
    '<path d="M850.566 530.494c-12.541 0-22.721 10.176-22.721 22.718v348.384h-181.761v-242.349h-242.358v242.349h-181.767v-348.384c0-12.542-10.162-22.718-22.719-22.718-12.559 0-22.721 10.176-22.721 22.718v393.825h272.647v-242.346h151.468v242.349h272.656v-393.827c0-12.542-10.181-22.718-22.723-22.718zM691.521 204.83h136.323v121.171c0 12.565 10.181 22.727 22.721 22.727 12.543 0 22.723-10.16 22.723-22.727v-166.614h-181.77c-12.541 0-22.721 10.16-22.721 22.719 0 12.561 10.181 22.723 22.721 22.723z"  ></path>' +
    '' +
    '<path d="M207.201 910.673h209.521v-232.121h203.362v232.121h225.957v-359.478h125.302l-446.441-423.155-462.357 417.259 142.599 5.898z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouyeshouye2" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1009.825 520.355l-501.053-468.483-501.053 467.107c-9.802 9.138-10.349 24.507-1.188 34.299 9.151 9.785 24.538 10.338 34.333 1.179l467.871-436.154 467.892 437.482c4.694 4.386 10.653 6.554 16.601 6.554 6.475 0 12.953-2.572 17.731-7.69 9.169-9.785 8.665-25.139-1.136-34.292v0zM1009.825 520.355zM856.928 529.978c-13.411 0-24.29 10.873-24.29 24.267v372.095h-194.331v-258.848h-259.104v258.848h-194.323v-372.095c0-13.394-10.868-24.267-24.289-24.267-13.429 0-24.295 10.873-24.295 24.267v420.627h291.493v-258.847h161.94v258.847h291.486v-420.627c0.001-13.394-10.881-24.267-24.286-24.267v0zM856.928 529.978zM686.893 182.153h145.744v129.421c0 13.414 10.881 24.272 24.29 24.272 13.407 0 24.287-10.858 24.287-24.272v-177.953h-194.322c-13.414 0-24.295 10.852-24.295 24.267-0.001 13.41 10.881 24.267 24.295 24.267v0zM686.893 182.153z" fill="#B6B6B6" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuchenor" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M852.719206 862.260755H422.570669c-87.75202 0-162.371919-66.949268-177.467721-159.221847L165.410205 165.378806c-10.370693-77.360871-57.314956-125.266519-122.546003-125.266519a20.045916 20.045916 0 1 1 0-40.112287c85.583788 0 149.260254 62.71508 162.269644 159.794587l79.651834 537.087361c12.007095 73.638058 68.7084 125.286974 137.805444 125.286975h430.148537a20.025461 20.025461 0 1 1-0.020455 40.091832z" fill="#999999" ></path>' +
    '' +
    '<path d="M848.935028 714.780088H386.11983a20.025461 20.025461 0 1 1 0-40.091832h462.794743c4.029638 0 13.500311 0 21.457312-26.427881l90.574812-334.603156a20.680021 20.680021 0 0 0-20.495927-18.409515H201.942864a20.045916 20.045916 0 0 1 0-40.091831h738.507906a60.812763 60.812763 0 0 1 60.730943 60.730943l-0.715925 5.236484-91.536198 338.141874c-13.848046 46.003332-40.255472 55.514914-59.994562 55.514914z" fill="#999999" ></path>' +
    '' +
    '<path d="M436.991455 941.360303m-81.370054 0a81.370055 81.370055 0 1 0 162.740109 0 81.370055 81.370055 0 1 0-162.740109 0Z" fill="#999999" ></path>' +
    '' +
    '<path d="M731.932335 941.360303m-81.370055 0a81.370055 81.370055 0 1 0 162.740109 0 81.370055 81.370055 0 1 0-162.740109 0Z" fill="#999999" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1206 1024">' +
    '' +
    '<path d="M1085.117 533.414c0 24.405-21.521 44.179-48.071 44.179h-462.971c-26.55 0-52.438-0.317-63.714-30.944l-99.079-339.195c-8.259-24.406 21.521-44.179 48.071-44.179l613.721 48.336c33.3 2.752 48.045 25.836 48.045 50.241l-36 271.562zM980.929 628.736c0 0 81.609 39.6-3.521 93.917h-578.329l-177.274-560.859-133.571-2.726c0 0-64.086-63.186 8.021-96.776l200.25 14.717 164.224 551.726h520.2zM512.293 750.236c58.474 0 105.883 47.409 105.883 105.883s-47.409 105.883-105.883 105.883c-58.474 0-105.883-47.409-105.883-105.883 0-58.474 47.409-105.883 105.883-105.883zM882.882 750.236c58.474 0 105.883 47.409 105.883 105.883s-47.409 105.883-105.883 105.883c-58.474 0-105.883-47.409-105.883-105.883 0-58.474 47.409-105.883 105.883-105.883z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-me_line" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.746667 828.373333a21.333333 21.333333 0 0 0 0-9.173333 405.333333 405.333333 0 0 0-65.706667-154.666667 21.333333 21.333333 0 1 0-34.986667 24.32 362.666667 362.666667 0 0 1 57.6 133.546667 21.333333 21.333333 0 0 0 0 4.906667 44.16 44.16 0 0 1 0 8.746666 42.666667 42.666667 0 0 1-42.666666 42.666667h-6.186667a37.76 37.76 0 0 0-8.32 0H210.986667a21.333333 21.333333 0 0 0-2.986667 0 42.666667 42.666667 0 0 1-46.72-42.666667 43.946667 43.946667 0 0 1 0-7.466666A359.253333 359.253333 0 0 1 512 535.253333a350.293333 350.293333 0 0 1 132.693333 25.813334 21.333333 21.333333 0 1 0 16.64-39.466667 392.746667 392.746667 0 0 0-46.72-15.36A215.893333 215.893333 0 0 0 512 102.186667a215.893333 215.893333 0 0 0-101.973333 403.84A403.626667 403.626667 0 0 0 120.533333 816.64V819.2c0 1.493333 0 3.413333-1.28 5.12a21.333333 21.333333 0 0 0 0 5.76v4.693333a85.333333 85.333333 0 0 0 85.333334 85.333334H821.973333a85.333333 85.333333 0 0 0 85.333334-85.333334c-1.706667-1.493333-2.346667-3.84-2.56-6.4zM343.466667 317.44A169.386667 169.386667 0 1 1 512 490.666667a170.666667 170.666667 0 0 1-168.533333-173.226667z"  ></path>' +
    '' +
    '<path d="M724.053333 604.586667a32.64 32 90 1 0 64 0 32.64 32 90 1 0-64 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-me_surface" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M916.053333 827.946667a32.213333 32.213333 0 0 0 0-7.253334c-17.92-149.333333-130.56-272.213333-277.333333-320a221.44 221.44 0 1 0-256-1.92 389.76 389.76 0 0 0-272.853333 309.333334v1.493333a95.573333 95.573333 0 0 0 93.653333 114.56H820.48a95.573333 95.573333 0 0 0 95.573333-95.573333v-0.64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)