import {pgTable, serial, text , timestamp, integer} from "drizzle-orm/pg-core";
 
// This file defines the schema for the database tables using Drizzle ORM
// Each table is defined with its columns and their types
export const favoritesTable = pgTable("favorites", {
  id: serial("id").primaryKey(),
  userId: text("user_id").notNull(),
  recipeId:integer("recipe_id").notNull(),
  title:text("title").notNull(),
  image:text("image"),
  cookTime:text("cook_time"),
  servings:text("servings"),
  createdAt: timestamp("created_at").defaultNow(),
});

