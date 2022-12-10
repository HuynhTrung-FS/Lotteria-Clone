let btn_districts=document.querySelectorAll('.btn_district');
let location_lotteria=document.querySelector('.location_lotteria');
for ( let i = 0 ; i < btn_districts.length ; i++)
{
     btn_districts[i].onclick=function()
     {
        let value_id_btn=btn_districts[i].getAttribute('id');
        var iframe_import=document.createElement('iframe');
        iframe_import.style.width="1120px";
        iframe_import.style.height="450px";
        iframe_import.setAttribute("allowfullscreen","");
        iframe_import.setAttribute("loading","lazy");
        iframe_import.setAttribute("referrerpolicy","no-referrer-when-downgrade");
        switch(value_id_btn)
        {
            case "Q1":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15677.788006386825!2d106.68970636875305!3d10.777035656467234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%201!5e0!3m2!1svi!2s!4v1670581506968!5m2!1svi!2s");
                break;
            case "Q2":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62711.130502443324!2d106.66344140841363!3d10.777138965805438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%202!5e0!3m2!1svi!2s!4v1670581482360!5m2!1svi!2s");
                break;
            case "Q3":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3919.395205085549!2d106.67752426425642!3d10.781012862058342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%203!5e0!3m2!1svi!2s!4v1670581521529!5m2!1svi!2s");
                break;
            case "Q4":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6176194186855!2d106.7024575142564!3d10.763924462368994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6bced1cb93%3A0x58ca1a4642166151!2zTG90dGVyaWEgSG_DoG5nIERp4buHdQ!5e0!3m2!1svi!2s!4v1670581593444!5m2!1svi!2s");
                break;
            case "Q5":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7609044549954!2d106.66739731425619!3d10.752901462569099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efbe2a36c17%3A0xb3c948563f06ade8!2zTG90dGVyaWEgTmd1eeG7hW4gVHJpIFBoxrDGoW5n!5e0!3m2!1svi!2s!4v1670581658899!5m2!1svi!2s");
                break;
            case "Q6":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8014107797862!2d106.64517971425626!3d10.749783262625682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e8a1722c5c3%3A0xe62e4241bf6c638!2sLotteria%20H%E1%BA%ADu%20Giang!5e0!3m2!1svi!2s!4v1670581683011!5m2!1svi!2s");
                break;
            case "Q7":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15679.996743933008!2d106.6964222687483!3d10.734545559898446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%207!5e0!3m2!1svi!2s!4v1670581704687!5m2!1svi!2s");
                break;
            case "Q8":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62719.965531778864!2d106.67015730833612!3d10.734648891931055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%208!5e0!3m2!1svi!2s!4v1670581751592!5m2!1svi!2s");
                break;
            case "Q9":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d250879.5397286399!2d106.56508813261856!3d10.735037268732356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%209!5e0!3m2!1svi!2s!4v1670581772145!5m2!1svi!2s");
                break;
            case "Q10":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7839.026601136515!2d106.66458647213572!3d10.771942759111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%2010!5e0!3m2!1svi!2s!4v1670581795090!5m2!1svi!2s");
                break;
            case "Q11":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3919.614129399698!2d106.65398206425631!3d10.76419281236415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slotteria%20qu%E1%BA%ADn%2011!5e0!3m2!1svi!2s!4v1670581822963!5m2!1svi!2s");
                break;
            case "Q12":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4905318997457!2d106.63446111425691!3d10.850246060795063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175298ede4d6023%3A0x6980db0c8c0fb1cf!2zTG90dGVyaWEgTmd1eeG7hW4gVsSDbiBRdcOh!5e0!3m2!1svi!2s!4v1670581844800!5m2!1svi!2s");
                break;
            case "BTan":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62695.83014174937!2d106.60163006125673!3d10.850333641187172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgcXXhuq1uIGLDrG5oIHTDom4!5e0!3m2!1svi!2s!4v1670581870131!5m2!1svi!2s");
                break;
            case "PNhuan":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.178632361595!2d106.68848031425652!3d10.797626761755879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ce54a6bb0b%3A0xd2bdda20545ee0b!2sLotteria%20Phan%20X%C3%ADch%20Long!5e0!3m2!1svi!2s!4v1670581891722!5m2!1svi!2s");
                break;
            case "TPhu":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2413076715075!2d106.62681601425652!3d10.79282136184338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eacc464ad59%3A0xcdf6b84bb0e8cf62!2zTG90dGVyaWEgxJDhu5ljIEzhuq1w!5e0!3m2!1svi!2s!4v1670581916777!5m2!1svi!2s");
                break;
            case "TBinh":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15676.963863223487!2d106.62024991862575!3d10.792847578873854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgcXXhuq1uIHTDom4gYsOsbmg!5e0!3m2!1svi!2s!4v1670581941026!5m2!1svi!2s");
                break;
            case "BThanh":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d62707.45070895181!2d106.63495546128414!3d10.794787344866043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgcXXhuq1uIGLDrG5oIHRo4bqhbmg!5e0!3m2!1svi!2s!4v1670582115754!5m2!1svi!2s" );
                break;
            case "GVap":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31349.667149613186!2d106.6478268853626!3d10.833613407047872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgcXXhuq1uIGfDsiB24bqlcA!5e0!3m2!1svi!2s!4v1670582178802!5m2!1svi!2s" );
                break;
            case "TDuc":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d125398.58384132324!2d106.5952954174033!3d10.833815770452741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgdGjhu6cgxJHhu6lj!5e0!3m2!1svi!2s!4v1670582264274!5m2!1svi!2s");
                break;
            case "CChi":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0595043940543!2d106.50223151425766!3d10.9588778587974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2b814d2ab4e9%3A0x63bfed9bf1c08a3c!2sLotteria%20COOP%20CU%20CHI!5e0!3m2!1svi!2s!4v1670582285182!5m2!1svi!2s");
                break;
            case "HMon":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4201411261097!2d106.60507321425689!3d10.85561466069672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a168544bd31%3A0x9bd45359ab2b0860!2zTG90dGVyaWEgTmd1eeG7hW4g4bqibmggVGjhu6c!5e0!3m2!1svi!2s!4v1670582342627!5m2!1svi!2s");
                break;
            case "BChanh":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31347.356206899807!2d106.58975223524348!3d10.855661574377088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgaHV54buHbiBiw6xuaCBjaMOhbmg!5e0!3m2!1svi!2s!4v1670582360544!5m2!1svi!2s");
                break;
            case "NBe":
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31347.347466522842!2d106.58975222286445!3d10.855744880295353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgaHV54buHbiBuaMOgIGLDqA!5e0!3m2!1svi!2s!4v1670582386154!5m2!1svi!2s" );
                break;
            default:
                iframe_import.setAttribute("src","https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31347.338726082955!2d106.58975221048541!3d10.855828186182894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbG90dGVyaWEgaHV54buHbiBj4bqnbiBnaeG7nQ!5e0!3m2!1svi!2s!4v1670582404433!5m2!1svi!2s" );
                break;
        }
        if(location_lotteria.hasChildNodes())
        {
           var i_temp=location_lotteria.querySelector('iframe');
           i_temp.remove();
        }
         location_lotteria.appendChild(iframe_import);
     }
}