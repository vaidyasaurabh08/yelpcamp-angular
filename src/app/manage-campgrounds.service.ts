import {Camp} from './shared/camp.model';
import { Subject } from 'rxjs/Subject';

export class ManageCampsService{

  campsChanged = new Subject<Camp[]>();


  private campgrounds : Camp [] =[

		new Camp ('camp1'  , 'This is the first camp' , 'http://www.ninja-creative.com/wp-content/uploads/revslider/homepage/big-ninja-2.png' , 1),
		new Camp ('camp2'  , 'This is the second camp' , 'http://www.lanlinglaurel.com/data/out/52/4355911-ninja-pictures.png' , 2),
		new Camp ('camp3'  , 'This is the second camp' , 'https://myanimelist.cdn-dena.com/s/common/uploaded_files/1463567469-b96b1c44686c1173a609405e0d35262e.jpeg' , 3),
		new Camp ('camp4'  , 'This is the second camp' , 'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG' , 4)
	];

		constructor () {}

		getAllCamps(){
			console.log("here");
			return this.campgrounds.slice();

		}

		getCamp(id:number){
		  const camp = this.campgrounds.find(
        (s) => {
          return s.id === id;
        }
      );
		  return camp;
    }

    addCamp(newCamp:Camp){
		  this.campgrounds.push(newCamp);
      this.campsChanged.next(this.campgrounds.slice());
    }

    updateCamp(index:number , newCamp:Camp){
      this.campgrounds[index] = newCamp;
      this.campsChanged.next(this.campgrounds.slice());
    }

    deleteCamp(index:number){
      console.log("deleting" + index);
      this.campgrounds.splice((index-1),1);
      this.campsChanged.next(this.campgrounds.slice());
    }

    setCamps(camps: Camp[]){
      this.campgrounds = camps;
      this.campsChanged.next(this.campgrounds.slice());
    }

}




