/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core/v4';

/**
 * BoeInstructionParams
 */
export interface BoeInstructionParams {
  /**
   * Instruction Entry.
   * @nullable
   */
  instructionEntry?: number;
  /**
   * Instruction Code.
   * @nullable
   */
  instructionCode?: string;
}

/**
 * @deprecated Since v1.6.0. Use [[BoeInstructionParams.build]] instead.
 */
export function createBoeInstructionParams(json: any): BoeInstructionParams {
  return BoeInstructionParams.build(json);
}

/**
 * BoeInstructionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class BoeInstructionParamsField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[BoeInstructionParams.instructionEntry]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instructionEntry: ComplexTypeNumberPropertyField<EntityT> = new ComplexTypeNumberPropertyField('InstructionEntry', this, 'Edm.Int32');
  /**
   * Representation of the [[BoeInstructionParams.instructionCode]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instructionCode: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('InstructionCode', this, 'Edm.String');
}

export namespace BoeInstructionParams {
  export function build(json: { [keys: string]: FieldType }): BoeInstructionParams {
    return createComplexType(json, {
      InstructionEntry: (instructionEntry: number) => ({ instructionEntry: edmToTs(instructionEntry, 'Edm.Int32') }),
      InstructionCode: (instructionCode: string) => ({ instructionCode: edmToTs(instructionCode, 'Edm.String') })
    });
  }
}
