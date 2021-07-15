import React from 'react';

function Footer(props){
    
    return(
        <div class="py-4 footer">
            <div class="container">
                <p>Copyright &copy; CharlieBGood 2021</p>
                <a href="https://github.com/CharlieBGood" target="_blank" rel="noreferrer"
                    class="ml-2">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://www.instagram.com/carlosb1196/" target="_blank" rel="noreferrer"
                    class="ml-1 ">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://twitter.com/CharlieBGood_" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/carlos-bueno-19058115b/" target="_blank" rel="noreferrer"
                    class="ml-1">
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </div>
        </div>
    )
};

export default Footer;
