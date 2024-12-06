import { createLogger, transports, format } from "winston";

const logger = createLogger({
  level: "info", // Nivel de log (opciones: error, warn, info, http, verbose, debug, silly)
  format: format.combine(
    format.timestamp(),
    format.json() 
  ),
  transports: [
    new transports.File({ filename: "logs/error.log", level: "error" }),
    new transports.File({ filename: "logs/combined.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;