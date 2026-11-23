const images = import.meta.glob('../img/clientes/*.{png,jpg,jpeg,jfif,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const logos = Object.entries(images).sort(([a], [b]) => (Number(a.match(/cliente_(\d+)/)?.[1]) || 0) - (Number(b.match(/cliente_(\d+)/)?.[1]) || 0));
export function ClientLogos(){return <div className="client-logos">{logos.map(([path,url],index)=><div className="client-logo" key={path}><img src={url} alt={`Logotipo de cliente ${index+1}`} loading="lazy"/></div>)}</div>}
