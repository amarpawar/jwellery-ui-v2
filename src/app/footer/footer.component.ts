import { Component } from '@angular/core';
import { faMap, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    public mapIcon = faMap;
    public emailIcon = faEnvelope;
    public phoneIcon = faPhone;
    public facebookIcon = faFacebook;
    public twitterIcon = faTwitter;
    public youtubeIcon = faYoutube;
    public instagramIcon = faInstagram;
}
