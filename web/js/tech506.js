if (typeof console == "undefined" || typeof console.log == "undefined" || typeof console.debug == "undefined") var console = { log: function() {}, debug: function() {} }; 
if (typeof jQuery !== 'undefined') {
	console.debug("JQuery found!!!");
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
} else {
	console.debug("JQuery not found!!!");
}
$(document).ready(function() {
	Tech506.init();
});
var Tech506 = {
		module : "",
		imagesURL : "",
        assetsURL : "",
		isIe: false,
		logout:function(url){
			location.href= url;
		},
        roundTo: function(original){
            //return Math.round(original*100)/100;
            return original.toFixed(2);
        },
		init : function() {
			var module = Tech506.module;
			console.debug("Module: " + module)
			if (module) {
				switch (module) {
                case "showEntity":
                    Tech506.EntityShow.init(); break;
                    break;
                default:
					break;
				}
			}
			Tech506.UI.init();
		},
        ajaxCall : function(url, params, succeedsFunction, errorFunction, showSpinner) {
            //if(showSpinner) $( "#spinner-modal" ).dialog( "open" );
            var request = $.ajax({
                url: url,
                type: "POST",
                data: params,
                dataType: "json"
            });

            request.done(function(data){
                succeedsFunction(data);
                $( "#spinner-modal" ).dialog( "close" );
            });
            request.fail(function(data){
                errorFunction(data);
                $( "#spinner-modal" ).dialog( "close" );
            });
        },
        showInfoMessage : function(message, showAlert, divId, showDiv) {
            if ( showAlert ) {
                alert(message);
            }
            if ( showDiv ) {
                $("#" + divId).html(message);
            }
        },
        showErrorMessage : function(message, showAlert, divId, showDiv) {
            if ( showAlert ) {
                alert(message);
            }
            if ( showDiv ) {
                $("#" + divId).html(message);
            }
        },
        showConfirmationQuestion : function(message) {
            return confirm(message);
        },
		UI : {
			translates : {},
			urls : {},
            vars : {},
			intervals : {},
			init : function() {
				Tech506.UI.initLocales();
                Tech506.UI.setLinksAsActiveByCurrentUrl();
			},
			initLocales: function(){
			},
            setLinksAsActiveByCurrentUrl: function(){
                console.debug("--> setLinksAsActiveByCurrentUrl <--");
                (function(anchors, url, i, a) {
                    while ((a = anchors[i++]) && a.classList){
                        console.debug("Checking: " + a.href);
                       /* <li class="current-menu-item"><a href="/tech506/web/">Home
                            <span class="subheader">Welcome</span></a></li>*/
                        a.href === url && $(a).parent().addClass('current-menu-item');
                    }

                }(document.getElementsByTagName('a'), location.href, 0));
            },
			btnAccept : "Accept",
			initModal : function(targetDiv, buttonsOpts) {
				$(targetDiv).dialog({
					title : '',
					dialogClass : 'alert',
					closeText : '',
					show : 'highlight',
					hide : 'highlight',
					autoOpen : false,
					bgiframe : true,
					modal : true,
					buttons : buttonsOpts
				});
			},
			closeModal : function(targetDiv) {
				$(targetDiv).dialog('close');
			},
			addModalEvent: function(targetDiv, eventName, toDo){
				
				$(targetDiv).bind( eventName, function(){
					//console.log("closing");
					toDo();					
				});
			},
			modal : function(targetDiv, title, htmlSelector, html, isNewOpen,
					buttonsOpts, width, height) {
				
				Tech506.UI.initModal(targetDiv, buttonsOpts);
				/* Assign div content */
				if (html != '' && htmlSelector != '') {
					$(htmlSelector).html(html);
				} else if (html != '') {
					$(targetDiv).html(html);
				}

				/* Assign title */
				if (title != '') {
					$(targetDiv).dialog('option', 'title', title);
				}

				if (width == 0) {
					width = 280;
				}

				$(targetDiv).dialog('option', 'width', width);
				$(targetDiv).dialog('option', 'closeOnEscape', true);

				if (height != 0) {
					$(targetDiv).dialog('option', 'height', height);
				}

				// true if the modal is not open/ flase if the modal is already open
				// with different content
				if (isNewOpen) {

					$(targetDiv).dialog('open');
				}

				$(targetDiv).css("z-index", "5000");
			},
			validateForm : function(formSelector) {
				//alert("validating form");
				var result = $(formSelector).validationEngine('validate');
				//alert("result "+result);
				return result;
			}
		}
	};
