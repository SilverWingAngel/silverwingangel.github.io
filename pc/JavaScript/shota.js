function huantu(x)
		{
			var id=1;
			var id2=-1;
			var z=x+31;
			if(x==0)
				{
					var z=x+1;
				}
			while(id<=30)
				{
					document.getElementById(id).style.backgroundImage="url('../img/zip_images/shota ("+z+").jpg')";
					var aaa= document.getElementById(id2);
					aaa.setAttribute("href","../img/images/shota ("+z+").jpg");
					z++;
					id++;
					id2--;
				}
		}