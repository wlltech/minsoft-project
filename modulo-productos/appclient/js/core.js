function formToObject(form, add = []) {
    var object = {};
    $(form).find("[data-inarray]").each(function () {
        console.log("inarray", this);
        var arr = $(this).data("inarray");
        var punt = object[arr];
        if (punt === undefined) {
            object[arr] = [];
        }
    });
    //*******
    $(form).find("input,select,textarea").each(function () {
        var e = $(this);
        if (this.hasAttribute("name")) {
            var name = $(e).attr("name");
            var value = $(e).val();
            var ind = name.search("]");
            if (ind >= 0) {
                name = name.replace("[]", "");
                if ($(object).attr(name) === undefined) {
                    $(object).attr(name, []);
                }
                var subobj = $(object).attr(name);
                console.log("subdata", subobj);
                subobj.push(value);
            } else if ($(e).data("object") !== undefined) {
                alert("entro");
                if ($(e).data("inarray") !== undefined) {
                    var narr = $(e).data("inarray")
                    var array = $(object).attr(narr);
                    if (array[0] === undefined) {
                        array.push({});
                    }
                    var subobj = array[0];
                    $(subobj).attr(name, value);
                } else {
                    var nmObj = $(e).data("object");
                    if ($(object).attr(nmObj) === undefined) {
                        $(object).attr(nmObj, {});
                    }
                    var subO = $(object).attr(nmObj);
                    $(subO).attr(name, value);
                }
            } else {
                object[name] = value;
            }
        }
    });
    $(add).each(function () {
        var e = $(this);
        object[$(e).attr("name")] = $(e).attr("value");
    });
    return JSON.stringify(object);
}

function httpConnect(route, data, method, success = null, error = null, beforeSend = null, complete = null) {
    $.ajax({
        type: method,
        url: route,
        context: data,
        data: data,
        dataType: "json",
        beforeSend: function () {
            console.log("Metodo:" + method);
            console.log(route, data);
            if (beforeSend !== null) {
                beforeSend();
            }
        },
        complete: function () {
            if (complete !== null) {
                complete();
            }
        },
        success: function (retorno) {
            console.log(retorno);
            if (success !== null) {
                success(retorno);
            }else{
                createMessage(retorno);
            }
        },
        error: function (e, err) {
            var status = e.status;
            var title = e.statusText;
            var body = "<br>" + route + "<br>" + e.responseText;
            console.error("httpError:c1:", e);
            console.error("httpError:c2:", err);
            var r = {
                "status": status,
                "title": title,
                "message": body
            };
            createMessage(r);
            if (error !== null) {
                error();
            }
        }
    });
}
var c1, c2;

function httpRestFul(resource, data, method, success = null, error = null, beforeSend = null, complete = null) {
    var urlResource = baseUrl + resource;
    httpConnect(urlResource, data, method, success, error, beforeSend, complete);
}

function httpRestFulClient(resource, data, method, success = null, error = null, beforeSend = null, complete = null) {
    httpRestFul(resource, data, method, success, error, beforeSend, complete);
//    if (method === "POST" || method === "GET") {
//        httpRestFul(resource, data, method, success, error, beforeSend, complete);
//    } else if (method === "PUT" || method === "DELETE") {
//        resource = thisUrl + "admin.php?c=AccessPoint&resource=" + resource;
//        httpConnect(resource, data, method, success, error, beforeSend, complete);
//}
}

function addClass(form) {
    var bool = true;
    var a = $(form).find("input,select,textarea");
    $(a).addClass("val");
}

function validarFormulario(form) {
    var bool = true;
    var a = $(form).find("input[required],select[required],textarea[required]");
    $(a).each(function () {
        $(this).addClass("val");
        if ($(this).val() === "") {
            $(this).addClass("error");
            bool = false;
        } else {
            $(this).removeClass("error");
        }
    });
    return bool;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getRandom(max) {
    var r = Math.floor(Math.random() * max);
    return r;
}

function setDataValue(form, data) {
    var action = $(form).attr("action");
    if (!action) {
        alert("Defina el recurso del formulario!");
    } else {
//        action += "/" + data.id.oid;
//        $(form).attr("action", action);
//        $(form).attr("method", "PUT");
    }
    $(form).find("input,select,textarea").each(function () {
        var k = $(this).attr("name") !== undefined ? $(this).attr("name") : $(this).attr("id");
        var v = data[k];
        if (v !== null) {
            $(this).val(v).change();
        }
    });
}

function calculoPorcentaje(total, parte) {
    total = parseFloat(total);
    parte = parseFloat(parte);
    var por = (100 * parte) / total;
    return Math.round(por);
}

function calculoValorPorcentaje(total, porcentaje) {
    total = parseFloat(total);
    porcentaje = parseFloat(porcentaje);
    var valor = (total * porcentaje) / 100;
    return Math.round(valor);
}

function createMessage(r, target = null, time = 5000) {
    var d = new Date();
    var id = "msg" + d.getTime() + parseInt(Math.random() * 200);
    var class_ = "";
    var preMsg = "";
    var status = parseInt(r.status);
    if (status === 200) {
        class_ = "success";
        preMsg = "Exito!";
    } else if (status === 400) {
        class_ = "warning";
        preMsg = "Alerta!";
    } else if (status === 500 || status === 404) {
        class_ = "danger";
        preMsg = "Error!";
    } else {
        class_ = "info";
        preMsg = "Info!";
    }
    if (r.title !== undefined) {
        preMsg = r.title + "!";
    }
    var msgObj = $("<div class='alert alert-" + class_ + "'></div>");
    msgObj.attr("id", id).append("<strong>" + preMsg + "</strong> " + r.message);
    var content = null;
    if (target !== null) {
        content = target;
    } else {
        content = $("#content-msg-js").find(".col-sm-12");
    }
    $(content).prepend(msgObj);
    if (time > -1) {
        setTimeout(function () {
            $("#" + id).hide("slow", function () {
                $("#" + id).remove();
            });
        }, time);
}
}

function setDataToSelect(data, select, html, value = null) {
    $(data).each(function () {
        var opt = $("<option></option>");
        var val = "";
        if (value !== null) {
            val = $(this).attr(value);
        } else {
            val = this.id.oid;
        }
        opt.attr("value", val);
        opt.html($(this).attr(html));
        $(select).append(opt);
    });
}

function buildOpenModal(btn, cbk = null) {
    $(btn).click(function () {
        var mdname = $(this).data("target");
        var endpoint = $(this).data("endpoint");
        $(mdname).find("form")[0].reset();
        $(mdname)
                .find("form")
                .attr("method", "POST")
                .attr("action", endpoint);
        $(mdname).modal("show");
        if (cbk) {
            cbk(this);
        }
    });
}