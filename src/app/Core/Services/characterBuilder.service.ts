import { Injectable } from '@angular/core';
import { CharacterBuilder } from '../../Shared/builder';
import { forwardRef, Inject } from '@nestjs/common';
import { ChapterOneService } from './Adventure Services/Prologue/chapter-one.service';
import { Subject } from "rxjs";
// import {  } from '';
// import {  } from '';

@Injectable({
  providedIn: 'root'
})
/*
*  The service that provides pre-created NPCs and Allies
* */
export class CharacterBuilderService
{
  characterAdded;

  Krellen = CharacterBuilder.create({
    name: 'Krellen',
    level: 1,
    history: 'Unknown',
    gender: 'male',
    class: 'Unknown',
    archetype: 'Dread Reaver',
    species: 'Human',
    might: 10,
    intelligence: 10,
    lifeForce: 10,
    agility: 10,
    wisdom: 10,
    spirit: 10,
    faction: 'Unknown'
  });

  PlayerCharacter = CharacterBuilder.create({
    name: '',
    level: 1,
    history: '',
    class: '',
    archetype: '',
    species: '',
    gender: '',
    might: 10,
    intelligence: 10,
    lifeForce: 10,
    agility: 10,
    wisdom: 10,
    spirit: 10,
    faction: ''
  });


  constructor()
  {

  }
  getName(): any
  {
    const { name } = this.Krellen;
    return name;
  }
  addName( name: string ): any
  {
    // Turns Object into an array
    this.characterAdded = Object.entries(this.PlayerCharacter);
    // Splices(adds) name that is entered at the right position in the array
    this.characterAdded.splice( 0, 1, ['name', name] );
    // Create console table with listed data
    console.table(this.characterAdded);
  }

}
