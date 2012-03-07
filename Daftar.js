function validasi(oEvent){
                var userid = document.getElementById("username").value;
                var passid = document.getElementById("password").value;
                var conpassid = document.getElementById("confirm_password").value;
                var tahunid = document.getElementById("tahun").value;
                var bulanid = document.getElementById("bulan").value;
                var hariid = document.getElementById("hari").value;
                var fullid = document.getElementById("full_name").value;
                var emailid = document.getElementById("email").value;
                var avatarid = document.getElementById("avatar").value;
                oEvent = oEvent || window.event; 
                var txtField = oEvent.target || oEvent.srcElement;
                var cek = true;
                if(!userid_validation(userid)){cek=false;}
                if(!passid_validation(userid,passid,conpassid)){ cek=false; }
                if(!fullid_validation(fullid)){ cek=false; }
                if(!emailid_validation(emailid)){ cek=false; }
                if(!null_validation(tahunid,bulanid,hariid)){ cek=false; }
                if(!imageid_validation(avatarid)){ cek=false; }
               
                if(cek){
                    document.getElementById("submit_button").disabled = false;
                }else{
                    document.getElementById("submit_button").disabled = true;
                }
            }
            window.onload = function(){
 
                var button = document.getElementById("submit_button");           
                var a = document.getElementById("username");
                var b = document.getElementById("password");
                var c = document.getElementById("confirm_password");
                var d = document.getElementById("tahun");
                var e = document.getElementById("bulan");
                var f = document.getElementById("hari");
                var g = document.getElementById("full_name");
                var h = document.getElementById("email");
                var i = document.getElementById("avatar");
                var cek = false;
                document.getElementById("submit_button").disabled = true;
                a.onkeyup = validasi;
                b.onkeyup = validasi;
                c.onkeyup = validasi;
                d.onkeyup = validasi;
                e.onkeyup = validasi;
                f.onkeyup = validasi;
                g.onkeyup = validasi;
                h.onkeyup = validasi;
                i.onchange = validasi;     
            }
            function userid_validation(userid)
            {
                var userid_len = userid.length;
                if(5>userid_len)
                {
                    return false;            
                }
                else{
                    return true;
                }
            }
            function passid_validation(userid,passid,conpassid){
                passid_len = passid.length;
                if(passid_len != 0){
                    if(8 > passid_len){
                        return false;                        
                    }
                    if(passid == userid){
                        return false;
                    }
                    if(passid != conpassid){
                        return false;
                    }
                    return true;
                }
                else
                    return false;
                       
            }
            function fullid_validation(fullid){
                fullid_len = fullid.length;
                for(i=0; fullid_len >= i; i++){
                    if(fullid[i] == " "){
                        return true;
                    }
                }
                return false;
            }
            function emailid_validation(emailid){
                emailid_len = emailid.length;
                var emailcek = /^[A-Z0-9._%+-]+\@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if(emailid_len != 0){
                    if(emailid.search(emailcek) == -1){
                        return false;
                    }
                }
                return true;
                        
            }
            function null_validation(tahunid,bulanid,hariid){
                tahunid_len = tahunid.lenght;
                bulan_len = bulanid.lenght;
                hari_len = hariid.lenght;
                var numbers = /^[0-9]+$/
                        
                if(!tahunid.match(numbers) ||!bulanid.match(numbers) ||!hariid.match(numbers)){
                    return false;
                }
                else if(tahunid_len == 0 || bulan_len == 0 || hari_len == 0){
                    return false;
                }
                else
                    return true;
            }
            function imageid_validation(avatarid)
            {
                var extension = new Array("jpg","jpeg");
                var image = avatarid;
                var image_len = avatarid.length;
                var pos = image.lastIndexOf('.')+1;
                var ext = image.substring(pos, image_len);
                var final_ext = ext.toLowerCase();
                for(i=0; extension.length >= i; i++){
                    if(extension[i] == final_ext){
                        return true;
                    }
                }
                return false;
            }