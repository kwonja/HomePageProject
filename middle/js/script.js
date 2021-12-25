function addMenu()
{
    document.write("<ul>");
     function menu(name, address)
    {
    this.name=name;
    this.address=address;
    document.write('<li>'+'<a href="'+address+'">'+name+'</a>'+'</li>');
    }
  document.write("</ul>");
  let arr=[
    new menu('EVENT','index.html'),
    new menu('SHOP','shop.html'),
    new menu('ABOUT US','about_us.html'),
    new menu('NEWS','news.html'),
    new menu('CONTACT','contact.html'),
  ];
}
function Mfooter()
{

function Footer(company, name,address,hostingname,number,sellnumber,private,phone,email)
{
    this.company=company;
    this.name=name;
    this.address=address;
    this.hostingname=hostingname;
    this.number=number;
    this.sellnumber=sellnumber;
    this.private=private;
    this.phone=phone;
    this.email;
    document.write(company+'대표이사 '+name+'<br>');
    document.write('호스팅 제공자 '+hostingname+'&nbsp;&nbsp;&nbsp; 사업자등록번호'+number+'통신판매업신고번호'+sellnumber+'<br>');
    document.write('개인정보보호 책입자 '+private+'&nbsp;&nbsp;&nbsp; 고객센터 '+phone+','+email);
}
  new Footer('제주맥주 주식회사','권성민','일산','고양시','616-86-27415','제 2020-제주한림-0101 호','이용석','권성민','010-3611-8923');
}