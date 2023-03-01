import logo from "./logo.svg";
import "./App.css";
import TimeCountdown from "./Component/TimeCountdown";
import Schedule from "./Component/Schedule";
import Prize from "./Component/Prize";
import GuideLine from "./Component/GuideLine";
import Ranking from "./Component/Ranking";
import OldRanking from "./Component/OldRanking";
import ListImage from "./Component/ListImage";
import Sponsor from "./Component/Sponsors";
import { useEffect } from "react";
import $, { event } from "jquery";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);

      setTimeout(() => {
        //window and animation items
        var animation_elements = $.find(".animation-element");
        var web_window = $(window);

        //check to see if any animation containers are currently in view
        function check_if_in_view() {
          //get current window information
          var window_height = web_window.height();
          var window_top_position = web_window.scrollTop();
          var window_bottom_position = window_top_position + window_height;

          //iterate through elements to see if its in view
          $.each(animation_elements, function () {
            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = element_top_position + element_height;

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if (
              element_bottom_position >= window_top_position &&
              element_top_position <= window_bottom_position
            ) {
              element.addClass("in-view");
            } else {
              element.removeClass("in-view");
            }
          });
        }

        //on or scroll, detect elements in view
        $(window).on("scroll resize", function () {
          check_if_in_view();
        });
        //trigger our scroll event on initial load
        $(window).trigger("scroll");
      });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <TimeCountdown />
        <Schedule />
        <Prize />
        <GuideLine />
        <Ranking />
        <OldRanking />
        <ListImage />
        <Sponsor />
      </header>
    </div>
  );
}

export default App;
