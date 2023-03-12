import React from "react";
function SocialItem(props) {
  return (
    <>
      <li class="list-group-item">
        <img src={props.img}/>
        <input type="checkbox" id={props.id}></input>
        <label for={props.id}>{props.media}</label>
      </li>
    </>
  );
}

export default SocialItem;
