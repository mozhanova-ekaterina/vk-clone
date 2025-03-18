import { User } from "@/lib/schemas";
import { makeAutoObservable } from "mobx";

export class UserStore{
  user: User | null = null
  constructor(){
    makeAutoObservable(this)
  }

  
}