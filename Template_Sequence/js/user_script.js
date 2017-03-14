function start(num, images){
    var i, col, height, temp, order;
    var temp_images = images.slice();

    if(num>=5){
        height = 50;
        col = parseInt(12/num)+1;
    }
    else{
        col = 12/num;
        height = 100;
    }

    for(i=0; i<num; i++){
        temp = Math.floor((Math.random() * temp_images.length));
        order = images.indexOf(temp_images[temp]);
        
        //console.log(temp);
        //console.log(order);
        //console.log(temp_images[temp]);
        //console.log(temp_images);
        //console.log(images);

        $('#choice_div').append('<div style="height:'+height+'%" id="choice'+i+'_div" class="col-sm-'+col+' single_img_div"> <img id="image'+order+'" src="'+temp_images[temp]+'" class="img" ondragstart="drag(event)"> </div>');
        $('#answer_div').append('<div style="height:'+height+'%" id="answer'+i+'" class="col-sm-'+col+' single_img_div" ondrop="drop(event, this)" ondragover="allowDrop(event)"></div>');
        
        temp_images.splice(temp, 1);
    }
    
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, target) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    imageId = data.split("").reverse()[0];
    divId = target.id.split("").reverse()[0];

    if(imageId == divId){
        ev.target.appendChild(document.getElementById(data));
    }
}