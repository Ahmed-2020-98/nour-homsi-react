import React from "react";
import SocialItem from "./SocialItems"
const Todos = () => {
    let title="";

    const info={
        name:"Nour",
        nick:"Homsi"
    }
  return (
    <>
      <h1 className="bg-dark text-white">hello {`${info.name} ${info.nick}`}{title} is my life</h1>
      <p>
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        lorem lorem
      </p>
      <form>
        <ul class="list-group">
          <li class="list-group-item active" aria-current="true">
            An active item
          </li>
          <SocialItem media=" facebook" id="facebook" img="https://picsum.photos/61"/>
          <SocialItem media=" twitter" id="twitter" img="https://picsum.photos/62"/>
          <SocialItem media=" youtube" id="youtube" img="https://picsum.photos/63"/>
         
        </ul>
      </form>
    </>
  );
};

export default Todos;
