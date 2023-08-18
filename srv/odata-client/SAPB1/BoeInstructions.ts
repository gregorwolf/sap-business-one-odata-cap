/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { BoeInstructionsApi } from './BoeInstructionsApi';
import { BoYesNoEnum } from './BoYesNoEnum';

/**
 * This class represents the entity "BOEInstructions" of service "SAPB1".
 */
export class BoeInstructions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BoeInstructionsType<T>
{
  /**
   * Technical entity name for BoeInstructions.
   */
  static _entityName = 'BOEInstructions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the BoeInstructions entity
   */
  static _keys = ['InstructionEntry'];
  /**
   * Instruction Entry.
   */
  instructionEntry!: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Instruction Code.
   * @nullable
   */
  instructionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Instruction Desc.
   * @nullable
   */
  instructionDesc?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Cancel Instruction.
   * @nullable
   */
  isCancelInstruction?: BoYesNoEnum | null;

  constructor(readonly _entityApi: BoeInstructionsApi<T>) {
    super(_entityApi);
  }
}

export interface BoeInstructionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  instructionEntry: DeserializedType<T, 'Edm.Int32'>;
  instructionCode?: DeserializedType<T, 'Edm.String'> | null;
  instructionDesc?: DeserializedType<T, 'Edm.String'> | null;
  isCancelInstruction?: BoYesNoEnum | null;
}
