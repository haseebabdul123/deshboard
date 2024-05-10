class Task {
    constructor(id,title,description="",date=new Date(),status="incomplete",priority="low"){
        this.id =id
        this.title=title
        this.description=description
        this.date=date
        this.status=status
        this.priority=priority
    }
}

export default Task