define([],function() {
    //return an object to define the "my/shirt" module.
    return {            
        
       
        formatAmount : function(amount){
            var originalAmt = parseFloat(amount).toFixed(2);
            var originalAmtStr = originalAmt.toString();
            var originalAmtArray = originalAmtStr.split(".");
            amount = originalAmtArray[0];
            var str=[];
            var subt = 0;
            for(var counter=3;counter<=(amount.length+1);counter=counter+2){
                str.push(amount.substring((amount.length-counter),(amount.length-subt)));
                if(subt == 0){
                    subt = 3;
                }
                else{
                    subt = subt + 2;   
                }
            }
            var retAmount = "";
            for(var counter=(str.length-1);counter>=0;counter--){
                retAmount += str[counter];
                if(counter!=0){
                    retAmount += ",";
                }
                
            }
            if(originalAmtArray.length > 1 && originalAmtArray[1] != "00"){
                retAmount = retAmount + "."+originalAmtArray[1];
            }
            return retAmount;
        },
        dobCheck: function(value, minAge,maxAge){
            var dates = value.split("/");
            var birthDay= parseInt(dates[0]);
            var birthMonth= parseInt(dates[1]);
            var birthYear = parseInt(dates[2]);
            var birth = new Date();
            todayDate = new Date();
            todayYear = todayDate.getFullYear();
            todayMonth = todayDate.getMonth();
            todayDay = todayDate.getDate();
            var age = todayYear - birthYear; 
            
            if (todayMonth < birthMonth - 1)
            {
                age--;
            }
            else if (birthMonth - 1 == todayMonth && todayDay < birthDay)
            {
                age--;
            }
            if((minAge+"").indexOf("d") != -1){
                birth.setDate(birthDay);
                birth.setMonth(birthMonth - 1);
                birth.setFullYear(birthYear);
                var diff = Math.floor(todayDate.getTime() - birth.getTime());
                var day = 1000 * 60 * 60 * 24;
                var days = Math.floor(diff/day)+1;
                maxAge = maxAge * 365;
                minAge = minAge.split("d")[0];
                if(days>=minAge && days<=maxAge){
                    return true;
                }
                else{
                    return false;
                }
            }
            else if(age>=minAge && age<=maxAge){
                return true;
            }
            else{
                return false;
            }

        },
        isValidDOB: function(value){
            var dates = value.split("/");
            var day= parseInt(dates[0]);
            var month= parseInt(dates[1]);
            var year = parseInt(dates[2]);
            var today = new Date();
            today.setHours(0);
            today.setMilliseconds(0);
            today.setMinutes(0);
            today.setSeconds(0);
            var dobDate = new Date(year,month-1,day,0,0,0,0);
            if(today<=dobDate){
                return false;
            }
            return true;
        },
        
        
        isValidName:function(str){
            var trimStr=str.trim();
            if(str.trim().length==str.length){
                var nameReg = new RegExp("^[a-zA-Z ]*$");
                if(nameReg.test(str))
                    return true;
                else    
                    return false;
            }else{
                return false;
            }
        },
         isValidAddress:function(str){
            var trimStr=str.trim();
            if(str.trim().length==str.length){
                    return true;
            }else{
                return false;
            }
        },
        isValidTxt:function(str){
            var textReg = new RegExp("^[a-zA-Z ]*$");
            var trimStr=str.trim();
            if(str.trim().length==str.length){
                if(textReg.test(str))
                    return true;
                else    
                    return false;
            }else{
                return false;
            }    
        },
        
        isValidNumber:function(str){
            var noReg = new RegExp("^\\d+$");
            var trimStr=str.trim();
            if(str.trim().length==str.length){
                if(noReg.test(str))
                    return true;
                else    
                    return false;
            }else{
                return false;
            }    
        },
        isValidDate : function(value){
            var dateReg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            return dateReg.test(value);
        },
        hideHeader : function(){
            $("#header-Region").css("display","none");
        },
        showHeader : function(){
            $("#header-Region").css("display","block");
        },
        /*showLoader : function(){
            $("body").append('<div class="modal-backdrop fade in"></div>');
            $("#loader").addClass("in").show();
            $("body").addClass("modal-open");
            $(".modal-backdrop").css("opacity","0.05");   
        },
        closeLoader : function(){
            $("#loader").removeClass("in").hide();
            $(".modal-backdrop").remove();
            $("body").removeClass("modal-open");   
        },*/
       
        scaleSize: function(maxW, maxH, currW, currH){
            var ratio = currH / currW;
            if(currW >= maxW && ratio <= 1){
                currW = maxW;
                currH = currW * ratio;
            } else if(currH >= maxH){
                currH = maxH;
                currW = currH / ratio;
            }

            return [currW, currH];
        },
        showSyncDiv : function(status,isClose){
            $("#syncDiv").css("display","block");
            $("#syncText").html(status);
            $("#syncText").css("display","inline");
            if(isClose){
                $("#syncClose").css("display","inline");
                $("#syncImg").css("display","none");
                setTimeout(this.hideSyncDiv,10000);
                if("dashboard" == Backbone.history.fragment){
                    Backbone.history.fragment = null;
                    Backbone.history.navigate(document.location.hash, true); 
                    /*require(["apps/dashboard/dashboard_app"], function (){
                        App.execute("dashboard:show");
                    });*/
                }
            }
            else{
                $("#syncImg").css("display","inline");
                $("#syncClose").css("display","none");
            }
            
        },
        hideSyncDiv : function(){
            $("#syncDiv").css("display","none");
        },
        dateFormat : function(currdate,separator){
            if(typeof currdate == "string"){
                currdate = parseInt(currdate);
            }
            var dateStr="";
            if(currdate!=null){
                var date = new Date(currdate);
                var curr_date = date.getDate();
                var curr_month = date.getMonth() + 1;
                var curr_year = date.getFullYear();
                dateStr = curr_date + separator + curr_month + separator + curr_year;
            }
            return dateStr;
        },
       
        
        
    }
});