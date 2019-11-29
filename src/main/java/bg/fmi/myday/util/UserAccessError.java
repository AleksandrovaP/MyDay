package bg.fmi.myday.util;

public class UserAccessError {

    private String errorMessage;

    public UserAccessError(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }
}
