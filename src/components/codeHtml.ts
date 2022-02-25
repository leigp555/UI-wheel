import 'prismjs';
import 'prismjs/themes/prism.css'
const Prism = (window as any).Prism

export const codeToHtml=(string:string)=>{
    return Prism.highlight(string, Prism.languages.html, 'html')
}