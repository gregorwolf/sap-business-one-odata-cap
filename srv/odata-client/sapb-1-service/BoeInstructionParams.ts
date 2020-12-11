/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeNumberPropertyField, ComplexTypeStringPropertyField, ConstructorOrField, EntityV4, FieldType, PropertyMetadata, deserializeComplexTypeV4 } from '@sap-cloud-sdk/core';

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
export class BoeInstructionParamsField<EntityT extends EntityV4> extends ComplexTypeField<EntityT, BoeInstructionParams> {
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

  /**
   * Creates an instance of BoeInstructionParamsField.
   *
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>) {
    super(fieldName, fieldOf, BoeInstructionParams);
  }
}

export namespace BoeInstructionParams {
  /**
   * Metadata information on all properties of the `BoeInstructionParams` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<BoeInstructionParams>[] = [{
    originalName: 'InstructionEntry',
    name: 'instructionEntry',
    type: 'Edm.Int32',
    isCollection: false
  }, {
    originalName: 'InstructionCode',
    name: 'instructionCode',
    type: 'Edm.String',
    isCollection: false
  }];

  /**
   * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
   */
  export function build(json: { [keys: string]: FieldType }): BoeInstructionParams {
    return deserializeComplexTypeV4(json, BoeInstructionParams);
  }
}
