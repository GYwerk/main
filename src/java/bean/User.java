package bean;

public class User {

	private int id;
        private int type;
	private String account;
	private String password;
	private String name;
	private String class_id;
	private String login_time;
	private String login_ip;
        private String login_port;
	
	
	@Override
	public String toString() {
		return "User [id=" + id + ", user_id=" + account + ", password=" + password + ", name=" + name + ", class_id="
				+ class_id + ", login_time=" + login_time + ", login_address=" + login_ip+":"+login_port+ "]";
	}
	public User() {
		
	}
	public User(int id, String account, String password, String name, String class_id, String login_time, String login_ip,String login_port) {
		this.id = id;
		this.account = account;
		this.password = password;
		this.name = name;
		this.class_id = class_id;
		this.login_time = login_time;
		this.login_ip = login_ip;
                this.login_port = login_port;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getClass_id() {
		return class_id;
	}
	public void setClass_id(String class_id) {
		this.class_id = class_id;
	}
	public String getLogin_time() {
		return login_time;
	}
	public void setLogin_time(String login_time) {
		this.login_time = login_time;
	}
	public String getLogin_ip() {
		return login_ip;
	}
	public void setLogin_ip(String login_ip) {
		this.login_ip = login_ip;
	}
        public String getLogin_port() {
		return login_port;
	}
	public void setLogin_port(String login_port) {
		this.login_port = login_port;
	}
}
