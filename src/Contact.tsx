import { useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { company } from './data';

function InstagramIcon(){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>}
function WhatsAppIcon(){return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0 12 12 0 0 0 1.6 18L0 24l6.1-1.6A12 12 0 0 0 12 24a12 12 0 0 0 8.5-20.5ZM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.6.9 1-3.5-.3-.4A10 10 0 1 1 12 22Zm5.5-7.5c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2l-1 1.2c-.1.2-.3.2-.6.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.8-1.5.1-.2.1-.4 0-.6L9 7.2c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.8 1-.2 1.8-.8 2-1.5.3-.7.3-1.4.2-1.5Z"/></svg>}

export function Contact(){
 const [copied,setCopied]=useState(false);
 return <section className="contact-wrap" id="contato"><div className="container">
  <div className="contact-heading"><span>FALE CONOSCO</span><h2>Vamos proteger o que realmente importa.</h2><p>Conte para nossa equipe o que você precisa. Estamos prontos para encontrar a solução ideal para o seu patrimônio.</p></div>
  <div className="contact-content">
   <div className="contact-info">
    <a className="contact-card" href={company.whatsapp} target="_blank" rel="noreferrer"><span className="contact-icon"><WhatsAppIcon/></span><span><small>WHATSAPP</small><strong>{company.phone}</strong><em>Converse com nossa equipe</em></span><ArrowRight/></a>
    <a className="contact-card" href={company.instagram} target="_blank" rel="noreferrer"><span className="contact-icon"><InstagramIcon/></span><span><small>INSTAGRAM</small><strong>@queroseguranca</strong><em>Acompanhe nossas novidades</em></span><ArrowRight/></a>
    <button className="contact-card" type="button" onClick={()=>navigator.clipboard.writeText(company.email).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),3000)}).catch(()=>window.prompt('Copie o e-mail:',company.email))}><span className="contact-icon"><Mail/></span><span><small>E-MAIL</small><strong>{company.email}</strong><em>{copied?'E-mail copiado!':'Clique para copiar o e-mail'}</em></span><ArrowRight/></button>
    <a className="button contact-diagnostic" href="#contato" data-diagnostic>Entre em contato conosco <ArrowRight size={17}/></a>
   </div>
   <div className="contact-location">
    <div className="map-frame"><iframe title="Mapa da matriz Quero Segurança em Ituverava" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Avenida%20Doutor%20Paulo%20Borges%20de%20Oliveira%201615%20Ituverava&t=&z=15&ie=UTF8&iwloc=&output=embed"/></div>
    <div className="contact-addresses"><h3><MapPin/> Onde estamos</h3>{company.addresses.map(address=><a key={address} href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(address.replace(/^(Matriz|Filial): /,''))} target="_blank" rel="noreferrer">{address}<span>Ver no Google Maps ↗</span></a>)}</div>
   </div>
  </div>
 </div></section>
}
