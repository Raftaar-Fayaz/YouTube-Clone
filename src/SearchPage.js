import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwngDBuChyi5LOiP4Od1GOqyczL6Sx9I-Ujk6rCP0Sg=s176-c-k-c0x00ffffff-no-rj"
                channel="Netflix"
                verified
                subs="18.9M"
                noOfVideos={892}
                description="Netflix is the world's leading streaming entertainment service with 193 million paid memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments."
            />
            <hr/>
            <VideoRow
                views="6.32M views"
                subs="18.9M"
                description="A visionary director, an old school actor, and a camera rolling for 10 hours. Anurag Kashyap, Indian cinema’s enfant terrible, kidnaps Sonam Kapoor and films her father, the evergreen, Anil Kapoor's..."
                timestamp="2 weeks ago"
                channel="Netflix"
                title="AK vs AK | Official Trailer | Anil Kapoor, Anurag Kashyap, Vikramaditya Motwane | Netflix"
                image="https://i.ytimg.com/vi/lXZPMb51IQU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBClPo-DpUkC5dcE-FlaxXLU5ZSGg"
            />
            <VideoRow
                views="7.32M views"
                subs="18.9M"
                description="Ludo is about the butterfly effect and how, despite all the chaos and crowd of the world, all our lives are inextricably connected. Starring an amazing ensemble cast of Abhishek A Bachchan, Aditya Roy Kapur, Rajkummar Rao, Pankaj Tripathi,..."
                timestamp="4 weeks ago"
                channel="Netflix"
                title="Ludo | Official Trailer | Abhishek Bachchan, Aditya Roy Kapur, Rajkummar Rao, Pankaj Tripathi"
                image="https://i.ytimg.com/vi/Srp90Hp0G70/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA2hqmiFcsbCqAO4HQRLBsXX0EzPA"
                />
                <VideoRow
                    views="2.09M views"
                    subs="18.9M"
                    description="In our new series Still Awesome, we revisit old favourites and dissect whether they still hold up after all these years...."
                    timestamp="4 months ago"
                    channel="Netflix"
                    title="Is Haider Still Awesome? | Video Essay | Netflix"
                    image="https://i.ytimg.com/vi/8_GJB1Ofrvs/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDv1L0qynJSsVjhOCBRPEZXqeXntw"
                />
                <VideoRow
                    views="3.82M views"
                    subs="18.9M"
                    description="We never want to say Bella Ciao to this song.
                    Catch the crime-drama, La Casa De Papel (Money Heist), streaming on Netflix...."
                    timestamp="6 months ago"
                    channel="Netflix"
                    title="Bella Ciao Full Song | La Casa De Papel | Money Heist | Netflix"
                    image="https://i.ytimg.com/vi/46cXFUzR9XM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLACboRqxFIiI4hmUZIpqAnWPlC6AQ"
                />
                <VideoRow
                    views="7.82M views"
                    subs="18.9M"
                    description="As the Shelbys grapple with the 1929 stock market crash, Tommy confronts new threats to his power from younger family members and fascist rivals. Peaky Blinders returns, October 4th...."
                    timestamp="1 month ago"
                    channel="Netflix"
                    title="Peaky Blinders | Season 5 Trailer | Netflix"
                    image="https://i.ytimg.com/vi/Ruyl8_PT_y8/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDk1T-7EEVzs1ey3TF-ruI5VBEYqw"
                />
                <VideoRow
                    views="6.82M views"
                    subs="18.9M"
                    description="The end is the beginning. And the beginning is the end. Dark comes full circle on June 27th.
                    As the Shelbys grapple with the 1929 stock market crash, Tommy confronts new threats to his power from younger family members and fascist rivals. Peaky Blinders returns, October 4th...."
                    timestamp="2 months ago"
                    channel="Netflix"
                    title="Dark Season 3 | Official Trailer | Netflix"
                    image="https://i.ytimg.com/vi/cq2iTHoLrt0/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBla0ViqgbTX_i-zf1NWPQbi0q87Q"
                />
            <VideoRow
                views="10M views"
                subs="18.9M"
                description="When Enola Holmes—Sherlock's teen sister—discovers her mother missing, she sets off to find her, becoming a super-sleuth in ..."
                timestamp="6 months ago"
                channel="Netflix"
                title="Enola Holmes | Official Trailer | Netflix"
                image="https://i.ytimg.com/vi/1d0Zf9sXlHk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDFFKGyvL2Vf8HlOFOBxEUL5zwYoA"
            />
            <VideoRow
                views="422K views"
                subs="18.9M"
                description="All is fair in love and war. Bridgerton, from Shondaland, premieres Dec 25, only on Netflix. SUBSCRIBE: http://bit.ly/29qBUt7 About Netflix: Netflix is the world's leading streaming entertainment..."
                timestamp="6 days ago"
                channel="Netflix"
                title="Bridgerton | Official Trailer | Netflix"
                image="https://i.ytimg.com/vi/gpv7ayf_tyE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCHBOa5ZF5PUNS2R7-BdK3f6dr0CA"
            />
            <VideoRow
                views="4.6M views"
                subs="18.9M"
                description="As the 1970s are drawing to a close, Queen Elizabeth (Olivia Colman) and her family find themselves preoccupied with safeguarding the line of succession by securing an appropriate bride ..."
                timestamp="2 months ago"
                channel="Netflix"
                title="The Crown Season 4 | Official Trailer | Netflix"
                image="https://i.ytimg.com/vi/OiXEpminPms/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAQpAdIIleNVDF5MZrNFXCwnBindw"
            />
            <VideoRow
                views="1.03M views"
                subs="18.9M"
                description="Old loves, new loves and self-love. Home for Christmas season 2 is all we want for Christmas. Coming December 18. leading streaming entertainment..."
                timestamp="12 days ago"
                channel="Netflix"
                title="Home for Christmas Season 2 | Official Trailer | Netflix"
                image="https://i.ytimg.com/vi/_3j0qmWU5jo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA3NrAUUxhJtiVGb-1AX48LDSGiQw"
            />
        </div>
    );
}

export default SearchPage;
