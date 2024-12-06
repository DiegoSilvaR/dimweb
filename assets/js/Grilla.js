
function celClickSinBtn(pTabla,pClass,jClass,sClass)
{
    
	if(event.srcElement.parentElement.tagName=='TR')

	{
		if(event.srcElement.parentElement.cells(0).className==pClass)

		{
			
			for(var i=0;i<event.srcElement.parentElement.cells.length;i++)
			event.srcElement.parentElement.cells(i).className=sClass;
			
			return false;

		}

	NormalClass(pTabla, pClass, jClass);
	J_RolClass_Tabla(pTabla, pClass);
	AceptaCliente(pTabla);
	return false;

    }
	
}


function celClick(pTabla,pClass,jClass,sClass)
{
	if(event.srcElement.parentElement.tagName=='TR')

	{
		if(event.srcElement.parentElement.cells(0).className==pClass)

		{
			
			for(var i=0;i<event.srcElement.parentElement.cells.length;i++)
			event.srcElement.parentElement.cells(i).className=sClass;
			
			//BtnEnable(pBtn,true);

			return;

		}
		
	NormalClass(pTabla,pClass,jClass);
	J_RolClass(pClass);
	//BtnEnable(pBtn,false); 
	return;
	}
}


function NormalClass(pTabla,jClass)

{
	for(var i=0;i<pTabla.rows.length;i++)
	{
	    pTabla.rows(i).className = jClass; 

	} 
	return;
}

function J_RolClass(pClass)
{ 
	if(event.srcElement.parentElement.children(0).className=='clicktable')return;

	    for(var i=1;i<event.srcElement.parentElement.children.length;i++)
        {
    	    event.srcElement.parentElement.children(i).className=pClass;
	    }
    return;	
}


function openseleccion(grilla,url,name,pWidth,pHeight,pLeft,pTop)
{
var id 
var pClass = 'clicktable'
for(var i=0;i<grilla.rows.length;i++)
{
	if(grilla.rows(i).cells(1).className==pClass) 
	{
		id = grilla.children(0).rows(i).cells(1).innerText;
	}
}

WinOpen(2,url + "?id=" + id ,name,pWidth,pHeight,pLeft,pTop);

return;

}

function IdGrilla(grilla,pClass,Col)
	{
		for(var i=0;i<grilla.rows.length;i++)
		{
			if(grilla.rows(i).className==pClass) 
			{
			var id = grilla.children(0).rows(i).cells(Col).innerText;
			return id;
			}
		}
		return;
	}

function SelFila(pTabla,jClass,ItemIdx)

{
	
	pTabla.rows(ItemIdx).className = jClass;

	for(var j=0;j<pTabla.rows(ItemIdx).cells.length;j++)
		pTabla.rows(ItemIdx).cells(j).className = jClass; 

	
	return;

}


//selecciona indice de grilla seleccionada para dar estilo

function J_RolClass_Tabla(pTabla, pClass, id)

{ 

//    var id = event.srcElement.parentElement.rowIndex;
//    alert(id);
    if(pTabla.rows(id).className=='clicktable') return;

    pTabla.rows(id).className=pClass;
    
    return;

}

function celClick_Tabla(pTabla,pClass,jClass,sClass)
{
	for(var i=0;i<pTabla.rows.length;i++)
	{
		if(pTabla.rows(i).className==pClass)
		{
			pTabla.rows(i).className=sClass;
		    return false;
		}
	}
	
	NormalClass(pTabla,pClass,jClass);
	J_RolClass_Tabla(pTabla, pClass);
	return false;
	
}


