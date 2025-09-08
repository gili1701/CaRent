# CaRent 

A Java-based **car rental management system** built with **Maven**.  
The project uses the **Maven Wrapper (`mvnw`)**, so you don’t need a local Maven installation.

---

## 📂 Project Structure
- `src/` - Application source code (Java, resources, etc.)
- `pom.xml` - Maven configuration and dependencies
- `mvnw`, `mvnw.cmd`, `.mvn/` – Maven Wrapper scripts
- `client/` - (optional) client-side module
- `HELP.md` - auto-generated help file (optional)

---

## ⚙️ Prerequisites
- **Java 17+** (check with `java -version`)  
- **Maven Wrapper** included – no need to install Maven manually  

---

##  Running the Application

### Option 1: Spring Boot (if applicable)
Run directly:
```bash
./mvnw spring-boot:run
Option 2: Build & Run JAR
bash
Copy code
./mvnw clean package
java -jar target/<artifactId>-<version>.jar
Replace <artifactId> and <version> with values from pom.xml.

🛠️ Useful Maven Commands
bash
Copy code
./mvnw clean               # Clean build output
./mvnw test                # Run tests
./mvnw package             # Build project artifacts
./mvnw dependency:tree     # Show dependency tree
 Standard Maven Layout
css
Copy code
src/
 └─ main/
    ├─ java/
    └─ resources/
 Contributing
Contributions are welcome!
For major changes, please open an issue first to discuss what you would like to change.
