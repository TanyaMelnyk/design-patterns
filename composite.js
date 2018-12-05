class Filter {
    constructor (name, id, ...children){
        this.name = name;
        this.id = id;
        this.children = children;
    }

    add(filterItem){
        this.children.push(filterItem);
    };

    show(){
        console.log(`+${this.name}`);
        this.children.forEach(child =>{
            console.log(child.name);
            if (child.children.length !== 0){
                child.children.forEach(childName => console.log(` -${childName.name}`));
            }
        });
    };

    select() {
        this.children.forEach(child => {
            console.log(child.id);
            if (child.children.length !== 0){
                child.children.forEach(childName => console.log(`-${childName.id}`));
            }
        });
    };
}

class FilterGroup extends Filter {
    constructor (name, id, ...children){
        super(name, id, ...children);
    }

    add(filterItem){
        this.children.push(filterItem);
    };

    show(){
        super.show();
    }
    select(){
        super.select();
    };
}

const mainFilter = new Filter('Design Patterns')

const creationalFilter = new Filter('Creational', 111);
const structuralFilter = new Filter('Structural', 222);
const behavioralFilter = new Filter('Behavioral', 333);

creationalFilter.add(new FilterGroup('Singleton', 1110))
creationalFilter.add(new FilterGroup('Factory', 1111))
creationalFilter.add(new FilterGroup('Builder', 1112));

structuralFilter.add(new FilterGroup('Adapter', 2220))
structuralFilter.add(new FilterGroup('Composite', 2221));

behavioralFilter.add(new FilterGroup('Mediator', 3330));

mainFilter.add(creationalFilter)
mainFilter.add(structuralFilter)
mainFilter.add(behavioralFilter);

mainFilter.show();
structuralFilter.show();

mainFilter.select();
structuralFilter.select();


