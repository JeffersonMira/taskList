package personal.learning.tasklistback.model;

public enum Status {

    NEW("NEW"), STARTED("STARTED"),FINISHED("FINISHED");

    private String value;

    Status(String value){
        this.value = value;
    }

    public String getValue(){
        return value;
    }
}
