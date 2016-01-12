(function($) {
    
tsMethode = {
    
    init:function (user_options) {
        
        var options=$.extend(user_options);
        
        if (typeof options.ajaxa != 'undefined') {
            var choices =[];
            
            options.ajaxa.success(function(data) {
                $.each( data, function( key, value ) {
                    choices.push(value.name)
                });
            });
        }
        
          if (typeof options.Choices != 'undefined'){
            var choices =[];
            
            $.each( options.Choices, function( key, value ) {
                  choices.push(value)
                });

        }

         if (typeof options.prefilled != 'undefined'){
        var prefilled = options.prefilled;
        
        $.each( options.prefilled, function( key, val ) {
            
            choices = jQuery.grep(choices, function(value) {
                return value != val;
                });
                  
                });
         }
        
        console.log(prefilled);
        var render = options.render;
        var tab=[];
        var ren = new tabj(tab);
        var $elem = this;
        ui.assembleUi($elem);
        ui.iteratChoice(choices,$elem,prefilled,ren,render);
        event.SetTag($elem,ren,render);
        event.UnSetTag($elem,ren,render);
        event.InputTag($elem,ren,render);
    }
        
}

ui = {
    assembleUi:function($elem){
        this.createUi();
        $elem.append($search);
        $('.search',$elem).append($tagsSet);
        $('.search',$elem).append($input);
        $elem.append($tags);
        $('.tags',$elem).append($tagsUnSet);
                
    },
    
    createUi:function($elem){
        
        $search='<div class="search"></div>';
        $tagsSet ='<div class="tag" id="tagsSet" ></div>';
        $tagsUnSet ='<div class="tag" id="tagsUnSet" ></div>';
        $tags ='<div class="tags"></div>';
        $span ='<span>dsf </span>';
        $input = '<input type="text" class="myCustomInput" placeholder="Tag">';
        return($search,$tagsSet,$tagsUnSet,$tags,$span,$input);
    
    },
    
    iteratChoice:function(choices,$elem,prefilled,Tab,render){
        $.each(choices, function( key, value ) {
            
         
            $('#tagsUnSet',$elem).append('<span>'+value+'</span>');
             
            });
        
        $.each(prefilled, function( key, value ) {
            $('#tagsSet',$elem).append('<span>'+value+'</span>');
                Tab.add(value);
                   
            });
        render(Tab.getTabj()); 
        },
        Create:function(m,$elem2){ 
		$.each( m, function( key, value ){
            $elem2.append('<div class ="pays">'+value+'</div>')
			}); 
    }
    
}

event ={
    SetTag:function($elem,Tab,render){
        
        $('#tagsUnSet',$elem).on( "click", "span",function(value) {
            value = $(this).html();
            $(this).remove();
            $('#tagsSet',$elem).append('<span>'+value+'</span>');
            Tab.add(value);
            render(Tab.getTabj());
            
            });
        },
    UnSetTag:function($elem,Tab,render){
        $('#tagsSet',$elem).on( "click", "span",function(value) {
            value = $(this).html();
            $(this).remove();
            $('#tagsUnSet',$elem).append('<span>'+value+'</span>');
            Tab.remove(value);
            render(Tab.getTabj());
            
            });
            },
            
    InputTag:function($elem,Tab,render){
            $('.myCustomInput',$elem).keyup(function() {
                $('#tagsUnSet span',$elem).each(function(){
                    if ($(this).text() == $(".myCustomInput",$elem).val()){
                        $('#tagsSet',$elem).append('<span>'+$(this).text()+'</span>');
                        $(".myCustomInput",$elem).val("");
                        $(this).remove();
                        Tab.add($(this).text());
                        render(Tab.getTabj());
                       
                    }
                    });
                    
                $( ".myCustomInput",$elem ).one( "keyup", function( event ) {
                if ($(".myCustomInput",$elem).val()=="" && event.which == 8) {
                    var elmt = $('#tagsSet span',$elem).last().text();
                    Tab.remove(elmt);
                    render(Tab.getTabj());
                    $('#tagsSet span',$elem).last().remove();
                    $('#tagsUnSet',$elem).append('<span>'+elmt+'</span>');
                    }
                    });
                });
                }
}

var tabj = function(tab){
            this.tab=tab=[];
            }
            
    tabj.prototype.add=function(item){
        this.tab.push(item);
       
    }
    
    tabj.prototype.remove=function(item){
        
    this.tab = jQuery.grep(this.tab, function(value) {
                    return value != item;
                    });
 
    }
    
    tabj.prototype.getTabj=function(){
        return this.tab

    }

$.fn.eazTag = function(method) {
    "use strict";
    
          tsMethode.init.apply( this, arguments);
          
          };
    
})(jQuery);